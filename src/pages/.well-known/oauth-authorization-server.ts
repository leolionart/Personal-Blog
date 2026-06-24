import type { APIRoute } from "astro";
import { oauthAuthorizationServerMetadata } from "../../lib/agent-discovery";

export const prerender = false;

export const GET: APIRoute = () => {
    return Response.json(oauthAuthorizationServerMetadata(), {
        headers: {
            "Cache-Control": "public, max-age=3600",
            "Access-Control-Allow-Origin": "*",
        },
    });
};
