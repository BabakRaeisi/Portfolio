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

          <h1 className="text-4xl font-bold text-terminal-green">FYGP: Final Reflections and Development Overview</h1>
          <p className="text-sm text-muted-foreground">Posted on: July 07, 2025</p>

          <div className="h-8 bg-transparent"/>

          <p>
              This post documents the development and reflection process of my final-year group project (FYGP), which
              culminated in a narrative-driven first-person experience. The project served not only as a test of my
              Unity and programming skills but as a challenge in navigating technical systems, team workflows, and
              production constraints.
          </p>


          <div className="h-8 bg-transparent"/>
          <h2 className="text-2xl font-bold text-terminal-green">Systems Design</h2>
          <p>
              One of my proudest technical accomplishments was reworking the save system. The original solution was
              tightly coupled and unsustainable. I replaced it with a modular architecture based on SOLID principles,
              using interfaces, observer callbacks, and utility tools for encrypted save files and thumbnails. This
              shift enabled scalability and extensibility for future systems.


          </p>
          <div className="h-4 bg-transparent"/>

          <p>
              I also implemented a new inventory system using the command pattern to allow for clean, modular item
              interaction. This included UI reworks, tooltips, and keybinding support. FPS animation integration
              required a workaround using a custom controller to transmit animation data, which taught me the importance
              of pipeline planning.
          </p>


          <h2 className="text-2xl font-bold text-terminal-green mt-8 mb-2">UI and Level Design</h2>
          <p>
              I led UI unification efforts, implementing a “house style” beginning with the keybinds menu and
              propagating it across pause, save, and skill tree systems. The UI was designed to be diegetic using a
              wristwatch interface, reinforcing immersion and minimizing non-diegetic elements.

          </p>
          <div className="h-4 bg-transparent"/>

          <p>
              My level design contributions included major areas like Bunker One and Comm Station. I created modular
              Blender models to support storytelling and designed terrain with terrain sculpting tools and optimization
              techniques like LOD and occlusion baking.

          </p>
          
          <h2 className="text-2xl font-bold text-terminal-green mt-8 mb-2">Combat and Feedback Systems</h2>

          <p>
              I worked on combat feedback including a global hitmarker system, blood VFX, and local enemy sound logic. I
              also helped manage enemy animation through our state machine system and implemented sound priority to
              prevent overlap. These features significantly improved gameplay clarity and polish.

          </p>
          
          <h2 className="text-2xl font-bold text-terminal-green mt-8 mb-2">Development Process</h2>

          <p>
              Throughout development, I tracked my tasks and hours using <a className="text-terminal-cyan underline"
                 href="https://fygp.youtrack.cloud/"
                 target="_blank">YouTrack</a>, which helped me maintain consistent progress even when team collaboration faltered. I also used Plastic SCM for version control, where I made over 200 commits.

          </p>
          <div className="h-4 bg-transparent"/>

          <p>
              Despite the project being a team effort, I contributed the majority of technical systems and ensured that our game maintained architectural integrity, even under tight deadlines. My main takeaway is a reinforced belief in modular design, agile workflows, and player-centric development.
          </p>

          <div className="h-8 bg-transparent"/>
          <h2 className="text-2xl font-bold text-terminal-green">Further Reading</h2>
          <p>
              You can check out the <a className="text-terminal-cyan underline"
                         href="https://store.steampowered.com/app/3517090/Fallen_Vestige/"
                         target="_blank">steamp page</a> here.
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
