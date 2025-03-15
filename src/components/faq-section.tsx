import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

const faqs = [
  {
    question: "What is Blink?",
    answer:
      "Blink is the world's #1 AI fullstack engineer that helps you build beautiful and functional websites, web apps, and mobile apps from start to finish.",
  },
  {
    question: "How does Blink work?",
    answer:
      "Blink uses advanced AI to understand your requirements and generate high-quality code. It can help with writing and reviewing code, designing and implementing features, debugging issues, and providing best practices.",
  },
  {
    question: "When will Blink be available?",
    answer:
      "Blink is currently in private beta. Join the waitlist to get early access when we launch.",
  },
  {
    question: "What technologies does Blink support?",
    answer:
      "Blink supports a wide range of modern web and mobile technologies, including React, Next.js, Tailwind CSS, Firebase, and more.",
  },
  {
    question: "Is Blink free to use?",
    answer:
      "Blink will offer both free and premium tiers. Join the waitlist to be notified about our pricing plans.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative overflow-hidden py-20 md:py-32">
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to know about Blink
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl divide-y divide-border">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between text-left"
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-muted-foreground transition-transform duration-200",
                    openIndex === index ? "rotate-180" : ""
                  )}
                />
              </button>
              <div
                className={cn(
                  "mt-2 overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96" : "max-h-0"
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