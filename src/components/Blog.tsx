
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  


  const posts = [
    {
      id: 1,
      title: 'Building a Tetris-Style Inventory System in Unity',
      excerpt: 'Tetris-style Unity inventory with item rotation and types. Built under strict deadlines to showcase system design skills.',
      date: '2024-06-18',
      readTime: '5 min read',
      tags: ['UniProj', 'C#', 'UI', 'Prototype'],
      featured: true,
      link:'blog/TetrisInventory'
    },
    {
      id: 2,
      title: 'Developing an FPS Demo',
      excerpt: 'A rapid FPS prototype built for my creative portfolio module, showcasing AI, animation, sound, events, raycasting, and a stylized visual design focused on enemy elimination.', 
      date: '2024-12-2',
      readTime: '2 min read',
      tags: ['UniProj', 'C#', 'Prototype'],
      featured: false, 
      link: 'blog/FpsDemo'
    },
    {
      id: 3,
      title: 'Hierarchical A* Pathfinding',
      excerpt: 'A  hierarchical A* system built for enemy AI, and optimized for performance.',
      content: 'After running production workloads on Kubernetes for several years, I\'ve learned valuable lessons about container orchestration. This post covers resource management, security considerations, and monitoring strategies...',
      date: '2024-06-17',
      readTime: '4 min read',
      tags: ['UniProj', 'AI', 'Prototype', 'Pathfinding'],
      featured: true,
      link: 'blog/AStar'
    },
    {
      id: 4,
      title: 'FYGP: Final Reflections and Development Overview',
      excerpt: 'A release steam game made for a uni module in which I was a lead programmer, implementing core mechanics and systems.',
      content: 'After running production workloads on Kubernetes for several years, I\'ve learned valuable lessons about container orchestration. This post covers resource management, security considerations, and monitoring strategies...',
      date: '2025-07-06',
      readTime: '5 min read',
      tags: ['C#', 'Steam', 'UniProj'],
      featured: false,
      link: 'blog/FallenVestige'
    },
    {
      id: 4,
      title: 'Accessibility Dissertation',
      excerpt: 'A dissertation exploring accessibility in game design, focusing on the player experience impacts',
      content: 'After running production workloads on Kubernetes for several years, I\'ve learned valuable lessons about container orchestration. This post covers resource management, security considerations, and monitoring strategies...',
      date: '2025-07-06',
      readTime: '2 min read',
      tags: ['Academic', 'Accessibility', 'UniProj'],
      featured: false,
      link: 'blog/AccessibilityDissertation'
    }
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
            <span className="text-terminal-green">$</span> cat ~/thoughts/technical-posts.md
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
                    <Badge key={tag} variant="secondary" className="font-mono text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent>
                {expandedPost === post.id && (
                  <div className="mt-4 p-4 bg-muted/30 rounded-lg border-l-4 border-terminal-green">
                    <p className="font-mono text-sm leading-relaxed">
                      {post.content}
                    </p>
                  </div>
                )}

                <div className="mt-4 flex justify-between items-center">
                  <Button
                    variant="ghost"
                    onClick={() => window.open(post.link, '_Self')}
                    className="font-mono text-terminal-green hover:text-terminal-green/80"
                  >
                    {expandedPost === post.id ? 'Collapse' : 'Read More'}
                    <ArrowRight className={`ml-2 h-4 w-4 transition-transform ${
                      expandedPost === post.id ? 'rotate-90' : ''
                    }`} />
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
            {showAll ? 'View Less' : 'View All Posts'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
