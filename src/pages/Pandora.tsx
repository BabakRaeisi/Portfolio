import { Link } from "react-router-dom";

const Pandora = () => {
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
        Building Pandora
      </h1>

      <p className="text-xl text-muted-foreground">
        A Unity cognitive training application built around three interactive
        mini-games, progressive difficulty, structured trial tracking, and an
        ASP.NET Core analytics backend.
      </p>

      <div className="flex flex-wrap gap-2 my-6">
        {[
          "Unity",
          "C#",
          "ASP.NET Core",
          "PostgreSQL",
          "Entity Framework Core",
          "Docker",
          "AWS",
        ].map((tag) => (
          <span key={tag} className="bg-muted px-3 py-1 rounded text-sm">
            {tag}
          </span>
        ))}
      </div>

      {/* LINKS */}
      <div className="flex flex-wrap gap-4 my-6">
        <a
          href="https://github.com/BabakRaeisi/Pandora"
          target="_blank"
          rel="noopener noreferrer"
          className="text-terminal-cyan underline"
        >
          Unity Project
        </a>

        <a
          href="https://github.com/BabakRaeisi/PandoraAnalytics"
          target="_blank"
          rel="noopener noreferrer"
          className="text-terminal-cyan underline"
        >
          Analytics Backend
        </a>

        <a
          href="https://youtu.be/b5O7EAq5_c4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-terminal-cyan underline"
        >
          Gameplay Video
        </a>
      </div>

      {/* VIDEO */}
      <div className="aspect-video w-full my-8">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/b5O7EAq5_c4"
          title="Pandora Gameplay"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* OVERVIEW */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        The Project
      </h2>

      <p>
        Pandora is a Unity application designed around short cognitive training
        sessions. The application contains three different mini-games that focus
        on memory, spatial recall, and sequence reconstruction.
      </p>

      <p>
        I did not want the project to stop at the gameplay layer. Each trial
        produces structured data that can be grouped into sessions and sent to a
        separate analytics backend.
      </p>

      <p>That made Pandora a combination of two systems:</p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Unity Application
     ↓
Three Mini-Games
     ↓
Trial + Session Tracking
     ↓
Analytics Upload
     ↓
ASP.NET Core API
     ↓
PostgreSQL`}
      </pre>

      {/* CONSTELLATION */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Constellation
      </h2>

      <p>
        Constellation is a sequence-memory game built around a set of nine
        possible stars.
      </p>

      <p>
        During a trial, a unique sequence of stars lights up one by one. After
        the sequence finishes, the player has to reproduce the same pattern in
        the correct order.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Generate Sequence
      ↓
Show Stars One by One
      ↓
Player Repeats Sequence
      ↓
Correct?
   ↙       ↘
 Yes       No
  ↓         ↓
Finish    Replay Trial`}
      </pre>

      <p>
        A wrong response does not immediately advance the player to a new
        sequence. The same trial can be replayed, allowing the application to
        track repeated attempts against the same target.
      </p>

      <p>
        The difficulty increases across the seven-day progression by changing
        the sequence span:
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Day 1 → Span 3
Day 2 → Span 3
Day 3 → Span 4
Day 4 → Span 5
Day 5 → Span 6
Day 6 → Span 7
Day 7 → Span 8`}
      </pre>

      <p>
        For each trial I can record information such as the target sequence,
        wrong attempts, completion time, day, trial index, and timestamp.
      </p>

      {/* SWM */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Spatial Working Memory
      </h2>

      <p>
        The second mini-game uses a group of boxes or chests distributed in the
        scene. Some contain treasure and others do not.
      </p>

      <p>
        The player explores the boxes and has to remember which ones have
        already been opened.
      </p>

      <p>I distinguish between two different types of repeated mistakes:</p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Open an empty box again
        ↓
Between Error

Open a previously found treasure again
        ↓
Within Error`}
      </pre>

      <p>
        Difficulty increases by changing the number of boxes, number of
        treasures, and number of trials.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Day 1 → 3 boxes / 2 treasures / 5 trials
