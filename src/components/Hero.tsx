import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin, ArrowDown } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Hello, I'm a software engineer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-terminal-green rounded-full animate-float"></div>
      <div
        className="absolute top-40 right-20 w-3 h-3 bg-terminal-cyan rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-2 h-2 bg-terminal-pink rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Typewriter Effect */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold mb-6">
            <span className="text-terminal-green glow-text">{displayText}</span>
            <span className="border-r-2 border-terminal-green animate-blink ml-1"></span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono">
            Building elegant solutions with clean code
          </p>

          <div className="text-lg md:text-xl text-foreground/80 mb-12 space-y-2">
            <p className="font-mono">
              <span className="text-terminal-cyan">$</span> specializes_in: [
              <span className="text-terminal-amber">"back-end"</span>,
              <span className="text-terminal-amber">
                "interactive3D projects built with C#"
              </span>
              ,<span className="text-terminal-amber">".NET"</span>,{" "}
              <span className="text-terminal-amber">"Unity and Unreal"</span>, ]
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {/* Contact Me */}
            <a href="#contact" className="inline-block">
              <Button
                size="lg"
                className="flex items-center gap-2 bg-terminal-green hover:bg-terminal-green/80 text-black font-mono font-bold px-8 py-3 animate-glow"
              >
                <Mail className="h-5 w-5" />
                Contact Me
              </Button>
            </a>

            {/* Download CV */}
            <a href="/resume.pdf" download className="inline-block">
              <Button
                size="lg"
                variant="outline"
                className="flex items-center gap-2 border-terminal-cyan text-terminal-cyan hover:bg-terminal-cyan hover:text-black font-mono font-bold px-8 py-3"
              >
                <Download className="h-5 w-5" />
                Download CV
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/jacobvillard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-terminal-green transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/jacobvillard/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-terminal-cyan transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-terminal-green mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
