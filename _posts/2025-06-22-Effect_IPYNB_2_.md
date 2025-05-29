---
layout: post
categories: ['Adventure Game']
title: Overworld Level Hacks
description: Overworld Hacks
type: issues
comments: True
permalink: /overworld/EnemyCollisionHacks
---

# 💥 Lesson: Adding a Pulsing Animation Effect to a Projectile

In this lesson, you'll learn how to enhance a projectile with a **pulsing effect**—a smooth, rhythmic visual animation that gives life to the projectile while it travels. This kind of detail is small but powerful, helping to create a polished and dynamic feel to your game.

---

## 🎯 Why Add a Pulsing Effect?

A pulsing animation makes your projectile feel **alive**. Instead of looking static or flat, the projectile appears to breathe or radiate energy. This is especially useful for:

- 🔮 Magical or sci-fi themed weapons
- 💣 High-power projectiles that should stand out
- ✨ Drawing player attention to moving elements

---

## ⚙️ Types of Visual Effects and How to Make Them

Adding effects to your game objects can greatly improve visual appeal and player engagement. Here are some common types of effects used in games, and brief ideas on how you can implement them:

### 1. **Pulsing (Scaling) Effect**  
The object smoothly grows and shrinks in size, as if it's breathing or glowing.  
**How to make:**  
- Use a timer that increases over time.  
- Use a sine or cosine function to oscillate a size parameter.  
- Add or multiply this oscillation to your object's base size.

### 2. **Fading (Transparency) Effect**  
The object appears and disappears smoothly, or becomes more or less transparent.  
**How to make:**  
- Change the alpha (opacity) value of the drawing color over time.  
- Use a timer and a sine wave or linear function to adjust alpha from 0 (invisible) to 1 (fully visible).

### 3. **Color Shifting Effect**  
The object changes its color gradually, cycling through hues or brightness.  
**How to make:**  
- Increment a timer.  
- Use that timer to change the color's hue or RGB values over time, often using sine or cosine for smooth transitions.

### 4. **Rotating Effect**  
The object spins or rotates continuously or back and forth.  
**How to make:**  
- Increment an angle variable over time.  
- Apply rotation transforms before drawing the object.

### 5. **Trail or Motion Blur Effect**  
The object leaves a fading trail behind as it moves.  
**How to make:**  
- Store previous positions and draw semi-transparent shapes at those positions.  
- Gradually reduce opacity of old trail parts.

---
## 🛠️ How It Works

We make the projectile “pulse” by **modulating its radius** with a sine wave. This means the radius gets slightly bigger and smaller over time, smoothly, creating a breathing or glowing effect.

We'll do this by:
- Adding a `pulseTimer` variable that ticks up over time
- Using `Math.sin(pulseTimer)` to calculate how much the size changes
- Updating the radius every frame in the `draw()` method

---

## 🧱 Code Snippet: Implementing the Pulse

Here’s how to modify your projectile to add the pulsing animation.

### Step 1: Add a `pulseTimer` to the constructor

```js
constructor(x, y, target, gameEnv, speed = 5, turnRate = 0.08) {
    // ... existing setup code
    this.pulseTimer = 0; // Tracks time for animation
}
```
### Step 2: Change in Draw()

```js
draw() {
    if (!this.active) return;

    const ctx = this.gameEnv?.ctx;
    if (!ctx) return;

    ctx.save();

    // Increment the timer
    this.pulseTimer += 0.1;

    // Base radius with pulsing effect
    const pulseAmount = Math.sin(this.pulseTimer) * 2;  // Oscillates between -2 and +2
    const currentRadius = this.radius + pulseAmount;

    // Draw outer circle
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, currentRadius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();

    // Border
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Inner circle for detail
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, currentRadius - 4, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();

    ctx.restore();
}
```


# Hack
Make the pulsing of the effect change colors (extra credit if you add particles), and make there be an effect that occurs on impact
### WILL NOT BE GRADING UNTIL TUESDAY


