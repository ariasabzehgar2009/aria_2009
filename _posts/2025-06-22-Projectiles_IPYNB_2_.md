---
layout: post
categories: ['Adventure Game']
title: Overworld Level Hacks
description: Overworld Hacks
type: issues
comments: True
permalink: /overworld/EnemyCollisionHacks
---

# Lesson: Projectiles

---
## What is a Projectile?

In games, **projectiles** are objects that move through space, often used to simulate bullets, missiles, magic spells, or any other flying object that interacts with the game world. They typically:

- Have a **starting point** and a **direction**.
- Move independently after being launched.
- **Collide** with objects like enemies, players, or terrain.
- May have behaviors like **homing**, **bouncing**, or **exploding**.

In this lesson, we focus on a **homing projectile** — a type of projectile that adjusts its direction over time to follow a target. This behavior is commonly used for heat-seeking missiles, guided spells, or tracking arrows in games.

---

## Constructor: `constructor(x, y, target, gameEnv, speed = 5, turnRate = 0.08)`

This method initializes a homing projectile with the following behavior and attributes:

- `x`, `y`: Starting coordinates of the projectile.
- `target`: An object the projectile will follow (must have a `position` property).
- `gameEnv`: The game environment, used for rendering and object tracking.
- `speed`: How fast the projectile travels.
- `turnRate`: How quickly it can turn toward its target.
- `radius`: Collision detection and visual size.
- `color`: Visual color (`"red"`).
- `active`: State flag that tracks whether the projectile should still exist.

Initial velocity is computed by calculating the angle between the projectile and its target using `Math.atan2`. This determines the direction the projectile starts moving in.

If the `target` is invalid or has no `.position`, a warning is logged, and the projectile is marked inactive.

---

## `update()` Method
```js
update() {
        if (!this.active) {
            this.markForRemoval();
            return;
        }
        
        if (!this.target || !this.target.position) {
            this.active = false;
            this.markForRemoval();
            return;
        }

        // Verify position is valid
        if (isNaN(this.position.x) || isNaN(this.position.y)) {
            console.error(`Invalid projectile position: x=${this.position.x}, y=${this.position.y}`);
            this.markForRemoval();
            return;
        }

        const dx = this.target.position.x - this.position.x;
        const dy = this.target.position.y - this.position.y;
        
        // Check if we've hit the target (collision detection)
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < this.radius + 20) {
            this.active = false;
            console.log('Projectile hit target!');
            this.markForRemoval();
            return;
        }

        // Homing logic
        const targetAngle = Math.atan2(dy, dx);
        const currentAngle = Math.atan2(this.velocity.y, this.velocity.x);

        let angleDiff = targetAngle - currentAngle;
        while (angleDiff > Math.PI) angleDiff -= 2 * Math.PI;
        while (angleDiff < -Math.PI) angleDiff += 2 * Math.PI;

        const newAngle = currentAngle + this.turnRate * angleDiff;
        this.velocity.x = Math.cos(newAngle) * this.speed;
        this.velocity.y = Math.sin(newAngle) * this.speed;

        // Update position
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        
        // Check bounds
        if (this.gameEnv && (this.position.x < -50 || this.position.x > this.gameEnv.innerWidth + 50 ||
            this.position.y < -50 || this.position.y > this.gameEnv.innerHeight + 50)) {
            this.active = false;
            this.markForRemoval();
            return;
        }
        
        // Draw the projectile
        this.draw();
    }
   ```

This method should be called on each frame to handle logic and movement.

1. **State and validity checks**:
   - If the projectile is inactive, remove it.
   - If the target is lost or has no `.position`, deactivate and remove.
   - If position values become `NaN`, log an error and remove.

2. **Collision detection**:
   - Compute the distance to the target.
   - If the projectile is within `(this.radius + 20)` units, it "hits" the target and is removed.

3. **Homing logic**:
   - Determine the `targetAngle` and current velocity angle using `Math.atan2`.
   - Calculate `angleDiff` and normalize it to between `-π` and `π`.
   - Adjust the current angle by a small amount (`this.turnRate * angleDiff`).
   - Update velocity accordingly using `Math.cos` and `Math.sin`.

4. **Movement**:
   - Add the velocity to the projectile's current position to move it.

5. **Bounds check**:
   - If the projectile goes offscreen (with a margin of 50 pixels), it is removed.

6. **Rendering**:
   - Call `this.draw()` to render the projectile on the canvas.

---

## `draw()` Method
```js
draw() {
        if (!this.active) {
            return;
        }
        
        const ctx = this.gameEnv?.ctx;
        if (!ctx) {
            return;
        }
        
        ctx.save();
        
        // Draw the projectile with a visible design
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Add a black border
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Add a white center for better visibility
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius - 4, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        
        ctx.restore();
    }
```

This method handles rendering the projectile using the canvas 2D API.

- Retrieves the canvas context from `this.gameEnv.ctx`.
- Draws a red circle at the projectile's current position.
- Adds a black outline and a white inner circle for visual clarity.

---

