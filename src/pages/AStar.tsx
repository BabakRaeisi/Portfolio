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

          <h1 className="text-4xl font-bold text-terminal-green">A* Pathfinding Project</h1>
          <p className="text-sm text-muted-foreground">Posted on: June 17, 2024</p>

          <div className="h-8 bg-transparent"/>

          <p>
              TThis project was developed for my Advanced Games Engine Programming module and centers around
              implementing A* and Hierarchical A* pathfinding systems in Unity.
              It includes a functioning enemy AI, an editor-integrated level design tool, and a procedural round-based
              combat system.
              The result is a fully featured technical demo that challenged and strengthened my understanding of game AI
              and Unity’s architecture.
          </p>

          <div className="h-8 bg-transparent"/>


          <h2 className="text-2xl font-bold text-terminal-green mt-8 mb-2">Gameplay Overview</h2>
          <img
              src="/images/GameClass.png"
              alt="Grid Position Calculation"
              className="rounded-lg shadow-md max-w-full"
          />
          <div className="h-2 bg-transparent"/>
          <p className="mb-6">
              The player navigates a grid-based environment filled with enemies and obstacles.
              Enemies use A* pathfinding to randomly navigate the map.
              Weapons deal damage through raycasting and apply health logic via interfaces.
          </p>
          <div className="h-8 bg-transparent"/>


          <h2 className="text-2xl font-bold text-terminal-green">Game Loop</h2>
          <p>
              The core loop continuously spawns enemies each round.
              When all enemies are defeated, the round counter increments and difficulty increases.
              If the player is caught, the game ends.
          </p>
          <div className="h-8 bg-transparent"/>

          <h2 className="text-2xl font-bold text-terminal-green">System Architecture</h2>
          <img
              src="/images/UML.png"
              alt="Grid Position Calculation"
              className="rounded-lg shadow-md max-w-full"
          />
          <div className="h-2 bg-transparent"/>
          <p className="mb-6">
              The system architecture includes major components like <code
              className="bg-muted px-1 rounded">Player</code>,
              <code className="bg-muted px-1 rounded">Agent</code>, and <code
              className="bg-muted px-1 rounded">GridCreator</code>.
              All logic is modular and communicates through a central <code
              className="bg-muted px-1 rounded">GameManager</code>.
              A singleton design pattern ensures reliable access to global systems such as level generation and round
              progression.
          </p>


          <div className="h-8 bg-transparent"/>

          <h2 className="text-2xl font-bold text-terminal-green mt-8 mb-2">Pathfinding Breakdown</h2>
          <h2 className="text-1xl font-bold text-terminal-green mt-8 mb-2">Step 1: Node Grid Setup</h2>
          <img
              src="/images/GridSetUp.png"
              alt="Grid Position Calculation"
              className="rounded-lg shadow-md max-w-full border-4 border-terminal-green"
          />
          <div className="h-2 bg-transparent"/>
          <p className="mb-6">
              The level is initialized with a walkable grid. Each tile becomes a node with properties used by the A*
              algorithm.
          </p>
          <h2 className="text-1xl font-bold text-terminal-green mt-8 mb-2">Step 2: Assign G/H/F Costs</h2>
          <img
              src="/images/GridCosts.png"
              alt="Grid Position Calculation"
              className="rounded-lg shadow-md max-w-full border-4 border-terminal-green"
          />
          <div className="h-2 bg-transparent"/>
          <p className="mb-6">
              Every node calculates its G (movement cost), H (heuristic), and F (total cost) values. These are used to
              select optimal paths.
          </p>
          <h2 className="text-1xl font-bold text-terminal-green mt-8 mb-2">Step 3: Final Path</h2>
          <img
              src="/images/GridNav.png"
              alt="Grid Position Calculation"
              className="rounded-lg shadow-md max-w-full border-4 border-terminal-green"
          />
          <div className="h-2 bg-transparent"/>
          <p className="mb-6">
              The A* algorithm searches through nodes, avoiding obstacles and calculating the lowest-cost route to the
              target.
          </p>

          <h2 className="text-2xl font-bold text-terminal-green mt-8 mb-2">Enemy Detection</h2>
          <h2 className="text-1xl font-bold text-terminal-green mt-8 mb-2">Line of Sight With No Obstruction</h2>
          <img
              src="/images/LOS.png"
              alt="Grid Position Calculation"
              className="rounded-lg shadow-md max-w-full p-16"
          />
          <div className="h-2 bg-transparent"/>
          <p className="mb-6">
              This diagram illustrates a clear line of sight between two objects (represented by the red and green cylinders).
              Since there is no obstacle between them, an agent using raycasting or visibility logic would detect this path as valid and direct.
          </p>
          <h2 className="text-1xl font-bold text-terminal-green mt-8 mb-2">Line of Sight Obstructed</h2>
          <img
              src="/images/LOSB.png"
              alt="Grid Position Calculation"
              className="rounded-lg shadow-md max-w-full p-16"
          />
          <div className="h-2 bg-transparent"/>
          <p className="mb-6">
              In this image, the direct path between the red and green cylinders is blocked by a blue obstacle. 
              The dashed red lines indicate the previously valid paths, which now fail raycast checks. 
              This forces the agent to recalculate or use A* pathfinding to navigate around the obstacle.
          </p>
          
          <h2 className="text-2xl font-bold text-terminal-green mt-8 mb-2">Hierarchical Pathfinding</h2>
          <img
              src="/images/AStar.png"
              alt="Grid Position Calculation"
              className="rounded-lg shadow-md max-w-full "
          />
          <div className="h-2 bg-transparent"/>
          <img
              src="/images/HPA.png"
              alt="Grid Position Calculation"
              className="rounded-lg shadow-md max-w-full"
          />
          <div className="h-2 bg-transparent"/>
          <p className="mb-6">
              To improve performance on larger maps, a hierarchical version of A* divides the map into clusters.
              Agents first find a route between clusters before planning in detail within a local area.
          </p>


          <div className="h-8 bg-transparent"/>
          <h2 className="text-2xl font-bold text-terminal-green">Further Reading</h2>
          <p>
              You can <a className="text-terminal-cyan underline"
                         href="https://github.com/jacobvillard/Astar"
                         target="_blank">view the source code on GitHub</a>, check out the <a
              className="text-terminal-cyan underline" href="https://darknerior.itch.io/a-hide-and-seek"
              target="_blank">live
              demo</a> or download the university <a className="text-terminal-cyan underline ml-1"
                                                     href="/files/agep-3.docx"
                                                     download="agep-3.docx"
                                                     target="_blank" rel="noopener noreferrer">written report</a>.
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
