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
        
        {/* Logos section */}
        <div className="mt-24 text-center">
          <p className="text-sm text-muted-foreground mb-6">TRUSTED BY DEVELOPERS FROM</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            <div className="h-8">
              <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0C8.95 0 0 8.95 0 20C0 28.85 5.73 36.37 13.68 39C14.68 39.18 15 38.55 15 38C15 37.5 15 34.8 15 33.15C9.45 34.3 8.28 30.65 8.28 30.65C7.38 28.43 6.05 27.8 6.05 27.8C4.25 26.6 6.18 26.63 6.18 26.63C8.18 26.78 9.23 28.65 9.23 28.65C11 31.58 13.88 30.73 15.08 30.2C15.25 28.95 15.78 28.1 16.35 27.6C11.9 27.1 7.25 25.45 7.25 18.13C7.25 16.03 8.03 14.33 9.25 12.98C9.05 12.45 8.35 10.5 9.45 7.88C9.45 7.88 11.13 7.38 15 9.83C16.58 9.4 18.3 9.18 20 9.18C21.7 9.18 23.43 9.4 25 9.83C28.88 7.38 30.55 7.88 30.55 7.88C31.65 10.5 30.95 12.45 30.75 12.98C31.98 14.33 32.75 16.03 32.75 18.13C32.75 25.48 28.08 27.08 23.6 27.58C24.33 28.2 25 29.4 25 31.25C25 33.95 25 37.33 25 38C25 38.55 25.33 39.2 26.35 39C34.28 36.35 40 28.85 40 20C40 8.95 31.05 0 20 0Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="h-8">
              <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M59.6 0H0V32H59.6V0Z" fill="currentColor"/>
                <path d="M120 0H60.4V32H120V0Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="h-8">
              <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0C8.95 0 0 8.95 0 20C0 31.05 8.95 40 20 40C31.05 40 40 31.05 40 20C40 8.95 31.05 0 20 0ZM33.3 14.43L30.98 15.13C30.83 14.75 30.65 14.38 30.43 14.05C29.75 12.98 28.85 12.38 27.75 12.25C25.25 11.93 23.55 13.4 22.65 16.15C21.9 18.38 22.13 21.05 23.28 22.9C24.25 24.45 25.75 25.08 27.15 24.83C28.6 24.55 29.7 23.45 30.15 21.8H25.38V17.8H34.65V19.85C34.65 25.83 30.75 29.15 26.9 29.15C24.03 29.15 21.53 27.78 19.98 25.4C18.38 22.93 18.15 18.8 19.4 15.68C20.7 12.43 23.28 10.15 26.85 10.15C30.75 10.15 32.83 12.15 33.3 14.43Z" fill="currentColor"/>
                <path d="M80 10H60V30H80V10Z" fill="currentColor"/>
                <path d="M110 10H90V30H110V10Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}