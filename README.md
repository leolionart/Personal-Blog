# AI TRAN — Personal Blog & Resume

A minimal, monospace-first personal site built with Astro 5 and UnoCSS. Features a blog with markdown content collections and an interactive resume page powered by JSON Resume data.

## Tech Stack

- **Astro 5** — Static site generator
- **UnoCSS** — Utility-first CSS with class-based dark mode
- **TypeScript** — Strict type checking
- **JetBrains Mono** — Single font across the entire site
- **Sveltia CMS** — Headless CMS admin interface

## Project Structure

```
src/
├── components/
│   ├── Header.astro          # Page header with optional grid background
│   ├── Footer.astro          # Site footer
│   ├── Section.astro         # Numbered section with .md filename label
│   ├── ModeToggle.astro      # Dark/light theme toggle
│   ├── FormattedDate.astro   # Date formatting component
│   └── resume/               # Resume page components
│       ├── Hero.astro
│       ├── About.astro
│       ├── Experience.astro
│       ├── Education.astro
│       ├── Skills.astro
│       └── Projects.astro
├── content/
│   ├── config.ts             # Content collections schema
│   ├── posts/                # Blog posts (markdown)
│   └── authors/              # Author data (JSON)
├── layouts/
│   └── Layout.astro          # Root layout (nav, font, dark mode, markdown styles)
├── pages/
│   ├── index.astro           # Blog homepage — post list with content preview
│   ├── blog/[...slug].astro  # Individual blog post
│   ├── resume.astro          # Interactive CV from cv.json
│   └── admin.astro           # CMS admin interface
└── consts.ts                 # Site-wide constants
cv.json                       # Resume data (JSON Resume standard)
uno.config.ts                 # UnoCSS theme, shortcuts, variants
```

## Content Collections

**Posts** (`src/content/posts/*.md`)

| Field       | Type                    | Required |
|:------------|:------------------------|:---------|
| title       | string                  | yes      |
| description | string                  | no       |
| author      | reference → authors     | yes      |
| pubDate     | date                    | yes      |
| tags        | string[]                | no       |
| type        | announcement/release/post | no     |

**Authors** (`src/content/authors/*.json`)

| Field          | Type   | Required |
|:---------------|:-------|:---------|
| name           | string | yes      |
| website        | string | yes      |
| socials.github | string | no       |
| description    | string | no       |

## Commands

```sh
pnpm install          # Install dependencies
pnpm dev              # Start dev server at localhost:4321
pnpm build            # Type check + build to ./dist/
pnpm preview          # Preview production build
pnpm cms              # Start with Decap CMS server
```

## Design Decisions

- **Single font**: JetBrains Mono applied at `<body>` level via UnoCSS `font-mono` class. No `font-mono` scattered across components.
- **Dark mode**: Class-based (`presetUno({ dark: 'class' })`), persisted in `localStorage`, applied before first paint via inline script.
- **Blog layout**: Each post displayed as a numbered section with `.md` filename label, content preview with gradient fade.
- **Markdown styles**: Full markdown support in `.content-wrapper` — headings, lists (custom `::before` markers for GitBook-style alignment), blockquotes, code blocks, tables, images, callouts.
- **Resume data**: Sourced from `cv.json` via TypeScript path alias `@cv`, following the JSON Resume standard.

## License

MIT
