import type { APIRoute } from "astro";
import { mcpServerCard } from "../../../lib/agent-discovery";

export const prerender = false;

export const GET: APIRoute = () => {
    return Response.json(mcpServerCard(), {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
        },
    });
};
