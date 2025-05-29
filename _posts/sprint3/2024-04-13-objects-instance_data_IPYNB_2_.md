---
toc: True
comments: True
layout: post
title: Objects, Instance Data
description: Objects in JavaScript are a fundamental data type. Each Game Object, in the game, is a collections of instance data and methods. JavaScript Objects are used to store the states of a Game Objects.
courses: {'csse': {'week': 19}}
type: ccc
---

## Properties and Methods

- **Properties**: These are the values associated with a JavaScript object. A JavaScript object is a collection of unordered properties. Properties can usually be changed, added, and deleted.

- **Methods**: These are actions that can be performed on objects. A method is a property that contains a function definition.

For example, consider an object representing a player in a game:

```javascript
const player = {
    name: "John",
    health: 100,
    fullName: function() {
        return this.name + " the Brave";
    },
    attack: function() {
        this.health -= 1;
        return this.name + " health is " + this.health;
    }
};
```

In this example, name, and health are properties, while fullName and attack are methods.

## How to Access Properties and Methods

Properties and methods of an object can be accessed using ***dot notation*** or ***bracket notation***.

### Dot notation

```javascript
// Property
objectName.propertyName 
// Method
objectName.methodName()
```

### Bracket notation

```javascript
// Property
objectName["propertyName"]
// Method
objectName["methodName"]()
```

### Example using person object

```javascript
// To access the firstName property of the person object
// Dot Notation Property
player.firstName
// Bracket Notation Property
player["firstName"]
// Dot Notation Method
player.fullName()
// Bracket Notation Method
player["fullName"]()
```

### Object Summary
Understanding objects is crucial for understanding JavaScript, and they are used extensively in all the code we will be looking at.


```javascript
%%javascript

/*
 * Simple object or Object Literal
 *  - properties: name, health
 *  - methods: fullName, attack
 */

// JavaScript simple object creation
const player = {
    name: "John",
    health: 100,
    fullName: function() {
        return this.name + " the Brave";
    },
    attack: function() {
        this.health -= 1;
        return this.name + "\'s" + " health is " + this.health;
    }
};

// Convert the output to HTML
function toHTML(output) {
    return `
        <p>${output}</p>
    `;
}

// Jupyter notebook cell output
function print(output) {
    element.append(toHTML(output));
}

// Output the properties of the object
print(player.name);
print(player.health);

// Output the return value of the methods 
print(player.fullName());
print(player.attack());
```

## Transition to Class-Based Structures
As we advance, we will transition from using object literals to class-based structures, which provide a more organized and scalable way to define objects, similar to Java. A class-based data structure will help us write more organized and maintainable code, especially as we develop more complex game features.

A class in JavaScript is defined using the **class keyword**. 
- **Properties** are defined within the constructor
- **Methods** are defined as functions within the class.

### class Player
Using a classic Java-like **class** definition, we can encapsulate JavaScript objects. The **player object** created below contains properties and methods for a player in our Platformer game. The `this.state` data structure is used to hold many of the player's properties as it interacts in the game.

This is the code that creates an object:

```javascript
let player = new Player();
```

### Setting data

Property data can be set and accessed using dot notation:

```javascript
player.state.collision = 'wall';  // string type
player.state.movement = {up: false, down: false, left: true, right: false, falling: false}; // object data type
```

## Player sample

In the Player code cell below, we highlight some features of managing **player** properties.


