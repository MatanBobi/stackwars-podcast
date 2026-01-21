import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AudioPlayer } from "@/components/AudioPlayer";
import { getEpisodeBySlug, getEpisodes } from "@/lib/rss";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface EpisodePageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all episodes
export async function generateStaticParams() {
  const episodes = await getEpisodes();
  return episodes.map((episode) => ({
    slug: episode.slug,
  }));
}

// Generate metadata for each episode
export async function generateMetadata({
  params,
}: EpisodePageProps): Promise<Metadata> {
  const { slug } = await params;
  const episode = await getEpisodeBySlug(slug);

  if (!episode) {
    return {
      title: "פרק לא נמצא",
    };
  }

  return {
    title: episode.title,
    description: episode.description,
    openGraph: {
      type: "article",
      title: episode.title,
      description: episode.description,
      publishedTime: episode.pubDate,
      images: episode.imageUrl ? [{ url: episode.imageUrl }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: episode.title,
      description: episode.description,
      images: episode.imageUrl ? [episode.imageUrl] : [],
    },
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("he-IL", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const revalidate = 3600; // Revalidate every hour

export default async function EpisodePage({ params }: EpisodePageProps) {
  const { slug } = await params;
  const episode = await getEpisodeBySlug(slug);

  if (!episode) {
    notFound();
  }

  // Generate JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: episode.title,
    description: episode.description,
    datePublished: episode.pubDate,
    duration: episode.duration,
    url: episode.audioUrl,
    partOfSeries: {
      "@type": "PodcastSeries",
      name: "Stack Wars Podcast",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="gap-2">
              <Link href="/episodes">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                כל הפרקים
              </Link>
            </Button>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Episode Header */}
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
                {episode.episodeNumber && (
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-medium">
                    פרק {episode.episodeNumber}
                  </span>
                )}
                {episode.season && (
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                    עונה {episode.season}
                  </span>
                )}
                <span>{formatDate(episode.pubDate)}</span>
                <span>•</span>
                <span>{episode.duration}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {episode.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {episode.description}
              </p>
            </header>

            {/* Audio Player */}
            {episode.audioUrl && (
              <div className="mb-8">
                <AudioPlayer src={episode.audioUrl} title={episode.title} />
              </div>
            )}

            <Separator className="my-8" />

            {/* Show Notes */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-6">
                הערות לתוכנית
              </h2>
              <div
                className="prose prose-invert prose-primary max-w-none"
                dangerouslySetInnerHTML={{ __html: episode.content }}
              />
              {!episode.content && (
                <p className="text-muted-foreground italic">
                  אין הערות זמינות לפרק זה.
                </p>
              )}
            </section>

            <Separator className="my-8" />

            {/* Share Section */}
            <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  נהניתם מהפרק?
                </h3>
                <p className="text-sm text-muted-foreground">
                  שתפו אותו עם חבריכם המפתחים!
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      `הרגע האזנתי ל"${episode.title}" ב-Stack Wars פודקאסט! 🎙️`,
                    )}&url=${encodeURIComponent(
                      `${process.env.NEXT_PUBLIC_SITE_URL || ""}/episodes/${episode.slug}`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 ml-2 fill-current"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    שתפו ב-X
                  </a>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
