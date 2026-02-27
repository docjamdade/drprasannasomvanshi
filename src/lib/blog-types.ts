export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  publishDate: string; // YYYY-MM-DD
  keywords: string[];
  content: string; // HTML content
  category: "cosmetic" | "reconstructive" | "general";
}

export function getPublishedPosts(posts: BlogPost[]): BlogPost[] {
  const today = new Date().toISOString().split("T")[0];
  return posts
    .filter((p) => p.publishDate <= today)
    .sort((a, b) => b.publishDate.localeCompare(a.publishDate));
}

export function getPostBySlug(
  posts: BlogPost[],
  slug: string
): BlogPost | undefined {
  const today = new Date().toISOString().split("T")[0];
  const post = posts.find((p) => p.slug === slug);
  if (post && post.publishDate <= today) return post;
  return undefined;
}
