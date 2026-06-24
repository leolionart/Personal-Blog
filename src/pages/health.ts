import type { APIRoute } from "astro";
import { SITE_NAME } from "../consts";

export const prerender = false;

export const GET: APIRoute = () => {
    return Response.json(
        {
            ok: true,
            service: SITE_NAME,
        },
        {
            headers: {
                "Cache-Control": "public, max-age=60",
            },
        },
    );
};
