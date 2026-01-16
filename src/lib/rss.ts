import Parser from "rss-parser";
import { Episode, PodcastFeed } from "./types";

// Custom parser with podcast-specific fields
type CustomFeed = {
  title: string;
  description: string;
  link: string;
  image?: { url?: string };
  "itunes:author"?: string;
  "itunes:image"?: { href?: string };
  "itunes:owner"?: { "itunes:email"?: string };
};

type CustomItem = {
  title: string;
  contentSnippet?: string;
  content?: string;
  pubDate?: string;
  enclosure?: { url?: string };
  "itunes:duration"?: string;
  "itunes:image"?: { href?: string };
  "itunes:episode"?: string;
  "itunes:season"?: string;
  guid?: string;
  link?: string;
};

const parser: Parser<CustomFeed, CustomItem> = new Parser({
  customFields: {
    feed: ["itunes:author", "itunes:image", "itunes:owner"],
    item: ["itunes:duration", "itunes:image", "itunes:episode", "itunes:season"],
  },
});

// RSS Feed URL - Update this with your actual podcast RSS feed
const RSS_FEED_URL = process.env.RSS_FEED_URL || "https://example.com/feed.xml";

function generateSlug(title: string, index: number): string {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return slug || `episode-${index + 1}`;
}

function formatDuration(duration: string | undefined): string {
  if (!duration) return "Unknown";
  
  // If already in HH:MM:SS or MM:SS format
  if (duration.includes(":")) return duration;
  
  // If in seconds, convert to MM:SS or HH:MM:SS
  const seconds = parseInt(duration, 10);
  if (isNaN(seconds)) return duration;
  
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }
  return `${minutes}:${secs.toString().padStart(2, "0")}`;
}

export async function fetchPodcastFeed(): Promise<PodcastFeed> {
  try {
    const feed = await parser.parseURL(RSS_FEED_URL);
    
    const episodes: Episode[] = (feed.items || []).map((item, index) => ({
      id: item.guid || `episode-${index}`,
      slug: generateSlug(item.title || "", index),
      title: item.title || "Untitled Episode",
      description: item.contentSnippet || "",
      content: item.content || item.contentSnippet || "",
      pubDate: item.pubDate || new Date().toISOString(),
      duration: formatDuration(item["itunes:duration"]),
      audioUrl: item.enclosure?.url || "",
      imageUrl: item["itunes:image"]?.href || feed["itunes:image"]?.href || feed.image?.url,
      episodeNumber: item["itunes:episode"] ? parseInt(item["itunes:episode"], 10) : undefined,
      season: item["itunes:season"] ? parseInt(item["itunes:season"], 10) : undefined,
    }));

    return {
      title: feed.title || "Stack Wars Podcast",
      description: feed.description || "",
      link: feed.link || "",
      image: feed["itunes:image"]?.href || feed.image?.url,
      author: feed["itunes:author"],
      email: feed["itunes:owner"]?.["itunes:email"],
      episodes,
    };
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    // Return empty feed on error
    return {
      title: "Stack Wars Podcast",
      description: "A podcast about technology stacks",
      link: "",
      episodes: [],
    };
  }
}

export async function getEpisodes(): Promise<Episode[]> {
  const feed = await fetchPodcastFeed();
  return feed.episodes;
}

export async function getEpisodeBySlug(slug: string): Promise<Episode | undefined> {
  const episodes = await getEpisodes();
  return episodes.find((ep) => ep.slug === slug);
}

export async function getLatestEpisodes(count: number = 3): Promise<Episode[]> {
  const episodes = await getEpisodes();
  return episodes.slice(0, count);
}
