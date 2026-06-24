import type { ContentEntry, PortableTextBlock } from "emdash";

export interface EmDashPostData {
    slug?: string;
    title: string;
    description?: string;
    pub_date?: string;
    type?: string;
    tags?: string[];
    content?: PortableTextBlock[];
}

export type EmDashPost = ContentEntry<EmDashPostData>;

export function asEmDashPost(post: ContentEntry<Record<string, unknown>>): EmDashPost {
    return post as unknown as EmDashPost;
}

export function asEmDashPosts(posts: ContentEntry<Record<string, unknown>>[]): EmDashPost[] {
    return posts.map(asEmDashPost);
}

export function getPostSlug(post: EmDashPost): string {
    return String((post as EmDashPost & { slug?: string }).slug ?? post.data.slug ?? post.id);
}

export function getPostDate(post: EmDashPost): Date {
    return new Date(post.data.pub_date ?? Date.now());
}

export function getPostTags(post: EmDashPost): string[] {
    return Array.isArray(post.data.tags) ? post.data.tags : [];
}

export function sortPostsByDate(posts: EmDashPost[]): EmDashPost[] {
    return [...posts].sort((a, b) => getPostDate(b).getTime() - getPostDate(a).getTime());
}
