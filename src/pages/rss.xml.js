import { SITE_TITLE, SITE_DESCRIPTION } from "../constants";
import rss from "@astrojs/rss";
// import { pagesGlobToRssItems } from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    // items: await pagesGlobToRssItems(import.meta.glob("./**/*.mdx")),
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/articles/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
