import React from "react";
import { Cpu, Code, Server, Database, Shield, BookOpen, GraduationCap, Building, Calendar, MapPin } from "lucide-react";

const AboutSection = () => {
  const educationHistory = [
    {
      institution: "University of Peradeniya",
      degree: "B.Sc. Engineering specialized in Computer Engineering",
      duration: "2018 - 2023",
      location: "Peradeniya, Sri Lanka",
      description: ""
    },
  ];



  return (
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 primary-gradient inline-block">
              About Me
            </h2>
            <p className="text-muted-foreground text-lg">
              A passionate Computer Engineer with expertise in building innovative digital solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">My Journey</h3>
              <p className="text-muted-foreground">
                Graduated with a degree in Computer Engineering from the University of Peradeniya, I've built a strong foundation across both hardware and software disciplines. This broad technical background has shaped the way I approach problem-solving—balancing low-level system insight with high-level software design.
              </p>
              <p className="text-muted-foreground">
                Currently, I work as a Software Engineer at ISA, where I contribute to both backend and frontend development. My responsibilities include modernizing large-scale systems, integrating APIs, and enhancing system performance using technologies like Java, Spring Boot, and gRPC.
              </p>
              <p className="text-muted-foreground">
                I'm passionate about building scalable, efficient solutions and continuously improving my craft. I'm also exploring cloud technologies, contributing to open-source, and sharing knowledge through writing and mentorship.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Education</h3>
              <div className="space-y-6">
                {educationHistory.map((education, index) => (
                    <div
                        key={index}
                        className="relative p-6 rounded-lg border border-border/60 bg-secondary/10 hover:bg-secondary/20 transition-all duration-300 hover:border-primary/30"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="h-5 w-5 text-primary" />
                          <h4 className="font-semibold text-lg">{education.institution}</h4>
                        </div>
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {education.duration}
                    </span>
                      </div>
                      <p className="font-medium text-sm text-foreground mb-2">{education.degree}</p>
                      <div className="flex items-center gap-1 text-muted-foreground text-xs mb-3">
                        <MapPin className="h-3 w-3" /> {education.location}
                      </div>
                      <p className="text-sm text-muted-foreground">{education.description}</p>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default AboutSection;