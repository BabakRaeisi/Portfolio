import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Pandora",
      description:
        "A cognitive training game built in Unity with multiple mini-games and an ASP.NET Core backend for session and player data.",
      mediaType: "image",
      mediaUrl: "/images/pandora.png",
      tags: ["Unity", "C#", "ASP.NET Core"],
      category: "game-dev",
      featured: true,
      blog: "/blog/Pandora",
      code: "https://github.com/BabakRaeisi/Pandora",
    },

    {
      id: 2,
      title: "HopHovac",
      description:
        "A 3D arena game featuring grid-based territory control, AI opponents, pathfinding, pickups, and multiplayer gameplay.",
      mediaType: "video",
      mediaUrl: "https://youtu.be/rcxuEdDlwiY",
      tags: ["Unity", "C#", "Multiplayer", "AI"],
      category: "game-dev",
      featured: true,
      blog: "/blog/HopHovac",
      code: "https://github.com/BabakRaeisi/HopHovacShowcase",
      demo: "https://babakraeisi.itch.io/hophovac",
    },
  ];

  const categories = ["all", "game-dev", "backend", "3d"];
  const visibleProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);
  const displayedProjects = showAll
    ? visibleProjects
    : visibleProjects.slice(0, 6);

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
            <span className="text-terminal-cyan glow-text">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-mono">
            <span className="text-terminal-green">$</span> ls -la ~/projects/
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={`font-mono capitalize ${
                filter === category
                  ? "bg-terminal-green text-black"
                  : "border-terminal-green/50 text-terminal-green hover:bg-terminal-green hover:text-black"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <Card
              key={project.id}
              className="project-card group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                {project.mediaType === "video" ? (
                  <iframe
                    src={project.mediaUrl}
                    title={project.title}
                    className="w-full h-48"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={project.mediaUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}

                {/* Always render badge in top-right */}
                {project.featured && (
                  <Badge className="absolute top-2 right-2 bg-terminal-amber text-black font-mono">
                    Featured
                  </Badge>
                )}
              </div>

              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-mono text-lg text-terminal-green">
                    {project.title}
                  </CardTitle>
                </div>
                <CardDescription className="font-mono text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="font-mono text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex justify-between">
                <div className="flex space-x-2">
                  {project.code && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="font-mono"
                      onClick={() => window.open(project.code, "_blank")}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  )}

                  {project.blog && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="font-mono"
                      onClick={() => window.open(project.blog, "_Self")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Blog
                    </Button>
                  )}
                </div>

                {project.demo && (
                  <Button
                    size="sm"
                    className="bg-terminal-cyan hover:bg-terminal-cyan/80 text-black font-mono"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            onClick={() => setShowAll((prev) => !prev)}
            className="border-terminal-pink text-terminal-pink hover:bg-terminal-pink hover:text-black font-mono"
          >
            {showAll ? "View Less" : "View All Projects"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
