import { Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-2">
              <div className="h-6 w-6 rounded-full bg-accent"></div>
              <span className="font-bold text-lg">Blink</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The world's #1 AI fullstack engineer
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://twitter.com/getblink" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a 
              href="https://github.com/getblink" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Blink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}