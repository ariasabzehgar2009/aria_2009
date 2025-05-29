---
layout: post
title: Parallaxes/gravity
description: Lesson to teach others
comments: True
permalink: /csse/lessons/gravity
---

# Lesson: Gravity in 2D Games

## 1. What Is Gravity?

Gravity in 2D games is a simulated force that pulls objects downward. It ensures that characters, items, and other elements fall naturally when they are not supported by a surface. Although inspired by real-world physics, game gravity is simplified and adjusted to enhance gameplay and maintain an enjoyable experience.

### Key Concepts:
- **Constant Acceleration:** Objects accelerate downward at a steady rate.
- **Velocity:** The speed at which an object falls increases over time due to gravity.
- **Position Update:** The object's position is continuously updated based on its increasing velocity.
- **Terminal Velocity (Optional):** A maximum falling speed can be set to prevent objects from accelerating indefinitely.

---

## 2. How Does Gravity Work?

In a 2D world, gravity works by applying a consistent downward force on objects:

- **Continuous Force:** Every moment (or frame), gravity increases the object’s downward velocity.
- **Natural Falling Motion:** As the velocity increases, the object's position is updated, creating a smooth falling motion.
- **Simplified Physics:** Unlike the complex gravitational calculations in the real world, game gravity uses straightforward, constant increments to simulate falling.

### Real-World Analogy:
Gravity in games is similar to how objects fall in the real world, though it is less complex. It gives players an intuitive understanding of how their character or objects will move when in free fall.

---

## 3. How Do We Calculate Gravity?

While games simplify physics, the basic principle remains similar to real-world concepts:

- **Acceleration:** Gravity acts as a constant acceleration that increases an object’s vertical velocity.
- **Velocity Update:** With each update cycle, the object’s falling speed increases by a set amount.
- **Position Update:** The object’s new position is determined by its updated velocity, making it appear to fall faster over time.
- **Terminal Velocity:** To maintain control and balance, a cap (terminal velocity) may be imposed so the object does not fall too quickly.

### Explanation:
- **Incremental Updates:** The object's downward speed is incremented every frame, simulating the pull of gravity.
- **Time Dependence:** The change in velocity and position depends on the elapsed time, making the effect continuous and smooth.
- **Game Balance:** By tuning the acceleration and maximum speed, developers create a realistic yet fun experience for players.

---

## 4. Why Use Gravity in Games?

Gravity is a crucial element in game design because it:

- **Enhances Realism:** It makes the game world feel more authentic by mimicking the natural behavior of falling.
- **Adds Challenge:** Players must account for gravity when jumping, landing, and avoiding obstacles.
- **Creates Dynamic Interactions:** It influences how objects collide and interact, enriching the gameplay experience.

### Use Cases:
- **Platformers:** Gravity affects how players time their jumps and landings on platforms.
- **Side-Scrolling Games:** Characters must navigate the environment while overcoming the constant pull of gravity.
- **Physics-Based Puzzles:** Gravity helps simulate realistic object behavior and interaction, adding depth to the gameplay.



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

