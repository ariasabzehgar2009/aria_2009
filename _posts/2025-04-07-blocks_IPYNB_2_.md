---
layout: post
title: Blocks
description: Lesson to teach others
comments: True
permalink: /csse/lessons/blocks
---

# Lesson: Understanding Game Blocks in JavaScript
## What are Game Blocks?
In game development, **blocks** are elements or objects in the game world that serve various purposes. They can be **static** or **dynamic**, and they define the physical boundaries and interactive objects in the game. In many platformers, such as Mario, blocks can serve as platforms that the player can land on, obstacles the player cannot pass, or even collectibles that the player can interact with. Blocks can also move, change states, or trigger events when the player interacts with them.
### Types of Blocks:
- **Static Blocks**: These blocks do not change or move. They are fixed in the game world and can act as platforms, walls, or boundaries. For example, a ground platform where a player can jump or stand is a static block.
- **Moving Blocks**: These blocks change their position over time. They can move up, down, left, right, or in other ways to challenge the player or provide interactive elements, like moving platforms or obstacles.
- **Boundary Blocks**: These blocks define the limits of the game world, preventing the player from going beyond certain areas. These can be walls that stop the player or areas where the player can fall off the screen.
---
## How Are Game Blocks Used in JavaScript?
In JavaScript, blocks are typically represented as objects with properties such as position, size, and movement behavior. These blocks are drawn on a canvas (like the HTML5 `<canvas>` element) and can be interacted with by the player or other elements in the game. JavaScript is often used to control the block's properties, such as their position on the screen, collision detection, and how they move.
### Block Representation in Code:
A block in JavaScript is usually defined as an object with the following properties:
- **Position** (`x`, `y`): Determines the location of the block in the game world.
- **Size** (`width`, `height`): Defines the dimensions of the block.
- **Color**: The appearance of the block.
- **Movement**: Blocks may have properties that define how they move, such as `speed` or `direction` for dynamic blocks.
### How Blocks Interact:
Blocks interact with the player and other game elements using **collision detection**. This is a way to check if two objects, like the player and a platform, are touching. When a collision is detected, the game can trigger an event, like stopping the player from falling through the platform or moving the player upward if they land on a platform.
Blocks can also trigger game events. For example, a collectible block might disappear when the player collides with it, or a moving block might change the level of difficulty by blocking the player’s path.

---
## What Do Blocks Do?
Blocks provide structure and interaction in the game world. They help define the environment, create challenges, and offer gameplay mechanics. They can:
- **Define the floor or ceiling**: Platforms for the player to jump on.
- **Create obstacles**: Walls or barriers that prevent the player from moving freely.
- **Provide interactivity**: Collectible blocks that grant points or power-ups when touched.
- **Challenge the player**: Moving blocks that require precise timing or strategy.
Game blocks are fundamental in creating a structured game world and enhancing player interaction.
## Code Examples
### Example 1: Static Platform Block
In this example, we create a simple static platform that the player can stand on.
```html
<canvas id="gameCanvas" width="800" height="600"></canvas>
<script>
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  // Define the static platform block
  const platform = {
    x: 100,
    y: 500,
    width: 300,
    height: 20,
    color: "green"
  };
  // Function to draw the platform
  function drawPlatform() {
    ctx.fillStyle = platform.color;
    ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
  }
  // Draw the platform on the canvas
  drawPlatform();
</script>


  

# Hack: Falling Block with Gravity
**Task**: Create a moving block that falls from the top of the screen and simulates gravity. The block should start from a random position at the top of the canvas, and gravity should pull it down to the bottom of the canvas. Your task is to:
- Implement the movement so that the block falls under the effect of gravity.
- Ensure the block stops at the bottom of the screen when it reaches the ground.
### Instructions:
1. **Create the Block**: The block should be represented as an object with properties such as `x`, `y`, `width`, `height`, and `color`.
2. **Apply Gravity**: The block should accelerate downward due to gravity. This can be achieved by updating the block's vertical speed (`speedY`) each frame.
3. **Stop at the Bottom**: When the block hits the bottom of the screen, it should stop falling and remain there.
4. **Randomize Horizontal Position**: The block's horizontal position (`x`) should be randomized when the game starts.
- Below is an example of how its implemented, but DONT COPY AND PASTE IT, implement it into the level of your choice and play around with the values. We wont accept just duplicates since this code isnt fully correct.




```python
import Npc from './Npc.js';

class FallingBlock extends Npc {
    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);
        this.fallSpeed = data?.fallSpeed || 2;
        this.maxY = data?.maxY || gameEnv.innerHeight;
        this.height = this.spriteData.pixels.height * this.spriteData.SCALE_FACTOR;
    }

    update() {
        if (this.position.y + this.height < this.maxY) {
            this.position.y += this.fallSpeed;
        } else {
            this.position.y = this.maxY - this.height;
        }

        this.draw();
    }
}

export default FallingBlock;

```
