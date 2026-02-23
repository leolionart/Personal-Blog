export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
}

const GITHUB_API = "https://api.github.com";

export async function fetchPublicRepos(
  username: string
): Promise<GitHubRepo[]> {
  const token = import.meta.env.GITHUB_TOKEN;

  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const url = `${GITHUB_API}/users/${username}/repos?per_page=100&type=public`;

  const res = await fetch(url, { headers });

  if (!res.ok) {
    console.warn(
      `[GitHub] API responded ${res.status} ${res.statusText}. Projects section will be empty.`
    );
    return [];
  }

  const data: GitHubRepo[] = await res.json();

  return data
    .filter((repo) => !repo.fork && !repo.archived && repo.description)
    .sort((a, b) => b.stargazers_count - a.stargazers_count);
}
