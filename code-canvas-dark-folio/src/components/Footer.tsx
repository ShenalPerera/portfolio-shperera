
import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/30 border-t border-border py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Logo />
            <p className="text-muted-foreground text-sm mt-1">
              Professional Development Solutions
            </p>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link 
              to="/#home"
              className="text-foreground/80 hover:text-primary transition-colors text-sm"
            >
              Home
            </Link>
            <a 
              href="/#about" 
              className="text-foreground/80 hover:text-primary transition-colors text-sm"
            >
              About
            </a>
            <a 
              href="/#experience" 
              className="text-foreground/80 hover:text-primary transition-colors text-sm"
            >
              Experience
            </a>
            <a 
              href="/#projects" 
              className="text-foreground/80 hover:text-primary transition-colors text-sm"
            >
              Projects
            </a>
            <a 
              href="/#skills" 
              className="text-foreground/80 hover:text-primary transition-colors text-sm"
            >
              Skills
            </a>
            <Link 
              to="/blog" 
              className="text-foreground/80 hover:text-primary transition-colors text-sm"
            >
              Blog
            </Link>
            <a 
              href="/#contact" 
              className="text-foreground/80 hover:text-primary transition-colors text-sm"
            >
              Contact
            </a>
          </div>
          
          <div className="flex space-x-4">
            <a
              href="https://github.com"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-6 pt-6 text-center text-muted-foreground text-sm">
          <p className="flex items-center justify-center gap-1">
            © {currentYear}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
