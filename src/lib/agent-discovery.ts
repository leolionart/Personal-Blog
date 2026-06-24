import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "../consts";

export const AGENT_RESOURCE = `${SITE_URL}/_emdash/api/mcp`;
export const AGENT_AUTH_ISSUER = `${SITE_URL}/_emdash`;
export const AGENT_SCOPES = [
    "content:read",
    "content:write",
    "media:read",
    "media:write",
    "schema:read",
    "schema:write",
    "taxonomies:manage",
    "menus:manage",
    "settings:read",
    "settings:manage",
    "admin",
];

export const DISCOVERY_LINK_HEADER = [
    '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
    '</.well-known/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json"',
    '</.well-known/mcp/server-card.json>; rel="service-desc"; type="application/json"',
    '</.well-known/agent-skills/index.json>; rel="describedby"; type="application/json"',
    '</docs/api>; rel="service-doc"; type="text/html"',
    '</auth.md>; rel="describedby"; type="text/markdown"',
].join(", ");

export const CONTENT_MANAGEMENT_SKILL = `# Manage ${SITE_NAME} Content

Use this skill when an agent needs to discover, read, draft, or update content for ${SITE_NAME} through the EmDash MCP server.

## Resources

- Site: ${SITE_URL}
- MCP endpoint: ${AGENT_RESOURCE}
- API catalog: ${SITE_URL}/.well-known/api-catalog
- OAuth issuer: ${AGENT_AUTH_ISSUER}

## Authentication

Register an OAuth public client at ${SITE_URL}/_emdash/api/oauth/register, then complete authorization against ${SITE_URL}/_emdash/oauth/authorize. Use the issued bearer token with the EmDash MCP endpoint.

## Typical Actions

- Read published posts and metadata.
- Draft or revise post content.
- Upload and attach media.
- Manage tags, menus, settings, and content schema when granted matching scopes.
`;

export const SITE_NAVIGATION_SKILL = `# Navigate ${SITE_NAME}

Use this skill when an agent needs browser-level discovery for ${SITE_NAME}.

## Resources

- Homepage: ${SITE_URL}/
- API documentation: ${SITE_URL}/docs/api
- Auth metadata: ${SITE_URL}/auth.md
- MCP Server Card: ${SITE_URL}/.well-known/mcp/server-card.json

## Browser Tools

The homepage registers WebMCP tools when the browser exposes navigator.modelContext:

- list_blog_posts: return visible posts and links.
- search_blog_posts: search visible posts by title, description, or tags.
- open_blog_post: navigate to a post URL.
`;

export async function sha256Digest(value: string) {
    const bytes = new TextEncoder().encode(value);
    const hash = await crypto.subtle.digest("SHA-256", bytes);
    const hex = Array.from(new Uint8Array(hash))
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");
    return `sha256:${hex}`;
}

export function agentAuthMetadata() {
    return {
        skill: `${SITE_URL}/auth.md`,
        register_uri: `${SITE_URL}/_emdash/api/oauth/register`,
        claim_uri: `${SITE_URL}/auth.md#credential-use`,
        revocation_uri: `${SITE_URL}/_emdash/api/oauth/token/revoke`,
        identity_types_supported: ["anonymous"],
        anonymous: {
            credential_types_supported: ["oauth_public_client", "oauth_bearer"],
            claim_uri: `${SITE_URL}/auth.md#credential-use`,
        },
    };
}

export function oauthAuthorizationServerMetadata() {
    return {
        issuer: AGENT_AUTH_ISSUER,
        authorization_endpoint: `${SITE_URL}/_emdash/oauth/authorize`,
        token_endpoint: `${SITE_URL}/_emdash/api/oauth/token`,
        registration_endpoint: `${SITE_URL}/_emdash/api/oauth/register`,
        device_authorization_endpoint: `${SITE_URL}/_emdash/api/oauth/device/code`,
        response_types_supported: ["code"],
        grant_types_supported: [
            "authorization_code",
            "refresh_token",
            "urn:ietf:params:oauth:grant-type:device_code",
        ],
        code_challenge_methods_supported: ["S256"],
        token_endpoint_auth_methods_supported: ["none"],
        scopes_supported: AGENT_SCOPES,
        agent_auth: agentAuthMetadata(),
    };
}

