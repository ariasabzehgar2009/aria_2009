---
comments: True
layout: post
title: conditionals lesson hacks
description: conditionals hacks
permalink: /csse/javascript/fundamentals/conditionals/hacks
type: ccc
---

#### <span style="color: #ADD8E6; text-shadow: 3px 3px 8px #4682B4; font-weight: bold; font-size: 2em;">Popcorn Hacks:</span>
Develop a basic combat system that allows characters to engage in battles with enemies. This will help you practice using functions, conditionals, and basic game mechanics in JavaScript.

---
##### <span style="color: #FF6347; text-shadow: 2px 2px 6px #8B0000; font-weight: bold; font-size: 1.5em;">Popcorn Hack Part 1 - 1: Using <code>initializeData</code> Function</span> 

1. Add `speed` to the <code>initializeData(data = null)</code> function and give it a default value.
2. Add `seed` to the HTML output.
3. Add `speed` to the JSON data.
4. Test calling <code>initializeData</code> with no argument, and then using a `data` JSON object as an argument.

##### <span style="color: #FF6347; text-shadow: 2px 2px 6px #8B0000; font-weight: bold; font-size: 1.5em;">Popcorn Hack Part 1 - 2: Adding IJKL Key Conditions in <code>handleKeyDown</code></span> 

1. Add a `case` statement for each of the IJKL keys in the `handleKeyDown({ keyCode })` switch statement.
2. Send the key code for each IJKL key to the <code>gameObject.handleKeyDown</code> method.
3. Use <code>console.log()</code> to output `gameObject`.

---

##### <span style="color: #FF6347; text-shadow: 2px 2px 6px #8B0000; font-weight: bold; font-size: 1.5em;">Popcorn Hack 2: Creating a Simple Attack System</span>
1. Add a <code>boolean</code> variable named <code>canAttack</code>, and set it to <code>false</code>.
2. Use an <code>if</code> statement to check if the player can attack.
3. If <code>canAttack</code> is <code>false</code>, output "Can't attack."
4. Use <code>Math.random()</code> to determine if the player is allowed to attack. (Tip: Use ChatGPT for help with <code>Math.random()</code> if needed!)
5. This will pick a random number to decide if the attack can happen.
6. Use <code>console.log()</code> for all outputs.

---

##### <span style="color: #FF6347; text-shadow: 2px 2px 6px #8B0000; font-weight: bold; font-size: 1.5em;">Popcorn Hack 3: Level Requirement Check</span>
1. Use the <code>ternary operator</code> to create an output if the player meets the level requirements.
2. If not, output a message telling the player they are under-leveled.
3. Use <code>console.log()</code> to print your output.

<!-- Homework Section with Enhanced Glowing Title -->

### <span style="color: #78C0E0; text-shadow: 0 0 10px #1E3D59, 0 0 20px #1E3D59; font-weight: bold; font-size: 2em;">Homework:</span>

#### <span style="color: #FFA07A; text-shadow: 0 0 8px #3C3C3C, 0 0 15px #3C3C3C; font-weight: bold; font-size: 1.5em;">Objectives</span>

<span style="font-size: 1.2em; color: #E5E5E5; line-height: 1.8;">
  <br><strong style="color: #FFD700;">Option 1:</strong> <span style="color: #C0C0C0;">Create a simple combat system.</span>
  <ul style="color: #D3D3D3; margin-left: 20px; list-style-type: circle;">
    <li>Allow characters to fight enemies.</li>
    <li>Use basic functions and conditionals in JavaScript.</li>
    <li>Focus on making it easy to understand how battles work.</li>
  </ul>

  <br>
  <strong style="color: #FFD700;">Option 2:</strong> <span style="color: #C0C0C0;">Make a dialogue system for your NPC (Non-Player Character).</span>
  <ul style="color: #D3D3D3; margin-left: 20px; list-style-type: circle;">
    <li>Use the <code style="color: #7FFFD4;">prompt()</code> function to ask the player for a response (choose a number from 1 to 4).</li>
    <li>This dialogue should appear when the player gets close to the NPC and presses a button.</li>
  </ul>
</span>

### <span style="color: #FFA07A; text-shadow: 1px 1px 6px #3C3C3C; font-weight: bold;">Additional Tips:</span>
- <span style="color: #FFD700;">**For Option 1:**</span>
  <ul style="color: #D3D3D3; margin-left: 20px; list-style-type: square;">
    <li>Start by writing down what the characters and enemies will be. Create simple names and attributes (like health).</li>
    <li>Use <code style="color: #7FFFD4;">console.log()</code> to print out what's happening at each step. This will help you understand the flow of your code.</li>
    <li>Look for example code online to see how others have created combat systems. Don't be afraid to borrow ideas!</li>
  </ul>

- <span style="color: #FFD700;">**For Option 2:**</span>
  <ul style="color: #D3D3D3; margin-left: 20px; list-style-type: square;">
    <li>Plan out the dialogue options before you start coding. Write them down in a list.</li>
    <li>Use comments in your code to remind yourself what each part does. For example, <code style="color: #7FFFD4;">// Ask the player for a response</code>.</li>
    <li>Test your code frequently. After writing a few lines, run it to see if it works before adding more.</li>
  </ul>

### POPCORN HACK 1


