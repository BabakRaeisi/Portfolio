import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, Clock, FileCode2 } from "lucide-react";

const Blog = () => {
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
      link: "/blog/Pandora",
      category: "Game Development",
    },
    {
      id: 2,
      title: "Building HopHovac: Grid Systems, AI and Multiplayer",
      excerpt:
        "A breakdown of HopHovac's grid-based territory system, movement architecture, AI opponents, pathfinding, pickups, and multiplayer gameplay.",
      date: "2026-09-01",
      readTime: "6 min read",
      tags: ["Unity", "C#", "AI", "Pathfinding", "Multiplayer"],
      link: "/blog/HopHovac",
      category: "Game Development",
    },
    {
      id: 3,
      title: "Building MicroBooker: A Distributed Reservation System",
      excerpt:
        "How I built a restaurant reservation system using ASP.NET Core, Redis, Kafka, MongoDB, React, Docker, and AWS.",
      date: "2026-09-01",
      readTime: "8 min read",
      tags: ["ASP.NET Core", "Redis", "Kafka", "AWS", "Docker"],
      link: "/blog/MicroBooker",
      category: "Backend Engineering",
    },
    {
      id: 4,
      title: "Recreating The Hatch from LOST in Unreal Engine",
      excerpt:
        "The development process behind my recreation of the Swan Station from LOST, from reference gathering and modeling to texturing, lighting, and environmental storytelling.",
      date: "2026-09-01",
      readTime: "7 min read",
      tags: ["Unreal Engine", "Maya", "Substance Painter", "Environment Art"],
      link: "/blog/Lost",
      category: "Interactive 3D",
    },
  ];

  const visiblePosts = showAll ? posts : posts.slice(0, 3);

  return (
    <section id="blog" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-terminal-pink/5 blur-[150px]" />

        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-terminal-cyan/5 blur-[130px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-terminal-pink" />

              <span className="font-mono text-sm text-terminal-pink">
                Behind the Work
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Development{" "}
                  <span className="bg-gradient-to-r from-terminal-cyan to-terminal-pink bg-clip-text text-transparent">
                    Logs
                  </span>
                </h2>

                <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
                  Technical breakdowns of the systems, architecture, gameplay,
                  and design decisions behind my projects.
                </p>
              </div>

              <div className="hidden md:flex items-center gap-2 text-sm font-mono text-muted-foreground">
                <FileCode2 className="h-4 w-4 text-terminal-cyan" />
                {posts.length} case studies
              </div>
            </div>
          </div>

          {/* Posts */}
          <div className="grid gap-5">
            {visiblePosts.map((post, index) => (
              <Link
                key={post.id}
                to={post.link}
                className="group relative rounded-2xl border border-border/70 bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-terminal-cyan/35 hover:bg-card/70"
              >
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-terminal-green via-terminal-cyan to-terminal-pink opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="p-6 md:p-8">
                  <div className="grid md:grid-cols-[80px_1fr_auto] gap-5 md:gap-8 items-start">
                    {/* Number */}
                    <div className="font-mono text-sm text-muted-foreground">
                      <span className="text-terminal-cyan">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-border"> / </span>
                      {String(posts.length).padStart(2, "0")}
                    </div>

                    {/* Main content */}
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-terminal-pink mb-3">
                        {post.category}
                      </p>

                      <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-terminal-cyan transition-colors mb-3">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed max-w-3xl mb-5">
                        {post.excerpt}
                      </p>

                      {/* Metadata */}
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-5 text-xs font-mono text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>

                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md border border-border/60 bg-secondary/60 text-xs font-mono text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:flex">
                      <div className="flex items-center justify-center w-11 h-11 rounded-xl border border-border text-muted-foreground group-hover:text-terminal-cyan group-hover:border-terminal-cyan/40 group-hover:bg-terminal-cyan/5 transition-all duration-300">
                        <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Show all */}
          {posts.length > 3 && (
            <div className="flex justify-center mt-10">
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                className="px-5 py-2.5 rounded-xl border border-terminal-pink/30 bg-terminal-pink/5 text-terminal-pink font-mono text-sm hover:bg-terminal-pink/10 hover:border-terminal-pink/50 transition-all"
              >
                {showAll ? "Show Less" : `View All ${posts.length} Logs`}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
