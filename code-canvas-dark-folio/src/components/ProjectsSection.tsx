
import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "The Smart Pet Feeder",
      description: "Smart Pet Feeder is a product that helps you to take care of your pets. It will help you build a better relationship with your pet even if you are not in the home.",
      tags: ["React", "React-Native", "Node Js", "MQTT","MongoDB","AWS"],
      image: "https://github.com/ShenalPerera/e17-3yp-Smart-Pet-Feeder/blob/main/ProjectPage/public/static/media/home.9bfd6883.jpg?raw=true",
      demoUrl: "https://cepdnaclk.github.io/e17-3yp-Smart-Pet-Feeder/",
      repoUrl: "https://github.com/ShenalPerera/e17-3yp-Smart-Pet-Feeder.git",
    },

  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/95"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 primary-gradient inline-block">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            A selection of my notable engineering work and technical projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-secondary/40 border-border/50 hover:border-primary/50 overflow-hidden transition-all duration-300 hover:translate-y-[-5px]">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-secondary text-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/90 hover:bg-primary/10 p-0">
                  <a href={project.demoUrl} className="flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                    Live Demo <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/90 hover:bg-primary/10 p-0">
                  <a href={project.repoUrl} className="flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" /> Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
