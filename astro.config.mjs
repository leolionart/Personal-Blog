// @ts-check
import { defineConfig } from 'astro/config';
import Unocss from 'unocss/astro';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import compress from '@playform/compress';
import rehypeSlug from 'rehype-slug';

// https://astro.build/config
export default defineConfig({
    site: 'https://geek.naai.studio',
    server: { port: 4321 },
    prefetch: true,
    markdown: {
        rehypePlugins: [rehypeSlug],
    },
    integrations: [
        Unocss({ injectReset: true, injectEntry: true }),
        icon(),
        sitemap(),
        robotsTxt(),
        compress(),  // must be last — runs post-build
    ],
});
