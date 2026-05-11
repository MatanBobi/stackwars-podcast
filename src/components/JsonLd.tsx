import { site } from "@/lib/site";
import type { Episode } from "@/lib/types";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || site.url || "https://stackwarspod.com";

// Render a JSON-LD <script> tag. The blob must not contain a literal "</script>"
// so we lightly escape forward slashes in any "</" sequences just in case.
function JsonLdScript({ data }: { data: object }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

// PodcastSeries structured data for the site root. Helps Google Podcasts,
// rich-result eligibility, and disambiguates the show from individual pages.
export function PodcastSeriesJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    name: site.name,
    description: site.longDescription,
    url: SITE_URL,
    inLanguage: "he",
    image: `${SITE_URL}/stackwars.png`,
    webFeed: site.platforms.rss ?? undefined,
    author: site.hosts.map((h) => ({ "@type": "Person", name: h.name })),
    sameAs: [
      site.platforms.spotify,
      site.platforms.applePodcasts,
      site.platforms.youtube,
    ].filter(Boolean),
  };
  return <JsonLdScript data={data} />;
}

// PodcastEpisode structured data for individual episode pages.
export function PodcastEpisodeJsonLd({ episode }: { episode: Episode }) {
  const url = `${SITE_URL}/episodes/${episode.slug}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: episode.title,
    description: episode.description,
    url,
    datePublished: episode.pubDate,
    episodeNumber: episode.episodeNumber,
    seasonNumber: episode.season,
    inLanguage: "he",
    image: episode.imageUrl,
    associatedMedia: episode.audioUrl
      ? {
          "@type": "MediaObject",
          contentUrl: episode.audioUrl,
        }
      : undefined,
    partOfSeries: {
      "@type": "PodcastSeries",
      name: site.name,
      url: SITE_URL,
    },
  };
  return <JsonLdScript data={data} />;
}

// Lightweight Organization/WebSite data for the homepage; helps Google
// generate a site-name in SERPs.
export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: SITE_URL,
    inLanguage: "he",
    description: site.tagline,
  };
  return <JsonLdScript data={data} />;
}
