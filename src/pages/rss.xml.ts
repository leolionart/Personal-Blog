import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_NAME, SITE_DESCRIPTION } from '../consts';

export async function GET(context: { site: URL }) {
    const posts = await getCollection('posts');

    return rss({
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
        site: context.site,
        items: posts
            .sort((a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf())
            .map((post) => ({
                title: post.data.title,
                pubDate: new Date(post.data.pubDate),
                description: post.data.description ?? '',
                link: `/blog/${post.slug}/`,
            })),
    });
}
