---
layout: post
title: Backgrounds
categories: ['Adventure Game']
description: An introduction to backgrounds and parallax scrolling in the adventure game.
permalink: /gamify/adventureGame/topics/backgrounds
breadcrumb: True
---

# Lesson: Backgrounds and Parallaxes in JavaScript

## 1. What Are Backgrounds?

Backgrounds are visual elements that fill the space behind the main content or objects in a game or web application. They provide context, create atmosphere, and improve the overall visual appeal.

### Key Properties:
- **Background Color:** A solid color behind content.
- **Background Image:** An image that can be fixed, repeated, or scaled.
- **Positioning:** Defines where the background starts.
- **Size and Repeat:** Controls how the background image is stretched or repeated.

### Example:
```css
body {
  background-color: #000;
  background-image: url('background.png');
  background-repeat: no-repeat;
  background-size: cover;
}
```

---

## 2. What Do Backgrounds Do?

Backgrounds improve user experience by:
- Setting the mood or theme.
- Providing visual depth.
- Enhancing the narrative or aesthetic of a game or application.

### In Games:
- Static backgrounds create consistent environments.
- Dynamic backgrounds change based on game progress or events.

---

## 3. What Is a Parallax Effect?

The parallax effect is a technique where background images move at different speeds relative to the foreground, creating an illusion of depth.

### How It Works:
- Multiple background layers move at varying speeds.
- Farther layers move slower, mimicking how the human eye perceives distance.

### Example in JavaScript:
```javascript
window.addEventListener('scroll', function() {
  let scrollPos = window.scrollY;
  document.querySelector('.background').style.transform = `translateY(${scrollPos * 0.5}px)`;
});
```

---

## 4. What Does a Parallax Effect Do?

Parallax effects enhance visual depth and user engagement by:
- Creating immersive environments.
- Making scrolling and movement feel more interactive.
- Adding a professional and polished look to games and websites.

### Use Cases:
- Side-scrolling games.
- Landing pages with rich visual effects.
- Dynamic storytelling in web applications.


## Simple Background Hack we want you to put into the game!
### We thought it would be a cool idea to switch to different cutscenes in the star-wars level of the game. 
Simply, go alter the code in the stars war game level in such manner that there is a button that allows for the changing of a background. (You could do a key, but for someone playing the game, it wouldnt be ideal holding it down to play!Your button also doesnt need to be too advanced, just make sure its off to the side. Good luck!)
Below is the baseline of where you need to edit the code to start off


