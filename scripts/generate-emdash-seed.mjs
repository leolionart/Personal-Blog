import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const root = process.cwd();
const postsDir = path.join(root, "src/content/posts");
const outDir = path.join(root, ".emdash");
const outFile = path.join(outDir, "seed.json");

function slugify(input) {
  return String(input)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function portableHtml(html, index) {
  return [
    {
      _type: "htmlBlock",
      _key: `html_${index}`,
      html,
    },
  ];
}

const files = (await readdir(postsDir))
  .filter((file) => file.endsWith(".md"))
  .sort((a, b) => a.localeCompare(b));

const terms = new Map();
const content = [];

for (const [index, file] of files.entries()) {
  const fullPath = path.join(postsDir, file);
  const raw = await readFile(fullPath, "utf8");
  const { data, content: markdown } = matter(raw);
  const slug = slugify(path.basename(file, ".md"));
  const tags = Array.isArray(data.tags) ? data.tags.map(String) : [];
  const html = marked.parse(markdown, { async: false });

  for (const tag of tags) {
    terms.set(slugify(tag), tag);
  }

  content.push({
    id: slug,
    slug,
    status: "published",
    bylines: [{ byline: "leolion" }],
    data: {
      title: String(data.title ?? path.basename(file, ".md")),
      description: data.description ? String(data.description) : "",
      pub_date: data.pubDate
        ? new Date(data.pubDate).toISOString()
        : new Date().toISOString(),
      type: data.type ? String(data.type) : "post",
      tags,
      content: portableHtml(html, index),
    },
    taxonomies: tags.length > 0 ? { tag: tags.map(slugify) } : undefined,
  });
}

const seed = {
  $schema: "https://emdashcms.com/seed.schema.json",
  version: "1",
  meta: {
    name: "AI TRAN Personal Blog",
    description: "EmDash schema and migrated markdown posts for leolion.naai.studio",
    author: "AI TRAN",
  },
  settings: {
    title: "AI TRAN (leolion)",
    tagline:
      "UI/UX Designer & Product thinker. Writing about design, product management, and technology.",
    postsPerPage: 10,
  },
  collections: [
    {
      slug: "posts",
      label: "Posts",
      labelSingular: "Post",
      description: "Personal blog posts",
      icon: "file-text",
      supports: ["drafts", "revisions", "preview"],
      fields: [
        { slug: "title", label: "Title", type: "string", required: true },
        { slug: "description", label: "Description", type: "text" },
        { slug: "pub_date", label: "Published date", type: "datetime" },
        { slug: "type", label: "Type", type: "string" },
        { slug: "tags", label: "Tags", type: "json" },
        { slug: "content", label: "Content", type: "portableText" },
      ],
    },
  ],
  taxonomies: [
    {
      name: "tag",
      label: "Tags",
      labelSingular: "Tag",
      hierarchical: false,
      collections: ["posts"],
      terms: Array.from(terms, ([slug, label]) => ({ slug, label })),
    },
  ],
  bylines: [
    {
      id: "leolion",
      slug: "leolion",
      displayName: "AI TRAN",
      websiteUrl: "https://leolion.naai.studio",
    },
  ],
  menus: [
    {
      name: "primary",
      label: "Primary Navigation",
      items: [
        { type: "custom", label: "Blog", url: "/" },
        { type: "custom", label: "Resume", url: "/resume" },
        { type: "custom", label: "Projects", url: "/projects" },
      ],
    },
  ],
  content: {
    posts: content,
  },
};

await mkdir(outDir, { recursive: true });
await writeFile(outFile, `${JSON.stringify(seed, null, 2)}\n`);
console.log(`Wrote ${content.length} posts to ${path.relative(root, outFile)}`);
