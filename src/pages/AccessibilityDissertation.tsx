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

          <h1 className="text-4xl font-bold text-terminal-green">Designing for Everyone: Exploring Accessibility in
              Games</h1>
          <p className="text-sm text-muted-foreground">Posted on: July 06, 2025</p>

          <div className="h-8 bg-transparent"/>

          <p>
              In this dissertation, I explored how video games can be made more inclusive by focusing on
              accessibility—not just for disabled players, but for all kinds of users with diverse needs and
              preferences. The research focused on understanding how accessibility features impact engagement,
              usability, and player identity, drawing from both player surveys and expert interviews.
          </p>

          <div className="h-4 bg-transparent"/>

          <p>
              I found that while many developers are now aware of accessibility, it’s still treated as an optional
              feature rather than a core part of game design. Players with disabilities still face barriers like poor
              UI, lack of remapping, or inaccessible mechanics. But I also found evidence that when accessibility is
              prioritized—through things like customizable controls, colorblind modes, subtitles, and difficulty
              options—games become more enjoyable for everyone.

          </p>
          <div className="h-4 bg-transparent"/>
          <p>
              To support these findings, I created a prototype tool in Unity aimed at helping developers implement accessible design from the start. The project encouraged a shift from thinking of accessibility as a niche concern to seeing it as essential for good design.

          </p>
          <div className="h-4 bg-transparent"/>

          <p>
              Ultimately, accessibility isn’t just about compliance—it’s about making games better for all players.
          </p>


          
          <div className="h-8 bg-transparent"/>
          <h2 className="text-2xl font-bold text-terminal-green">Further Reading</h2>
          <p>
              You can download the  <a className="text-terminal-cyan underline ml-1"
                                                     href="/files/Villard_Jacob_Dissertation.pdf"
                                                     download="Villard_Jacob_Dissertation.pdf"
                                                     target="_blank" rel="noopener noreferrer">dissertation here</a>.
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
