import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "אודות",
  description:
    "למדו על Stack Wars פודקאסט - התוכנית שחוקרת את הקרבות בין טכנולוגיות, פריימוורקים, והמפתחים שמאמינים בהם.",
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
              <div className="w-12 h-[2px] bg-gradient-to-l from-primary to-transparent" />
              <span className="text-sm text-primary font-semibold uppercase tracking-wider">
                אודותינו
              </span>
            </div>
            <h1 className="text-5xl font-bold gradient-text-animated mb-6">
              אודות Stack Wars
            </h1>
            <p className="text-xl text-muted-foreground/90 leading-relaxed">
              איפה שקרבות הטכנולוגיה נלחמות במקלדות, לא בחרבות אור.
            </p>
          </header>

          {/* Main Content */}
          <div className="space-y-12">
            <section
              className="animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                </span>
                התוכנית
              </h2>
              <div className="space-y-5 text-muted-foreground/80 leading-relaxed">
                <p>
                  Stack Wars הוא פודקאסט המוקדש לחקירת הוויכוחים, הדיונים
                  וההחלטות האינסופיות שמפתחים מתמודדים איתם בבחירת הסטאקים
                  הטכנולוגיים שלהם. מפריימוורקי פרונטאנד ועד שפות בקאנד, מסדי
                  נתונים ופלטפורמות פריסה - אנחנו מכסים הכל.
                </p>
                <p>
                  כל פרק צולל לעומק לתוך היתרונות והחסרונות של טכנולוגיות שונות,
                  כולל חוויות מהעולם האמיתי, דעות מומחים, ולפעמים דיונים סוערים
                  על מה באמת הופך סטאק ל&quot;הכי טוב&quot; (ספוילר: זה תלוי).
                </p>
                <p>
                  בין אם אתם ארכיטקטים מנוסים שמקבלים החלטות ארגוניות או מפתחים
                  סקרנים לגבי הטרנדים האחרונים, Stack Wars מציע תובנות, בידור,
                  ואולי כמה צחוקים בדרך.
                </p>
              </div>
            </section>

            <Separator className="bg-primary/20" />

            <section
              className="animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </span>
                מה אנחנו מכסים
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "פריימוורקי פרונטאנד",
                  "שפות בקאנד",
                  "מלחמות מסדי נתונים",
                  "פלטפורמות ענן",
                  "כלי DevOps",
                  "עיצוב API",
                  "אסטרטגיות בדיקה",
                  "תבניות ארכיטקטורה",
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

            <section
              className="animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                המנחה/ת
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
                      המנחה/ת שלכם
                    </h3>
                    <p className="text-muted-foreground/80 leading-relaxed">
                      מפתח/ת נלהב/ת שבילה שנים בניווט בנוף המשתנה תמיד של סטאקים
                      טכנולוגיים. עם ניסיון במגוון שפות, פריימוורקים ופלטפורמות,
                      הם מביאים פרספקטיבה מאוזנת לדיונים הטכנולוגיים הנצחיים.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <Separator className="bg-primary/20" />

            <section
              className="animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-primary"
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
                </span>
                הירשמו
              </h2>
              <p className="text-muted-foreground/80 mb-8 leading-relaxed">
                אל תפספסו פרק! Stack Wars זמין בכל פלטפורמות הפודקאסטים
                המובילות:
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
                  ),
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
