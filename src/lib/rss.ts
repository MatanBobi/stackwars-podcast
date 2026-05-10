import Parser from "rss-parser";
import { Episode, PodcastFeed } from "./types";

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
    item: [
      "itunes:duration",
      "itunes:image",
      "itunes:episode",
      "itunes:season",
    ],
  },
});

const RSS_FEED_URL = process.env.RSS_FEED_URL || "https://example.com/feed.xml";

// Generate a stable, URL-safe slug. Mixed Hebrew/English titles are common,
// so we prefer the iTunes episode number, then ASCII letters from the title.
function generateSlug(
  title: string,
  episodeNumber: string | undefined,
  index: number,
): string {
  const ascii = (title || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  if (episodeNumber) {
    return ascii ? `${episodeNumber}-${ascii}` : `episode-${episodeNumber}`;
  }
  return ascii || `episode-${index + 1}`;
}

// Cleaner preview text for cards / meta tags: drop bare URLs and collapse
// repeated whitespace. The full content is preserved separately.
function cleanPreview(text: string): string {
  return (text || "")
    .replace(/https?:\/\/\S+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDuration(duration: string | undefined): string {
  if (!duration) return "—";
  if (duration.includes(":")) return duration;

  const seconds = parseInt(duration, 10);
  if (isNaN(seconds)) return duration;

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  }
  return `${minutes}:${secs.toString().padStart(2, "0")}`;
}

export async function fetchPodcastFeed(): Promise<PodcastFeed> {
  try {
    const feed = await parser.parseURL(RSS_FEED_URL);

    const episodes: Episode[] = (feed.items || []).map((item, index) => ({
      id: item.guid || `episode-${index}`,
      slug: generateSlug(item.title || "", item["itunes:episode"], index),
      title: item.title || "Untitled Episode",
      description: cleanPreview(item.contentSnippet || ""),
      content: item.content || item.contentSnippet || "",
      pubDate: item.pubDate || new Date().toISOString(),
      duration: formatDuration(item["itunes:duration"]),
      audioUrl: item.enclosure?.url || "",
      imageUrl:
        item["itunes:image"]?.href ||
        feed["itunes:image"]?.href ||
        feed.image?.url,
      episodeNumber: item["itunes:episode"]
        ? parseInt(item["itunes:episode"], 10)
        : undefined,
      season: item["itunes:season"]
        ? parseInt(item["itunes:season"], 10)
        : undefined,
    }));

    // Newest first. RSS feed order isn't guaranteed to be chronological,
    // and we'd rather sort once here than in every consumer.
    episodes.sort(
      (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime(),
    );

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
    return {
      title: "Stack Wars Podcast",
      description: "",
      link: "",
      episodes: [],
    };
  }
}

export async function getEpisodes(): Promise<Episode[]> {
  const feed = await fetchPodcastFeed();
  return feed.episodes;
}

export async function getEpisodeBySlug(
  slug: string,
): Promise<Episode | undefined> {
  const episodes = await getEpisodes();
  return episodes.find((ep) => ep.slug === slug);
}

export async function getLatestEpisodes(count: number = 3): Promise<Episode[]> {
  const episodes = await getEpisodes();
  return episodes.slice(0, count);
}

// Convert a plain-text RSS description into rich HTML:
// - escape HTML
// - turn URLs into <a> tags
// - turn blank lines into paragraphs and single newlines into <br>
export function renderShowNotes(raw: string): string {
  if (!raw) return "";

  // If the feed already gave us HTML (presence of common block tags), trust it.
  if (/<\s*(p|br|ul|ol|li|h\d|a)\b/i.test(raw)) {
    return raw;
  }

  const escape = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const urlRe = /(https?:\/\/[^\s<]+[^\s<.,;:!?)\]'"])/g;

  const paragraphs = raw
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n/) // blank line => new paragraph
    .map((p) => p.trim())
    .filter(Boolean);

  return paragraphs
    .map((para) => {
      const withLinks = escape(para).replace(
        urlRe,
        (m) =>
          `<a href="${m}" target="_blank" rel="noopener noreferrer">${m}</a>`,
      );
      // Single newlines inside a paragraph -> <br>
      return `<p>${withLinks.replace(/\n/g, "<br />")}</p>`;
    })
    .join("\n");
}
