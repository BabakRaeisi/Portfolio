import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const [filteredHeadings, setFilteredHeadings] = useState<
    { id: string; text: string }[]
  >([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(e.target.value);

    if (!query) {
      setFilteredHeadings([]);
      return;
    }

    const headings = Array.from(
      document.querySelectorAll(
        "section[id] h1, section[id] h2, section[id] h3",
      ),
    ) as HTMLElement[];

    const matches = headings
      .map((h) => {
        const parentSection = h.closest("section[id]");
        const id = parentSection?.id || "";
        return { id, text: h.innerText };
      })
      .filter(
        (item) =>
          item.id &&
          item.text.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    setFilteredHeadings(matches);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-mono text-xl font-bold text-terminal-green glow-text">
            {"<BabakRaeisi/Dev>"}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-terminal-green transition-colors duration-200 font-mono"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search the site..."
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const q = searchQuery.toLowerCase();

                    // Check for local heading matches
                    const headingMatch = document.querySelector(`[id*="${q}"]`);
                    if (headingMatch) {
                      headingMatch.scrollIntoView({ behavior: "smooth" });
                      return;
                    }
                  }
                }}
                className="pl-10 w-64 bg-muted/50 border-primary/30 focus:border-primary font-mono"
              />
              {searchQuery && filteredHeadings.length > 0 && (
                <div className="absolute left-0 right-0 mt-1 bg-muted border border-primary/20 rounded-md shadow-lg z-50 max-h-64 overflow-y-auto">
                  {filteredHeadings.map((heading) => (
                    <button
                      key={heading.id}
                      onClick={() => {
                        const target = document.getElementById(heading.id);
                        if (target) {
                          target.scrollIntoView({ behavior: "smooth" });
                          setSearchQuery("");
                          setFilteredHeadings([]);
                        }
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-primary/10 font-mono text-sm text-foreground"
                    >
                      {heading.text}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-primary/20">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-terminal-green transition-colors duration-200 font-mono"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="relative mt-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search headings..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="pl-10 w-64 bg-muted/50 border-primary/30 focus:border-primary font-mono"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
