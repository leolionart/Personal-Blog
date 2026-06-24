import type { APIRoute } from "astro";
import { agentSkillsIndex } from "../../../lib/agent-discovery";

export const prerender = false;

export const GET: APIRoute = async () => {
    return Response.json(await agentSkillsIndex(), {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
        },
    });
};