Day 2 → 4 boxes / 2 treasures / 5 trials
Day 3 → 4 boxes / 3 treasures / 6 trials
Day 4 → 6 boxes / 3 treasures / 6 trials
Day 5 → 6 boxes / 4 treasures / 7 trials
Day 6 → 6 boxes / 4 treasures / 7 trials
Day 7 → 8 boxes / 4 treasures / 8 trials`}
      </pre>

      {/* BRIDGE */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">Bridge</h2>

      <p>Bridge focuses on reconstructing a visual path.</p>

      <p>
        A sequence of bridge stones is highlighted one at a time. Once the
        presentation finishes, the player has to rebuild the path by selecting
        the stones in the correct order.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Generate Path
     ↓
Highlight Stones
     ↓
Hide Sequence
     ↓
Player Reconstructs Path
     ↓
Correct Stone?
  ↙          ↘
Yes          No
 ↓            ↓
Build      Wrong Attempt`}
      </pre>

      <p>
        Difficulty progresses by changing several variables instead of only
        making the path longer.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Day 1
5 trials
3–4 pieces
1200ms
Straight

Day 3
6 trials
4–5 pieces
1000ms
Gentle Curve

Day 4
6 trials
4–5 pieces
1000ms
Zig-Zag

Day 5
7 trials
5–6 pieces
900ms
L Shape

Day 6
7 trials
6–7 pieces
800ms
Elevated + FX

