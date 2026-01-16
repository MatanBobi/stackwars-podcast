import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/episodes", label: "Episodes" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      {/* Top gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto flex h-18 items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center space-x-3 group">
          {/* Logo icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/40 transition-all duration-500" />
            <svg 
              viewBox="0 0 24 24" 
              className="relative w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300"
              fill="currentColor"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-2xl font-black tracking-[0.2em] text-primary logo-glow sw-title">
            STACK WARS
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link text-sm font-semibold text-muted-foreground transition-all duration-300 hover:text-primary uppercase tracking-wider"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <MobileNav />
      </div>
      
      {/* Bottom subtle gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </header>
  );
}

function MobileNav() {
  return (
    <div className="md:hidden">
      <input type="checkbox" id="mobile-menu" className="peer hidden" />
      <label
        htmlFor="mobile-menu"
        className="flex flex-col gap-1.5 cursor-pointer p-2 hover:bg-primary/10 rounded-lg transition-colors"
      >
        <span className="block w-6 h-0.5 bg-primary transition-all duration-300 peer-checked:rotate-45 peer-checked:translate-y-2"></span>
        <span className="block w-6 h-0.5 bg-primary transition-all duration-300 peer-checked:opacity-0"></span>
        <span className="block w-6 h-0.5 bg-primary transition-all duration-300 peer-checked:-rotate-45 peer-checked:-translate-y-2"></span>
      </label>
      <nav className="absolute left-0 right-0 top-[73px] bg-background/95 backdrop-blur-xl border-b border-border/50 p-6 hidden peer-checked:block shadow-2xl shadow-black/50">
        <div className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-semibold text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-2 uppercase tracking-wider"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
