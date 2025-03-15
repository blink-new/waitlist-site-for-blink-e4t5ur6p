import { Code, Sparkles, Zap } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="h-6 w-6 text-accent" />,
    title: "AI-Powered Development",
    description: "Build beautiful and functional websites, web apps, and mobile apps with AI assistance."
  },
  {
    icon: <Zap className="h-6 w-6 text-accent" />,
    title: "Lightning Fast",
    description: "Get your projects up and running in minutes, not days or weeks."
  },
  {
    icon: <Code className="h-6 w-6 text-accent" />,
    title: "Full-Stack Capabilities",
    description: "From frontend to backend, Blink handles it all with best practices and modern technologies."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 dot-pattern opacity-30 -z-10"></div>
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Blink?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Blink is the world's #1 AI fullstack engineer, helping you build beautiful and functional digital products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="waitlist-card p-8 space-y-4 animate-fade-in hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}