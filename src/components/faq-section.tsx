import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "../lib/utils";

const faqs = [
  {
    question: "What is Blink?",
    answer: "Blink is the world's #1 AI fullstack engineer. It helps you build beautiful and functional websites, web apps, and mobile apps from start to finish."
  },
  {
    question: "How does the waitlist work?",
    answer: "Join our waitlist to get early access to Blink. The earlier you join, the sooner you'll get access. Share with friends to move up the waitlist faster!"
  },
  {
    question: "What can I build with Blink?",
    answer: "You can build websites, web applications, mobile apps, and more. Blink handles everything from frontend design to backend functionality."
  },
  {
    question: "Do I need coding experience to use Blink?",
    answer: "No! Blink is designed to be accessible to everyone, regardless of technical background. You can describe what you want to build, and Blink will help you create it."
  },
  {
    question: "Is Blink free to use?",
    answer: "Blink will offer both free and premium tiers. Join the waitlist to be the first to know about our pricing plans and early access opportunities."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 noise-bg"></div>
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Blink
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={cn(
                "waitlist-card overflow-hidden transition-all duration-200 border-secondary/50",
                openIndex === index ? "shadow-md" : ""
              )}
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                )}
              </button>
              <div 
                className={cn(
                  "px-6 overflow-hidden transition-all duration-200",
                  openIndex === index ? "pb-6 max-h-40" : "max-h-0"
                )}
              >
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}