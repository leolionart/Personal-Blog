---
name: write-personal-blog-post
description: Write, edit, review, and verify Vietnamese posts for the Astro personal blog in /Volumes/DATA/Coding Projects/Personal-blog. Use when the user asks to create a new personal-blog article, continue a previous post/theme, revise blog copy, create a Plannotator preview/review link, apply Plannotator feedback, or package the blog-writing workflow for repeated use.
---

# Write Personal Blog Post

## Overview

Create or revise posts under `src/content/posts/` using the blog's existing Vietnamese voice, Astro content schema, and local verification flow. Keep the main output as a ready-to-review markdown post, not a plan-only response.

## Source Of Truth

- Work from repo root: `/Volumes/DATA/Coding Projects/Personal-blog`.
- Read `CLAUDE.md`, `src/content/config.ts`, and 2-3 recent related posts before writing.
- Good style references for AI/product/process themes:
  - `src/content/posts/ai-agent-rut-ngan-vong-lap-phat-trien-san-pham.md`
  - `src/content/posts/human-in-the-loop-trong-phat-trien-ai-chat.md`
  - `src/content/posts/bad-communication-kills-work.md`
- Posts are markdown content collection entries with frontmatter:

```yaml
---
author: leolion
description: <concise Vietnamese summary>
pubDate: YYYY-MM-DD
tags:
- Product
- AI
- Operations
title: <Vietnamese title>
type: post
---
```

Use `pubDate` from the current local date unless the user specifies otherwise.

## Writing Workflow

1. Inspect the existing post list and choose a lowercase, hyphenated filename under `src/content/posts/`.
2. Identify the article's job: continue a previous theme, explain a practical operating principle, or turn a team instruction into a reusable mental model.
3. Draft in Vietnamese with the author's voice:
   - first-person practical reflection, usually `mình`
   - clear operational examples from product/AI/team workflows
   - strong but not academic claims
   - short sections with concrete takeaways
   - avoid generic how-to filler and tool worship
4. For a "bài tiếp theo" request, explicitly connect to the previous idea in the first 1-3 paragraphs, then move into the new practical point.
5. Preserve user-provided structures, snippets, or code blocks exactly when they are central to the article. Explain why the structure matters instead of merely restating it.
6. Keep one central thesis. If a section does not support it, cut it.

## Content Shape

Use this shape as a default, not a rigid template:

1. Opening: why this problem appears in real team work.
2. Tension: what breaks when the team does the old habit.
3. Principle: the operating rule or structure to adopt.
4. Practical breakdown: what each part means and why.
5. Adoption guidance: how to start without creating process theater.
6. Closing: one memorable sentence or quote-sized takeaway.

For articles about AI-assisted product work, emphasize that AI scales execution only when the team's context, decision records, and review boundaries are clear.

## Paragraph Presentation Rules

These rules are mandatory when drafting or revising article prose:

- Do not break lines continuously as if every sentence were a separate paragraph. The blog should read like a normal article.
- If multiple sentences support the same idea, keep them in one paragraph. A normal paragraph should usually contain 2-4 sentences.
- Split paragraphs only when changing ideas, changing rhythm, emphasizing one sentence, or before/after a heading, quote, or bullet list.
- Avoid making the article feel fragmented like a social media status thread or chat transcript.
- Use bullet lists only when the content is truly a list. If the piece is narrating a flow, write it as paragraphs.
- After a colon, capitalize the first letter of the following sentence or clause. Example: `Điều mình học được là: Không phải cái gì AI làm được thì mình cũng nên làm.`
- For Facebook-style article drafts, readable paragraph breaks are still useful, but avoid one-sentence-per-line formatting when the sentences belong to the same idea.
- When describing feelings, avoid formulaic openings like `Nói thật là mình thấy...` or `Thật sự là...`. Describe the feeling or situation directly so readers can infer the emotion. For example, prefer `Cảm giác vui nhất là...` or `Mình thấy như được sống lại trong không gian đó.`
- Avoid overusing contrast structures like `không phải... mà là...` or `không chỉ... mà còn...`. If contrast is needed, rewrite it as a more natural active sentence. For example, prefer `Viết đều đặn cần nhiều hơn một công cụ AI. Cái gốc vẫn là...`
- Avoid the phrase `đi thật`, especially when writing about identity, writing, or expertise. Prefer `chân thật` or rewrite the sentence more directly.

## Editing Rules

- Use `apply_patch` for manual file edits.
- Do not create unrelated files or refactor app code while writing a post.
- Keep markdown readable in raw form.
- Do not add images unless the user asks or the article genuinely needs a visual artifact.
- Avoid empty folders; if an article references a workflow convention like `design/prototype/`, clarify that it should exist only when a real artifact exists.

## Verification

After adding or editing a post, run:

```bash
pnpm build
```

Production content is served from EmDash/D1, not directly from `src/content/posts/*.md`. After markdown edits, regenerate and sync the EmDash seed:

```bash
pnpm emdash:seed
pnpm emdash:sync-sql
pnpm wrangler d1 execute personal-blog-emdash-db --remote --file .emdash/sync-posts.sql
```

Then deploy the Cloudflare Worker so code/assets are live too:

```bash
pnpm wrangler deploy
```

Content sync and deployment are the default for this repository because the current production architecture runs through EmDash on Cloudflare Workers and D1. Skip them only when the user explicitly asks for local-only edits, review-only edits, or no deploy.

After deployment, verify at least one changed post on the live site with `Accept: text/markdown` and a cache-busting query string.

Report whether the build, D1 sync, deploy, and live verification passed. If existing warnings/hints appear, identify them as pre-existing or unrelated only after checking the changed files.

## Plannotator Review

Always use Plannotator for the user-facing preview/review loop unless the user explicitly asks for another tool.

Use two review modes:

- `plannotator review --git`: review current local git changes and show what changed versus the base commit.
- `plannotator annotate <file.md>`: review/comment directly on the rendered markdown file.

For each review round:

1. Ensure `plannotator` is available. If not, use the verified temporary binary at `/tmp/plannotator` or install the binary manually without enabling global hooks.
2. Start `plannotator review --git` for diff review, or `plannotator annotate src/content/posts/<slug>.md` for markdown annotation.
3. Expose the local Plannotator server with `cloudflared tunnel --url http://127.0.0.1:<port> --loglevel info`.
4. Verify the public URL returns HTTP 200.
5. Send the Plannotator link to the user for that review round.
6. When the user submits feedback, read the Plannotator CLI output, apply the requested edits, run `pnpm build`, then start a new Plannotator review link for the next round.

Important behavior:

- A Plannotator link is a session for one review round, not a permanent Google Docs-style workspace.
- After feedback is submitted, the annotate process may exit and the old Cloudflare link may stop working.
- Create a fresh Plannotator link after every AI revision.
- Do not push to GitHub/GitLab/shared space until the user says the review is OK.
