
import React from "react";
import {Calendar, Briefcase, FileText, Tag} from "lucide-react";
import { Button } from "@/components/ui/button";
import {Badge} from "@/components/ui/badge.tsx";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer",
      company: "ISA",
      period: "2024 - Present",
      description: "Responsible for leading the modernization of critical systems by migrating legacy applications to modern architectures, improving maintainability and performance. Focused on enhancing communication between services using gRPC, and ensuring scalability through the design of multi-tenant solutions that allow for customization while maintaining data isolation for different clients.",
      technologies: ["Java", "React", "gRPC", "Kafka"]
    },
    {
      id: 2,
      title: "Intern Software Engineer",
      company: "Avtra",
      period: "Dec 2022 - May 2023",
      description: "Worked on a flight management system during the intern program, then joined the team responsible for managing airline operations. Focused on processing airline messages according to IATA standards and developing flight schedules based on those messages",
      technologies: ["Java", "Angular"]
    },
  ];

  const handleDownloadCV = () => {
    // This would point to your actual CV file
    window.open("/cv.pdf", "_blank");
  };

  return (
    <section id="experience" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 primary-gradient">
            Experience
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl">
            My professional journey in the field of Computer Engineering.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline center line */}
          <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/30 via-primary/50 to-primary/30"></div>
          
          {/* Experience items */}
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`mb-12 relative flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-1/2 flex justify-center md:justify-end md:pr-8 pb-8 md:pb-0">
                <div className={`w-full md:max-w-md ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                  <div
                      className="bg-secondary/20 p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-md hover:shadow-primary/10 hover:translate-y-[-2px] group">
                    <h3 className="flex items-center gap-2 text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      <Briefcase className="h-5 w-5 text-primary"/>
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground mb-2 flex items-center gap-2">
                      <Calendar className="h-4 w-4"/>
                      {exp.period}
                    </p>
                    <h4 className="font-semibold mb-2 group-hover:text-primary/90 transition-colors">{exp.company}</h4>
                    <p className="text-muted-foreground">{exp.description}</p>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Tag className="h-4 w-4 text-primary"/>
                        <span className="text-sm font-medium">Technologies</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline"
                                   className="bg-primary/10 text-primary border-primary/20">
                              {tech}
                            </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline dot */}
              <div
                  className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 top-6 flex items-center justify-center">
                <div
                    className="w-3 h-3 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors z-10"></div>
                <div className="absolute w-5 h-5 rounded-full bg-primary/20 animate-pulse"></div>
              </div>
            </div>

          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
              variant="outline"
              className="border-primary/50 hover:bg-primary/20 transition-all duration-300 flex items-center gap-2"
            onClick={handleDownloadCV}
          >
            <FileText className="h-4 w-4" />
            <span>Download CV</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
