import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const posts = [
    {
      id: 1,
      title: "Building Pandora: A Cognitive Training Game",
      excerpt:
        "A look at how I built Pandora in Unity, including three cognitive mini-games, progressive difficulty, session tracking, and backend analytics.",
      date: "2026-09-01",
      readTime: "6 min read",
      tags: ["Unity", "C#", "ASP.NET Core", "Game Development"],
      featured: true,
      link: "/blog/Pandora",
    },
    {
      id: 2,
      title: "Building HopHovac: Grid Systems, AI and Multiplayer",
      excerpt:
        "A breakdown of HopHovac's grid-based territory system, movement architecture, AI opponents, pathfinding, pickups, and multiplayer gameplay.",
      date: "2026-09-01",
      readTime: "6 min read",
      tags: ["Unity", "C#", "AI", "Pathfinding", "Multiplayer"],
      featured: true,
      link: "/blog/HopHovac",
    },
    {
      id: 3,
      title: "Building MicroBooker: A Distributed Reservation System",
      excerpt:
        "How I built a restaurant reservation system using ASP.NET Core, Redis, Kafka, MongoDB, React, Docker, and AWS.",
      date: "2026-09-01",
      readTime: "8 min read",
      tags: ["ASP.NET Core", "Redis", "Kafka", "AWS", "Docker"],
      featured: true,
      link: "/blog/MicroBooker",
    },
    {
      id: 4,
      title: "Recreating The Hatch from LOST in Unreal Engine",
      excerpt:
        "The development process behind my recreation of the Swan Station from LOST, from reference gathering and modeling to texturing, lighting, and environmental storytelling.",
      date: "2026-09-01",
      readTime: "7 min read",
      tags: ["Unreal Engine", "Maya", "Substance Painter", "Environment Art"],
      featured: true,
      link: "/blog/Lost",
    },
  ];

  const togglePost = (postId: number) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  const visiblePosts = showAll ? posts : posts.slice(0, 3);

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
            <span className="text-terminal-amber glow-text">Dev Logs</span>
          </h2>
          <p className="text-xl text-muted-foreground font-mono">
            <span className="text-terminal-green">$</span> cat
            ~/thoughts/technical-posts.md
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {visiblePosts.map((post) => (
            <Card key={post.id} className="project-card">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="font-mono text-xl text-terminal-cyan">
                        {post.title}
                      </CardTitle>
                      {post.featured && (
                        <Badge className="bg-terminal-green text-black font-mono text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="font-mono">
                      {post.excerpt}
                    </CardDescription>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-mono">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="font-mono text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent>
                <div className="mt-4 flex justify-between items-center">
                  <Button
                    variant="ghost"
                    onClick={() => window.open(post.link, "_Self")}
                    className="font-mono text-terminal-green hover:text-terminal-green/80"
                  >
                    {expandedPost === post.id ? "Collapse" : "Read More"}
                    <ArrowRight
                      className={`ml-2 h-4 w-4 transition-transform ${
                        expandedPost === post.id ? "rotate-90" : ""
                      }`}
                    />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            className="border-terminal-amber text-terminal-amber hover:bg-terminal-amber hover:text-black font-mono"
          >
            {showAll ? "View Less" : "View All Posts"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
