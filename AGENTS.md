# Personal Blog Agent Instructions

These instructions apply to work in this repository.

## Project Scope

- This repository powers the personal blog at `https://leolion.naai.studio`.
- Keep changes scoped to the requested blog, content, agent-discovery, or deployment work.
- Preserve unrelated local changes. The worktree may already contain migration or EmDash changes.

## Blog Writing Rules

When creating, editing, or reviewing posts, follow the writing workflow in `.agent/skills/write-personal-blog-post/SKILL.md`.

### Paragraph Presentation

- Do not break lines continuously as if every sentence were a separate paragraph. The blog should read like a normal article.
- If multiple sentences support the same idea, keep them together in one paragraph. A normal paragraph should usually contain 2-4 sentences.
- Split paragraphs only when changing ideas, changing rhythm, emphasizing one sentence, or before/after a heading, quote, or bullet list.
- Avoid making the article feel fragmented like a social media status thread or chat transcript.
- Use bullet lists only when the content is truly a list. If the piece is narrating a flow, write it as paragraphs.
- After a colon, capitalize the first letter of the following sentence or clause. Example: `Điều mình học được là: Không phải cái gì AI làm được thì mình cũng nên làm.`
- For Facebook-style article drafts, readable paragraph breaks are still useful, but avoid one-sentence-per-line formatting when the sentences belong to the same idea.
- When describing feelings, avoid formulaic openings like `Nói thật là mình thấy...` or `Thật sự là...`. Describe the feeling or situation directly so readers can infer the emotion.
- Avoid overusing contrast structures like `không phải... mà là...` or `không chỉ... mà còn...`. When contrast is needed, rewrite in a more natural active sentence.
- Avoid the phrase `đi thật`, especially when writing about identity, writing, or expertise. Prefer `chân thật` or rewrite the sentence more directly.

## Verification

- For content or app changes, run `pnpm build` unless the user explicitly asks not to.
- Blog content is served from EmDash/D1 in production, not directly from `src/content/posts/*.md`.
- After editing markdown posts, sync them to production EmDash before calling the work complete:
  1. Run `pnpm emdash:seed`.
  2. Run `pnpm emdash:sync-sql`.
  3. Execute `.emdash/sync-posts.sql` against the remote D1 database with `wrangler d1 execute personal-blog-emdash-db --remote --file .emdash/sync-posts.sql`.
  4. Verify at least one changed live post with `Accept: text/markdown`.
- For this EmDash/Cloudflare Worker architecture, deploy after content or app changes by default so the live site receives code/assets updates too. Only skip deploy when the user explicitly asks for local-only changes or review-only edits.
- Report build results and any remaining warning only if relevant to the changed files or useful context.
