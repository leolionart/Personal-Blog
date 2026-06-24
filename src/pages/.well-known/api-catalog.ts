import type { APIRoute } from "astro";
import { AGENT_RESOURCE } from "../../lib/agent-discovery";
import { SITE_URL } from "../../consts";

export const prerender = false;

export const GET: APIRoute = () => {
    return Response.json(
        {
            linkset: [
                {
                    anchor: AGENT_RESOURCE,
                    "service-desc": [
                        {
                            href: `${SITE_URL}/.well-known/openapi.json`,
                            type: "application/vnd.oai.openapi+json",
                        },
                    ],
                    "service-doc": [
                        {
                            href: `${SITE_URL}/docs/api`,
                            type: "text/html",
                        },
                        {
                            href: `${SITE_URL}/auth.md`,
                            type: "text/markdown",
                        },
                    ],
                    describedby: [
                        {
                            href: `${SITE_URL}/.well-known/mcp/server-card.json`,
                            type: "application/json",
                        },
                        {
                            href: `${SITE_URL}/.well-known/agent-skills/index.json`,
                            type: "application/json",
                        },
                    ],
                    status: [
                        {
                            href: `${SITE_URL}/health`,
                            type: "application/json",
                        },
                    ],
                    "oauth-protected-resource": [
                        {
                            href: `${SITE_URL}/.well-known/oauth-protected-resource`,
                            type: "application/json",
                        },
                    ],
                },
            ],
        },
        {
            headers: {
                "Content-Type": "application/linkset+json; charset=utf-8",
                "Cache-Control": "public, max-age=3600",
            },
        },
    );
};
