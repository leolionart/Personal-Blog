import type { APIRoute } from "astro";
import { openApiDocument } from "../../lib/agent-discovery";

export const prerender = false;

export const GET: APIRoute = () => {
    return Response.json(openApiDocument(), {
        headers: {
            "Content-Type": "application/vnd.oai.openapi+json; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
        },
    });
};
