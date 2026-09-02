import { Link } from "react-router-dom";

const MicroBooker = () => {
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
        Building MicroBooker
      </h1>

      <p className="text-xl text-muted-foreground">
        Designing a distributed restaurant reservation system around
        concurrency, consistency, authentication, event-driven processing,
        caching, containers, and cloud deployment.
      </p>

      <div className="flex flex-wrap gap-2 my-6">
        {[
          "ASP.NET Core",
          "C#",
          "React",
          "MongoDB",
          "Redis",
          "Kafka",
          "PostgreSQL",
          "Docker",
          "AWS",
        ].map((tag) => (
          <span key={tag} className="bg-muted px-3 py-1 rounded text-sm">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 my-6">
        <a
          href="https://microbooker.babakraeisi.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-terminal-cyan underline"
        >
          Live Application
        </a>

        <a
          href="https://github.com/BabakRaeisi/MicroBooker"
          target="_blank"
          rel="noopener noreferrer"
          className="text-terminal-cyan underline"
        >
          GitHub Repository
        </a>
      </div>

      {/* FRONTEND */}
      <img
        src="/images/microbooker/frontend.png"
        alt="MicroBooker restaurant reservation interface"
        className="rounded-lg shadow-md w-full my-8"
      />

      <p className="text-sm text-muted-foreground">
        The MicroBooker client allows authenticated users to choose a date,
        time, and restaurant table while already-reserved combinations are
        disabled.
      </p>

      {/* INTRO */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        The Problem I Wanted to Solve
      </h2>

      <p>
        On the surface, MicroBooker is a restaurant reservation application. But
        the part I was interested in was what happens underneath the UI when
        multiple users try to reserve the same resource.
      </p>

      <p>
        Imagine two users both looking at Table 2 at 8:00 PM. Their browsers can
        both show the table as available. If they press Reserve at almost
        exactly the same time, a frontend check alone cannot guarantee that only
        one reservation will be created.
      </p>

      <p>
        That turned the project into a distributed-systems problem rather than
        just a CRUD application.
      </p>

      <p>
        I designed the system around several layers of protection and
        responsibility:
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`React Client
      ↓
JWT Authentication
      ↓
Reservation API
      ↓
Redis Coordination
      ↓
MongoDB Consistency
      ↓
Kafka Event
      ↓
Background Worker
      ↓
Redis Cache`}
      </pre>

      {/* ARCHITECTURE */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        System Architecture
      </h2>

      <img
        src="/images/microbooker/architecture.png"
        alt="MicroBooker distributed system architecture"
        className="rounded-lg shadow-md w-full my-8"
      />

      <p>
        MicroBooker is split into several independently responsible pieces. The
        React frontend communicates with a separate authentication service and
        the Reservation API.
      </p>

      <p>The reservation backend itself follows a layered architecture:</p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Reservation.Api
       ↓
MicroBooker.Application
       ↓
MicroBooker.Domain
       ↑
MicroBooker.Infrastructure`}
      </pre>

      <p>
        The Domain layer contains the Reservation model and abstractions such as
        ILockService, IEventPublisher, and IReservationRepository.
      </p>

      <p>
        The Application layer coordinates the booking use case, while the
        Infrastructure layer provides concrete implementations using Redis,
        Kafka, and MongoDB.
      </p>

      <p>
        This keeps the core booking workflow from depending directly on a
        particular database or messaging technology.
      </p>

      {/* AUTH */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Authentication Is a Separate Service
      </h2>

      <p>
        I kept authentication separate from the reservation system instead of
        putting user management directly inside the Reservation API.
      </p>

      <p>
        The Auth service is another ASP.NET Core application. It stores users in
        PostgreSQL through Dapper, hashes passwords using BCrypt, and issues JWT
        access tokens after registration or login.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`React Client
     ↓
Register / Login
     ↓
Auth API
     ↓
PostgreSQL

Successful Authentication
     ↓
JWT Access Token
     ↓
React Client`}
      </pre>

      <p>The JWT is then included when the client creates a reservation.</p>

      <p>
        The Reservation API validates the token and extracts the user identity
        from its claims.
      </p>

      <p>
        One detail I deliberately enforced is that the API does not trust a
        CustomerId sent by the browser.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`var customerId =
    User.FindFirstValue(ClaimTypes.NameIdentifier) ??
    User.FindFirstValue("sub") ??
    User.FindFirstValue("nameid");

request.CustomerId = customerId;`}
      </pre>

      <p>
        Even if a client modifies the request payload, the authenticated user
        identity used for the reservation comes from the JWT.
      </p>

      {/* RESERVATION FLOW */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        What Happens When Reserve Is Clicked
      </h2>

      <img
        src="/images/microbooker/reservation-flow.png"
        alt="MicroBooker reservation request sequence"
        className="rounded-lg shadow-md w-full my-8"
      />

      <p>
        A reservation request moves through several systems before it is
        considered complete.
      </p>

      <ol>
        <li>The React client sends the reservation with a JWT.</li>
        <li>The Reservation API validates the token.</li>
        <li>The customer identity is extracted from the JWT.</li>
        <li>The Application layer attempts to acquire a Redis lock.</li>
        <li>The reservation is inserted into MongoDB.</li>
        <li>A ReservationCreated event is published to Kafka.</li>
        <li>The API returns the created reservation.</li>
        <li>The Storage Worker consumes the Kafka event.</li>
        <li>The worker upserts the reservation into MongoDB.</li>
        <li>The worker stores a cached copy in Redis.</li>
        <li>The Kafka offset is committed after processing.</li>
      </ol>

      {/* CONCURRENCY */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        The Main Engineering Problem: Double Booking
      </h2>

      <img
        src="/images/microbooker/concurrency.png"
        alt="MicroBooker Redis and MongoDB double booking protection"
        className="rounded-lg shadow-md w-full my-8"
      />

      <p>
        The most important design decision in MicroBooker was not relying on a
        single mechanism to prevent duplicate reservations.
      </p>

      <p>Instead, the system protects a booking at multiple levels:</p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Frontend Availability
        ↓
Redis Distributed Lock
        ↓
MongoDB Unique Index
        ↓
Reservation Accepted`}
      </pre>

      {/* REDIS */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Layer One: Redis Distributed Locking
      </h2>

      <p>
        Before the reservation is persisted, ReservationService asks
        ILockService to acquire a temporary lock for the requested table and
        time.
      </p>

      <p>
        The Redis implementation builds a key containing the table and time
        slot:
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`lock:table:{tableId}:slot:{timeSlot}`}
      </pre>

      <p>
        The lock is written using Redis only if the key does not already exist:
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`return await _redisDb.StringSetAsync(
    lockkey,
    "locked",
    duration,
    When.NotExists
);`}
      </pre>

      <p>In the booking workflow, that duration is currently 30 seconds.</p>

      <p>
        If User A already holds the lock for a particular table and time, User B
        cannot acquire the same lock while it is active.
      </p>

      <p>The second request is rejected with HTTP 409 Conflict.</p>

      <h3 className="text-xl font-bold text-terminal-cyan mt-8">
        Why Not Just Use lock in C#?
      </h3>

      <p>
        An in-memory C# lock only coordinates requests inside one running
        process.
      </p>

      <p>
        If two Reservation API instances were running, each instance would have
        its own memory and therefore its own lock.
      </p>

      <p>
        Redis provides a shared coordination point that all instances can
        access.
      </p>

      {/* MONGO */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Layer Two: MongoDB Is the Final Guarantee
      </h2>

      <p>
        Redis helps reduce concurrent processing, but I deliberately do not
        treat Redis as the final source of truth.
      </p>

      <p>The database still has to protect itself.</p>

      <p>
        During Reservation API startup, MicroBooker creates a MongoDB unique
        compound index over:
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`RestaurantId
+
TableId
+
TimeSlot`}
      </pre>

      <p>The index is named:</p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`ux_reservation_slot`}
      </pre>

      <p>
        This means MongoDB itself refuses to persist two reservations with the
        same restaurant, table, and time.
      </p>

      <p>The repository catches MongoDB's duplicate-key error:</p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`catch (MongoWriteException exception)
    when (
        exception.WriteError?.Category ==
        ServerErrorCategory.DuplicateKey
    )
{
    return false;
}`}
      </pre>

      <p>This is the actual consistency boundary of the system.</p>

      <p>
        Redis provides fast early coordination. MongoDB provides the final
        database-level guarantee.
      </p>

      {/* BOOKING SERVICE */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Booking Orchestration
      </h2>

      <p>
        The Application layer contains ReservationService, which coordinates the
        complete booking operation.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Acquire Lock
     ↓
Create Reservation
     ↓
Try MongoDB Insert
     ↓
Publish Kafka Event
     ↓
Return Result`}
      </pre>

      <p>
        ReservationService does not know how Redis, MongoDB, or Kafka are
        implemented.
      </p>

      <p>It depends on three contracts:</p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`ILockService
IReservationRepository
IEventPublisher`}
      </pre>

      <p>ASP.NET Core dependency injection maps those interfaces to:</p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`ILockService
    → RedisLockService

IReservationRepository
    → MongoReservationRepository

IEventPublisher
    → KafkaEventPublisher`}
      </pre>

      <p>
        That separation made it easier to keep infrastructure concerns outside
        the booking use case itself.
      </p>

      {/* KAFKA */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Event-Driven Processing with Kafka
      </h2>

      <p>
        After MongoDB successfully stores the reservation, the Reservation API
        serializes the reservation and publishes it to Kafka.
      </p>

      <p>The topic is:</p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`reservations`}
      </pre>

      <p>The Reservation API acts as the producer.</p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Reservation API
      ↓
