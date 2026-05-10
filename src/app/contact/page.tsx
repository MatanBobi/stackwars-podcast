import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "צרו קשר",
  description:
    "יש רעיון לפרק? רוצים להתארח, או סתם להגיד שטעינו? כתבו לנו.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              דברו איתנו
            </h1>
            <p className="text-lg text-muted-foreground/90 max-w-2xl mx-auto">
              יש לכם נושא שאנחנו חייבים לריב עליו? רוצים להתארח? יש לכם דעה
              חזקה שאנחנו טועים? כל אלה — לכאן.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feedback form (Google Form) */}
            <Card className="md:col-span-2 border-primary/30">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">
                  הצעות לפרקים ופידבק
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-muted-foreground/90">
                  הדרך הכי מהירה להגיע אלינו: טופס הפידבק שלנו. שולחים, אנחנו
                  קוראים הכל, וחלק נכנס לפרק הבא.
                </p>
                <Button asChild size="lg" className="font-semibold">
                  <a
                    href={site.feedbackFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    פתחו את טופס הפידבק
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Email */}
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">אימייל</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground/85 text-sm">
                  לפניות ארוכות, שיתופי פעולה, או חברויות חדשות:
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium break-all"
                  dir="ltr"
                >
                  {site.email}
                </a>
              </CardContent>
            </Card>

            {/* Suggested topics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">רעיונות לפרקים</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground/85 mb-3 text-sm">
                  אם אין לכם רעיון מוכן, הנה כמה כיוונים שעובדים אצלנו טוב:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground/85">
                  {[
                    "X מול Y (כל שני כלים שאתם מתלבטים ביניהם)",
                    "טכנולוגיה שמרגיזה אתכם בעבודה",
                    "כלי שגילית ואי אפשר לחיות בלעדיו",
                    "טרנד שאתם בטוחים שיתפוצץ",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
