import type { APIRoute } from "astro";
import { AGENT_AUTH_ISSUER, AGENT_RESOURCE, AGENT_SCOPES } from "../lib/agent-discovery";
import { SITE_NAME, SITE_URL } from "../consts";

export const prerender = false;

export const GET: APIRoute = () => {
    const markdown = `# auth.md

${SITE_NAME} exposes an authenticated EmDash MCP endpoint for AI agents.

## Agent audience

Agents that help draft, edit, organize, or publish blog content may request access.

## Resource

- MCP endpoint: ${AGENT_RESOURCE}
- OAuth protected resource metadata: ${SITE_URL}/.well-known/oauth-protected-resource
- OAuth authorization server metadata: ${SITE_URL}/.well-known/oauth-authorization-server
- Issuer: ${AGENT_AUTH_ISSUER}

## Registration

OAuth public clients can use dynamic registration at:

\`\`\`text
${SITE_URL}/_emdash/api/oauth/register
\`\`\`

The authorization server supports Authorization Code with PKCE and Device Authorization Grant. API tokens can also be created by an authenticated admin inside EmDash.

## Credential use

Send bearer tokens in the HTTP Authorization header:

\`\`\`http
Authorization: Bearer <token>
\`\`\`

## Scopes

${AGENT_SCOPES.map((scope) => `- \`${scope}\``).join("\n")}

## Revocation

OAuth tokens can be revoked at:

\`\`\`text
${SITE_URL}/_emdash/api/oauth/token/revoke
\`\`\`
`;

    return new Response(markdown, {
        headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
        },
    });
};