Serialize Reservation
      ↓
Kafka "reservations" Topic`}
      </pre>

      <p>
        The main reason for introducing a message broker was to separate the
        HTTP request from work that does not necessarily need to happen inside
        that request.
      </p>

      <p>This also creates room for additional consumers later:</p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`ReservationCreated
      ↓
 ┌─────────────────────┐
 │ Storage Worker      │
 │ Email Worker        │
 │ Analytics           │
 │ Notifications       │
 │ Audit Logging       │
 │ Reporting           │
 └─────────────────────┘`}
      </pre>

      {/* WORKER */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        The Storage Worker
      </h2>

      <p>
        MicroBooker includes a separate .NET BackgroundService that runs
        independently from the HTTP API.
      </p>

      <p>It subscribes to the reservations Kafka topic using:</p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`consumer group:
storage-worker-group`}
      </pre>

      <p>Kafka automatic commits are disabled.</p>

      <p>When the worker receives an event, it:</p>

      <ol>
        <li>Deserializes the reservation.</li>
        <li>Upserts it into MongoDB using the reservation ID.</li>
        <li>Serializes it again for caching.</li>
        <li>Stores it in Redis for 24 hours.</li>
        <li>Commits the Kafka message.</li>
      </ol>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Kafka Event
     ↓
Storage Worker
     ↓
Deserialize
     ↓
MongoDB Upsert
     ↓
Redis Cache
     ↓
Commit Kafka Offset`}
      </pre>

      <h3 className="text-xl font-bold text-terminal-cyan mt-8">Why Upsert?</h3>

      <p>
        The worker uses the reservation ID as the lookup key and performs a
        MongoDB replacement with IsUpsert enabled.
      </p>

      <p>
        If the same reservation event is processed again, the operation updates
        the existing document rather than blindly creating another reservation
        with a new identity.
      </p>

      {/* CACHE */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Redis Has Two Different Jobs
      </h2>

      <p>
        Redis is intentionally used for two separate concerns in the project.
      </p>

      <h3 className="text-xl font-bold text-terminal-cyan mt-8">
        1. Distributed Coordination
      </h3>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`lock:table:{tableId}:slot:{timeSlot}

TTL: 30 seconds`}
      </pre>

      <h3 className="text-xl font-bold text-terminal-cyan mt-8">
        2. Reservation Caching
      </h3>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`reservation:{reservationId}

TTL: 24 hours`}
      </pre>

      <p>The first use prevents concurrent processing of the same slot.</p>

      <p>
        The second demonstrates how reservation data can be made available
        through a faster temporary data store.
      </p>

      {/* FRONTEND AVAILABILITY */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Frontend Availability Is Useful — But Not Trusted
      </h2>

      <p>
        The React client also tries to prevent users from selecting a known
        unavailable combination.
      </p>

      <p>
        Existing reservations are loaded and converted into table/time keys. A
        table is disabled when its selected date and time already exist in the
        reservation list.
      </p>

      <p>The client refreshes reservations every five seconds:</p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`const RESERVATION_REFRESH_INTERVAL_MS = 5000;

window.setInterval(
    refreshReservations,
    RESERVATION_REFRESH_INTERVAL_MS
);`}
      </pre>

      <p>It also refreshes when the browser window receives focus again.</p>

      <p>
        This makes the UI more responsive to bookings made by other users, but
        it is intentionally not treated as a consistency guarantee.
      </p>

      <p>
        A browser can be stale. A malicious user can bypass the UI. Two clients
        can submit within the same refresh interval.
      </p>

      <p>That is why the real protection still exists in Redis and MongoDB.</p>

      {/* HTTP RESPONSES */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        API Behaviour
      </h2>

      <p>The Reservation API exposes both reading and booking operations.</p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`GET /api/reservations

POST /api/reservations
Authorization: Bearer <JWT>`}
      </pre>

      <p>Successful reservation:</p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`202 Accepted`}
      </pre>

      <p>Locked or already-booked slot:</p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`409 Conflict

{
  "message":
  "Slot is locked or already booked."
}`}
      </pre>

      <p>Missing or invalid authentication:</p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`401 Unauthorized`}
      </pre>

      {/* FAILURE BOUNDARY */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        A Trade-Off in the Current Event Flow
      </h2>

      <p>
        One interesting part of the current implementation is the boundary
        between database persistence and event publication.
      </p>

      <p>
        The reservation is written to MongoDB first. Kafka publication happens
        afterward.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`MongoDB Insert
      ↓
Successful
      ↓
Publish Kafka Event`}
      </pre>

      <p>
        If Kafka publication fails, the exception is logged, but the reservation
        remains stored.
      </p>

      <p>
        This prevents a messaging failure from incorrectly deleting a valid
        booking, but it also means there is currently a possible state where the
        booking exists while its event was never delivered.
      </p>

      <p>
        A production evolution of this architecture could use the Transactional
        Outbox pattern so database persistence and reliable event publication
        can be coordinated more safely.
      </p>

      <p>
        I think this is an important part of the project because distributed
        systems are not only about adding Redis and Kafka. They are about
        deciding where consistency boundaries exist and understanding what can
        happen when one dependency fails.
      </p>

      {/* DOCKER */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Local Infrastructure with Docker
      </h2>

      <p>
        I used Docker Compose to make the infrastructure dependencies
        reproducible during local development.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Redis       → 6379
MongoDB     → 27017
Zookeeper   → 2181
Kafka       → 9092`}
      </pre>

      <p>
        This allowed the Reservation API and Storage Worker to run against the
        same Redis, MongoDB, and Kafka environment without requiring those
        services to be manually installed and configured on the host machine.
      </p>

      {/* DEPLOYMENT */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        CI/CD and AWS Deployment
      </h2>

      <img
        src="/images/microbooker/deployment.png"
        alt="MicroBooker GitHub Actions and AWS deployment pipeline"
        className="rounded-lg shadow-md w-full my-8"
      />

      <p>
        I also added a GitHub Actions pipeline so the application could be built
        consistently outside my local environment.
      </p>

      <p>
        The workflow contains separate jobs for the .NET solution and React
        client.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Push / Pull Request
       ↓
GitHub Actions
       ↓
 ┌──────────────────┐
 │ Build .NET       │
 │ Build React      │
 └──────────────────┘`}
      </pre>

      <p>On pushes to main, the pipeline also builds Docker images for:</p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`microbooker-api

microbooker-worker`}
      </pre>

      <p>
        Those images are authenticated against AWS and pushed into Amazon ECR.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`GitHub
   ↓
GitHub Actions
   ↓
Docker Build
   ↓
Amazon ECR
   ↓
AWS Runtime`}
      </pre>

      <p>
        The wider deployment also uses AWS infrastructure including EC2,
        CloudFront, Route 53, HTTPS, and container images stored in ECR.
      </p>

      {/* HEALTH */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Health and Liveness
      </h2>

      <p>The Reservation API exposes simple operational endpoints:</p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`GET /health
→ Healthy

GET /live
→ ok`}
      </pre>

      <p>
        They provide lightweight endpoints that infrastructure can use to
        determine whether the application process is available.
      </p>

      {/* ENGINEERING */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        How the Architecture Fits Together
      </h2>

      <p>
        What I like about MicroBooker is that each technology has a specific
        reason to exist.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`React
    → User interaction and availability

JWT
    → Authenticated identity

PostgreSQL
    → Authentication user storage

Redis Lock
    → Distributed coordination

MongoDB
    → Reservation persistence
      + final duplicate protection

Kafka
    → Asynchronous event communication

Storage Worker
    → Background processing

Redis Cache
    → Temporary fast reservation storage

Docker
    → Reproducible runtime environment

GitHub Actions
    → Automated build and image publishing

AWS
    → Production infrastructure`}
      </pre>

      {/* DEVELOPMENT EVOLUTION */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        How the Project Evolved
      </h2>

      <p>
        The project started with the reservation workflow, but each new
        engineering question pushed the architecture further.
      </p>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`Basic Reservation API
        ↓
Authentication
        ↓
Concurrent Booking Problem
        ↓
Redis Lock
        ↓
Database-Level Guarantee
        ↓
MongoDB Unique Index
        ↓
Asynchronous Processing
        ↓
Kafka
        ↓
Background Worker
        ↓
Redis Caching
        ↓
Dockerized Infrastructure
        ↓
CI/CD
        ↓
AWS Deployment`}
      </pre>

      <p>
        The result is more than a restaurant booking interface. It became a
        practical environment for working through problems that appear in
        distributed backend systems: identity, race conditions, consistency,
        asynchronous communication, idempotency, caching, failure boundaries,
        containerization, and deployment.
      </p>

      {/* FINAL */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        What I Took Away from MicroBooker
      </h2>

      <p>
        The biggest lesson from the project was that adding distributed
        infrastructure is relatively easy compared with deciding what each
        component should actually guarantee.
      </p>

      <p>
        Redis can reduce a race condition, but the database still needs its own
        constraint.
      </p>

      <p>
        Kafka can decouple work, but that introduces message-delivery and
        failure questions.
      </p>

      <p>
        A frontend can improve availability feedback, but it cannot be trusted
        as the source of truth.
      </p>

      <p>
        Authentication can identify a user, but the API still has to avoid
        trusting identity information supplied directly by the client.
      </p>

      <p>
        MicroBooker gave me a project where those concerns could be implemented
        together instead of studied as isolated concepts.
      </p>

      {/* LINKS */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Project Links
      </h2>

      <div className="flex flex-wrap gap-4 mt-4">
        <a
          href="https://microbooker.babakraeisi.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-terminal-cyan underline"
        >
          Live Application
        </a>

        <a
          href="https://github.com/BabakRaeisi/MicroBooker"
          target="_blank"
          rel="noopener noreferrer"
          className="text-terminal-cyan underline"
        >
          MicroBooker GitHub
        </a>

        <a
          href="https://github.com/BabakRaeisi/AuthMicroservice"
          target="_blank"
          rel="noopener noreferrer"
          className="text-terminal-cyan underline"
        >
          Auth Microservice
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

export default MicroBooker;
