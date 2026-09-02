import { Link } from "react-router-dom";

const HopHovac = () => {
  return (
    <main className="prose prose-invert max-w-5xl mx-auto py-12 px-4 font-mono">
      {/* RETURN */}
      <div className="mb-6">
        <Link
          to="/"
          className="text-terminal-cyan underline hover:opacity-80 transition"
        >
          ← Return to Home
        </Link>
      </div>

      {/* HEADER */}
      <h1 className="text-4xl font-bold text-terminal-green mb-2">
        Building HopHovac
      </h1>

      <p className="text-xl text-muted-foreground">
        From a coordinate-based Unity grid to a territory-control game with A*
        pathfinding, autonomous AI strategies, collectables, and dynamic tile
        ownership.
      </p>

      <div className="flex flex-wrap gap-2 my-6">
        {[
          "Unity",
          "C#",
          "Grid Systems",
          "A* Pathfinding",
          "Game AI",
          "Strategy Pattern",
        ].map((tag) => (
          <span key={tag} className="bg-muted px-3 py-1 rounded text-sm">
            {tag}
          </span>
        ))}
      </div>

      {/* VIDEO */}
      <div className="aspect-video w-full my-8">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/rcxuEdDlwiY"
          title="HopHovac Gameplay"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* INTRO */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Where the Project Started
      </h2>

      <p>
        HopHovac started with a basic question: how could I represent the arena
        in a way that both the player and the AI could understand?
      </p>

      <p>
        Instead of treating the floor as a collection of unrelated Unity
        GameObjects, I created a logical grid on top of the environment. Every
        playable tile was assigned an integer coordinate such as (0, 0), (0, 1),
        or (3, 4).
      </p>

      <p>
        That coordinate system eventually became the foundation for movement,
        territory ownership, pathfinding, collectables, scoring, and AI
        decision-making.
      </p>

      {/* DEVELOPMENT SCREENSHOT */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        The Grid Became My Debugging View
      </h2>

      <p>
        During development I deliberately exposed the internal state of the game
        directly in the scene.
      </p>

      <p>
        Every tile displayed its grid coordinate so I could visually verify
        world-to-grid conversion, movement, pathfinding, and ownership changes
        while the game was running.
      </p>

      <img
        src="/images/hophovac/HopHovacDevelopment.png"
        alt="HopHovac development build showing grid coordinates, territory ownership, player scores and active AI strategies"
        className="rounded-lg shadow-md w-full my-8"
      />

      <p className="text-sm text-muted-foreground">
        Development build with coordinate labels, territory colors, scores, and
        active AI strategies displayed in real time.
      </p>

      <p>
        The screenshot also shows a later stage of the system. The grid
        coordinates are still visible, but captured tiles now change color based
        on ownership and the current AI behaviour is displayed above each AI
        agent.
      </p>

      <p>
        In the same frame I could see one AI running ExploreStrategy while
        another was using CompeteStrategy. This made debugging much easier
        because I could compare the AI's decision with what was actually
        happening on the board.
      </p>

      {/* GRID SYSTEM */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Turning the Arena into Data
      </h2>

      <p>
        The core GridSystem stores the board as a dictionary where a Vector2Int
        coordinate maps to a Node. Unity world positions are converted into grid
        coordinates by dividing the X and Z position by the configured grid
        size.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`World Position
      ↓
(x / gridSize, z / gridSize)
      ↓
Vector2Int
      ↓
Dictionary<Vector2Int, Node>`}
      </pre>

      <p>
        I also wrote a development Labeler component that calculated those same
        coordinates and displayed them through TextMeshPro directly on each
        tile. That is the coordinate overlay visible in the development
        screenshot.
      </p>

      {/* NODE */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        A Node Became the Source of Truth
      </h2>

      <p>
        I separated the logical state of a tile from its visual GameObject. Each
        Node stores its coordinate, its visual Tile, occupancy state, current
        owner, and any collectable assigned to it.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Node
 ├── Coordinates
 ├── Tile
 ├── IsOccupied
 ├── Owner
 └── Collectable`}
      </pre>

      <p>
        Ownership also controls presentation. When a Node changes owner, its
        Tile material changes to the new player's material. The board therefore
        visually reflects the underlying state without requiring a separate
        system to continually synchronize tile colors.
      </p>

      {/* MOVEMENT */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Movement Is Also Territory Capture
      </h2>

      <p>
        Once the board existed as data, movement became more than changing a
        Transform position.
      </p>

      <p>
        The PlayerManager validates a destination against the GridSystem. When
        movement succeeds, the previous Node becomes unoccupied, the destination
        Node becomes occupied, and ownership is assigned to the moving player.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Current Node
     ↓
Request Move
     ↓
Validate Destination
     ↓
Clear Previous Occupancy
     ↓
Claim Destination
     ↓
Update Ownership
     ↓
Move Character`}
      </pre>

      <p>
        The Movement component itself is reusable. It converts grid directions
        into world movement, smoothly rotates the character, moves toward the
        target position, updates the current grid coordinate, and checks for
        collectables when the destination is reached.
      </p>

      <p>
        This allowed both human-controlled characters and AI-controlled
        characters to depend on the same movement behaviour. The difference is
        not how they move; it is how their next destination is chosen.
      </p>

      {/* PATHFINDING */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        A* Pathfinding on the Same Grid
      </h2>

      <p>
        Once movement operated through coordinates, I could build navigation
        directly on top of the same grid.
      </p>

      <p>
        I implemented an A* pathfinding strategy using cardinal movement only:
        up, down, left, and right. Occupied nodes are ignored during the search.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`        Up
         ↑
Left ← Current → Right
         ↓
        Down`}
      </pre>

      <p>
        Each PathNode stores G cost, H cost, its parent, and a calculated F
        cost.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`G = cost from start

H = Manhattan distance to target

F = G + H`}
      </pre>

      <p>
        Manhattan distance fits this board because diagonal movement is not
        allowed.
      </p>

      {/* DYNAMIC PATHS */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Paths Have to React to the Game
      </h2>

      <p>
        Calculating a route once was not enough because other characters are
        constantly moving through the same board.
      </p>

      <p>
        AIMovement follows the generated path one Node at a time. If the next
        Node becomes occupied, the AI calls the pathfinding strategy again to
        generate a detour.
      </p>

      <p>
        I also added stuck detection. If the AI remains on the same grid
        position for too long, it recalculates the path to its current target
        instead of waiting indefinitely.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Choose Target
      ↓
Generate A* Path
      ↓
Follow Path
      ↓
Next Node Available?
   ↙             ↘
 Yes              No
  ↓                ↓
Move           Recalculate
                  Path`}
      </pre>

      {/* AI COGNITION */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Pathfinding Solved "How", Not "Why"
      </h2>

      <p>
        At this point the AI knew how to reach a destination, but it still
        needed to decide which destination was worth reaching.
      </p>

      <p>
        I separated that problem from navigation and built an AI cognition layer
        around multiple strategies.
      </p>

      <p>
        AICognition keeps track of the currently active strategy, asks a
        StrategyEvaluator which behaviour is most useful, exits the current
        strategy when necessary, and enters the new one.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Game State
     ↓
StrategyEvaluator
     ↓
Choose Strategy
     ↓
Choose Target Node
     ↓
A* Pathfinding
     ↓
Movement`}
      </pre>

      {/* EXPLORE */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        ExploreStrategy
      </h2>

      <p>ExploreStrategy is the fallback behaviour.</p>

      <p>
        The AI searches a small area around its current coordinate and first
        tries to find free Nodes that it does not already own.
      </p>

      <p>
        If no suitable unowned Node exists, the strategy relaxes that rule and
        allows other available Nodes to become targets.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Search Nearby Nodes
        ↓
Free + Unowned?
     ↙       ↘
   Yes        No
    ↓          ↓
Choose       Search Any
Target       Free Node`}
      </pre>

      {/* COLLECT */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        CollectableStrategy
      </h2>

      <p>
        Pickups introduced a different kind of decision. If a useful collectable
        appeared nearby, the AI needed to temporarily abandon normal exploration
        and react to it.
      </p>

      <p>
        CollectableStrategy checks active pickups and looks for one within a
        configured distance of three grid units. It then selects the closest
        valid collectable and targets the Node assigned to it.
      </p>

      <p>
        The strategy also subscribes to collectable spawn and despawn events.
        That means a new pickup can cause the AI to reconsider its current
        behaviour while the game is running.
      </p>

      {/* COMPETE */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        CompeteStrategy
      </h2>

      <p>
        I wanted the AI to do more than expand randomly. Once it had enough
        territory, it could instead start reacting directly to the other
        players.
      </p>

      <p>
        CompeteStrategy identifies the highest-scoring opponent and targets part
        of that opponent's owned territory. The implementation selects
        approximately half of that opponent's owned Nodes as potential targets.
      </p>

      <p>
        It also includes its own stuck detection. If the AI spends too long
        without progressing, the competing behaviour becomes unavailable and the
        cognition system switches to another strategy.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Enough Owned Territory?
          ↓
Find Highest Scoring Opponent
          ↓
Read Opponent OwnedTiles
          ↓
Choose Target Territory
          ↓
Navigate + Capture`}
      </pre>

      {/* STRATEGY EVALUATOR */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Deciding Which Strategy Wins
      </h2>

      <p>Strategy selection is handled separately by StrategyEvaluator.</p>

      <p>
        Instead of hard-coding a single fixed behaviour order, available
        strategies receive scores based on the current game situation.
      </p>

      <p>
        A nearby collectable increases the value of CollectableStrategy. If the
        AI is behind the highest-scoring opponent, that strategy receives
        additional weight.
      </p>

      <p>
        CompeteStrategy gains value after the AI has captured enough tiles, and
        being behind in score increases its priority further.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Collectable Available?
       ↓
Calculate Score

Compete Available?
       ↓
Calculate Score
       ↓
Compare Strategies
       ↓
Highest Score Wins

No Better Strategy?
       ↓
Explore`}
      </pre>

      {/* COLLECTABLE POOL */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Collectables as Part of the Board
      </h2>

      <p>
        Collectables are managed through an object pool rather than constantly
        instantiating and destroying objects.
      </p>

      <p>
        The CollectablePoolManager spawns them in waves, chooses random
        unoccupied Nodes, assigns the collectable to that Node, and broadcasts
        an event when it becomes active.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Object Pool
     ↓
Choose Free Node
     ↓
Assign Collectable
     ↓
Activate Object
     ↓
Broadcast Spawn Event
     ↓
AI Can React`}
      </pre>

      <p>
        When a collectable is used, it is disabled and returned to the pool. Its
        Node is cleared and a despawn event is broadcast to interested AI
        systems.
      </p>

      {/* TERRITORY */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Territory Became the Shared Game State
      </h2>

      <p>
        What started as a debugging grid eventually became the central model of
        the game.
      </p>

      <p>
        Moving changes Node ownership. Ownership updates the visual material.
        Owned Nodes are stored by the player. Those Nodes affect scoring and can
        later become targets for competing AI agents.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Player Moves
     ↓
Node Owner Changes
     ↓
Tile Changes Color
     ↓
OwnedTiles Changes
     ↓
Score Changes
     ↓
AI Decisions Change`}
      </pre>

      {/* SCORING */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Turning Territory into Points
      </h2>

      <p>The player's score is connected directly to captured territory.</p>

      <p>
        When the scoring collectable is reached, AddPoints converts the current
        set of owned tiles into points. Most of those nodes are then released,
        while the most recent tile remains owned so the player's territory chain
        can continue from there.
      </p>

      <p>
        This creates a simple risk-and-reward loop: capturing more territory can
        create a larger score, but the player still needs to successfully reach
        a scoring opportunity.
      </p>

      {/* PLAYER STATE */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Player States and Abilities
      </h2>

      <p>As the project grew, I also introduced explicit player states:</p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Neutral
Active
Disabled
Locked`}
      </pre>

      <p>
        Those states are used during setup, active gameplay, temporary disable
        effects, pauses, and transitions between rounds.
      </p>

      <p>
        PlayerData also tracks score, owned tiles, opponents, movement speed,
        abilities, shields, target Nodes, VFX, and the player's current grid
        position.
      </p>

      {/* ROUND SYSTEM */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        The Complete Round
      </h2>

      <p>The GameManager brings these systems together into a timed match.</p>

      <p>
        Players begin locked during setup. A countdown activates them, a
        90-second round begins, collectables spawn, and the board changes as
        territory is captured.
      </p>

      <p>
        When the round ends, players return to the locked state, active
        collectables are reclaimed, spawning pauses, and the end-of-round UI is
        displayed. The entire round can then be reset and started again.
      </p>

      {/* DEVELOPMENT STORY */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        How the Project Grew
      </h2>

      <p>
        The part I find most interesting about HopHovac is that the major
        systems were not isolated features added randomly on top of each other.
      </p>

      <p>Each system grew from the grid underneath it.</p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Coordinate Labels
        ↓
Grid Dictionary
        ↓
Nodes
        ↓
Occupancy
        ↓
Territory Ownership
        ↓
Shared Movement
        ↓
A* Pathfinding
        ↓
AI Target Selection
        ↓
Strategy-Based Cognition
        ↓
Collectables + Competition
        ↓
Scoring + Round Loop`}
      </pre>

      <p>
        The coordinate labels visible in the development screenshot originally
        existed simply because I needed to verify that my grid worked.
      </p>

      <p>
        Later those same coordinates became the language used by movement,
        pathfinding, collectable placement, territory ownership, scoring, and AI
        decision-making.
      </p>

      <p>
        That is the main engineering story behind HopHovac. Visually it is a
        small competitive arena game, but underneath it the game is driven by a
        shared representation of the world that allows several independent
        systems to reason about the same board.
      </p>

      {/* LINKS */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Project Links
      </h2>

      <div className="flex flex-wrap gap-4 mt-4">
        <a
          href="https://babakraeisi.itch.io/hophovac"
          target="_blank"
          rel="noopener noreferrer"
          className="text-terminal-cyan underline"
        >
          Play on itch.io
        </a>

        <a
          href="https://github.com/BabakRaeisi/HopHovacShowcase"
          target="_blank"
          rel="noopener noreferrer"
          className="text-terminal-cyan underline"
        >
          GitHub Showcase
        </a>

        <a
          href="https://youtu.be/rcxuEdDlwiY"
          target="_blank"
          rel="noopener noreferrer"
          className="text-terminal-cyan underline"
        >
          Gameplay Video
        </a>
      </div>

      {/* RETURN */}
      <div className="mt-16 mb-8">
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

export default HopHovac;
