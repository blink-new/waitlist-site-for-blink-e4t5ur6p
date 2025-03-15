import { ThemeToggle } from "./theme-toggle";
import { cn } from "../lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M12 5V3" />
            <path d="M18 12h2" />
            <path d="M12 21v-2" />
            <path d="M4 12H2" />
            <path d="M19.07 4.93l-1.41 1.41" />
            <path d="M15.66 15.66l1.41 1.41" />
            <path d="M6.34 6.34L4.93 4.93" />
            <path d="M8.34 15.66l-1.41 1.41" />
            <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
          </svg>
          <span className="text-lg font-semibold tracking-tight">Blink</span>
        </div>
        <nav className="flex items-center gap-6">
          <a
            href="#features"
            className={cn(
              "text-sm font-medium transition-colors hover:text-foreground/80",
              "text-foreground/60"
            )}
          >
            Features
          </a>
          <a
            href="#faq"
            className={cn(
              "text-sm font-medium transition-colors hover:text-foreground/80",
              "text-foreground/60"
            )}
          >
            FAQ
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}