export function mcpServerCard() {
    return {
        serverInfo: {
            name: SITE_NAME,
            version: "1.0.0",
            description: SITE_DESCRIPTION,
        },
        transports: [
            {
                type: "streamable-http",
                endpoint: AGENT_RESOURCE,
            },
        ],
        capabilities: {
            tools: {
                listChanged: false,
                names: [
                    "content.read",
                    "content.write",
                    "media.read",
                    "media.write",
                    "schema.read",
                    "schema.write",
                    "taxonomies.manage",
                    "menus.manage",
                    "settings.read",
                    "settings.manage",
                ],
            },
            resources: {
                listChanged: false,
                names: ["posts", "media", "taxonomies", "menus", "settings"],
            },
            prompts: {
                listChanged: false,
                names: ["draft-post", "revise-post", "summarize-post"],
            },
        },
        authentication: {
            type: "oauth2",
            authorizationServer: `${SITE_URL}/.well-known/oauth-authorization-server`,
            protectedResource: `${SITE_URL}/.well-known/oauth-protected-resource`,
            scopes: AGENT_SCOPES,
        },
    };
}

export async function agentSkillsIndex() {
    return {
        $schema: "https://schemas.agentskills.io/discovery/0.2.0/schema.json",
        skills: [
            {
                name: "manage-content",
                type: "skill-md",
                description: `Read, draft, edit, and manage ${SITE_NAME} content through EmDash MCP.`,
                url: `${SITE_URL}/.well-known/agent-skills/manage-content/SKILL.md`,
                digest: await sha256Digest(CONTENT_MANAGEMENT_SKILL),
            },
            {
                name: "site-navigation",
                type: "skill-md",
                description: `Navigate ${SITE_NAME} and use browser-exposed WebMCP tools.`,
                url: `${SITE_URL}/.well-known/agent-skills/site-navigation/SKILL.md`,
                digest: await sha256Digest(SITE_NAVIGATION_SKILL),
            },
        ],
    };
}

export function openApiDocument() {
    return {
        openapi: "3.1.0",
        info: {
            title: `${SITE_NAME} Agent Discovery API`,
            version: "1.0.0",
            description: `${SITE_DESCRIPTION} Agent-facing discovery document for the EmDash MCP endpoint and related metadata.`,
        },
        servers: [{ url: SITE_URL }],
        paths: {
            "/_emdash/api/mcp": {
                post: {
                    summary: "EmDash MCP endpoint",
                    description: "Stateless MCP Streamable HTTP endpoint for authenticated content operations.",
                    security: [{ bearerAuth: AGENT_SCOPES }],
                    responses: {
                        "200": { description: "MCP JSON-RPC response" },
                        "401": { description: "Missing or invalid bearer token" },
                    },
                },
            },
            "/.well-known/api-catalog": {
                get: {
                    summary: "API catalog",
                    responses: {
                        "200": {
                            description: "RFC 9727 linkset API catalog",
                            content: { "application/linkset+json": {} },
                        },
                    },
                },
            },
            "/.well-known/oauth-protected-resource": {
                get: {
                    summary: "OAuth protected resource metadata",
                    responses: {
                        "200": { description: "Protected resource metadata" },
                    },
                },
            },
            "/.well-known/oauth-authorization-server": {
                get: {
                    summary: "OAuth authorization server metadata",
                    responses: {
                        "200": { description: "OAuth authorization server metadata" },
                    },
                },
            },
            "/health": {
                get: {
                    summary: "Public site health check",
                    responses: {
                        "200": { description: "Site is reachable" },
                    },
                },
            },
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                },
            },
        },
    };
}
