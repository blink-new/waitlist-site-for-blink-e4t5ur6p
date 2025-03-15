import { useState } from "react";
import { WaitlistForm } from "./waitlist-form";
import { WaitlistSuccess } from "./waitlist-success";

export function HeroSection() {
  const [waitlistPosition, setWaitlistPosition] = useState<number | null>(null);

  const handleFormSuccess = (position: number) => {
    setWaitlistPosition(position);
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-3xl -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full dot-pattern opacity-20 -z-10"></div>
      
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
            Join the waitlist for early access
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Build <span className="gradient-text">Beautiful</span> & <span className="gradient-text">Functional</span> Apps with AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Blink is the world's #1 AI fullstack engineer, helping you build websites, web apps, and mobile apps from start to finish.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          {waitlistPosition ? (
            <WaitlistSuccess position={waitlistPosition} />
          ) : (
            <div className="waitlist-card p-6 shadow-lg">
              <WaitlistForm onSuccess={handleFormSuccess} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}