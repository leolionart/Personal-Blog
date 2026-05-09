---
name: write-personal-blog-post
description: Write, edit, review, and verify Vietnamese posts for the Astro personal blog in /Volumes/DATA/Coding Projects/Personal-blog. Use when the user asks to create a new personal-blog article, continue a previous post/theme, revise blog copy, prepare a shareable rendered-review flow such as DraftView/Colibri, produce a diff link with difit/cloudflared, or package the blog-writing workflow for repeated use.
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

Report whether the build passed. If existing warnings/hints appear, identify them as pre-existing or unrelated only after checking the changed files.

## Review Links

Prefer an existing rendered-review tool over custom UI when the user wants something easy to share with non-technical reviewers.

Use DraftView first when the repo is public or a GitHub PR is acceptable:

1. Create a short-lived review branch.
2. Commit only the reviewable blog/article changes.
3. Push the branch and open a draft PR against `main`.
4. Share the DraftView URL for that PR if available; otherwise share the GitHub PR and note that DraftView may require GitHub App access.
5. After review, apply comments locally, push the next branch update, and let DraftView/GitHub show the next diff.

Try Colibri as the second option when the user wants GitHub-backed Markdown collaboration and can use its web UI. Verify that it shows both rendered content and changes versus the committed version before adopting it as the default.

Use Difit only when the user specifically wants a diff-first local code review:

1. Start difit on a stable local port:

```bash
npx --yes difit working --include-untracked --host 127.0.0.1 --port 3939 --no-open --keep-alive --context 5
```

2. Expose it with cloudflared:

```bash
cloudflared tunnel --url http://127.0.0.1:3939 --loglevel info
```

3. Copy the `https://...trycloudflare.com` URL from cloudflared output.
4. Verify it responds:

```bash
curl -I --max-time 15 <url>
```

5. Tell the user the link is temporary and depends on the local `difit` and `cloudflared` sessions staying alive.

Note: `difit --include-untracked` may mark new files with `git add --intent-to-add` so they appear in the diff. This is expected for review, but mention it if git status matters.
