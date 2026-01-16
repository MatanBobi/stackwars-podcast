import Link from "next/link";
import { Separator } from "@/components/ui/separator";

// Platform links - update these with your actual podcast platform URLs
const platformLinks = [
  {
    name: "Apple Podcasts",
    url: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
        <path d="M12.001 2a10 10 0 0 0-10 10 9.93 9.93 0 0 0 2.54 6.65A10.06 10.06 0 0 0 8.998 22a10.06 10.06 0 0 0 6.006 0 10.06 10.06 0 0 0 4.457-3.35A9.93 9.93 0 0 0 22 12a10 10 0 0 0-10-10zm0 2a8 8 0 0 1 8 8 7.95 7.95 0 0 1-2.032 5.32A8.05 8.05 0 0 1 14.4 20a8.05 8.05 0 0 1-4.8 0 8.05 8.05 0 0 1-3.569-2.68A7.95 7.95 0 0 1 4 12a8 8 0 0 1 8-8zm0 3a5 5 0 0 0-5 5c0 1.08.34 2.09.93 2.91a5.004 5.004 0 0 0 2.44 1.81v.01a3 3 0 0 0 3.26 0v-.01a5.004 5.004 0 0 0 2.44-1.81A4.97 4.97 0 0 0 17 12a5 5 0 0 0-5-5zm0 2a3 3 0 0 1 3 3 2.98 2.98 0 0 1-.56 1.74A3 3 0 0 1 12.001 15a3 3 0 0 1-2.44-.74A2.98 2.98 0 0 1 9 12a3 3 0 0 1 3-3zm0 6c.35 0 .69.04 1.02.12a1 1 0 0 1 .68 1.23 1 1 0 0 1-.55.6V19a1.15 1.15 0 0 1-2.3 0v-2.05a1 1 0 0 1-.55-.6 1 1 0 0 1 .68-1.23c.33-.08.67-.12 1.02-.12z" />
      </svg>
    ),
  },
  {
    name: "Spotify",
    url: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "RSS",
    url: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
        <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248S0 22.546 0 20.752s1.456-3.248 3.252-3.248 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z" />
      </svg>
    ),
  },
];

const socialLinks = [
  {
    name: "X (Twitter)",
    url: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-primary/20 bg-gradient-to-b from-background to-secondary/20">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-lg group-hover:bg-primary/30 transition-all duration-500" />
                <svg
                  viewBox="0 0 24 24"
                  className="relative w-6 h-6 text-primary"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-2xl font-black tracking-[0.15em] text-primary logo-glow sw-title">
                STACK WARS
              </span>
            </Link>
            <p className="text-sm text-muted-foreground/80 max-w-xs leading-relaxed">
              A podcast exploring the endless battles between technology stacks,
              frameworks, and the developers who love them.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold text-primary uppercase tracking-[0.2em]">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/episodes"
                className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 w-fit"
              >
                All Episodes
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 w-fit"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 w-fit"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Listen On */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold text-primary uppercase tracking-[0.2em]">
              Listen On
            </h3>
            <div className="flex flex-wrap gap-3">
              {platformLinks.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-primary/10"
                  aria-label={`Listen on ${platform.name}`}
                >
                  {platform.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-primary/20" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Stack Wars Podcast. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-primary/10"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
