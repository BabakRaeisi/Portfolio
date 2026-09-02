import { useState } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Dev Logs", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glass background */}
      <div className="absolute inset-0 bg-background/75 backdrop-blur-xl border-b border-border/60" />

      <div className="relative container mx-auto px-4">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center gap-3 font-mono"
            aria-label="Go to home"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl border border-terminal-green/30 bg-terminal-green/10 transition-all duration-300 group-hover:border-terminal-green/60 group-hover:bg-terminal-green/15">
              <span className="text-terminal-green font-bold text-lg">B</span>
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-foreground leading-none">
                Babak Raeisi
              </p>

              <p className="text-xs text-muted-foreground mt-1">
                Software Engineer
              </p>
            </div>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-1 rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm p-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-lg text-sm font-mono text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop socials */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://github.com/BabakRaeisi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Babak Raeisi on GitHub"
              className="flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground hover:text-terminal-green hover:bg-terminal-green/10 transition-all duration-200"
            >
              <Github className="h-4 w-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/babakraeisi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Babak Raeisi on LinkedIn"
              className="flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground hover:text-terminal-cyan hover:bg-terminal-cyan/10 transition-all duration-200"
            >
              <Linkedin className="h-4 w-4" />
            </a>

            <a href="#contact">
              <Button
                size="sm"
                className="ml-2 bg-terminal-green hover:bg-terminal-green/90 text-black font-mono font-semibold"
              >
                Contact
              </Button>
            </a>
          </div>

          {/* Mobile button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-muted-foreground hover:text-terminal-green"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="rounded-2xl border border-border/70 bg-card/95 backdrop-blur-xl p-3 shadow-2xl">
              <nav className="flex flex-col">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-3 rounded-xl font-mono text-sm text-muted-foreground hover:text-terminal-green hover:bg-terminal-green/5 transition-all duration-200"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="h-px bg-border my-3" />

              <div className="flex items-center gap-2 px-2">
                <a
                  href="https://github.com/BabakRaeisi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Babak Raeisi on GitHub"
                  className="flex items-center justify-center w-10 h-10 rounded-lg border border-border text-muted-foreground hover:text-terminal-green hover:border-terminal-green/30 transition-all"
                >
                  <Github className="h-4 w-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/babakraeisi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Babak Raeisi on LinkedIn"
                  className="flex items-center justify-center w-10 h-10 rounded-lg border border-border text-muted-foreground hover:text-terminal-cyan hover:border-terminal-cyan/30 transition-all"
                >
                  <Linkedin className="h-4 w-4" />
                </a>

                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex-1"
                >
                  <Button className="w-full bg-terminal-green text-black hover:bg-terminal-green/90 font-mono">
                    Contact Me
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
