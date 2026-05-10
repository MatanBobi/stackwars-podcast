import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { getPlatforms } from "@/lib/platforms";
import { site } from "@/lib/site";

export function Footer() {
  const platforms = getPlatforms();

  return (
    <footer className="relative border-t border-primary/20 bg-gradient-to-b from-background to-secondary/20">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="Stack Wars Podcast"
                width={40}
                height={40}
                className="rounded-md"
              />
              <span className="text-xl font-black tracking-[0.15em] text-primary logo-glow sw-title">
                STACK WARS
              </span>
            </Link>
            <p className="text-sm text-muted-foreground/85 max-w-xs leading-relaxed">
              {site.tagline}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
              קישורים
            </h3>
            <nav className="flex flex-col space-y-2.5">
              <Link
                href="/episodes"
                className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
              >
                כל הפרקים
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
              >
                אודות
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
              >
                צרו קשר
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
                dir="ltr"
              >
                {site.email}
              </a>
            </nav>
          </div>

          {platforms.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
                האזינו ב-
              </h3>
              <div className="flex flex-wrap gap-2">
                {platforms.map((p) => (
                  <a
                    key={p.key}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-primary/10"
                    aria-label={`האזינו ב-${p.label}`}
                    title={p.label}
                  >
                    <span className="block h-5 w-5">{p.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <Separator className="my-8 bg-primary/20" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60" dir="ltr">
            © {new Date().getFullYear()} Stack Wars Podcast. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60">
            נבנה באהבה, נפרס ב-Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
}
