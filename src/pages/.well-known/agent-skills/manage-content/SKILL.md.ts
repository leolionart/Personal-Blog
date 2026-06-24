import type { APIRoute } from "astro";
import { CONTENT_MANAGEMENT_SKILL } from "../../../../lib/agent-discovery";

export const prerender = false;

export const GET: APIRoute = () => {
    return new Response(CONTENT_MANAGEMENT_SKILL, {
        headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
        },
    });
};
