// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import Unocss from 'unocss/astro';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import compress from '@playform/compress';
import emdash from 'emdash/astro';
import { d1, r2 } from '@emdash-cms/cloudflare';
import rehypeSlug from 'rehype-slug';

// https://astro.build/config
export default defineConfig({
    site: 'https://leolion.naai.studio',
    server: { port: 4321, host: true },
    output: 'server',
    adapter: cloudflare(),
    prefetch: true,
    markdown: {
        rehypePlugins: [rehypeSlug],
    },
    integrations: [
        Unocss({ injectReset: true, injectEntry: true }),
        react(),
        icon(),
        sitemap(),
        robotsTxt({
            transform(content) {
                const contentSignals = [
                    'Content-Signal: ai-train=no, search=yes, ai-input=yes',
                    'Content-Signal: ai-train=no, search=yes, ai-input=yes /',
                ].join('\n');

                return content.replace(
                    /User-agent: \*\n/,
                    `User-agent: *\n${contentSignals}\n`,
                );
            },
        }),
        emdash({
            database: d1({ binding: 'DB', session: 'auto' }),
            storage: r2({
                binding: 'MEDIA',
                publicUrl: process.env.R2_PUBLIC_URL,
            }),
            mcp: true,
        }),
        compress(),  // must be last — runs post-build
    ],
});
