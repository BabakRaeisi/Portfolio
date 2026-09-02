import { useEffect, useState } from "react";
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
    if (currentIndex >= fullText.length) return;

    const timeout = setTimeout(() => {
      setDisplayText((prev) => prev + fullText[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, 85);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const skills = [
    "C#",
    ".NET",
    "ASP.NET Core",
    "Unity",
    "AWS",
    "Interactive 3D",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-terminal-green/10 blur-[120px]" />
        <div className="absolute top-32 -right-40 w-[500px] h-[500px] rounded-full bg-terminal-pink/10 blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-terminal-cyan/5 blur-[130px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.025]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center max-w-6xl mx-auto">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full border border-terminal-green/20 bg-terminal-green/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
              <span className="text-sm font-mono text-terminal-green">
                Software Engineer
              </span>
            </div>

            <h1 className="font-mono font-bold tracking-tight mb-6 min-h-[74px] md:min-h-[96px]">
              <span className="block text-4xl md:text-6xl lg:text-7xl leading-tight">
                <span className="bg-gradient-to-r from-terminal-green via-terminal-cyan to-terminal-pink bg-clip-text text-transparent glow-text">
                  {displayText}
                </span>
                <span className="border-r-2 border-terminal-green animate-blink ml-1" />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              I build backend systems, interactive applications, and real-time
              experiences using{" "}
              <span className="text-foreground font-medium">C#/.NET</span>,{" "}
              <span className="text-foreground font-medium">Unity</span>, and
              modern web and cloud technologies.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-10">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-2 rounded-lg border border-border bg-card/60 backdrop-blur-sm text-sm font-mono text-muted-foreground hover:text-terminal-cyan hover:border-terminal-cyan/40 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10">
              <a href="#projects">
                <Button
                  size="lg"
                  className="w-full sm:w-auto min-w-[170px] bg-terminal-green hover:bg-terminal-green/90 text-black font-mono font-bold shadow-[0_0_25px_rgba(56,189,248,0.15)]"
                >
                  View Projects
                  <ArrowDown className="h-4 w-4 ml-2" />
                </Button>
              </a>

              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download
                aria-label="Download Babak Raeisi's resume"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto min-w-[170px] border-terminal-cyan/50 text-terminal-cyan hover:bg-terminal-cyan hover:text-black font-mono"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Resume
                </Button>
              </a>

              <a href="#contact">
                <Button
                  size="lg"
                  variant="ghost"
                  className="w-full sm:w-auto font-mono text-muted-foreground hover:text-terminal-pink"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </Button>
              </a>
            </div>

            <div className="flex justify-center lg:justify-start gap-3">
              <a
                href="https://github.com/BabakRaeisi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Babak Raeisi on GitHub"
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-card/50 text-muted-foreground hover:text-terminal-green hover:border-terminal-green/40 transition-all duration-200"
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/babakraeisi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Babak Raeisi on LinkedIn"
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-card/50 text-muted-foreground hover:text-terminal-cyan hover:border-terminal-cyan/40 transition-all duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="https://artstation.com/b4k"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Babak Raeisi on ArtStation"
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-card/50 text-muted-foreground hover:text-terminal-pink hover:border-terminal-pink/40 transition-all duration-200"
              >
                <Palette className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative max-w-xl mx-auto w-full">
            <div className="absolute -inset-6 bg-gradient-to-r from-terminal-green/10 via-terminal-cyan/5 to-terminal-pink/10 blur-3xl rounded-3xl" />

            <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/75 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between px-5 py-4 border-b border-border/70 bg-background/40">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <span className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>

                <span className="text-xs text-muted-foreground font-mono">
                  babak.profile
                </span>
              </div>

              <div className="p-6 md:p-8 font-mono text-sm md:text-base">
                <div className="space-y-4">
                  <p>
                    <span className="text-terminal-pink">const</span>{" "}
                    <span className="text-terminal-cyan">developer</span>{" "}
                    <span className="text-muted-foreground">=</span>{" "}
                    <span className="text-foreground">{"{"}</span>
                  </p>

                  <div className="pl-5 md:pl-8 space-y-3">
                    <p>
                      <span className="text-terminal-green">name</span>
                      <span className="text-muted-foreground">:</span>{" "}
                      <span className="text-terminal-amber">"Babak Raeisi"</span>,
                    </p>

                    <p>
                      <span className="text-terminal-green">focus</span>
                      <span className="text-muted-foreground">:</span>{" "}
                      <span className="text-terminal-amber">
                        "Software Engineering"
                      </span>,
                    </p>

                    <div>
                      <p>
                        <span className="text-terminal-green">areas</span>
                        <span className="text-muted-foreground">:</span> [
                      </p>
                      <div className="pl-5 md:pl-8 space-y-1 mt-2">
                        <p className="text-terminal-amber">"Backend Systems",</p>
                        <p className="text-terminal-amber">
                          "Unity & Game Development",
                        </p>
                        <p className="text-terminal-amber">"Interactive 3D",</p>
                      </div>
                      <p>],</p>
                    </div>

                    <div>
                      <p>
                        <span className="text-terminal-green">stack</span>
                        <span className="text-muted-foreground">:</span> [
                      </p>
                      <div className="pl-5 md:pl-8 mt-2">
                        <p className="text-terminal-cyan">
                          "C#", ".NET", "Unity",
                        </p>
                        <p className="text-terminal-cyan">
                          "React", "Docker", "AWS"
                        </p>
                      </div>
                      <p>]</p>
                    </div>
                  </div>

                  <p className="text-foreground">{"};"}</p>

                  <div className="pt-5 border-t border-border/60">
                    <p className="text-muted-foreground">
                      <span className="text-terminal-green">$</span>{" "}
                      developer.build()
                    </p>
                    <p className="mt-2 text-terminal-cyan">
                      → turning ideas into working software_
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 md:-left-7 px-4 py-3 rounded-xl border border-terminal-pink/20 bg-background/90 backdrop-blur-lg shadow-xl">
              <p className="text-xs font-mono text-muted-foreground">
                Unity + .NET + 3D
              </p>
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-center mt-20">
          <a
            href="#projects"
            aria-label="Scroll to projects"
            className="text-muted-foreground hover:text-terminal-green transition-colors"
          >
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
