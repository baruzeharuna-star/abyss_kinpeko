import { MetadataRoute } from "next";
import { getAllPosts } from "../lib/blog";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kinpeko.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllPosts();
  const bloodlinePosts = getAllPosts("bloodline");

  const blogUrls = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const bloodlineUrls = bloodlinePosts.map((post) => ({
    url: `${siteUrl}/bloodline/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/bloodline`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/links`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...blogUrls,
    ...bloodlineUrls,
  ];
}
