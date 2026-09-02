import { Link } from "react-router-dom";

type GalleryProps = {
  images: string[];
  title: string;
};

const Gallery = ({ images, title }: GalleryProps) => {
  return (
    <div
      className={`grid gap-4 my-8 ${
        images.length === 1 ? "grid-cols-1" : "md:grid-cols-2"
      }`}
    >
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={`${title} - image ${index + 1}`}
          loading="lazy"
          className="rounded-lg shadow-md w-full"
        />
      ))}
    </div>
  );
};

const Lost = () => {
  const blockout = [
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/2/e/8/2e87e82c78bc9bd60eef613e665a7062e3dd14b9.jpeg",
  ];

  const firstMaterialPass = [
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/0/c/5/0c5bd1082c1ccba1752c4f02fed43cc28302cf1b.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/b/2/e/b2e17a673f62d78de4ee3a8d57768250e9149122.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/e/a/e/eae623eea087096edd91643b8fd1843e59bd77bb.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/b/0/9/b092404a8e66a10832d6ace64cd75f6229294492.jpeg",
  ];

  const referenceLighting = [
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/f/0/e/f0e70b887453028b21a7f446c0c27ebe18011347.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/6/d/9/6d9f504de1999df9c1dd7517dfa51d5644aca57a.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/0/e/d/0ed4b189bb3bb6e0bf60338151ae8c8c05968c74.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/7/3/f/73fbb7484ee69842da83acfb0d95153ce61e750b.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/7/3/c/73cd15e976a769748dc9b089d369d86c49b219b9.jpeg",
  ];

  const environmentAndFurniture = [
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/f/f/7/ff7c89336b37da271eb91ea9a1532c6faa614790.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/f/b/2/fb2079bc1284a59e39b1c8344a3732ba7e48689c.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/6/6/5/665bb00593bed8c94aa8fc5611860d6aec9d435a.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/a/9/8/a98de460a7bf9dcc9375caae6ebd611a6c021a9d.jpeg",
  ];

  const assetDevelopment = [
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/0/a/4/0a4f4ea614b3e2135cd48b92e0f4498c4cba415a.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/d/2/1/d21bb48b6ab6367eaeb4d3e8dbb4ef866bce5eb8.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/f/0/f/f0ff039682563490986eb93f63491e3f909baa3e.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/e/a/0/ea00e03f593b417ef2d4bef5cee61ec833edc8ce.jpeg",
  ];

  const refinement = [
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/7/6/5/765a56fbd5559adb4eb4e017386c1c68990d40d6.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/d/f/c/dfce5fddf4b29552902adb9e86258607fc718a8c.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/e/d/1/ed1f2493010d58d93ff2190ca04b1982c3425ca7.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/f/0/c/f0cd32a8fbdedaa0064a44d80844d17e8bffb704.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/2/9/a/29a01b97586c5cf7b9415419294ac9b4cef6b02c.jpeg",
  ];

  const modelingBreakdown = [
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/8/6/9/869d2276777aa50c2ed8e566106b33849c578c61.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/0/0/e/00ef32dba9c0c4d7f6148657b37406003c7aa046.jpeg",
  ];

  const storytellingPass = [
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/7/5/c/75c5c61e1564253e5ee117505dee7179ae571007.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/6/6/6/6660653d031bb7d2fdf0d728702e30b4c2f24f27.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/8/e/d/8ed86b36a69778e00d1944c3be79db99f0c37d60.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/9/4/c/94c177e9aa3a0acee91a41cc10b1c0e287485393.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/f/d/6/fd6377cdee260ab8a8256424006957c703799454.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/d/4/1/d41d2864f074889b8b73991e5863a0d82e270eeb.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/8/7/d/87dc363b702e00a51d1d9cde18b13fb31e77b50a.jpeg",
  ];

  const projectorDevelopment = [
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/5/c/a/5ca6e8866437f17027a27adba4f47a5cd993bd12.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/7/f/8/7f83c9c08639abbf9fc11939a211f74a7eaf67fd.jpeg",
  ];

  const lockdownLighting = [
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/4/1/c/41cee4a70be10bb25f37dd7938a6c85d4be15c3b.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/1/c/b/1cbb15c105a236ee0afd0239e33754aab1d099e2.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/d/c/0/dc0c6a9caf203628c81a9c228ba717fa0231a280.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/2/f/3/2f30e9edd7ba98a444cc51360cad1e30cbd6a636.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/f/c/b/fcb8fe806efe68c7d2e7e3363d9e04452ea8c5b8.jpeg",
  ];

  const projectorFinal = [
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/b/c/3/bc3506f95653d21797c0de6e0ecaeebd6e317430.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/6/e/e/6eeb3c7aff2a720e05732af67a1690b508602fc5.jpeg",
  ];

  const finalLighting = [
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/0/c/6/0c6051682df1bd3982d5a65f44d6536362503da9.jpeg",
    "https://d3kjluh73b9h9o.cloudfront.net/original/4X/d/0/7/d07906c62d685f43cf186b691346bf8e89258edc.jpeg",
  ];

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
        Recreating The Hatch from LOST
      </h1>

      <p className="text-xl text-muted-foreground">
        Rebuilding the Swan Station as a real-time environment through reference
        gathering, environment modeling, material creation, prop production,
        lighting, optimization, and visual storytelling.
      </p>

      <div className="flex flex-wrap gap-2 my-6">
        {[
          "Unreal Engine",
          "Maya",
          "Substance 3D Painter",
          "Environment Art",
          "3D Modeling",
          "Lighting",
          "Materials",
        ].map((tag) => (
          <span key={tag} className="bg-muted px-3 py-1 rounded text-sm">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 my-6">
        <a
          href="https://forums.unrealengine.com/t/the-hatch-from-lost-tv-show/1727874"
          target="_blank"
          rel="noopener noreferrer"
          className="text-terminal-cyan underline"
        >
          Unreal Engine Development Thread
        </a>

        <a
          href="https://youtu.be/y_K-mmoKP00"
          target="_blank"
          rel="noopener noreferrer"
          className="text-terminal-cyan underline"
        >
          Final Video
        </a>
      </div>

      {/* VIDEO */}
      <div className="aspect-video w-full my-8">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/y_K-mmoKP00"
          title="The Hatch from LOST Environment"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* OVERVIEW */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        The Project
      </h2>

      <p>
        The Hatch was my final environment project during my Video Game Art
        master's program at Universal Art School in Valencia.
      </p>

      <p>
        I chose to recreate the Swan Station from LOST because it offered
        something more interesting than simply reproducing a room. It is a space
        with a very recognizable architectural language, unusual furniture,
        industrial structures, aged surfaces, and a strong narrative identity.
      </p>

      <p>
        I spent several months rebuilding the environment from television
        references: studying its proportions, modeling the architecture and
        props, creating materials, assembling the scene in Unreal Engine,
        iterating on lighting, and eventually using the environment to tell a
        specific story.
      </p>
      {/* DEVELOPMENT VIDEO */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        From Blockout to Final Environment
      </h2>

      <p>
        I documented the environment throughout development rather than only
        recording the finished result. This video shows the project evolving
        from the original blockout into the completed Swan Station.
      </p>

      <div className="aspect-video w-full my-8">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/z04LMjWdTas"
          title="The Hatch from LOST - Blockout to Final Environment"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <p className="text-sm text-muted-foreground">
        Development progression from the first environment blockout through
        modeling, materials, set dressing, lighting, and the final Unreal Engine
        scene.
      </p>

      <p>
        Seeing the stages next to each other also shows how much of the final
        result came from iteration. The basic architecture established the
        proportions, but the identity of the environment appeared gradually as I
        introduced materials, furniture, smaller props, surface variation,
        decals, lighting, and environmental storytelling.
      </p>
      {/* REFERENCES */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Starting with References, Not Geometry
      </h2>

      <p>
        The first challenge was that I did not have architectural drawings or
        production assets from the television set.
      </p>

      <p>
        I gathered screenshots from different episodes and compared camera
        angles to understand how the rooms connected. Because shots from the
        show were filmed from different positions and sometimes contained small
        visual inconsistencies, I had to interpret the references rather than
        copy a single image.
      </p>

      <Gallery images={blockout} title="Reference gathering and blockout" />

      <p>
        I began with a simple blockout. At this stage I was not concerned with
        final materials or small details. The goal was to establish the
        proportions of the main living area, kitchen, corridors, ceiling
        structure, dining space, and surrounding rooms.
      </p>

      {/* FIRST MATERIAL PASS */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        From Blockout to Environment
      </h2>

      <p>
        Once the scale felt believable, I started replacing the blockout with
        actual surfaces and introducing the visual language of the station.
      </p>

      <p>
        Concrete became particularly important. Much of the environment is
        defined by large structural beams and curved concrete walls, so those
        surfaces needed enough variation and roughness to avoid feeling like
        clean game geometry.
      </p>

      <Gallery
        images={firstMaterialPass}
        title="First environment material pass"
      />

      <p>
        This was also the first serious lighting pass. At this stage the scene
        was still sparse, but it allowed me to start evaluating how the
        materials reacted under Unreal's lighting rather than judging them in
        isolation.
      </p>

      {/* REFERENCE LIGHTING */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Matching the Space Through Reference
      </h2>

      <p>
        As I found better reference images, I changed parts of the geometry
        rather than treating the original blockout as permanent.
      </p>

      <p>
        I also began placing television references directly next to my Unreal
        screenshots. This made differences in wall color, floor patterns,
        furniture placement, lighting direction, and proportions much easier to
        see.
      </p>

      <Gallery
        images={referenceLighting}
        title="Reference-based material and lighting development"
      />

      <p>
        I created tileable materials for large areas such as floors and walls so
        that the environment could maintain texture detail without requiring a
        unique texture set for every surface.
      </p>

      {/* FURNITURE */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Building the Station's Furniture
      </h2>

      <p>
        Once the architecture was established, the next major phase was
        populating the environment.
      </p>

      <p>
        The Swan Station works visually because it does not feel like a clean
        bunker. It feels occupied. Shelves, books, chairs, kitchen equipment,
        tables, lamps and personal objects give the environment its identity.
      </p>

      <Gallery
        images={environmentAndFurniture}
        title="Furniture and environment asset development"
      />

      <p>
        I modeled and UV mapped several of the larger pieces myself, including
        shelving, tables and furniture that were important to matching the
        reference.
      </p>

      {/* PERFORMANCE */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Detail Had to Remain Affordable
      </h2>

      <p>
        As more props and textures entered the environment, I started checking
        performance instead of waiting until the final week.
      </p>

      <p>
        Some texture resolutions were reduced after profiling the scene. At that
        stage I was able to run the environment at around 120 FPS under the
        settings I was testing, although the exact result naturally depended on
        Unreal Engine settings and hardware.
      </p>

      <Gallery
        images={assetDevelopment}
        title="Environment asset and performance development"
      />

      <p>
        This stage was a useful reminder that environment art is not only
        modeling. Every asset contributes to texture memory, geometry cost,
        material complexity and the final lighting workload.
      </p>

      {/* REFINEMENT */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Refining Materials and Lighting Together
      </h2>

      <p>
        The next iterations focused less on adding large objects and more on
        making the existing environment feel cohesive.
      </p>

      <p>
        I adjusted lighting, changed textures to reduce memory usage, refined
        wall vertex materials, and continued texturing smaller assets.
      </p>

      <Gallery images={refinement} title="Material and lighting refinement" />

      <p>
        Lighting and materials had to be developed together. A material that
        looked convincing under one lighting setup could become too flat,
        reflective, or dark after the lighting changed.
      </p>

      {/* MODEL BREAKDOWN */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Modeling from Imperfect References
      </h2>

      <p>Some objects required much more interpretation than others.</p>

      <p>
        The armchair and ping-pong table are examples of assets where I used
        several screenshots from the show to reconstruct both the overall
        proportions and smaller details that were never clearly visible in a
        single shot.
      </p>

      <Gallery images={modelingBreakdown} title="Modeling and UV breakdown" />

      <p>
        These breakdowns show the process behind the final objects: reference
        collection, polygon modeling, UV layout, and then the asset placed back
        into the environment.
      </p>

      {/* STORY */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Turning the Recreation into a Story
      </h2>

      <p>
        At this point I did not want the project to end as a clean recreation of
        an empty television set.
      </p>

      <p>
        I chose one of the station's lockdown situations as the narrative basis
        for the final environment.
      </p>

      <p>
        That decision changed how I approached the remaining work. The blast
        doors became important visual elements rather than background
        architecture, and I began adding decals, dirt, scattered objects and
        environmental damage that suggested something had happened shortly
        before the viewer arrived.
      </p>

      <Gallery
        images={storytellingPass}
        title="Environmental storytelling and lockdown development"
      />

      <p>
        I also created reusable tileable materials for groups of wooden and
        metal assets. Instead of giving every prop an unrelated texture set,
        similar materials could share a consistent surface language.
      </p>

      {/* PROJECTOR */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Choosing a Hero Asset
      </h2>

      <p>
        I originally considered spending more time on another large furniture
        asset, but the scene already contained several chairs and tables.
      </p>

      <p>
        Instead, I chose the old projector from the Swan Station as the hero
        prop.
      </p>

      <p>
        It was a better choice because it was visually distinctive, connected
        directly to the identity of LOST, and gave me an opportunity to work on
        a mechanically detailed object rather than another piece of furniture.
      </p>

      <Gallery
        images={projectorDevelopment}
        title="Projector hero asset development"
      />

      <p>
        I modeled the projector in Maya from several close-up references. The
        geometry includes the case, ventilation, controls, mechanical components
        and the folding reel arms.
      </p>

      {/* LOCKDOWN */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        The Lockdown Pass
      </h2>

      <p>
        The final environment was built around the idea that somebody had been
        caught inside during the station's lockdown and had escaped after being
        injured beneath one of the large blast doors.
      </p>

      <p>
        Blood, displaced objects, the ladder and the partially disrupted space
        were used to imply that event without showing it directly.
      </p>

      <Gallery
        images={lockdownLighting}
        title="Lockdown storytelling and lighting"
      />

      <p>
        This gave the environment a reason to exist beyond accuracy. Instead of
        asking only "does this look like The Hatch?", I could also ask "what
        happened here?"
      </p>

      {/* HERO FINAL */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Finishing the Projector
      </h2>

      <p>The projector went through its own modeling and UV iteration.</p>

      <p>
        After comparing the first version against the reference, I realized that
        some of the edges were too sharp and the silhouette was not matching the
        original object closely enough.
      </p>

      <p>
        I added geometry around the corners and refined the forms before
        completing the final material work.
      </p>

      <Gallery
        images={projectorFinal}
        title="Finished projector modeling and reference comparison"
      />

      {/* FINAL LIGHTING */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Lighting Was an Iterative Process
      </h2>

      <p>Lighting changed repeatedly throughout the project.</p>

      <p>
        Initially, several fixtures were not producing the depth I wanted and
        some lights were not casting useful shadows. Later passes adjusted
        intensity, radius, shadow behavior and IES light profiles.
      </p>

      <Gallery
        images={finalLighting}
        title="Lighting before and after comparison"
      />

      <p>
        The before-and-after images are important because the geometry barely
        changes. Most of the improvement comes from how the same environment is
        presented through shadow, contrast, falloff and light placement.
      </p>

      {/* WORKFLOW */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        The Complete Workflow
      </h2>

      <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
        {`LOST References
      ↓
Environment Blockout
      ↓
Architecture Modeling
      ↓
Tileable Materials
      ↓
Furniture + Props
      ↓
UV Mapping
      ↓
Substance Texturing
      ↓
Unreal Assembly
      ↓
Lighting Passes
      ↓
Optimization
      ↓
Decals + Set Dressing
      ↓
Environmental Storytelling
      ↓
Hero Projector
      ↓
Final Lighting`}
      </pre>

      {/* LESSONS */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        What Changed Most During the Project
      </h2>

      <p>
        The first version of the environment was concerned almost entirely with
        matching the shape of the set.
      </p>

      <p>
        By the end, the project had become much more about hierarchy and
        storytelling.
      </p>

      <p>
        Large architectural forms establish the space. Furniture explains how it
        is used. Materials communicate age. Small props make it feel inhabited.
        Lighting controls where the viewer looks. Decals and displaced objects
        suggest what happened before the viewer entered.
      </p>

      <p>
        That shift was the most important part of the project for me. A
        believable environment is not created by making every individual asset
        complicated. It comes from making all of the assets support the same
        place and the same story.
      </p>

      {/* DEVELOPMENT THREAD */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Documenting the Development
      </h2>

      <p>
        I documented the project publicly while I was building it, posting
        weekly progress updates to the Epic Developer Community forum.
      </p>

      <p>
        Looking back at that thread now is useful because it preserves the
        iterations that normally disappear from a finished portfolio piece:
        unfinished geometry, wrong lighting decisions, temporary materials, UV
        problems, performance adjustments and reference comparisons.
      </p>

      <p>
        The final render shows the result. The development thread shows how I
        got there.
      </p>

      {/* LINKS */}
      <h2 className="text-2xl font-bold text-terminal-green mt-12">
        Project Links
      </h2>

      <div className="flex flex-wrap gap-4 mt-4">
        <a
          href="https://forums.unrealengine.com/t/the-hatch-from-lost-tv-show/1727874"
          target="_blank"
          rel="noopener noreferrer"
          className="text-terminal-cyan underline"
        >
          Unreal Engine Forum Thread
        </a>

        <a
          href="https://youtu.be/y_K-mmoKP00"
          target="_blank"
          rel="noopener noreferrer"
          className="text-terminal-cyan underline"
        >
          Final Environment Video
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

export default Lost;
