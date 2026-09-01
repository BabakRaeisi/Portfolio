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

          <h1 className="text-4xl font-bold text-terminal-green">Developing an FPS Demo</h1>
          <p className="text-sm text-muted-foreground">Posted on: December 2, 2024</p>

          <div className="h-8 bg-transparent"/>

          <p>
              This Unity-based project was developed as part of my Creative Portfolio module...
          </p>

          <div className="h-8 bg-transparent"/>
          <h2 className="text-2xl font-bold text-terminal-green">Project Features</h2>
          <ul>
              <li>🔁 Finite State Machine for enemy AI behavior</li>
              <li>🧠 NavMeshAgent pathfinding with patrol logic</li>
              <li>🎯 Raycasting-based shooting and damage</li>
              <li>🔊 Sound events and simple audio management</li>
              <li>🎬 Animation handling through events and triggers</li>
              <li>🕹️ Player movement, interaction, and trigger systems</li>
              <li>🔗 Singleton GameManager to track game state</li>
          </ul>

          <h2 className="text-2xl font-bold text-terminal-green mt-8 mb-2">What this project showcases?</h2>
          <img
              src="/images/fpsart.png"
              alt="Grid Position Calculation"
              className="rounded-lg shadow-md max-w-full"
          />


          <p className="mb-6">
              It showcases my ability to rapidly prototype and create a working demo for a game project to show core
              enemy-player mechanic/interaction that could be expanded upon for a fully-fledged game.
              It also showcases code written to industry-standards
          </p>
          <div className="h-8 bg-transparent"/>
          <h2 className="text-2xl font-bold text-terminal-green">What this project was about?</h2>
          <p>
              This project was about showcasing a project that looked good visually and allowed me to develop a
              completed all-rounded enemy system using navmeshes.
          </p>
          <div className="h-8 bg-transparent"/>

          <p className="mb-6">
              One of the first things I worked on was the death of enemies due to wanting the demo to have a visual
              appeal.
              This included creating a ragdoll that was triggered when you take a damage and blood particle FX.
              This included affecting the ragdoll and creating the particle FX at the point of impact from the player’s
              bullet.
              I ending developing it over an entire week:
          </p>
          <ul>
              <li>Day 1: Set up project in HDRP, import relevant assets and create a player controller with
                  animation and sound
              </li>
              <li>Day 2: Set up enemy agent state machine including full behaviour, animation and pathfinding using
                  unity navmesh system
              </li>
              <li>Day 3: Design Level and play test it</li>
              <li>Day 4: Send to external testers</li>
              <li>Day 5: Refine the project based on feedback</li>
          </ul>

          <div className="h-4 bg-transparent"/>

          <div className="h-4 bg-transparent"/>
          <h2 className="text-2xl font-bold text-terminal-green mt-8 mb-2">Conclusionary Notes</h2>

          <div className="h-2 bg-transparent"/>


          <p className="mb-6">
              I was very happy with the way the project came out and as it showcased the quality of work I can produce
              very well.
              It clearly communicates my programming skills and my ability to develop a high-quality level within a game
              engine.
              It would also be easy to continue work on this project to expand into a full game.
          </p>

          <div className="h-8 bg-transparent"/>
          <h2 className="text-2xl font-bold text-terminal-green">Further Reading</h2>
          <p>
              You can <a className="text-terminal-cyan underline"
                         href="https://github.com/jacobvillard/FpsScripts"
                         target="_blank">view the source code on GitHub</a>, or check out the <a
              className="text-terminal-cyan underline" href="https://darknerior.itch.io/fps-demo"
              target="_blank">live
              demo</a>.
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
