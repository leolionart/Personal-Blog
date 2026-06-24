import rss from '@astrojs/rss';
import { getEmDashCollection } from 'emdash';
import { SITE_NAME, SITE_DESCRIPTION } from '../consts';
import { asEmDashPosts, getPostDate, getPostSlug, sortPostsByDate } from '../lib/emdash-posts';

export async function GET(context: { site: URL }) {
    const { entries } = await getEmDashCollection('posts', { status: 'published' });
    const posts = sortPostsByDate(asEmDashPosts(entries));

    return rss({
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
        site: context.site,
        items: posts
            .map((post) => ({
                title: post.data.title,
                pubDate: getPostDate(post),
                description: post.data.description ?? '',
                link: `/blog/${getPostSlug(post)}/`,
            })),
    });
}
