
import React from "react";
import { ArrowDown, Code, Cpu, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypewriterText from "./TypewriterText";

const HeroSection = () => {
  const introTexts = [
    "Hi, I'm Shenal",
    "Welcome to my portfolio",
    "Take a look around",
    "Feel free to reach out with ideas"
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-grid"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <TypewriterText
                  texts={introTexts}
                  typingSpeed={80}
                  deletingSpeed={40}
                  delayBetween={5000}
                  className="text-gradient"
                />
              </h1>
            </div>

            <p className="text-muted-foreground text-lg max-w-xl italic">
              “Innovation begins where legacy ends — and I love being at that edge.”
            </p>
          </div>
          <div className="md:col-span-5 space-y-6 relative hidden md:block">
            <div className="aspect-square relative glass-morphism rounded-full overflow-hidden animate-float">
              <div
                  className="absolute inset-4 bg-gradient-to-br from-primary/30 via-purple-500/20 to-blue-500/30 rounded-full flex items-center justify-center">
                <div className="w-full h-full p-8 flex items-center justify-center">
                  <Cpu className="w-full h-full text-primary/80"/>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -left-8 top-8 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      <a
          href="/#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown className="h-4 w-4 animate-bounce"/>
      </a>
    </section>
  );
};

export default HeroSection;
