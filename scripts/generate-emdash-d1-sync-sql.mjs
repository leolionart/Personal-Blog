import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const seedFile = path.join(root, ".emdash/seed.json");
const outFile = path.join(root, ".emdash/sync-posts.sql");

function sql(value) {
  if (value === undefined || value === null) return "NULL";
  return `'${String(value).replace(/'/g, "''")}'`;
}

const seed = JSON.parse(await readFile(seedFile, "utf8"));
const posts = seed.content?.posts ?? [];

const statements = [];

for (const post of posts) {
  const data = post.data ?? {};
  const slug = post.slug ?? post.id;
  const revisionData = JSON.stringify(data);

  statements.push(
    [
      "UPDATE ec_posts SET",
      `title=${sql(data.title)},`,
      `description=${sql(data.description)},`,
      `pub_date=${sql(data.pub_date)},`,
      `type=${sql(data.type)},`,
      `tags=${sql(JSON.stringify(data.tags ?? []))},`,
      `content=${sql(JSON.stringify(data.content ?? []))},`,
      "updated_at=datetime('now'),",
      "version=version+1",
      `WHERE slug=${sql(slug)};`,
    ].join(" "),
  );

  statements.push(
    [
      "UPDATE revisions SET",
      `data=${sql(revisionData)},`,
      "created_at=datetime('now')",
      `WHERE id=(SELECT live_revision_id FROM ec_posts WHERE slug=${sql(slug)});`,
    ].join(" "),
  );
}

await mkdir(path.dirname(outFile), { recursive: true });
await writeFile(outFile, `${statements.join("\n")}\n`);

console.log(`Wrote ${posts.length} post sync statements to ${path.relative(root, outFile)}`);