Day 7
8 trials
7–8 pieces
800ms
Elevated + FX`}
      </pre>

      {/* PROGRESSION */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Progressive Difficulty
      </h2>

      <p>
        Rather than treating each mini-game as an isolated level, I structured
        Pandora around a multi-day progression.
      </p>

      <p>
        Each game can increase difficulty using variables that make sense for
        that specific task:
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Constellation
→ Sequence Length

Spatial Working Memory
→ Boxes
→ Treasures
→ Trials

Bridge
→ Path Length
→ Presentation Speed
→ Path Shape
→ Elevation`}
      </pre>

      <p>
        This allowed me to keep one shared application flow while still giving
        each mini-game its own difficulty model.
      </p>

      {/* DATA */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Gameplay Produces Structured Data
      </h2>

      <p>
        An important part of Pandora is that completing a mini-game is not the
        end of the workflow.
      </p>

      <p>
        Each trial can produce a TrialRecord. Those records are collected into
        the larger session payload that represents the player's activity.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Player
   ↓
Session
   ↓
Mini-Game
   ↓
Trial
   ↓
TrialRecord`}
      </pre>

      <p>Depending on the game, a trial can contain information such as:</p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Mini-game ID
Day
Trial Index
Difficulty / Span
Target Sequence
Wrong Attempts
Completion Time
Timestamp`}
      </pre>

      <p>
        This gives the application something much more useful than a simple
        final score.
      </p>

      {/* ARCHITECTURE IMAGE */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Analytics Architecture
      </h2>

      <img
        src="/images/pandora/architecture.png"
        alt="Pandora Unity and ASP.NET Core analytics architecture"
        className="rounded-lg shadow-md w-full my-8"
      />

      <p>
        Pandora's analytics backend is a separate ASP.NET Core Web API rather
        than being embedded inside the Unity project.
      </p>

      <p>The API is organized into four projects:</p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`PandoraAnalyticsAPI.API
        ↓
PandoraAnalyticsAPI.Application
        ↓
PandoraAnalyticsAPI.Domain
        ↑
PandoraAnalyticsAPI.Infrastructure`}
      </pre>

      <p>
        The API project contains the HTTP layer and application startup.
        Application contains the use cases, DTOs, and interfaces. Domain holds
        the core entities, while Infrastructure contains EF Core persistence,
        migrations, and repository implementations.
      </p>

      {/* UNITY UPLOAD */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Sending Data from Unity
      </h2>

      <p>
        Inside the Unity project, DataUploader is responsible for sending
        completed session data to the backend.
      </p>

      <p>
        Before sending the request, it normalizes the payload, makes sure the
        trial collection exists, adds missing timestamps where necessary, and
        fills in missing day information from the current save state.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`SessionUploadRequest
       ↓
Normalize Payload
       ↓
JsonUtility.ToJson(...)
       ↓
UTF-8 Request Body
       ↓
POST /api/analytics/upload`}
      </pre>

      <p>Unity sends the request as JSON:</p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Content-Type: application/json`}
      </pre>

      <p>
        The uploader also tracks the HTTP response code and response body so
        failed uploads can be inspected while developing and testing the system.
      </p>

      {/* FLOW IMAGE */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Session Upload Flow
      </h2>

      <img
        src="/images/pandora/analytics-flow.png"
        alt="Pandora session and trial analytics upload flow"
        className="rounded-lg shadow-md w-full my-8"
      />

      <p>
        Once a session is ready, Unity serializes the player profile, save
        state, and recorded trials into a request payload and sends it over
        HTTPS to the analytics service.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Unity
  ↓
SessionUploadRequest
  ↓
HTTPS
  ↓
ASP.NET Core API
  ↓
Application Service
  ↓
Repository
  ↓
PostgreSQL`}
      </pre>

      {/* API */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        ASP.NET Core Analytics API
      </h2>

      <p>
        The backend is responsible for both receiving game data and making the
        stored analytics queryable later.
      </p>

      <p>Its base route is:</p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`/api/analytics`}
      </pre>

      <p>
        The API currently exposes endpoints for session upload, profile creation
        or restoration, and analytics queries:
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`POST /api/analytics/upload

POST /api/analytics/profile

GET /api/analytics/players

GET /api/analytics/players/{phoneNumber}/sessions

GET /api/analytics/players/{phoneNumber}/trials

GET /api/analytics/trials

GET /api/analytics/sessions/{sessionId}/trials

GET /api/analytics/health`}
      </pre>

      <p>
        This means the backend is not only an ingestion endpoint. It can also
        retrieve the stored data at different levels: player, session, or
        individual trial.
      </p>

      {/* POSTGRES */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        PostgreSQL and Entity Framework Core
      </h2>

      <p>
        The analytics service uses PostgreSQL as its persistent store and Entity
        Framework Core for database access.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`ASP.NET Core
      ↓
Application Layer
      ↓
Repository
      ↓
Entity Framework Core
      ↓
PostgreSQL`}
      </pre>

      <p>
        Separating the database implementation into the Infrastructure layer
        keeps persistence details outside the API controllers and core domain
        model.
      </p>

      {/* WHY BACKEND */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Why Add a Backend?
      </h2>

      <p>
        Without the backend, Pandora could still run its mini-games and store
        local progress.
      </p>

      <p>
        But local data alone makes it difficult to review activity across
        sessions or inspect trial-level history outside the device running the
        game.
      </p>

      <p>
        The analytics service gives that data a lifecycle beyond the Unity
        session:
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Play
 ↓
Record
 ↓
Upload
 ↓
Persist
 ↓
Query
 ↓
Review`}
      </pre>

      <p>
        That separation also means the Unity application focuses on the game
        experience while the backend focuses on storage and retrieval.
      </p>

      {/* NETWORKING */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Handling Network Requests in Unity
      </h2>

      <p>
        The uploader is implemented with UnityWebRequest and exposes an async
        Task-based interface to the rest of the application.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`SendAsync(...)
     ↓
Start Coroutine
     ↓
UnityWebRequest
     ↓
Wait for Response
     ↓
Task<bool>`}
      </pre>

      <p>
        I also added request timeout handling and URL validation rather than
        assuming every configured endpoint is valid.
      </p>

      <p>
        Outside explicitly allowed editor testing, the uploader blocks plain
        insecure HTTP endpoints and expects HTTPS.
      </p>

      <p>
        A successful upload requires both a successful Unity transport result
        and a 2xx HTTP response.
      </p>

      {/* FAILURE HANDLING */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Upload Validation and Failure Handling
      </h2>

      <p>
        Before the request is sent, the uploader checks several failure cases.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Null Request
     ↓
Reject

Invalid URL
     ↓
Reject

Empty JSON
     ↓
Reject

Network / HTTP Failure
     ↓
Record Response
     ↓
Return false`}
      </pre>

      <p>
        The uploader also detects cases where an endpoint unexpectedly returns
        an HTML page instead of the expected API response.
      </p>

      <p>
        That was useful when testing deployment and reverse-proxy configuration
        because receiving a web server error page should not be treated as a
        successful analytics upload.
      </p>

      {/* DOCKER */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Dockerized Backend
      </h2>

      <p>
        PandoraAnalytics includes Docker support for running the API and its
        PostgreSQL dependency in a reproducible environment.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Docker Compose
     ↓
ASP.NET Core API
     +
PostgreSQL`}
      </pre>

      <p>
        Configuration such as the PostgreSQL database, username, password, and
        TLS settings is supplied through environment variables rather than being
        hard-coded into the container configuration.
      </p>

      {/* AWS */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        AWS Deployment
      </h2>

      <p>
        The analytics repository also includes an AWS-oriented Docker Compose
        configuration for running the service on EC2.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Unity Client
     ↓
HTTPS
     ↓
AWS
     ↓
Application Load Balancer / TLS
     ↓
EC2
     ↓
Docker
     ↓
Pandora Analytics API
     ↓
PostgreSQL`}
      </pre>

      <p>
        The AWS deployment configuration exposes the API internally over HTTP
        and is designed so TLS can terminate in front of the container at AWS
        infrastructure such as an Application Load Balancer.
      </p>

      {/* HEALTH */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Health Checking
      </h2>

      <p>
        The analytics service exposes a health endpoint that can be used to
        verify that the backend is reachable:
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`GET /api/analytics/health`}
      </pre>

      <p>
        This is particularly useful after deploying the Docker stack because it
        gives infrastructure and manual testing a lightweight endpoint without
        requiring an analytics upload.
      </p>

      {/* COMPLETE FLOW */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        How the Whole System Fits Together
      </h2>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Player Starts Pandora
        ↓
Play Mini-Game
        ↓
Complete Trial
        ↓
Create TrialRecord
        ↓
Continue Session
        ↓
Build SessionUploadRequest
        ↓
Normalize + Serialize JSON
        ↓
UnityWebRequest
        ↓
ASP.NET Core Analytics API
        ↓
Application Layer
        ↓
EF Core Repository
        ↓
PostgreSQL
        ↓
Sessions + Trials Can Be Queried`}
      </pre>

      {/* EVOLUTION */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        How Pandora Grew
      </h2>

      <p>The project evolved in layers.</p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Mini-Game Mechanics
        ↓
Difficulty Progression
        ↓
Trial Recording
        ↓
Session Tracking
        ↓
Unity Data Upload
        ↓
ASP.NET Core API
        ↓
PostgreSQL Persistence
        ↓
Analytics Queries
        ↓
Docker
        ↓
AWS Deployment`}
      </pre>

      <p>
        What began as three Unity mini-games became a full data pipeline from
        player interaction to persistent analytics.
      </p>

      {/* TAKEAWAY */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        What I Took Away from Pandora
      </h2>

      <p>
        Pandora gave me a chance to connect two areas I had previously worked
        with separately: interactive Unity development and backend application
        development.
      </p>

      <p>
        On the Unity side, the challenge was building different gameplay systems
        with their own rules and progression while collecting consistent data
        from all of them.
      </p>

      <p>
        On the backend side, the challenge was turning that gameplay data into
        structured sessions and trials that could be persisted and queried
        independently from the game.
      </p>

      <p>
        The result is not just a set of mini-games. It is an end-to-end system
        where player interaction produces structured data that moves from Unity
        through an ASP.NET Core API into PostgreSQL for later analysis.
      </p>

      {/* PROJECT LINKS */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Project Links
      </h2>

      <div className="flex flex-wrap gap-4 mt-4">
        <a
          href="https://github.com/BabakRaeisi/Pandora"
          target="_blank"
          rel="noopener noreferrer"
          className="text-terminal-cyan underline"
        >
          Pandora Unity Repository
        </a>

        <a
          href="https://github.com/BabakRaeisi/PandoraAnalytics"
          target="_blank"
          rel="noopener noreferrer"
          className="text-terminal-cyan underline"
        >
          Pandora Analytics API
        </a>

        <a
          href="https://youtu.be/b5O7EAq5_c4"
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

export default Pandora;
