import { useState } from "react";
import { toast } from "react-hot-toast";
import { Button } from "./ui/button";
import { Share2 } from "lucide-react";

interface WaitlistSuccessProps {
  position: number;
}

export function WaitlistSuccess({ position }: WaitlistSuccessProps) {
  const [isCopying, setIsCopying] = useState(false);

  const shareText = `I just joined the Blink waitlist! I'm #${position} in line. Join me at https://getblink.ai`;

  const handleShare = async () => {
    setIsCopying(true);
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Join me on the Blink waitlist!",
          text: shareText,
          url: "https://getblink.ai",
        });
        toast.success("Thanks for sharing!");
      } else {
        await navigator.clipboard.writeText(shareText);
        toast.success("Copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    } finally {
      setIsCopying(false);
    }
  };

  return (
    <div className="waitlist-card p-6 space-y-6 animate-fade-in">
      <div className="text-center space-y-2">
        <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold">You're on the list!</h3>
        <p className="text-muted-foreground">
          You're currently <span className="text-accent font-semibold">#{position}</span> in line
        </p>
      </div>
      
      <div className="p-4 bg-secondary/50 rounded-lg text-center">
        <p className="text-sm text-muted-foreground mb-3">
          Share with friends to move up the waitlist
        </p>
        <Button 
          onClick={handleShare} 
          variant="outline" 
          className="w-full"
          isLoading={isCopying}
        >
          <Share2 className="mr-2 h-4 w-4" />
          Share and Skip the Line
        </Button>
      </div>
      
      <div className="text-center text-sm text-muted-foreground">
        <p>We'll notify you when it's your turn to join Blink.</p>
      </div>
    </div>
  );
}