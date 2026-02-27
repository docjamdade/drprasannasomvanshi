import type { MetadataRoute } from "next";
import { allBlogPosts } from "@/lib/blog-posts";
import { getPublishedPosts } from "@/lib/blog-types";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://drprasannasomvanshi.com";
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/book`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];

  const publishedPosts = getPublishedPosts(allBlogPosts);
  const blogPages: MetadataRoute.Sitemap = publishedPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
