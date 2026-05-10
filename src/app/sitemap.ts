import type { MetadataRoute } from "next";
import { getEpisodes } from "@/lib/rss";
import { site } from "@/lib/site";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || site.url || "https://stackwarspod.com";

export const revalidate = 3600; // re-generate hourly so new episodes appear

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/episodes`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  let episodeRoutes: MetadataRoute.Sitemap = [];
  try {
    const episodes = await getEpisodes();
    episodeRoutes = episodes.map((ep) => ({
      url: `${SITE_URL}/episodes/${ep.slug}`,
      lastModified: new Date(ep.pubDate),
      changeFrequency: "yearly" as const,
      priority: 0.8,
    }));
  } catch {
    // If the feed is unreachable at build time, ship a sitemap with at
    // least the static routes rather than failing the route.
  }

  return [...staticRoutes, ...episodeRoutes];
}
