import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { remarkReadingTime } from './remark-reading-time.mjs';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkReadingTime],
    	extendDefaultPlugins: true,
	},
	integrations: [mdx({
		rehypePlugins: [
			rehypeSlug,
			[
			  rehypeAutolinkHeadings,
			  { behaviour: 'wrap' },
			],
		  ],
	}), sitemap(), react()],
});
