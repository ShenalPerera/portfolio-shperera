
import React from "react";
import { Code, Database, Globe, Layout, PenTool, ServerCog, ChevronRight, Cpu, Network } from "lucide-react";

const SkillsSection = () => {
  const technicalSkills = [
    { name: "Frontend Development", description: "React, Next.js, Vue.js, HTML5, CSS3, Responsive Design" },
    { name: "Backend Development", description: "Node.js, Express, Django, RESTful APIs, GraphQL" },
    { name: "Database Management", description: "MongoDB, PostgreSQL, MySQL, Firebase, Redis" },
    { name: "System Architecture", description: "Microservices, Serverless, Cloud Architecture, System Design" },
    { name: "DevOps", description: "Docker, Kubernetes, CI/CD, AWS, Azure, GCP" },
    { name: "UI/UX Design", description: "Figma, Adobe XD, Wireframing, Prototyping, User Research" },
  ];

  const languages = [
    { name: "JavaScript/TypeScript", description: "React, Node.js, Express, Next.js" },
    { name: "Python", description: "Django, Flask, Data Analysis, Machine Learning" },
    { name: "C/C++", description: "Embedded Systems, Game Development, System Programming" },
    { name: "Java", description: "Spring Boot, Android Development, Enterprise Applications" },
    { name: "SQL", description: "Database Design, Query Optimization, Data Modeling" },
    { name: "HTML/CSS", description: "Semantic HTML, CSS3, SASS/SCSS, Tailwind, Bootstrap" },
  ];

  return (
    <section id="skills" className="py-16 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've cultivated a diverse set of technical skills throughout my career, allowing me to tackle various challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-6 space-y-8">
            <div className="glass-morphism p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" /> Core Technical Skills
              </h3>
              <div className="space-y-4">
                {technicalSkills.map((skill) => (
                  <div key={skill.name} className="p-3 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors">
                    <h4 className="text-base font-medium flex items-center">
                      <ChevronRight className="h-4 w-4 text-primary mr-2" />
                      {skill.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1 ml-6">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-6 space-y-8">
            <div className="glass-morphism p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <ServerCog className="h-5 w-5 text-primary" /> Programming Languages
              </h3>
              <div className="space-y-4">
                {languages.map((language) => (
                  <div key={language.name} className="p-3 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors">
                    <h4 className="text-base font-medium flex items-center">
                      <ChevronRight className="h-4 w-4 text-primary mr-2" />
                      {language.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1 ml-6">{language.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="glass-morphism p-6 rounded-lg text-center flex flex-col items-center hover:bg-secondary/10 transition-colors">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Globe className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Web Development</h3>
            <p className="text-sm text-muted-foreground">
              Creating responsive, interactive web applications with modern frameworks.
            </p>
          </div>
          
          <div className="glass-morphism p-6 rounded-lg text-center flex flex-col items-center hover:bg-secondary/10 transition-colors">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Database className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Database Design</h3>
            <p className="text-sm text-muted-foreground">
              Designing efficient database schemas and optimizing queries for performance.
            </p>
          </div>
          
          <div className="glass-morphism p-6 rounded-lg text-center flex flex-col items-center hover:bg-secondary/10 transition-colors">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Layout className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">UI/UX Design</h3>
            <p className="text-sm text-muted-foreground">
              Creating intuitive user interfaces and pleasant user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
