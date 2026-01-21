import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Episode } from "@/lib/types";

interface EpisodeCardProps {
  episode: Episode;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("he-IL", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <Link href={`/episodes/${episode.slug}`} className="group block h-full">
      <Card className="h-full card-hover bg-gradient-to-br from-card via-card/80 to-secondary/30 border-primary/20 overflow-hidden relative glow-border">
        {/* Animated background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-all duration-700" />

        {/* Scanning line effect */}
        <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-x-0 h-20 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent animate-shimmer" />
        </div>

        {/* Episode number badge */}
        {episode.episodeNumber && (
          <div className="absolute -top-1 -left-1 w-20 h-20 overflow-hidden">
            <div className="absolute top-4 left-[-30px] w-[100px] text-center bg-gradient-to-l from-primary to-primary/80 text-primary-foreground font-black text-sm py-1 transform -rotate-45 shadow-lg">
              #{episode.episodeNumber}
            </div>
          </div>
        )}

        <CardHeader className="pb-4 relative">
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
            <span className="flex items-center gap-1.5 bg-secondary/50 px-3 py-1.5 rounded-full">
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {formatDate(episode.pubDate)}
            </span>
            <span className="flex items-center gap-1.5 bg-secondary/50 px-3 py-1.5 rounded-full">
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
          </div>
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-all duration-300 line-clamp-2 pl-12 group-hover:-translate-x-1">
            {episode.title}
          </h3>
        </CardHeader>
        <CardContent className="relative">
          <p className="text-sm text-muted-foreground/80 line-clamp-3 leading-relaxed">
            {episode.description}
          </p>
          {/* Play indicator */}
          <div className="mt-5 flex items-center gap-3 text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
              <svg
                className="w-5 h-5 translate-x-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="text-sm font-semibold tracking-wide">
              האזינו עכשיו
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
