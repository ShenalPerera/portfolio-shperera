
import React, {useState, useEffect} from "react";
import {Link, Location, useLocation} from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Github, Linkedin, Mail , Award} from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();


  const handleScrollSection = (section:string) =>{
    const sectionId = section.replace("/#","");
    document.getElementById(sectionId).scrollIntoView({behavior: "smooth"});
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    if (location.hash){
      handleScrollSection(location.hash.split("#")[1]);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);



  const menuItems = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Skills", href: "/#skills" },
    { name: "Blog", href: "/blog" },
    { name: "Certifications", href: "/certifications", icon: <Award size={16} className="ml-1" /> },
    { name: "Contact", href: "/#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: <Github size={18} />, href: "https://github.com/ShenalPerera" },
    { name: "LinkedIn", icon: <Linkedin size={18} />, href: "www.linkedin.com/in/shperera" },
    { name: "Email", icon: <Mail size={18} />, href: "mailto:shenalperera00@gmail.com" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border py-2 shadow-sm"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <div className="flex space-x-6">
              {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium flex items-center"
                  >
                    {item.name}
                    {item.icon}
                  </Link>
              ))}
            </div>
            <div className="flex space-x-3 ml-4 border-l pl-4 border-border/50">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/60 hover:text-primary transition-colors"
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-card shadow-md rounded-md border border-border">
            <div className="flex flex-col space-y-4 px-4">
              {menuItems.map((item) => (
                item.href.startsWith("/#") ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors flex items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground hover:text-primary transition-colors flex items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                    {item.icon}
                  </Link>
                )
              ))}
              <div className="flex space-x-4 pt-2 border-t border-border/30">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors"
                    aria-label={link.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
