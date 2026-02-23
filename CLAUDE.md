# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog and resume site for AI TRAN (leolion), built with Astro 5. Content is written in Vietnamese (`og:locale` = `vi_VN`). The site is fully static (SSG) — no server-side rendering.

**Live site:** https://geek.naai.studio
**Package name:** `naid` (v0.7.0)

## Commands

```bash
pnpm dev          # Start dev server on port 4321
pnpm build        # TypeScript check + build (astro check && astro build)
pnpm preview      # Preview production build
pnpm cms          # Start Sveltia CMS local backend + dev server
```

## Architecture

### Styling: UnoCSS (not Tailwind)

This project uses **UnoCSS** with `presetUno` — Tailwind-compatible utility classes but a different engine. Dark mode is class-based (`.dark` on `<html>`), toggled via `ModeToggle.astro` and persisted to `localStorage`.

- Font: JetBrains Mono for everything (both `sans` and `mono` families)
- Custom shortcuts defined in `uno.config.ts`: `wrapper`, `title`, `subtitle`, `small`, `section--index`, `section--source`
- Custom variant: `dark-inside:` — styles applied when inside a `.dark-inside` ancestor
- Markdown prose styles live in `Layout.astro` as global CSS targeting `.content-wrapper`
- Print styles for resume: `public/print-resume.css` (loaded via `<link media="print">`)

### Content Collections (Astro Content Layer)

Defined in `src/content/config.ts`:

- **`posts`** — Markdown files in `src/content/posts/`. Schema: `title`, `pubDate` (date), `tags` (string[]), `author` (reference to `authors`), optional `type` enum, `description`
- **`authors`** — JSON files in `src/content/authors/`. Schema: `name`, `socials.github?`, `website`, `description?`, `profilePicture?`

### Resume System

Resume data lives in `cv.json` at project root, following JSON Resume format with custom extensions (`responsibilities`, `achievements`, `isPrivate`, `speaking` section). TypeScript types are in `src/types/cv.d.ts`.

The `@cv` path alias (configured in `tsconfig.json`) maps to `cv.json`, so components import it as `import cv from '@cv'`.

Resume components are in `src/components/resume/` — each renders a section of `cv.json` data.

### Pages and Routing

| Route | File | Purpose |
|---|---|---|
| `/` | `src/pages/index.astro` | Blog homepage — lists posts sorted by date |
| `/blog/[slug]` | `src/pages/blog/[...slug].astro` | Individual blog post |
| `/resume` | `src/pages/resume.astro` | Resume page (two-column, print-optimized) |
| `/admin` | `src/pages/admin.astro` | Sveltia CMS admin panel |
| `/rss.xml` | `src/pages/rss.xml.ts` | RSS feed |

### Layout

Single layout `src/layouts/Layout.astro` handles: SEO meta tags (via `astro-seo`), navigation, dark mode initialization script, font loading, RSS autodiscovery, and global Markdown styles.

### Key Conventions

- **No framework JS** — all interactivity is vanilla JS in `<script>` tags within `.astro` files
- **Section numbering** — `Section.astro` auto-numbers sections with `index={true}` via client-side JS counter
- **Blog post preview** — index page uses a 240px CSS fade-preview (content capped, images hidden)
- **Prefetch** enabled globally in Astro config
- **Compression** — `@playform/compress` runs as the last integration (must stay last in `astro.config.mjs`)

### CMS

Sveltia CMS (Decap CMS compatible) configured at `public/admin/config.yml`. Backend: GitHub repo `leolionart/Personal-blog`, branch `main`. Supports `local_backend: true` for local dev via `pnpm cms`.

### Integrations (order matters in astro.config.mjs)

1. UnoCSS — utility styles
2. astro-icon — icon components
3. sitemap — auto-generated sitemap
4. robotsTxt — robots.txt generation
5. compress — **must be last** (post-build compression of all assets)
