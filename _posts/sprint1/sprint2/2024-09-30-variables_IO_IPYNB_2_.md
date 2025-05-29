---
comments: True
layout: post
title: JavaScript Variables, Input, Output
description: An introduction to JavaScript variables, input, and output using the RPG game as an example.
categories: ['JavaScript Fundamentals']
courses: {'csse': {'week': 6}}
type: ccc
---

## Variables

Variables are storage containers for data values used within a programming language. Variables can be useful when changing preferences, selecting a background, creating animations, and changing assets in game programming.

### Variable Inputs

To obtain data from user and save into a JavaScript variable requires the use of HTML.  

The `<input>` HTML element is used to create interactive controls for web-based forms in order to receive data from the user.

- Geeks for Geeks Referece on [input tag](https://www.geeksforgeeks.org/html-input-tag/)
- Remember in Jupyter Notebooks and in GitHub Pages we do not use `<head>` and `<body>` tags.  
- Additionally, we prefer using SASS for `<style>` in GitHub Pages.

### Variable Outputs

To output a variable in JavaScript it works in combination with HTML as well. To output the variable game_speed or any errors it requires  that outputs to be placed in the Document Object Model (DOM).

Additionally, it is common practice in debugging a program to output to console.log.

To view DOM and Developer Outputs
- Open Help -> Toggle Developer Tools
- Go to Console menu, you can clear console to view outputs from console comands in this cell
- To see DOM go to Elements tab and use selector and click on output in this window.


```python
%%html 

<!-- Input definitions -->
<div>
  <label for="speed">Adjust Speed (1-5):</label>
  <input type="number" id="speed" name="speed" min="1" max="5" value="2">
  <button onclick="submitSpeed()">Submit</button>
</div>

<!-- Document Object Model (DOM) output locations -->
<div id="output"></div>
<div id="error"></div>

<script>
  // Function to validate and output the game speed value
  function submitSpeed() {
    let gameSpeed = document.getElementById('speed').value;
    
    // Ensure the value is within the allowed range
    if (gameSpeed < 1 || gameSpeed > 5) {
      // Set/clear output messages when there is an error
      document.getElementById('output').innerHTML = "";
      // Output an error message to the console
      console.error("Invalid game speed value:", gameSpeed);
      // Output an error message to the HTML page
      document.getElementById('error').innerHTML = "Invalid game speed value: " + gameSpeed;
    } else {
      // Set/clear error messages when the value is valid
      document.getElementById('error').innerHTML = "";
      // Output the game speed value to the console
      console.log("Game speed set to:", gameSpeed);
      // Output the game speed value to the HTML page
      document.getElementById('output').innerHTML = "Game speed set to: " + gameSpeed;
    }
  }
</script>
```



<!-- Input definitions -->
<div>
  <label for="speed">Adjust Speed (1-5):</label>
  <input type="number" id="speed" name="speed" min="1" max="5" value="2">
  <button onclick="submitSpeed()">Submit</button>
</div>

<!-- Document Object Model (DOM) output locations -->
<div id="output"></div>
<div id="error"></div>

<script>
  // Function to validate and output the game speed value
  function submitSpeed() {
    let gameSpeed = document.getElementById('speed').value;

    // Ensure the value is within the allowed range
    if (gameSpeed < 1 || gameSpeed > 5) {
      // Set/clear output messages when there is an error
      document.getElementById('output').innerHTML = "";
      // Output an error message to the console
      console.error("Invalid game speed value:", gameSpeed);
      // Output an error message to the HTML page
      document.getElementById('error').innerHTML = "Invalid game speed value: " + gameSpeed;
    } else {
      // Set/clear error messages when the value is valid
      document.getElementById('error').innerHTML = "";
      // Output the game speed value to the console
      console.log("Game speed set to:", gameSpeed);
      // Output the game speed value to the HTML page
      document.getElementById('output').innerHTML = "Game speed set to: " + gameSpeed;
    }
  }
</script>



### Variable Naming Conventions

- **camelCase** In camel case, the first word is lowercase, and the first letter of the remaining words are uppercase: `gameSpeed`
- **snake_case** In snake casse, the words in variables are all lowercase and are separated by a underbar: `game_speed`
- **PascalCase** In PascalCase, the first letter in the word is capitalized: `GameSpeed`

In JavaScript, there will be usage of all three types in the RPG project.

## Variables containing Variables (Reference Types)

There are variables that contain other variables. These are called reference types.

- **JSON Objects**: These variables contain key names and associated values (key-value pairs). The key is used for reference and the value contains the data.
  - **Key**: This is similar to a variable name. The key describes the value and is followed by a colon.
  - **Value**: The value is associated with the key.
  - **Sample Definition**: `let gameAttribute = {"Speed": 3, "Avatar": "Mario"}`
  - **Sample Reference**: `gameAttribute["Speed"]`
  - **Sample Output from Reference**: `3`

- **JSON Arrays**: These variables contain a sequence of values.
  - **Sample Definition**: `let scoreHistory = [50, 75, 66, 80, 100, 85]`
  - **Sample Reference**: `scoreHistory[2]`
  - **Sample Output from Reference**: `66`


```python
%%js

// Reference Type example
// Open VSCode Help -> Toggle Developer Tools -> Console

// JSON Object
let gameAttribute = {
    "Speed": 3,
    "Avatar": "Mario"
};

// Accessing JSON Object values
// Accessing JSON Object values using dot notation
console.log("Speed-Dot:", gameAttribute.Speed); // Output: Speed: 3
console.log("Avatar-Dot:", gameAttribute.Avatar); // Output: Avatar: Mario

// Accessing JSON Object values using bracket notation
console.log("Speed-Bracket:", gameAttribute["Speed"]); // Output: Speed: 3
console.log("Avatar-Bracket:", gameAttribute["Avatar"]); // Output: Avatar: Mario

// JSON Array
let scoreHistory = [50, 75, 66, 80, 100, 85];

// Accessing JSON Array values
console.log("Score at index 2:", scoreHistory[2]); // Output: Score at index 2: 66
```


    <IPython.core.display.Javascript object>


### Variable Naming Convention Hack

Search up naming convention for JavaScript.  Conventions are important to easily recognize purpose of definitions.
1. Usage of camelCase.  What is standard?
2. Usage of UPPER_CASE snake_case.  What is standard?
3. Usage of PascalCase.  What is standard?

### RPG Project Hack
Identify naming convention and data type used in this code.  Which items would you change according to your research on naming conventions?  What are the data types?  Change names and provide comments to to describe data types and name convention changes.  

1. Make a new code cell to make it easy to compare before and after.
2. Figure out naming convention for Key-Values items.  Source and share your reference.

```js
import GameControl from '{{site.baseurl}}/assets/js/rpg/GameControl.js';

// Background data
const image_src = "{{site.baseurl}}/images/rpg/water.png";
const image_data = {
    pixels: {height: 580, width: 1038}
};
const image = {src: image_src, data: image_data};

// Sprite data
const sprite_src = "{{site.baseurl}}/images/rpg/turtle.png";
const sprite_data = {
    SCALE_FACTOR: 10,
    STEP_FACTOR: 1000,
    ANIMATION_RATE: 50,
    pixels: {height: 280, width: 256},
    orientation: {rows: 4, columns: 3 },
    down: {row: 0, start: 0, columns: 3 },
    left: {row: 1, start: 0, columns: 3 },
    right: {row: 2, start: 0, columns: 3 },
    up: {row: 3, start: 0, columns: 3 },
};
const sprite = {src: sprite_src, data: sprite_data};

// Assets for game
const assets = {image: image, sprite: sprite}

// Start game engine
GameControl.start(assets);
```

### Code Block Hack

Make a new code block for some game elements that you have in your "Ideation".
## Heres an Idea I had about my sprite going up against an enemy!
import json

# Define Luigi
luigi = {
    "name": "Luigi",
    "position": {"x": 100, "y": 300},
    "health": 100
}

# Define the enemy
enemy = {
    "name": "Goomba",
    "position": {"x": 500, "y": 300},
    "bullets": [],
    "fire_rate": 3  # Shoot every 3 seconds
}

# Enemy shoots a bullet
def shoot_bullet():
    bullet = {
        "position": {"x": enemy["position"]["x"], "y": enemy["position"]["y"]},
        "speed": 5,  # speed of the bullet
        "damage": 10
    }
    enemy["bullets"].append(bullet)
    print(json.dumps(bullet, indent=4))

# Simulate shooting
for _ in range(3):
    shoot_bullet()

# Print the enemy and Luigi details
print("\nEnemy Info:", json.dumps(enemy, indent=4))
print("\nLuigi Info:", json.dumps(luigi, indent=4))

