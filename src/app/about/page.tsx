import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Stack Wars Podcast - the show that explores the battles between technology stacks, frameworks, and the developers who champion them.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-80 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-16 animate-slide-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-transparent" />
              <span className="text-sm text-primary font-semibold uppercase tracking-wider">About Us</span>
            </div>
            <h1 className="text-5xl font-bold gradient-text-animated mb-6">
              About Stack Wars
            </h1>
            <p className="text-xl text-muted-foreground/90 leading-relaxed">
              Where technology battles are fought with keyboards, not lightsabers.
            </p>
          </header>

          {/* Main Content */}
          <div className="space-y-12">
            <section className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </span>
                The Show
              </h2>
              <div className="space-y-5 text-muted-foreground/80 leading-relaxed">
                <p>
                  Stack Wars is a podcast dedicated to exploring the endless
                  debates, discussions, and decisions that developers face when
                  choosing their technology stacks. From frontend frameworks to
                  backend languages, databases to deployment platforms — we cover
                  it all.
                </p>
                <p>
                  Each episode dives deep into the pros and cons of different
                  technologies, featuring real-world experiences, expert opinions,
                  and sometimes heated discussions about what truly makes a stack
                  &quot;the best&quot; (spoiler: it depends).
                </p>
                <p>
                  Whether you&apos;re a seasoned architect making enterprise
                  decisions or a developer curious about the latest trends, Stack
                  Wars offers insights, entertainment, and maybe a few laughs along
                  the way.
                </p>
              </div>
            </section>

            <Separator className="bg-primary/20" />

            <section className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </span>
                What We Cover
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Frontend Frameworks",
                  "Backend Languages",
                  "Database Wars",
                  "Cloud Platforms",
                  "DevOps Tools",
                  "API Design",
                  "Testing Strategies",
                  "Architecture Patterns",
                ].map((topic, index) => (
                  <li
                    key={topic}
                    className="flex items-center gap-4 text-muted-foreground/80 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                    style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                  >
                    <span className="w-2.5 h-2.5 bg-primary rounded-full group-hover:scale-125 transition-transform" />
                    {topic}
                  </li>
                ))}
              </ul>
            </section>

            <Separator className="bg-primary/20" />

            <section className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                The Host
              </h2>
              <div className="bg-gradient-to-br from-card via-card to-secondary/20 border border-primary/20 rounded-2xl p-8 glow-border">
                <div className="flex flex-col sm:flex-row gap-8">
                  <div className="w-28 h-28 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 animate-border-glow border border-primary/30">
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Your Host
                    </h3>
                    <p className="text-muted-foreground/80 leading-relaxed">
                      A passionate developer who has spent years navigating the
                      ever-changing landscape of technology stacks. With experience
                      across multiple languages, frameworks, and platforms, they
                      bring a balanced perspective to the eternal tech debates.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <Separator className="bg-primary/20" />

            <section className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </span>
                Subscribe
              </h2>
              <p className="text-muted-foreground/80 mb-8 leading-relaxed">
                Never miss an episode! Stack Wars is available on all major podcast
                platforms:
              </p>
              <div className="flex flex-wrap gap-4">
                {["Apple Podcasts", "Spotify", "YouTube", "RSS Feed"].map(
                  (platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="px-6 py-3 bg-secondary/50 text-secondary-foreground rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-primary/20 hover:border-primary/50 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                    >
                      {platform}
                    </a>
                  )
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
