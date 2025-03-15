import { Code, Layout, Sparkles, Zap } from "lucide-react";
import { cn } from "../lib/utils";

const features = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Code Generation",
    description:
      "Write and review code, debug issues, and implement features with expert guidance.",
  },
  {
    icon: <Layout className="h-6 w-6" />,
    title: "Beautiful UI Design",
    description:
      "Create stunning user interfaces with modern design principles and attention to detail.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Rapid Development",
    description:
      "Build projects from start to finish with speed and efficiency, without sacrificing quality.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Best Practices",
    description:
      "Follow industry standards and best practices for clean, maintainable, and scalable code.",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-20 md:py-32"
    >
      <div className="container relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Build something{" "}
            <span className="gradient-text">useful</span> and{" "}
            <span className="gradient-text">beautiful</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Blink helps you create exceptional digital experiences with powerful features
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-md has-glow",
                "animate-fade-in",
                index === 0 && "delay-100",
                index === 1 && "delay-200",
                index === 2 && "delay-300",
                index === 3 && "delay-400"
              )}
            >
              <div className="glow"></div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-medium">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}