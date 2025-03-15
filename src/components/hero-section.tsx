import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { cn } from "../lib/utils";

export function HeroSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [waitlistPosition, setWaitlistPosition] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm<{ email: string }>();
  
  const onSubmit = async (data: { email: string }) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Generate a random waitlist position between 100 and 500
    const position = Math.floor(Math.random() * 400) + 100;
    setWaitlistPosition(position);
    setIsSubmitted(true);
    setIsLoading(false);
    
    toast.success("You've been added to the waitlist!");
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="noise"></div>
      <div className="grid-pattern absolute inset-0 z-0"></div>
      
      <div className="container relative z-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border border-border/40 bg-background px-3 py-1 text-sm text-muted-foreground mb-6">
            <span className="mr-1 h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
            <span>Coming soon</span>
          </div>
          
          <h1 className="animate-fade-in text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            The world's #1 AI{" "}
            <span className="gradient-text">fullstack engineer</span>
          </h1>
          
          <p className="mt-6 max-w-2xl animate-slide-up text-lg text-muted-foreground delay-100">
            Blink helps you build beautiful and functional websites, web apps, and mobile apps from start to finish. Join the waitlist to get early access.
          </p>
          
          <div className="mt-10 w-full max-w-md animate-slide-up delay-200">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-2 sm:flex-row">
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={cn(
                      "h-12 w-full rounded-md border bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                      errors.email ? "border-destructive" : "border-input"
                    )}
                    {...register("email", { 
                      required: "Email is required", 
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      Join Waitlist
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="rounded-md border border-border bg-card p-6 text-card-foreground shadow-sm">
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">You're on the list!</h3>
                  <p className="text-sm text-muted-foreground">
                    You're #{waitlistPosition} on the waitlist. Share to move up!
                  </p>
                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        toast.success("Link copied to clipboard!");
                      }}
                      className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      Copy Link
                    </button>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        "I just joined the waitlist for Blink - The world's #1 AI fullstack engineer. Join me!"
                      )}&url=${encodeURIComponent(window.location.href)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      Share on Twitter
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}