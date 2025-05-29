---
layout: tailwindPost
title: Infograph
description: Infograph to inform others
comments: True
permalink: /gamify/adventureGame/infograph
---

## Notes for enhancements

[Link to Gamify online](https://nighthawkcoders.github.io/portfolio_2025/gamify) (requires login)

---

### Game Objects: Understanding Game Blocks in JavaScript

**What are Game Blocks?**
- Game blocks are elements in the game world that can be **static**, **moving**, or define **boundaries**.
- Used to build platforms, create challenges, and enable player interaction.

**Types of Game Blocks:**
- 🧱 **Static Blocks**: Stay in place. Used for platforms, walls, floors.
- 🔁 **Moving Blocks**: Move along set paths. Add timing and strategy.
- 🚧 **Boundary Blocks**: Mark the edges of the game world.

**How Are Blocks Used?**
- Represented as visual game objects with position, size, and movement.
- They control how the player can interact with the environment.

**What Can Blocks Do?**
- ✨ Define structure: floors, ceilings, and boundaries.
- ❌ Block movement: act as barriers or walls.
- 🎁 Enable interactivity: collectible blocks or triggers.
- 🎮 Create gameplay: moving obstacles or timing puzzles.

---

### Physics System: Gravity in 2D Games

**What Is Gravity?**
- Gravity is a simulated **pulling force** that makes objects fall downward.
- Helps objects behave more naturally in platformers and physics games.

**How Gravity Works:**
- 🔽 **Constant Acceleration**: Pulls objects downward every frame.
- 📈 **Velocity Increases Over Time**: Things fall faster as time passes.
- 🧮 **Position Updates**: Falling motion is smooth and continuous.
- ⛔ **Terminal Velocity**: Optional cap on fall speed for balance.

**Why Use Gravity?**
- 🌍 Makes the game feel realistic and immersive.
- 🕹️ Adds difficulty by requiring players to time jumps and landings.
- 🔄 Enables dynamic interactions between objects and platforms.

---

### Platformer Game Parts

**Platforms/Blocks/Gravity (Nether): Designing Platforms and Collision Detection**
- 🎨 Design and place platforms that define movement paths.
- 🤝 Implement collision logic to detect when the player lands on or hits blocks.
- 🧗 Enable the player to walk, jump, and interact using realistic gravity effects.




```python
%%js
const gravity = true;
const moved = false;
const acceleration = 0.5
let time = 0;
let Yvelocity = 0;
for (let i = 0; i <= 10; i++){
    if(!moved){
        if (gravity) {
                time += 1;
                Yvelocity += 0.5 + acceleration * time;
                console.log("Y velocity: " + Yvelocity + ", Time: " + time)
            }
        }
    else{
        this.time = 0;
    }
}
console.log('As you can see, the velocity of the block is increasing by a greater ammount every time')
```


    <IPython.core.display.Javascript object>


# Hack: Bouncing Block Effect

## Objective

Enhance your game by adding a bounce effect to a falling block. When the block falls due to gravity and hits the floor, make it bounce back upward to approximately half of its falling distance. This hack adds an engaging dynamic to your simulation and introduces basic collision response.

---


```python
import Character from './Character.js';

// Define non-mutable constants as defaults
const SCALE_FACTOR = 25; // 1/nth of the height of the canvas
const STEP_FACTOR = 100; // 1/nth, or N steps up and across the canvas
const ANIMATION_RATE = 1; // 1/nth of the frame rate
const INIT_POSITION = { x: 0, y: 0 };

/**
 * Player is a dynamic class that manages the data and events for objects like a player 
 * 
 * This class uses a classic Java class pattern which is nice for managing object data and events.
 * 
 * @method bindEventListeners - Binds key event listeners to handle object movement.
 * @method handleKeyDown - Handles key down events to change the object's velocity.
 * @method handleKeyUp - Handles key up events to stop the object's velocity.
 */
class Player extends Character {
    /**
     * The constructor method is called when a new Player object is created.
     * 
     * @param {Object|null} data - The sprite data for the object. If null, a default red square is used.
     */
    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);
        this.keypress = data?.keypress || {up: 87, left: 65, down: 83, right: 68};
        this.pressedKeys = {}; // active keys array
        this.bindMovementKeyListners();
        this.gravity = data.GRAVITY || false;
        this.acceleration = 0.001;
        this.time = 0;
        this.moved = false;
    }

    /**
     * Binds key event listeners to handle object movement.
     * 
     * This method binds keydown and keyup event listeners to handle object movement.
     * The .bind(this) method ensures that 'this' refers to the object object.
     */
    bindMovementKeyListners() {
        addEventListener('keydown', this.handleKeyDown.bind(this));
        addEventListener('keyup', this.handleKeyUp.bind(this));
    }

    handleKeyDown({ keyCode }) {
        // capture the pressed key in the active keys array
        this.pressedKeys[keyCode] = true;
        // set the velocity and direction based on the newly pressed key
        this.updateVelocityAndDirection();
    }

    /**
     * Handles key up events to stop the player's velocity.
     * 
     * This method stops the player's velocity based on the key released.
     * 
     * @param {Object} event - The keyup event object.
     */
    handleKeyUp({ keyCode }) {
        // remove the lifted key from the active keys array
        if (keyCode in this.pressedKeys) {
            delete this.pressedKeys[keyCode];
        }
        // adjust the velocity and direction based on the remaining keys
        this.updateVelocityAndDirection();
    }

    /**
     * Update the player's velocity and direction based on the pressed keys.
     */
    updateVelocityAndDirection() {
        this.velocity.x = 0;
        this.velocity.y = 0;

        // Multi-key movements (diagonals: upLeft, upRight, downLeft, downRight)
        if (this.pressedKeys[this.keypress.up] && this.pressedKeys[this.keypress.left]) {
            this.velocity.y -= this.yVelocity;
            this.velocity.x -= this.xVelocity;
            this.direction = 'upLeft';
        } else if (this.pressedKeys[this.keypress.up] && this.pressedKeys[this.keypress.right]) {
            this.velocity.y -= this.yVelocity;
            this.velocity.x += this.xVelocity;
            this.direction = 'upRight';
        } else if (this.pressedKeys[this.keypress.down] && this.pressedKeys[this.keypress.left]) {
            this.velocity.y += this.yVelocity;
            this.velocity.x -= this.xVelocity;
            this.direction = 'downLeft';
        } else if (this.pressedKeys[this.keypress.down] && this.pressedKeys[this.keypress.right]) {
            this.velocity.y += this.yVelocity;
            this.velocity.x += this.xVelocity;
            this.direction = 'downRight';
        // Single key movements (left, right, up, down) 
        } else if (this.pressedKeys[this.keypress.up]) {
            this.velocity.y -= this.yVelocity;
            this.direction = 'up';
            this.moved = true;
        } else if (this.pressedKeys[this.keypress.left]) {
            this.velocity.x -= this.xVelocity;
            this.direction = 'left';
            this.moved = true;
        } else if (this.pressedKeys[this.keypress.down]) {
            this.velocity.y += this.yVelocity;
            this.direction = 'down';
            this.moved = true;
        } else if (this.pressedKeys[this.keypress.right]) {
            this.velocity.x += this.xVelocity;
            this.direction = 'right';
            this.moved = true;
        } else{
            this.moved = false;
        }
    }
    update() {
        super.update();
        if(!this.moved){
            if (this.gravity) {
                    this.time += 1;
                    this.velocity.y += 0.5 + this.acceleration * this.time;
                }
            }
        else{
            this.time = 0;
        }
        }
        
    /**
     * Overrides the reaction to the collision to handle
     *  - clearing the pressed keys array
     *  - stopping the player's velocity
     *  - updating the player's direction   
     * @param {*} other - The object that the player is colliding with
     */
    handleCollisionReaction(other) {    
        this.pressedKeys = {};
        this.updateVelocityAndDirection();
        super.handleCollisionReaction(other);
    }


}

export default Player;
```

## This is our gravity change ^

