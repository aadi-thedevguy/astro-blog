import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { remarkReadingTime } from "./src/reading-time.mjs";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.thedevguy.in",
  markdown: {
    remarkPlugins: [remarkReadingTime],
    extendDefaultPlugins: true,
  },
  integrations: [
    tailwind(),
    sitemap(),
    mdx({
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "wrap",
            content: (node) => [
              {
                type: "element",
                tagName: "span",
                children: [
                  {
                    type: "text",
                    value: node.children[0].value,
                  },
                ],
              },
            ],
          },
        ],
      ],
    }),
    preact(),
  ],
  output: "server",
  adapter: vercel({
    edgeMiddleware: true,
  }),
});