```python
import Background from './Background.js';
import Player from './Player.js';
import Npc from './Npc.js';
import Projectile from './Projectile.js';

class GameLevelStarWars {
  constructor(gameEnv) {
    // Values dependent on GameEnv.create()
    let width = gameEnv.innerWidth;
    let height = gameEnv.innerHeight;
    let path = gameEnv.path;

    // Background data
    const image_src_atat = path + "/images/gamify/atat_background.png"; // be sure to include the path
    const image__data_atat = {
        id: 'AT-AT-Background',
        src: image_src_atat,
        pixels: {height: 570, width: 1025}
    };

    // Player data for snowspeeder
    const sprite_src_snowspeeder = path + "/images/gamify/snowspeeder_sprite2.png"; // be sure to include the path
    const SNOWSPEEDER_SCALE_FACTOR = 6;
    const sprite_data_snowspeeder = {
        id: 'Snowspeeder',
        greeting: "Hi I am snowspeeder, the desert wanderer. I am trying to take donwn the empire's AT-ATs!",
        src: sprite_src_snowspeeder,
        SCALE_FACTOR: SNOWSPEEDER_SCALE_FACTOR,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: 0, y: 0 }, 
        pixels: {height: 293, width: 358},
        orientation: {rows: 1, columns: 1 },
        down: {row: 0, start: 0, columns: 1, rotate: -Math.PI/2 },
        downRight: {row: 0, start: 0, columns: 1, rotate: -3*Math.PI/4 },
        downLeft: {row: 0, start: 0, columns: 1, rotate: -Math.PI/4 },
        left: {row: 0, start: 0, columns: 1 },
        right: {row: 0, start: 0, columns: 1, rotate: Math.PI },
        up: {row: 0, start: 0, columns: 1, rotate: Math.PI/2 },
        upLeft: {row: 0, start: 0, columns: 1, rotate: Math.PI/4 },
        upRight: {row: 0, start: 0, columns: 1, rotate: 3*Math.PI/4 },
        hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
        keypress: { up: 87, left: 65, down: 83, right: 68 }, // W, A, S, D
        reaction: function() {
          alert("We just got hit by a projectile!");
        }
    };

    // NPC Data for Turret Anti-Air
    const sprite_src_turret = path + "/images/gamify/aa_spritesheet1.png"; // be sure to include the path
    const TURRET_SCALE_FACTOR = 3;
    const sprite_data_turret = {
      id: 'Turret-Anti-Air',
      greeting: "I am the Anti-Air Turret. I am here to take down the snowspeeder!",
      src: sprite_src_turret,
      SCALE_FACTOR: TURRET_SCALE_FACTOR,  // Adjust this based on your scaling needs
      ANIMATION_RATE: 100,
      pixels: {width: 1056, height: 236},
      INIT_POSITION: { x: width - (height/TURRET_SCALE_FACTOR), y: height - .82*(height/TURRET_SCALE_FACTOR) }, 
      orientation: {rows: 1, columns: 3 },
      down: {row: 0, start: 0, columns: 3 },  // This is the stationary npc, down is default 
      hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
    };

    // Laser data, temporary sprite for testing
    const sprite_src_laser = path + "/images/gamify/laser_bolt.png"; // be sure to include the path
    const sprite_data_laser1 = {
        id: 'AT-AT-Laser-1',
        greeting: "Simulate explosive action!",
        // define image/sprite data
        src: sprite_src_laser,
        pixels: {height: 500, width: 500}, // height and width of the image
        orientation: {rows: 1, columns: 1 }, // normalized rows and columns in the sprite
        // define size, position, adjustments for hitbox
        SCALE_FACTOR: 30,  // Start small
        INIT_POSITION_RATIO: { x: 1 / 1.78, y: 1 / 3.3 }, // Ratios for initial position
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        // define animation properties
        TRANSLATE_SCALE_FACTOR: 10, // Grow to this size at end translation
        TRANSLATE_POSITION_RATIO: { x: 1 / 2.78, y: 1 / 2.9 }, // Ratios for translate position
        TRANSLATE_SIMULATION: {miliseconds: 500 }, // 1 second
        down: {row: 0, start: 0, columns: 3, spin: 4},  // down is default
     };

     // Laser data, temporary sprite for testing
    const sprite_data_laser2 = {
        id: 'AT-AT-Laser-2',
        greeting: "Simulate explosive action!",
        // define image/sprite data
        src: sprite_src_laser,
        pixels: {height: 500, width: 500}, // height and width of the image
        orientation: {rows: 1, columns: 1 }, // normalized rows and columns in the sprite
        // define size, position, adjustments for hitbox
        SCALE_FACTOR: 60,  // Start small 
        INIT_POSITION_RATIO: { x: 1 / 8, y: 1 / 1.95 }, // Ratios for initial position
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        // define animation properties
        TRANSLATE_SCALE_FACTOR: 20, // Grow to this size at end translation
        TRANSLATE_POSITION_RATIO: { x: 1 / 20, y: 1 / 1.9 }, // Ratios for translate position
        TRANSLATE_SIMULATION: {miliseconds: 500 }, // 1 second
        down: {row: 0, start: 0, columns: 1, spin: 4},  // down is default
     };

    // List of objects definitions for this level
    this.classes = [
      { class: Background, data: image__data_atat },
      { class: Player, data: sprite_data_snowspeeder },
      { class: Npc, data: sprite_data_turret },
      { class: Projectile, data: sprite_data_laser1 },
      { class: Projectile, data: sprite_data_laser2 },
    ];
  }
}

export default GameLevelStarWars;
```
