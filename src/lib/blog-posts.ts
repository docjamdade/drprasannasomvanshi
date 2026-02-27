import type { BlogPost } from "./blog-types";
import { blogPosts1 } from "./blog-posts-1";
import { blogPosts2 } from "./blog-posts-2";
import { blogPosts3 } from "./blog-posts-3";
import { blogPosts4 } from "./blog-posts-4";

export const allBlogPosts: BlogPost[] = [
  ...blogPosts1,
  ...blogPosts2,
  ...blogPosts3,
  ...blogPosts4,
];