```python
%%html

<output id="output"></output>

<script>
function intializeData(data = null) {
    // Define default values
    let scaleFactor = 9/16;
    let animationRate = 1;
    let position = [0, 0];
    let speed = 17;

    // Check if data is provided
    if (data) {
        scaleFactor = data.SCALE_FACTOR || scaleFactor;
        animationRate = data.ANIMATION_RATE || animationRate;
        position = data.INIT_POSITION || position;
        speed = data.SPEED || speed;
    }

    document.getElementById("output").innerHTML = `
        <p>Scale Factor: ${scaleFactor}</p>
        <p>Animation Rate: ${animationRate}</p>
        <p>Initial Position: ${position}</p>
        <p>Speed: ${speed}<p>
    `;
}

var data = {
    SCALE_FACTOR: 1/1,
    ANIMATION_RATE: 25,
    INIT_POSITION: [100, 100],
    SPEED: 20
}

// Uncomment one of the following lines to test the if statement in the function
//intializeData();
intializeData(data);

</script>
```



<output id="output"></output>

<script>
function intializeData(data = null) {
    // Define default values
    let scaleFactor = 9/16;
    let animationRate = 1;
    let position = [0, 0];
    let speed = 17;

    // Check if data is provided
    if (data) {
        scaleFactor = data.SCALE_FACTOR || scaleFactor;
        animationRate = data.ANIMATION_RATE || animationRate;
        position = data.INIT_POSITION || position;
        speed = data.SPEED || speed;
    }

    document.getElementById("output").innerHTML = `
        <p>Scale Factor: ${scaleFactor}</p>
        <p>Animation Rate: ${animationRate}</p>
        <p>Initial Position: ${position}</p>
        <p>Speed: ${speed}<p>
    `;
}

var data = {
    SCALE_FACTOR: 1/1,
    ANIMATION_RATE: 25,
    INIT_POSITION: [100, 100],
    SPEED: 20
}

// Uncomment one of the following lines to test the if statement in the function
//intializeData();
intializeData(data);

</script>



### POPCORN HACK 1 PART 2


```python
%%js


// Popcorn Hack 1 - 2
class GameObject {
    constructor() {
        this.velocity = { x: 0, y: 0 };
        this.direction = '';
        this.xVelocity = 1;
        this.yVelocity = 1;
    }

    handleKeyDown({ keyCode }) {
        switch (keyCode) {
            case 87: // 'W' key
                this.direction = 'up';
                break;
            case 65: // 'A' key
                this.direction = 'left';
                break;
            case 83: // 'S' key
                this.direction = 'down';
                break;
            case 68: // 'D' key
                this.direction = 'right';
                break;
            case 73: // 'I' key
                this.direction = 'up';
                break;
            case 74: // 'J' key
                this.direction = 'left';
                break;
            case 75: // 'K' key
                this.direction = 'down';
                break;
            case 76: // 'L' key
                this.direction = 'right';
                break;
        }
    }
}

// Example of how to use it
const gameObject = new GameObject();
console.log('Initial State:', gameObject);

gameObject.handleKeyDown({ keyCode: 87 }); // Simulate 'W' key press
console.log('After W Key Press:', gameObject);

gameObject.handleKeyDown({ keyCode: 65 }); // Simulate 'A' key press
console.log('After A Key Press:', gameObject);

gameObject.handleKeyDown({ keyCode: 83 }); // Simulate 'S' key press
console.log('After S Key Press:', gameObject);

gameObject.handleKeyDown({ keyCode: 68 }); // Simulate 'D' key press
console.log('After D Key Press:', gameObject);

gameObject.handleKeyDown({ keyCode: 73 }); // Simulate 'I' key press
console.log('After I Key Press:', gameObject);

gameObject.handleKeyDown({ keyCode: 74 }); // Simulate 'J' key press
console.log('After J Key Press:', gameObject);

gameObject.handleKeyDown({ keyCode: 75 }); // Simulate 'K' key press
console.log('After K Key Press:', gameObject);

gameObject.handleKeyDown({ keyCode: 76 }); // Simulate 'L' key press
console.log('After L Key Press:', gameObject);
```


    <IPython.core.display.Javascript object>


### POPCORN HACK 2


```python
%%js 

let canAttack = false;

if (!canAttack) {
    console.log("Can't attack.");
} else {
    if (Math.random() > 0.5) {
        console.log("Attack successful.");
    } else {
        console.log("Attack failed.");
    }
}
```


    <IPython.core.display.Javascript object>


### POPCORN HACK 3


```python
%%js 

let playerLevel = 7; //Sample player level
let requiredLevel = 10; //Sample required level

let message = playerLevel >= requiredLevel ? "Player meets the level requirements." : "Player is under-leveled.";
console.log(message);
```

### Homework (Chose Option 1 and incorporated random values so every attack has a different amount of damage)


```python
%%js 
// Set up a character class
class Character {
    constructor(name, health, attackPower) {
        this.name = name; 
        this.health = health; 
        this.attackPower = attackPower; 
    }
    // Sample method of how to launch an attack on enemy
    attack(enemy) {
        if (this.health > 0) { 
            let randomAttackPower = Math.floor(Math.random() * this.attackPower) + 1; 
            console.log(`${this.name} attacks ${enemy.name} for ${randomAttackPower} damage.`);
            enemy.health -= randomAttackPower; 
            if (enemy.health <= 0) { // Check if the enemy is defeated
                console.log(`${enemy.name} has been defeated!`);
            } else {
                console.log(`${enemy.name} has ${enemy.health} health remaining.`);
            }
        } else {
            console.log(`${this.name} cannot attack because they are defeated.`);
        }
    }
}
// Create characters
let hero = new Character('Hero', 100, 10); 
let monster = new Character('Monster', 50, 5); 
// Simulate a battle through the previous classes I set up
hero.attack(monster); // Hero attacks monster
monster.attack(hero); // Monster attacks hero
hero.attack(monster); // Hero attacks monster again
monster.attack(hero); // Monster attacks hero again
hero.attack(monster); // Hero attacks monster again











```


    <IPython.core.display.Javascript object>

