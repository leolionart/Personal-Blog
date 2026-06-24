import { defineMiddleware } from "astro:middleware";
import { agentAuthMetadata, DISCOVERY_LINK_HEADER } from "./lib/agent-discovery";

const HTML_TAG_RE = /<[^>]+>/g;
const SCRIPT_STYLE_RE = /<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi;

function decodeEntities(value: string) {
    return value
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
}

function htmlToMarkdown(html: string) {
    const title = html.match(/<title[^>]*>(.*?)<\/title>/i)?.[1]?.trim();
    const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? html;
    const markdown = body
        .replace(SCRIPT_STYLE_RE, "")
        .replace(/<h1[^>]*>(.*?)<\/h1>/gi, "\n# $1\n")
        .replace(/<h2[^>]*>(.*?)<\/h2>/gi, "\n## $1\n")
        .replace(/<h3[^>]*>(.*?)<\/h3>/gi, "\n### $1\n")
        .replace(/<a\s+[^>]*href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gi, "[$2]($1)")
        .replace(/<li[^>]*>(.*?)<\/li>/gi, "\n- $1")
        .replace(/<\/(p|div|section|article|header|footer|main|br)>/gi, "\n")
        .replace(HTML_TAG_RE, "")
        .replace(/\n{3,}/g, "\n\n")
        .replace(/[ \t]{2,}/g, " ")
        .trim();

    const decoded = decodeEntities(markdown);
    return title ? `# ${decodeEntities(title)}\n\n${decoded}\n` : `${decoded}\n`;
}

export const onRequest = defineMiddleware(async (context, next) => {
    const response = await next();
    const headers = new Headers(response.headers);
    const pathname = context.url.pathname;

    if (pathname === "/.well-known/oauth-authorization-server/_emdash") {
        const metadata = await response.json();
        headers.set("Content-Type", "application/json; charset=utf-8");
        headers.delete("Content-Length");

        return Response.json(
            {
                ...metadata,
                agent_auth: agentAuthMetadata(),
            },
            {
                status: response.status,
                statusText: response.statusText,
                headers,
            },
        );
    }

    if (pathname === "/") {
        headers.append("Link", DISCOVERY_LINK_HEADER);
    }

    const accept = context.request.headers.get("accept") ?? "";
    const contentType = response.headers.get("content-type") ?? "";
    const canReturnMarkdown =
        accept.includes("text/markdown") &&
        contentType.includes("text/html") &&
        !pathname.startsWith("/_emdash") &&
        !pathname.startsWith("/.well-known");

    if (!canReturnMarkdown) {
        return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers,
        });
    }

    const html = await response.text();
    const markdown = htmlToMarkdown(html);
    headers.set("Content-Type", "text/markdown; charset=utf-8");
    headers.set("Vary", "Accept");
    headers.set("x-markdown-tokens", String(markdown.split(/\s+/).filter(Boolean).length));
    headers.delete("Content-Length");

    return new Response(markdown, {
        status: response.status,
        statusText: response.statusText,
        headers,
    });
});