## `markForRemoval()` Method
``` js
markForRemoval() {
        this.active = false;
        if (this.gameEnv && this.gameEnv.gameObjects) {
            const index = this.gameEnv.gameObjects.indexOf(this);
            if (index > -1) {
                this.gameEnv.gameObjects.splice(index, 1);
            }
        }
    }
```

---

## `shouldRemove()` Method
``` js
shouldRemove() {
        return !this.active;
    }
```
Returns `true` if the projectile is inactive and should be removed by the game loop.

---

## `destroy()` Method

Forces the projectile to become inactive. Can be used for manual removal or special effects.
``` js
destroy() {
        this.active = false;
    }
```

---

##  Hack: Add a Speed Boost When the Target Gets Close!
#### When the projectiles is close to the target, make it 'lock on' so it speeds up
##### A few other files were edited. If you can complete the hacks without asking me for help or the files... YOU GET EXTRA CREDIT!
### WILL NOT BE GRADING UNTIL TUESDAY

# UNDEDITED CODE


```python
%%js
class HomingProjectile {
    constructor(x, y, target, gameEnv, speed = 5, turnRate = 0.08) {
        this.gameEnv = gameEnv;
        this.target = target;
        this.speed = speed;
        this.turnRate = turnRate;
        this.radius = 10;
        this.baseRadius = 10;
        this.color = "red";
        this.active = true;
        this.exploding = false;
        this.impactFrames = 0;

        this.position = { x: x, y: y };

        if (!target || !target.position) {
            console.warn('HomingProjectile: Invalid target provided');
            this.active = false;
            return;
        }

        const dx = target.position.x - x;
        const dy = target.position.y - y;
        const angle = Math.atan2(dy, dx);
        this.velocity = {
            x: Math.cos(angle) * speed,
            y: Math.sin(angle) * speed
        };

        console.log(`Projectile created at (${Math.round(x)}, ${Math.round(y)}) targeting ${target.spriteData?.id || 'Unknown'}`);
    }

    update() {
        if (!this.active && !this.exploding) {
            this.markForRemoval();
            return;
        }

        if (this.exploding) {
            this.impactFrames++;
            if (this.impactFrames > 30) {
                this.markForRemoval();
            }
            this.draw();
            return;
        }

        if (!this.target || !this.target.position) {
            this.active = false;
            this.markForRemoval();
            return;
        }

        if (isNaN(this.position.x) || isNaN(this.position.y)) {
            console.error(`Invalid projectile position: x=${this.position.x}, y=${this.position.y}`);
            this.markForRemoval();
            return;
        }

        const dx = this.target.position.x - this.position.x;
        const dy = this.target.position.y - this.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.radius + 20) {
            this.active = false;
            this.exploding = true;
            this.impactFrames = 0;
            console.log('Projectile hit target!');
            return;
        }

        const targetAngle = Math.atan2(dy, dx);
        const currentAngle = Math.atan2(this.velocity.y, this.velocity.x);
        let angleDiff = targetAngle - currentAngle;
        while (angleDiff > Math.PI) angleDiff -= 2 * Math.PI;
        while (angleDiff < -Math.PI) angleDiff += 2 * Math.PI;

        const newAngle = currentAngle + this.turnRate * angleDiff;
        this.velocity.x = Math.cos(newAngle) * this.speed;
        this.velocity.y = Math.sin(newAngle) * this.speed;

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (this.gameEnv && (this.position.x < -50 || this.position.x > this.gameEnv.innerWidth + 50 ||
            this.position.y < -50 || this.position.y > this.gameEnv.innerHeight + 50)) {
            this.active = false;
            this.markForRemoval();
            return;
        }

        this.draw();
    }

    draw() {
        const ctx = this.gameEnv?.ctx;
        if (!ctx) return;

        ctx.save();

        if (this.exploding) {
            const alpha = 1 - (this.impactFrames / 30);
            const explosionRadius = this.radius + this.impactFrames * 1.5;

            ctx.beginPath();
            ctx.arc(this.position.x, this.position.y, explosionRadius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 100, 100, ${alpha})`;
            ctx.fill();
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 2;
            ctx.stroke();
        } else {
            // Pulsing effect while moving
            const pulse = Math.sin(Date.now() / 100) * 2;
            const drawRadius = this.baseRadius + pulse;

            ctx.beginPath();
            ctx.arc(this.position.x, this.position.y, drawRadius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();

            ctx.strokeStyle = 'black';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(this.position.x, this.position.y, drawRadius - 4, 0, Math.PI * 2);
            ctx.fillStyle = 'white';
            ctx.fill();
        }

        ctx.restore();
    }

    markForRemoval() {
        if (this.gameEnv?.gameObjects) {
            const index = this.gameEnv.gameObjects.indexOf(this);
            if (index > -1) {
                this.gameEnv.gameObjects.splice(index, 1);
            }
        }
    }

    shouldRemove() {
        return !this.active && !this.exploding;
    }

    destroy() {
        this.active = false;
    }
}

export default HomingProjectile;

```
