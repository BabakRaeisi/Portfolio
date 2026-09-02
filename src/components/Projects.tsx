import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Pandora",
      description:
        "A Unity-based cognitive training game with multiple mini-games and an ASP.NET Core backend for player sessions, progress, and analytics.",
      mediaType: "video",
      mediaUrl: "https://www.youtube.com/embed/b5O7EAq5_c4",
      tags: ["Unity", "C#", "ASP.NET Core", "PostgreSQL"],
      category: "game-dev",
      featured: true,
      blog: "/blog/Pandora",
      code: "https://github.com/BabakRaeisi/Pandora",
      demo: "https://babakraeisi.itch.io/YOUR-PANDORA-PAGE",
    },
    {
      id: 2,
      title: "HopHovac",
      description:
        "A 3D Unity arena game with grid-based territory control, AI opponents, pathfinding, pickups, and multiplayer gameplay.",
      mediaType: "video",
      mediaUrl: "https://www.youtube.com/embed/rcxuEdDlwiY",
      tags: ["Unity", "C#", "AI", "Pathfinding"],
      category: "game-dev",
      featured: true,
      blog: "/blog/HopHovac",
      code: "https://github.com/BabakRaeisi/HopHovacShowcase",
      demo: "https://babakraeisi.itch.io/hophovac",
    },
    {
      id: 3,
      title: "MicroBooker",
      description:
        "A distributed restaurant reservation system with authentication, concurrency control, event-driven processing, caching, and AWS deployment.",
      mediaType: "image",
      mediaUrl: "/images/microbooker.png",
      tags: ["ASP.NET Core", "C#", "React", "AWS", "Docker"],
      category: "backend",
      featured: true,
      blog: "/blog/MicroBooker",
      code: "https://github.com/BabakRaeisi/MicroBooker",
      demo: "https://microbooker.babakraeisi.com",
    },
    {
      id: 4,
      title: "The Hatch — LOST Environment",
      description:
        "A real-time recreation of the Swan Station from LOST, modeled in Maya, textured in Substance 3D Painter, and assembled and lit in Unreal Engine.",
      mediaType: "video",
      mediaUrl: "https://www.youtube.com/embed/y_K-mmoKP00",
      tags: [
        "Unreal Engine",
        "Maya",
        "Substance 3D Painter",
        "Environment Art",
      ],
      category: "3d",
      featured: true,
      blog: "/blog/Lost",
    },
  ];

  const categories = [
    { value: "all", label: "All" },
    { value: "game-dev", label: "Game Dev" },
    { value: "backend", label: "Backend" },
    { value: "3d", label: "3D / Art" },
  ];

  const visibleProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-[450px] h-[450px] rounded-full bg-terminal-green/5 blur-[130px]" />

        <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full bg-terminal-pink/5 blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-px bg-terminal-green" />

                <span className="font-mono text-sm text-terminal-green">
                  Selected Work
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Featured{" "}
                <span className="bg-gradient-to-r from-terminal-green via-terminal-cyan to-terminal-pink bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>

              <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">
                A selection of software, game development, backend, and
                interactive 3D work.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => setFilter(category.value)}
                  className={`px-4 py-2 rounded-lg border font-mono text-sm transition-all duration-200 ${
                    filter === category.value
                      ? "border-terminal-green/50 bg-terminal-green/10 text-terminal-green"
                      : "border-border bg-card/40 text-muted-foreground hover:text-foreground hover:border-border/80 hover:bg-card"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {visibleProjects.map((project) => (
              <article
                key={project.id}
                className="project-card group rounded-2xl overflow-hidden"
              >
                {/* Media */}
                <div className="relative aspect-video overflow-hidden bg-background">
                  {project.mediaType === "video" ? (
                    <iframe
                      src={project.mediaUrl}
                      title={project.title}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <img
                      src={project.mediaUrl}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  )}

                  {/* Gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card/90 to-transparent pointer-events-none" />

                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full border border-terminal-green/20 bg-background/80 backdrop-blur-md">
                      <span className="font-mono text-xs text-terminal-green">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 md:p-7">
                  <div className="flex items-start justify-between gap-6 mb-4">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-terminal-cyan mb-2">
                        {project.category === "game-dev"
                          ? "Game Development"
                          : project.category === "backend"
                            ? "Backend Engineering"
                            : "Interactive 3D"}
                      </p>

                      <h3 className="text-2xl font-semibold text-foreground group-hover:text-terminal-green transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <Link
                      to={project.blog}
                      aria-label={`Read about ${project.title}`}
                      className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg border border-border text-muted-foreground hover:text-terminal-green hover:border-terminal-green/40 hover:bg-terminal-green/5 transition-all"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-7">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-secondary/70 border border-border/60 font-mono text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-border/60">
                    <Link
                      to={project.blog}
                      className="inline-flex items-center gap-2 text-sm font-mono text-terminal-green hover:text-terminal-cyan transition-colors"
                    >
                      View Case Study
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>

                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-mono text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-mono text-muted-foreground hover:text-terminal-cyan hover:bg-terminal-cyan/5 transition-all"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {visibleProjects.length === 0 && (
            <div className="text-center py-20 text-muted-foreground font-mono">
              No projects found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
