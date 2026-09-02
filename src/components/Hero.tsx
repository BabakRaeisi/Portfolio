import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Download,
  Mail,
  Github,
  Linkedin,
  ArrowDown,
  Palette,
} from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const fullText = "Hello, this is Babak :)";

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
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-terminal-green rounded-full animate-float" />

      <div
        className="absolute top-40 right-20 w-3 h-3 bg-terminal-cyan rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div
        className="absolute bottom-40 left-20 w-2 h-2 bg-terminal-pink rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Typewriter */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold mb-6">
            <span className="text-terminal-green glow-text">{displayText}</span>

            <span className="border-r-2 border-terminal-green animate-blink ml-1" />
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono">
            Building software, backend systems, and interactive experiences
          </p>

          {/* Skills */}
          <div className="text-lg md:text-xl text-foreground/80 mb-12">
            <p className="font-mono leading-relaxed">
              <span className="text-terminal-cyan">$</span> specializes_in: [
              <span className="text-terminal-amber">"C#"</span>,{" "}
              <span className="text-terminal-amber">".NET"</span>,{" "}
              <span className="text-terminal-amber">"Backend"</span>,{" "}
              <span className="text-terminal-amber">"Unity"</span>,{" "}
              <span className="text-terminal-amber">"Interactive 3D"</span>]
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {/* Contact */}
            <a href="#contact" className="inline-block">
              <Button
                size="lg"
                className="flex items-center gap-2 bg-terminal-green hover:bg-terminal-green/80 text-black font-mono font-bold px-8 py-3 animate-glow"
              >
                <Mail className="h-5 w-5" />
                Contact Me
              </Button>
            </a>

            {/* Resume */}
            <a
              href="/resume.pdf"
              download
              className="inline-block"
              aria-label="Download Babak Raeisi's resume"
            >
              <Button
                size="lg"
                variant="outline"
                className="flex items-center gap-2 border-terminal-cyan text-terminal-cyan hover:bg-terminal-cyan hover:text-black font-mono font-bold px-8 py-3"
              >
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/BabakRaeisi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Babak Raeisi on GitHub"
              className="text-muted-foreground hover:text-terminal-green transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/babakraeisi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Babak Raeisi on LinkedIn"
              className="text-muted-foreground hover:text-terminal-cyan transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>

            <a
              href="https://artstation.com/b4k"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Babak Raeisi on ArtStation"
              className="text-muted-foreground hover:text-terminal-amber transition-colors duration-200"
            >
              <Palette className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <a href="#projects" aria-label="Scroll to projects">
            <div className="animate-bounce">
              <ArrowDown className="h-6 w-6 text-terminal-green mx-auto" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
