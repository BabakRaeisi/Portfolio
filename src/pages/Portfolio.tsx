import React from 'react';
import { Link } from 'react-router-dom';

const TetrisInventory = () => {
  return (
      <main className="prose prose-invert max-w-3xl mx-auto py-12 font-mono">
          {/* 🔙 Return to site */}
          <div className="mb-4">
              <Link
                  to="/"
                  className="text-terminal-cyan underline hover:opacity-80 transition"
              >
                  ← Return to Home
              </Link>
          </div>

          <div className="h-8 bg-transparent"/>
          <h1 className="text-4xl font-bold text-terminal-green">
              Rebuilding My Portfolio: A Developer’s Deep Dive
          </h1>
          <p className="text-sm text-muted-foreground">Posted on: July 2025</p>

          <div className="h-8"/>

          <p>
              My original portfolio was a simple static site made with plain HTML and CSS. While functional,
              it lacked the flexibility and interactivity I wanted. This new version
              is a complete rebuild using <strong>React</strong>,{" "}
              <strong>Vite</strong>, and <strong>TailwindCSS</strong>, technologies I
              learned specifically for this project.
          </p>

          <div className="h-8 bg-transparent"/>
          <h2 className="text-2xl font-bold text-terminal-green">
              From Static to Dynamic
          </h2>
          <p>
              I componentized the entire site—every section, card, and button is now a
              reusable React component. This made it easy to update and scale while
              maintaining consistency across the interface.
          </p>
          <div className="h-8 bg-transparent"/>

          <h2 className="text-2xl font-bold text-terminal-green">
              Custom Design System with Tailwind
          </h2>
          <p>
              The site uses a customized Tailwind theme built with HSL color tokens
              for full terminal aesthetics—glow animations, neon colors, and smooth
              transitions. I also created a utility-based spacing and typography system
              for clean layout control.
          </p>
          <div className="h-8 bg-transparent"/>

          <h2 className="text-2xl font-bold text-terminal-green">
              Embedded Media Support
          </h2>
          <p>
              Projects can now display local videos, YouTube embeds, or screenshots,
              rendered conditionally based on type. The layout adapts for different
              aspect ratios while preserving clarity and responsiveness.
          </p>
          <div className="h-8 bg-transparent"/>

          <h2 className="text-2xl font-bold text-terminal-green">
              Interactive Terminal Interface
          </h2>
          <p>
              One standout feature is the interactive terminal—a floating, resizable
              window where visitors can type commands like <code>help</code>,{" "}
              <code>whoami</code>, and <code>siteinfo</code>. It supports fetch-based
              commands (e.g. latest GitHub commits) and mimics CLI behavior with
              history navigation, cursor blinking, and auto-scroll.
          </p>
          <div className="h-8 bg-transparent"/>

          <h2 className="text-2xl font-bold text-terminal-green">
              Client-side Routing with React Router
          </h2>
          <p>
              Blog posts and pages are rendered dynamically using React Router’s{" "}
              <code>:slug</code> route, allowing for modular navigation without page
              reloads. I also implemented graceful 404 handling for unmatched routes.
          </p>
          <div className="h-8 bg-transparent"/>

          <h2 className="text-2xl font-bold text-terminal-green">
              Built with Vite
          </h2>
          <p>
              Using Vite gave me near-instant hot reloads and a smooth dev experience.
              I also configured alias imports with <code>@</code> to keep paths clean,
              and set up plugin-free static file handling for lightweight deployment.
          </p>

          <div className="h-8"/>
          <h2 className="text-2xl font-bold text-terminal-green">In Summary</h2>
          <p>
              This portfolio isn’t just a container for my projects—it’s a reflection
              of how I think and build as a developer. From React and Tailwind to
              custom terminal interfaces and embed support, everything here was built
              from the ground up as a learning experience and professional platform.
          </p>

          <div className="h-8 bg-transparent"/>
          <h2 className="text-2xl font-bold text-terminal-green">Further Reading</h2>
          <p>
              You can <a className="text-terminal-cyan underline"
                         href="https://github.com/jacobvillard/jacobvillard.github.io"
                         target="_blank">view the source code on GitHub</a>.
          </p>

          <div className="h-8 bg-transparent"/>
          {/* 🔙 Return to site */}
          <div className="mb-4">
              <Link
                  to="/"
                  className="text-terminal-cyan underline hover:opacity-80 transition"
              >
                  ← Return to Home
              </Link>
          </div>
      </main>
  );
};

export default TetrisInventory;
