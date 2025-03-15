import { cn } from "../lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/40 bg-background py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
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
          <span className="text-sm font-medium">Blink</span>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground">
            Terms
          </a>
          <a href="#" className="hover:text-foreground">
            Privacy
          </a>
          <a href="#" className="hover:text-foreground">
            Contact
          </a>
        </div>
        
        <div className="text-sm text-muted-foreground">
          © {currentYear} Blink. All rights reserved.
        </div>
      </div>
    </footer>
  );
}