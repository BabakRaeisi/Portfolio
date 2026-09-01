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

          <h1 className="text-4xl font-bold text-terminal-green">Design of a social media app: Human Data Interaction</h1>
          <p className="text-sm text-muted-foreground">Posted on: June  18, 2024</p>

          <div className="h-8 bg-transparent"/>

          <p>
              I designed an app as a uni project, there’s not much to say but you’re welcome to check it out as I spent weeks on the document(its not as good as the pepsi logo redesign document).
          </p>



          
          <div className="h-8 bg-transparent"/>
          <h2 className="text-2xl font-bold text-terminal-green">Further Reading</h2>
          <p>
              You can download the  <a className="text-terminal-cyan underline ml-1"
                                                     href="/files/imager.pdf"
                                                     download="imager.pdf"
                                                     target="_blank" rel="noopener noreferrer">doc here</a>.
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
