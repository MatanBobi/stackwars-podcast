import { Metadata } from "next";
import { EpisodeCard } from "@/components/EpisodeCard";
import { getEpisodes } from "@/lib/rss";

export const metadata: Metadata = {
  title: "כל הפרקים",
  description:
    "עיינו בכל הפרקים של Stack Wars פודקאסט - חקירת הקרבות בין טכנולוגיות ופריימוורקים.",
};

export const revalidate = 3600; // Revalidate every hour

export default async function EpisodesPage() {
  const episodes = await getEpisodes();

  return (
    <div className="min-h-screen py-16 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-80 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="max-w-3xl mb-16 animate-slide-up">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-gradient-to-l from-primary to-transparent" />
            <span className="text-sm text-primary font-semibold uppercase tracking-wider">
              ארכיון
            </span>
          </div>
          <h1 className="text-5xl font-bold gradient-text-animated mb-6">
            כל הפרקים
          </h1>
          <p className="text-lg text-muted-foreground/90 leading-relaxed">
            צללו לתוך הארכיון של קרבות טכנולוגיות, עימותים בין פריימוורקים,
            ומלחמות סטאקים. כל פרק חוקר את היתרונות, החסרונות, והדיונים הנלהבים
            סביב הכלים שמפתחים משתמשים בהם יום יום.
          </p>
        </div>

        {/* Episodes Grid */}
        {episodes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {episodes.map((episode, index) => (
              <div
                key={episode.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <EpisodeCard episode={episode} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="max-w-md mx-auto">
              <div className="w-28 h-28 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
                <svg
                  className="w-14 h-14 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                עדיין אין פרקים
              </h2>
              <p className="text-muted-foreground/80 mb-6 leading-relaxed">
                אנחנו עובדים על להביא לכם תוכן מדהים. חזרו בקרוב לפרק הראשון
                שלנו!
              </p>
              <p className="text-sm text-muted-foreground/60">
                אם אתם בעלי האתר, הגדירו את כתובת ה-RSS במשתני הסביבה.
              </p>
            </div>
          </div>
        )}

        {/* Episode Count */}
        {episodes.length > 0 && (
          <div className="mt-16 text-center">
            <span className="text-sm text-muted-foreground/60 px-6 py-3 rounded-full bg-secondary/30 border border-primary/10">
              מציג {episodes.length} פרקים
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