```javascript
%%javascript

class Player {
    /**
     * Initial environment of the player.
     * @property {string} collision - Name of the current object the player is interacting with (e.g., 'floor', 'wall', 'platform').
     * @property {Array} collisions -  An array that holds a collection of player collisions.
     * @property {string} animation - Name of the current animation state of the player (e.g., 'idle', 'walk', 'run', 'jump').
     * @property {string} direction - The direction the player is facing (e.g., 'left', 'right').
     * @property {Object} movement - The directions in which the player can move.
     * @property {boolean} movement.up - Whether the player can move up.
     * @property {boolean} movement.down - Whether the player can move down.
     * @property {boolean} movement.left - Whether the player can move left.
     * @property {boolean} movement.right - Whether the player can move right.
     * @property {boolean} movement.falling - Whether the player is falling.
     * @property {boolean} isDying - Whether the player is dying.
     */

    // This object represents the initial state of the player when the game starts.
    initEnvironmentState = {
        // environment
        collision: 'none',
        collisions: [],
        // player
        animation: 'idle',
        direction: 'right',
        movement: {up: false, down: false, left: true, right: true, falling: false},
        isDying: false,
    };

    /** GameObject: Constructor for Player object
     */
    constructor() {      
        this.state = {...this.initEnvironmentState}; // Player and environment states 
    }


    /**
     * Adds a collision to the history and updates the current collision.
     * @param {string} collision - The new collision to add.
     */
    pushCollision(collision) {
        this.state.collisions.push(collision);
        this.state.collision = collision;
    }

    /**
     * Pops the last collision from the history and updates the current collision.
     * If the collision stack is empty, the current collision is set to 'none'.
     */
    popCollision() {
        this.state.collisions.pop();
        this.state.collision = this.state.collisions[this.state.collisions.length - 1] || 'none';
    }

    /**
     * Returns a formatted HTML string representing the player's state.
     * Primary purpose is to display the state in a Jupyter notebook.
     * @returns {string} - The formatted state HTML string.
     */
        toHTML() {
            let collisions = (this.state.collisions.length > 0) ? this.state.collisions.slice().reverse().map((collision, index) => `  ${collision}`).join(', ')  : 'none';
            return `
            <div>
                <strong>Collision Stack:</strong> ${collisions}
                <br>
                <strong>Player State:</strong>
                <ul>
                    <li>Collision: ${this.state.collision}</li>
                    <li>Animation: ${this.state.animation}</li>
                    <li>Direction: ${this.state.direction}</li>
                    <li>Movement:
                        <ul>
                            <li>Up: ${this.state.movement.up}</li>
                            <li>Down: ${this.state.movement.down}</li>
                            <li>Left: ${this.state.movement.left}</li>
                            <li>Right: ${this.state.movement.right}</li>
                            <li>Falling: ${this.state.movement.falling}</li>
                        </ul>
                    </li>
                    <li>Is Dying: ${this.state.isDying}</li>
                </ul>
            </div>
            `;
        }
    
}

// Example usage
const player = new Player();

// Initial state
// Jupyter JavaScript magic element is used to display the output, versus normal DOM
element.append("Initial instance data for a player:");
element.append(player.toHTML());

// Simulate Wall collision
player.pushCollision('wall');
player.state.movement = {up: false, down: false, left: true, right: false, falling: false};
element.append("Wall collision simulation:");
element.append(player.toHTML());

// Simulate JumpPlatform collision
player.pushCollision('jumpPlatform');
player.state.movement = {up: false, down: false, left: true, right: true, falling: false};
element.append("JumpPlatform collision simulation:");
element.append(player.toHTML());

// Pop back to the previous collision
player.popCollision();
element.append("Pop back to the previous collision (back 1):");
element.append(player.toHTML());

// Pop back again to the previous collision
player.popCollision();
element.append("Pop back to the previous collision (back 2):");
element.append(player.toHTML());
```

## Hack

Create and Manage objects hack

1. In this notebook combine concept of Object Literal and Object Instance.  Use Object Literal as an intiaizer for the Object Instance.
2. Make an array of Player object instances four or five, give them health and power, ie speed, strength, ...
    * Make a game loop to cycle through each of the objects
    * Each pass through the loop have a random object battle with all other objects using a random power
    * Lower health by 1 on battle, lower health by 10 for loss
    * Provide a leader board output each round
    * Kill objects if their health goes to zero or less

You can work with pair/treo, but each of you should have a different concept  


