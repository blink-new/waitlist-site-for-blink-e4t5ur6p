import { Github } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="py-6 border-b border-border sticky top-0 bg-background/80 backdrop-blur-sm z-10">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-accent"></div>
          <span className="font-bold text-xl">Blink</span>
        </div>
        
        <nav>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => window.open("https://github.com/getblink", "_blank")}
            className="hover:bg-secondary/80"
          >
            <Github className="h-5 w-5 mr-2" />
            GitHub
          </Button>
        </nav>
      </div>
    </header>
  );
}