import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { EpisodeCard } from "@/components/EpisodeCard";
import { getEpisodes } from "@/lib/rss";
import { getPlatforms } from "@/lib/platforms";
import { site } from "@/lib/site";

export const revalidate = 3600;

function formatLongDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("he-IL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function HomePage() {
  const allEpisodes = await getEpisodes();
  const [featured, ...rest] = allEpisodes;
  const latestEpisodes = rest.slice(0, 3);
  const platforms = getPlatforms();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden hero-bg">
        <div className="starfield" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,184,0,0.10)_0%,_transparent_60%)]" />

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Cover art */}
            <div className="relative group mb-10 animate-float">
              <div className="absolute -inset-10 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-1000" />
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all duration-700" />
              <Image
                src="/stack-wars.jpg"
                alt="Stack Wars Podcast"
                width={380}
                height={380}
                className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-2xl object-cover animate-pulse-glow shadow-2xl shadow-primary/20"
                priority
              />
            </div>

            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold tracking-widest mb-6 animate-slide-up"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              הפודקאסט שבו אף אחד לא צודק
            </div>

            <h1
              className="text-5xl lg:text-7xl font-black tracking-[0.18em] text-primary logo-glow sw-title leading-none mb-5 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              STACK WARS
            </h1>

            <p
              className="text-xl lg:text-2xl font-semibold text-foreground mb-4 max-w-2xl animate-slide-up leading-snug"
              style={{ animationDelay: "0.2s" }}
            >
              {site.tagline}
            </p>
            <p
              className="text-base lg:text-lg text-muted-foreground/90 mb-8 max-w-2xl animate-slide-up leading-relaxed"
              style={{ animationDelay: "0.3s" }}
            >
              שני מפתחים, אחד מהפרונטאנד ואחד מהבאקאנד, נפגשים לריב על כלים,
              שפות, פריימוורקים, ו-AI. בלי חסויות, בלי תשובות נכונות.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 justify-center animate-slide-up"
              style={{ animationDelay: "0.45s" }}
            >
              {featured && (
                <Button
                  asChild
                  size="lg"
                  className="text-base px-7 py-5 font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 gap-2"
                >
                  <Link href={`/episodes/${featured.slug}`}>
                    <svg
                      className="w-4 h-4 translate-x-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    להאזין לפרק האחרון
                  </Link>
                </Button>
              )}
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base px-7 py-5 font-semibold border-2 hover:bg-primary/10 transition-all duration-300"
              >
                <Link href="/episodes">כל הפרקים</Link>
              </Button>
            </div>

            {platforms.length > 0 && (
              <div
                className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-slide-up"
                style={{ animationDelay: "0.6s" }}
              >
                <span className="text-xs uppercase tracking-widest text-muted-foreground/70">
                  זמינים ב:
                </span>
                {platforms.map((p) => (
                  <a
                    key={p.key}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300 p-1.5 rounded-lg hover:bg-primary/10"
                    aria-label={`האזינו ב-${p.label}`}
                    title={p.label}
                  >
                    <span className="block h-6 w-6">{p.icon}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured / latest episode */}
      {featured && (
        <section className="relative py-12 lg:py-16">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  הפרק האחרון
                </span>
                <span className="flex-1 h-[1px] bg-gradient-to-l from-primary/30 to-transparent" />
              </div>

              <Link
                href={`/episodes/${featured.slug}`}
                className="group block rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-card to-secondary/30 p-6 lg:p-8 glow-border card-hover"
              >
                <div className="grid md:grid-cols-[auto,1fr] gap-6 md:gap-8 items-center">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0">
                    <div className="absolute -inset-3 bg-primary/15 rounded-2xl blur-2xl group-hover:bg-primary/25 transition-all duration-700" />
                    <Image
                      src={featured.imageUrl || "/stack-wars.jpg"}
                      alt={featured.title}
                      width={160}
                      height={160}
                      className="relative w-full h-full rounded-xl object-cover shadow-xl shadow-primary/10"
                    />
                  </div>

                  <div>
                    <div
                      className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-3"
                      dir="ltr"
                    >
                      {featured.episodeNumber && (
                        <span className="bg-primary text-primary-foreground px-2.5 py-1 rounded-full font-bold tracking-wide">
                          #{featured.episodeNumber}
                        </span>
                      )}
                      <span className="bg-secondary/60 px-2.5 py-1 rounded-full">
                        {featured.duration}
                      </span>
                      <span className="text-muted-foreground/70" dir="rtl">
                        {formatLongDate(featured.pubDate)}
                      </span>
                    </div>
                    <h3
                      dir="auto"
                      className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3 leading-snug"
                    >
                      {featured.title}
                    </h3>
                    <p
                      dir="auto"
                      className="text-sm lg:text-base text-muted-foreground/85 line-clamp-3 leading-relaxed mb-5"
                    >
                      {featured.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                      <span className="w-9 h-9 rounded-full bg-primary/15 group-hover:bg-primary/30 flex items-center justify-center transition-colors duration-300">
                        <svg
                          className="w-4 h-4 translate-x-0.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                      להאזין עכשיו
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Previous Episodes */}
      {latestEpisodes.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-secondary/30 via-secondary/10 to-transparent relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
              <div className="flex items-center gap-4">
                <div className="hidden sm:block w-12 h-[2px] bg-gradient-to-l from-primary to-transparent" />
                <h2 className="text-3xl lg:text-4xl font-bold gradient-text-animated">
                  פרקים קודמים
                </h2>
              </div>
              <Link
                href="/episodes"
                className="group text-sm text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 px-4 py-2 rounded-full border border-transparent hover:border-primary/30 hover:bg-primary/5"
              >
                לכל הפרקים{" "}
                <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestEpisodes.map((episode, index) => (
                <div
                  key={episode.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <EpisodeCard episode={episode} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {!featured && (
        <section className="py-24 text-center text-muted-foreground">
          עדיין אין פרקים זמינים. כדאי לחזור עוד מעט.
        </section>
      )}

      {/* Subscribe */}
      {platforms.length > 0 && (
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

          <div className="container mx-auto px-4 relative">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                הרשמו, כדי לא לפספס
              </h2>
              <p className="text-muted-foreground mb-8 text-base lg:text-lg">
                בחרו את האפליקציה שלכם, הדליקו פעמון, ולא תפספסו פרק.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {platforms.map((p) => (
                  <Button
                    key={p.key}
                    variant="outline"
                    asChild
                    className="gap-2.5 px-5 py-4 border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
                  >
                    <a href={p.url} target="_blank" rel="noopener noreferrer">
                      <span className="block h-4 w-4 group-hover:scale-110 transition-transform duration-300">
                        {p.icon}
                      </span>
                      {p.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
