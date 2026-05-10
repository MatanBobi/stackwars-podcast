import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Episode } from "@/lib/types";

interface EpisodeCardProps {
  episode: Episode;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("he-IL", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <Link href={`/episodes/${episode.slug}`} className="group block h-full">
      <Card className="h-full card-hover bg-gradient-to-br from-card via-card/80 to-secondary/30 border-primary/20 overflow-hidden relative glow-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

        {/* Big episode-number watermark */}
        {episode.episodeNumber && (
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-6 -left-2 text-[7rem] font-black leading-none text-primary/[0.06] group-hover:text-primary/[0.12] transition-colors duration-500 select-none"
            dir="ltr"
          >
            #{episode.episodeNumber}
          </span>
        )}

        <CardHeader className="pb-3 relative">
          <div
            className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-3"
            dir="ltr"
          >
            {episode.episodeNumber && (
              <span className="bg-primary text-primary-foreground px-2.5 py-1 rounded-full font-bold tracking-wide">
                #{episode.episodeNumber}
              </span>
            )}
            <span className="flex items-center gap-1.5 bg-secondary/50 px-2.5 py-1 rounded-full">
              <svg
                className="w-3.5 h-3.5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {episode.duration}
            </span>
            <span className="text-muted-foreground/70" dir="rtl">
              {formatDate(episode.pubDate)}
            </span>
          </div>
          <h3
            dir="auto"
            className="text-lg font-bold text-foreground group-hover:text-primary transition-all duration-300 line-clamp-2 leading-snug"
          >
            {episode.title}
          </h3>
        </CardHeader>
        <CardContent className="relative">
          <p
            dir="auto"
            className="text-sm text-muted-foreground/85 line-clamp-3 leading-relaxed"
          >
            {episode.description}
          </p>
          <div className="mt-5 flex items-center gap-3 text-primary opacity-70 group-hover:opacity-100 transition-all duration-500">
            <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
              <svg
                className="w-4 h-4 translate-x-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="text-sm font-semibold tracking-wide">
              להאזין לפרק
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