```python
%%js
// Player class definition
class Player {
    constructor(name, health, powers) {
        this.name = name;       // Player's name
        this.health = health;   // Player's health
        this.powers = powers;   // Player's powers (speed, strength, defense)
    }
    // Method to check if the player is still alive by checking if player has more than 0 health.
    isAlive() {
        return this.health > 0;
    }
    // Method to randomly select a power
    getRandomPower() {
        const keys = Object.keys(this.powers);
        return keys[Math.floor(Math.random() * keys.length)];
    }
    // Method to use a specific power and return its value
    usePower(power) {
        return this.powers[power];
    }
}
// Player data with powers (Here you pick you player strengths and weaknesses)
const playerData = [
    {name: "Aria", health: 100, powers: {speed: 0, strength: 0, defense: 20}},
    {name: "Nick", health: 100, powers: {speed: 21, strength: 519, defense: 20}},
    {name: "Yusuf", health: 100, powers: {speed: 3, strength: 35, defense: 62}},
    {name: "Santhosh", health: 100, powers: {speed: 3.1, strength: 3.1, defense: 3.1}}
];

// Create Player data (Name, Health, and Strengths)
let players = playerData.map(p => new Player(p.name, p.health, p.powers));
// Round counter
let roundCounter = 1;
// Game loop
while (players.filter(p => p.isAlive()).length > 1) {
    console.log(`\n--- Round ${roundCounter} ---`);
    // Loop through each player for battle
    players.forEach(attacker => {
        // Only battle if the player is alive
        if (!attacker.isAlive()) return;
        players.forEach(defender => {
            // Skip if attacking the same player or the defender is dead
            if (attacker === defender || !defender.isAlive()) return;
            // Select a random power for the attacker
            let power = attacker.getRandomPower();
            let attackValue = attacker.usePower(power);  // Get attacker's power value
            let defenseValue = defender.usePower(power); // Get defender's defense value
            // Health reduction rules:
            defender.health -= 1; // Every battle lowers the defender's health by 1
            // If the attacker's value is higher than the defender's defense, inflict extra damage
            if (attackValue > defenseValue) {
                defender.health -= 10; // Inflict an additional 10 damage if the attacker wins
            }
        });
    });
    // Show the leaderboard after the round
    console.log(`Leaderboard after round ${roundCounter}:`); // displays message 'leaderboard after round #'
    players.forEach(p => {
        console.log(`${p.name}: ${p.health > 0 ? p.health : 0} HP`); // Show each players health after every round
    });
    // Kill players whose health is 0 or less
    players.forEach(p => {
        if (p.health <= 0) {
            p.health = 0; // Ensure health is 0 for eliminated players
        }
    });
    roundCounter++; // Increase round count
}
// Final result: Declare the winner
let winner = players.find(p => p.isAlive());
if (winner) {
    console.log(`\n:trophy: The winner is ${winner.name} with ${winner.health} HP!`); // Message showing who won
} else {
    console.log("\n:skull: All players are dead. You all suck."); // Message showing the scenerio where all players had equal power.
}







```



<script>
const playerTemplate = {
    name: "Unnamed",
    health: 100,
    speed: 5,
    strength: 5,
    randomPower: function() {
        this._toggle = !this._toggle;
        return this._toggle ? this.speed : this.strength;
    },
    battle: function(opponent) {
        this.health -= 1;
        opponent.health -= 1;
        const myPower = this.randomPower();
        const oppPower = opponent.randomPower();
        if (myPower > oppPower) {
            opponent.health -= 10;
        } else if (myPower < oppPower) {
            this.health -= 10;
        }
    },
    isAlive: function() {
        return this.health > 0;
    }
};

const players = [
    Object.create(playerTemplate),
    Object.create(playerTemplate),
    Object.create(playerTemplate)
];

players[0].name = "Alice";
players[0].health = 50;
players[0].speed = 7;
players[0].strength = 4;

players[1].name = "Bob";
players[1].health = 50;
players[1].speed = 5;
players[1].strength = 6;

players[2].name = "Charlie";
players[2].health = 50;
players[2].speed = 3;
players[2].strength = 8;

let output = "";

const attacker = players[0];
output += `<strong>${attacker.name} attacks all others:</strong><br>`;
players.forEach(opponent => {
    if (attacker !== opponent && opponent.isAlive()) {
        attacker.battle(opponent);
        output += `${attacker.name} vs ${opponent.name}<br>`;
        output += `${attacker.name} HP: ${attacker.health}<br>`;
        output += `${opponent.name} HP: ${opponent.health}<br><br>`;
    }
});

output += "<hr><strong>Final Health Status:</strong><br>";
players.forEach(p => {
    output += `${p.name}: ${p.health} HP<br>`;
});

document.getElementById("js-output").innerHTML = output;
</script>
<div id="js-output"></div>


