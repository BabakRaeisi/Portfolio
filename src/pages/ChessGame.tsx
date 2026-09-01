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

          <h1 className="text-4xl font-bold text-terminal-green">An idea for a version of crazy chess</h1>
          <p className="text-sm text-muted-foreground">Posted on: September  17, 2025</p>

          <div className="h-8 bg-transparent"/>

          <p>
              This was an idea I had where you play chess with action cards, creating the prototype was fairly simple as I created card designs in ppt and then I played a game within the ppt. I share this idea with a friend and discussed the chance of certain cards that affect the game, increased strategy, building a formation of pawns to transform into something else and the issues with balancing the game. Whilst the game has not moved into the production the idea remains a unique and interesting one.rveys and expert interviews.
          </p>

          <div className="h-4 bg-transparent"/>

          <p>
              Below attached you will find a ppt containing the cards to play a game you need a random number generator between 2 and 12, keeping in mind some cards are only usable once.

          </p>


          
          <div className="h-8 bg-transparent"/>
          <h2 className="text-2xl font-bold text-terminal-green">Further Reading</h2>
          <p>
              You can download the  <a className="text-terminal-cyan underline ml-1"
                                                     href="/files/chess.pptm"
                                                     download="chess.pptm"
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
