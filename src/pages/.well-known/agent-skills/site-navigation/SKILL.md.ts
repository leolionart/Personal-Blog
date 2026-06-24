import type { APIRoute } from "astro";
import { SITE_NAVIGATION_SKILL } from "../../../../lib/agent-discovery";

export const prerender = false;

export const GET: APIRoute = () => {
    return new Response(SITE_NAVIGATION_SKILL, {
        headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
        },
    });
};
