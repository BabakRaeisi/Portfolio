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

          <h1 className="text-4xl font-bold text-terminal-green">Building a Tetris-Style Inventory System in Unity</h1>
          <p className="text-sm text-muted-foreground">Posted on: June 18, 2024</p>

          <div className="h-8 bg-transparent"/>

          <p>
              This Unity-based project was developed as part of my Games Engine Programming module...
          </p>

          <div className="h-8 bg-transparent"/>
          <h2 className="text-2xl font-bold text-terminal-green">Project Features</h2>
          <ul>
              <li>🧱 Grid-based item placement and rotation</li>
              <li>🔫 Item types include weapons, food, and potions</li>
              <li>⚙️ Optimized to meet strict module deadlines</li>
              <li>🧪 Prototyped using two architecture styles</li>
          </ul>

          <div className="h-8 bg-transparent"/>
          <h2 className="text-2xl font-bold text-terminal-green">Design Challenges</h2>
          <p>
              The project faced several challenges, including:
              <ul className="list-disc pl-5">
                  <li>Ensuring smooth item rotation and placement</li>
                  <li>Balancing performance with complex item interactions</li>
                  <li>Adhering to strict deadlines while maintaining quality</li>
              </ul>
          </p>
          <div className="h-4 bg-transparent"/>

          <p>
              The biggest challenge originally was that I could not follow an observable design pattern, so I switched
              to a singleton design to complete this project.
              However, now that I have a better understanding, I can see the efficiency of using an observable
              architecture, and I probably could remake it using this pattern.
          </p>


          <h2 className="text-2xl font-bold text-terminal-green mt-8 mb-2">Mouse Position Calculation</h2>
          <img
              src="/images/CoordinateCalculation.png"
              alt="Grid Position Calculation"
              className="rounded-lg shadow-md max-w-full"
          />
          <div className="h-2 bg-transparent"/>
          <pre className="bg-muted text-sm p-4 rounded overflow-x-auto whitespace-pre-wrap font-mono mb-4">
              
            <code>
            {`Xpos = mouseX / cellWidth
Ypos = mouseY / cellHeight

GridPosition = Ceil(Xpos), Ceil(Ypos)`}
            </code>
          </pre>

          <p className="mb-6">
              This pseudocode converts the mouse’s screen position into a usable inventory grid coordinate.
              It divides the raw pixel position by the cell size, and uses <code
              className="bg-muted px-1 rounded">Ceil()</code> to snap to the top-left of the clicked grid tile.
          </p>
          <div className="h-4 bg-transparent"/>

          <h2 className="text-2xl font-bold text-terminal-green mt-8 mb-2">Item Placement Calculation</h2>
          <img
              src="/images/item.png"
              alt="Grid Position Calculation"
              className="rounded-lg shadow-md max-w-full"
          />
          <div className="h-2 bg-transparent"/>
          <pre className="bg-muted text-sm p-4 rounded overflow-x-auto whitespace-pre-wrap font-mono mb-4">
              
            <code>
            {`Inventory[x, y] = item  // Place item at grid position
item = Inventory[x, y]  // Get item at grid position
Inventory[x, y] = null  // Remove item at grid position

// When placing larger items:
item.width = 2
item.height = 1
item.placedX = x
item.placedY = y`}
            </code>
          </pre>

          <p className="mb-6">
              This snippet demonstrates the core functionality of placing, retrieving, and removing items from a 2D
              inventory array. For larger items (e.g., 2x1), their original placement coordinates (
              <code className="bg-muted px-1 rounded">placedX</code>,<code
              className="bg-muted px-1 rounded">placedY</code>)
              must be stored to allow proper cleanup or logic execution.
              All operations involving multi-cell items must iterate through the full width and height of the item
              during placement and removal.
          </p>

          <div className="h-4 bg-transparent"/>

          <img
              src="/images/rotItem.png"
              alt="Grid Position Calculation"
              className="rounded-lg shadow-md max-w-full"
          />

          <div className="h-2 bg-transparent"/>

          <pre className="bg-muted text-sm p-4 rounded overflow-x-auto whitespace-pre-wrap font-mono mb-4">
            <code>
            {`PlaceItem(x, y)
    item.placementX = x
    item.placementY = y

    FOR w = 0 TO item.width - 1
        FOR h = 0 TO item.height - 1
            IF NOT item.rotated THEN
                Inventory[x + w, y + h] = item
            ELSE
                Inventory[x + h, y + w] = item
            ENDIF
        ENDFOR
    ENDFOR
`}
            </code>
          </pre>

          <p className="mb-6">
              This routine handles placing an item of arbitrary size and rotation into a grid-based inventory.
              It stores the initial placement coordinates and uses nested loops to iterate over the width and height of
              the item.
              If the item is rotated, the width and height axes are swapped when inserting into the inventory array,
              ensuring correct orientation.
          </p>

          <div className="h-4 bg-transparent"/>

          <img
              src="/images/placeChecks.png"
              alt="Grid Position Calculation"
              className="rounded-lg shadow-md max-w-full"
          />

          <div className="h-2 bg-transparent"/>

          <pre className="bg-muted text-sm p-4 rounded overflow-x-auto whitespace-pre-wrap font-mono mb-4">
            <code>
            {`CanPlaceItem(x, y)
    FOR w = 0 TO item.width - 1
        FOR h = 0 TO item.height - 1
            IF item.rotated THEN
                checkX = x + h
                checkY = y + w
            ELSE
                checkX = x + w
                checkY = y + h
            ENDIF

            IF checkX or checkY is out of bounds THEN
                RETURN false

            IF Inventory[checkX, checkY] is not empty THEN
                RETURN false
        ENDFOR
    ENDFOR

    RETURN true

`}
            </code>
          </pre>

          <p className="mb-6">
              This function checks whether an item can be safely placed into the inventory.
              It loops over the item's width and height (taking rotation into account), and for each tile it would
              occupy, it verifies that the target coordinates are within bounds and not already occupied.
              This prevents overlapping, out-of-bounds placement, and stacking errors shown in the image.
          </p>

          <div className="h-4 bg-transparent"/>
          <h2 className="text-2xl font-bold text-terminal-green mt-8 mb-2">Item Generation</h2>

          <img
              src="/images/itemGen.png"
              alt="Grid Position Calculation"
              className="rounded-lg shadow-md max-w-full"
          />

          <div className="h-2 bg-transparent"/>

          <pre className="bg-muted text-sm p-4 rounded overflow-x-auto whitespace-pre-wrap font-mono mb-4">
            <code>
            {`PlaceItemsInChest()
    itemsPlaced = 0
    failedAttempts = 0

    FOR each item in itemList
        placed = false

        FOR y = 0 to gridHeight
            FOR x = 0 to gridWidth
                IF CanPlaceItem(x, y, item) THEN
                    PlaceItem(x, y, item)
                    itemsPlaced += 1
                    placed = true
                    BREAK both loops
                ENDIF
            ENDFOR
        ENDFOR

        IF NOT placed THEN
            failedAttempts += 1
            IF failedAttempts >= 30 THEN
                BREAK
            ENDIF
        ENDIF
    ENDFOR


`}
            </code>
          </pre>

          <p className="mb-6">
              This chest-filling system uses a procedural approach, scanning tile-by-tile from the top-left of the grid
              to the bottom-right.
              For each item, it checks every position to see if the item can fit. If it finds a valid spot, the item is
              placed and the loop exits early.
              If no spot is found, a failed attempt is logged. After 30 failed attempts, the loop ends early, assuming
              the chest is full.
              This method is simple, efficient for small inventories, and was practical to implement under time
              constraints.
          </p>

          <div className="h-8 bg-transparent"/>
          <h2 className="text-2xl font-bold text-terminal-green">Further Reading</h2>
          <p>
              You can <a className="text-terminal-cyan underline"
                         href="https://github.com/jacobvillard/InventorySystemV2"
                         target="_blank">view the source code on GitHub</a>, check out the <a
              className="text-terminal-cyan underline" href="https://darknerior.itch.io/inventorysystem"
              target="_blank">live
              demo</a> or download the university <a className="text-terminal-cyan underline ml-1"
                                                     href="/files/gamesengineprogamming-v1.3.docx"
                                                     download="gamesengineprogamming-v1.3.docx"
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
