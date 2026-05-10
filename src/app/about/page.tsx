import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { getPlatforms } from "@/lib/platforms";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "אודות",
  description: site.longDescription,
};

const TOPICS = [
  "פרונטאנד מול באקאנד",
  "TUI מול GUI",
  "TypeScript מול Go",
  "AI בעבודה היומיומית",
  "כלי פיתוח חדשים",
  "ארכיטקטורה ותשתיות",
  "מסדי נתונים",
  "טרנדים שמרגיזים אותנו",
];

export default function AboutPage() {
  const platforms = getPlatforms();

  return (
    <div className="min-h-screen py-16 relative">
      <div className="absolute top-0 left-0 right-0 h-80 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto">
          <header className="mb-14 animate-slide-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-gradient-to-l from-primary to-transparent" />
              <span className="text-sm text-primary font-semibold uppercase tracking-wider">
                אודות
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold gradient-text-animated mb-6">
              מה זה Stack Wars?
            </h1>
            <p className="text-xl text-muted-foreground/90 leading-relaxed">
              {site.tagline}
            </p>
          </header>

          <div className="space-y-12">
            <section
              className="animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="space-y-5 text-muted-foreground/90 leading-relaxed text-base lg:text-lg">
                <p>{site.longDescription}</p>
                <p>
                  כל פרק מתחיל מדיון אמיתי בעבודה — מי כותב טסטים, האם צריך
                  ORM, למה הטרמינל מנצח את ה-IDE — והופך לפרק שלם של ויכוחים,
                  דוגמאות מהשטח, ואחת ולתמיד אנחנו מסכימים שאין מנצח.
                </p>
              </div>
            </section>

            <Separator className="bg-primary/20" />

            {/* Hosts */}
            <section
              className="animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-8">
                המנחים
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {site.hosts.map((host) => (
                  <div
                    key={host.name}
                    className="bg-gradient-to-br from-card via-card to-secondary/20 border border-primary/20 rounded-2xl p-6 glow-border"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/30 text-primary text-xl font-black">
                        {host.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">
                          {host.name}
                        </h3>
                        <p className="text-xs text-primary uppercase tracking-wider">
                          {host.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground/85 leading-relaxed">
                      {host.bio}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <Separator className="bg-primary/20" />

            <section
              className="animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                על מה אנחנו רבים
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TOPICS.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-center gap-3 text-muted-foreground/85 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform" />
                    {topic}
                  </li>
                ))}
              </ul>
            </section>

            {platforms.length > 0 && (
              <>
                <Separator className="bg-primary/20" />
                <section
                  className="animate-slide-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    איפה להאזין
                  </h2>
                  <p className="text-muted-foreground/85 mb-6">
                    Stack Wars זמין בפלטפורמות הבאות:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {platforms.map((p) => (
                      <a
                        key={p.key}
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-secondary/50 text-secondary-foreground rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-primary/20 hover:border-primary/50 hover:scale-105"
                      >
                        {p.label}
                      </a>
                    ))}
                  </div>
                </section>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
