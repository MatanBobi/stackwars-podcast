import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { EpisodeCard } from "@/components/EpisodeCard";
import { getLatestEpisodes } from "@/lib/rss";

// Platform links for the hero section
const platformLinks = [
  {
    name: "Apple Podcasts",
    url: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
        <path d="M12.001 2a10 10 0 0 0-10 10 9.93 9.93 0 0 0 2.54 6.65A10.06 10.06 0 0 0 8.998 22a10.06 10.06 0 0 0 6.006 0 10.06 10.06 0 0 0 4.457-3.35A9.93 9.93 0 0 0 22 12a10 10 0 0 0-10-10zm0 2a8 8 0 0 1 8 8 7.95 7.95 0 0 1-2.032 5.32A8.05 8.05 0 0 1 14.4 20a8.05 8.05 0 0 1-4.8 0 8.05 8.05 0 0 1-3.569-2.68A7.95 7.95 0 0 1 4 12a8 8 0 0 1 8-8zm0 3a5 5 0 0 0-5 5c0 1.08.34 2.09.93 2.91a5.004 5.004 0 0 0 2.44 1.81v.01a3 3 0 0 0 3.26 0v-.01a5.004 5.004 0 0 0 2.44-1.81A4.97 4.97 0 0 0 17 12a5 5 0 0 0-5-5zm0 2a3 3 0 0 1 3 3 2.98 2.98 0 0 1-.56 1.74A3 3 0 0 1 12.001 15a3 3 0 0 1-2.44-.74A2.98 2.98 0 0 1 9 12a3 3 0 0 1 3-3zm0 6c.35 0 .69.04 1.02.12a1 1 0 0 1 .68 1.23 1 1 0 0 1-.55.6V19a1.15 1.15 0 0 1-2.3 0v-2.05a1 1 0 0 1-.55-.6 1 1 0 0 1 .68-1.23c.33-.08.67-.12 1.02-.12z" />
      </svg>
    ),
  },
  {
    name: "Spotify",
    url: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "RSS",
    url: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
        <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248S0 22.546 0 20.752s1.456-3.248 3.252-3.248 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z" />
      </svg>
    ),
  },
];

export const revalidate = 3600; // Revalidate every hour

export default async function HomePage() {
  const latestEpisodes = await getLatestEpisodes(3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-28 lg:py-48 overflow-hidden hero-bg">
        {/* Starfield Background */}
        <div className="starfield" />
        {/* Multiple layered gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,184,0,0.15)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(255,184,0,0.05)_0%,_transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,184,0,0.05)_0%,_transparent_40%)]" />

        {/* Decorative corner accents */}
        <div className="absolute top-20 left-10 w-20 h-[1px] bg-gradient-to-r from-primary/50 to-transparent" />
        <div className="absolute top-20 left-10 w-[1px] h-20 bg-gradient-to-b from-primary/50 to-transparent" />
        <div className="absolute bottom-20 right-10 w-20 h-[1px] bg-gradient-to-l from-primary/50 to-transparent" />
        <div className="absolute bottom-20 right-10 w-[1px] h-20 bg-gradient-to-t from-primary/50 to-transparent" />

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Logo */}
            <div className="mb-14 relative group animate-float">
              {/* Multiple glow layers */}
              <div className="absolute -inset-16 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-1000" />
              <div className="absolute -inset-8 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all duration-700" />
              <Image
                src="/stack-wars.jpg"
                alt="Stack Wars Podcast"
                width={380}
                height={380}
                className="relative w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-2xl object-cover animate-pulse-glow shadow-2xl shadow-primary/20"
                priority
              />
            </div>
            <h1 className="sr-only">Stack Wars Podcast</h1>

            {/* Tagline */}
            <p
              className="text-xl lg:text-2xl text-muted-foreground/90 mb-12 max-w-2xl animate-slide-up leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              פודקאסט שחוקר את הקרבות האינסופיים בין טכנולוגיות, פריימוורקים,
              והמפתחים שאוהבים אותם.
            </p>

            {/* Platform Links */}
            <div
              className="flex flex-wrap justify-center gap-6 mb-14 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              {platformLinks.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary hover:scale-110 hover:-translate-y-1 transition-all duration-300 p-2 rounded-lg hover:bg-primary/10"
                  aria-label={`Listen on ${platform.name}`}
                  title={platform.name}
                >
                  {platform.icon}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-5 animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 font-semibold tracking-wide shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
              >
                <Link href="/episodes">עיין בפרקים</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 font-semibold tracking-wide border-2 hover:bg-primary/10 transition-all duration-300"
              >
                <Link href="/about">אודות התוכנית</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Episodes Section */}
      <section className="py-28 bg-gradient-to-b from-secondary/50 via-secondary/20 to-transparent relative">
        {/* Section top divider */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-16 gap-4">
            <div className="flex items-center gap-4">
              {/* Decorative element */}
              <div className="hidden sm:block w-12 h-[2px] bg-gradient-to-l from-primary to-transparent" />
              <h2 className="text-4xl lg:text-5xl font-bold gradient-text-animated">
                פרקים אחרונים
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

          {latestEpisodes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestEpisodes.map((episode, index) => (
                <div
                  key={episode.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <EpisodeCard episode={episode} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/50 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-primary/50"
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
              <p className="text-muted-foreground text-lg">
                עדיין אין פרקים. חזרו בקרוב!
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                הגדירו את כתובת ה-RSS כדי להציג פרקים.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-24 relative">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-primary/50" />
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-primary/50" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-5 animate-glow-text">
              אל תפספסו פרק
            </h2>
            <p className="text-muted-foreground mb-10 text-lg">
              הירשמו ל-Stack Wars בפלטפורמת הפודקאסטים המועדפת עליכם והצטרפו
              לקרב על השליטה הטכנולוגית.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {platformLinks.slice(0, 3).map((platform) => (
                <Button
                  key={platform.name}
                  variant="outline"
                  asChild
                  className="gap-3 px-6 py-5 border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
                >
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="w-5 h-5 group-hover:scale-110 transition-transform duration-300">
                      {platform.icon}
                    </span>
                    {platform.name}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
