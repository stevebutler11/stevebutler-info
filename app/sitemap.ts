import { getPosts } from "./mdxUtils/utils";

export const baseUrl = "https://stevebutler.info";

const sitemap = async () => {
  const posts = getPosts().map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ["", "/posts", "/about", "/projects"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...posts];
};

export default sitemap;
