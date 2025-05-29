---
comments: True
layout: post
title: JavaScript Data Types and Operators
description: Learn about the different data types in JavaScript.
permalink: /csse/javascript/fundamentals/data-types/
categories: ['JavaScript Fundamentals']
courses: {'csse': {'week': 6}}
type: ccc
---

### Primitive Data Types

In game development, understanding the different data types in JavaScript is crucial for managing the various elements and attributes of your game. Primitive data types include numbers, strings, booleans, undefined, null, symbols, and BigInts. Reference data types include objects, arrays, and functions. Each type plays a unique role in creating a dynamic and interactive gaming experience.

1. **Number**:
   - Represents numerical values, health and timeInMilliSeconds

2. **String**:
   - Represents text, such as the user's name or keypress.

3. **Boolean**:
   - Represents true/false values, such as isAlive.

4. **Undefined**:
   - Represents a variable that has been declared but not yet assigned a value.

5. **Null**:
   - Represents the intentional absence of any object value, such as an empty inventory slot.

6. **Symbol**:
   - Represents a unique and immutable value, often used as unique identifiers for game objects.

7. **BigInt**:
   - Represents very large integers, such as the total number of points accumulated over many games.

### Reference Data Types

1. **Object**:
   - Represents a collection of key-value pairs, such as a player's attributes or game settings.

2. **Array**:
   - Represents an ordered collection of values, such as a list of high scores or inventory items.

3. **Function**:
   - Represents a block of code designed to perform a specific task, such as attacking an enemy or saving the game.


```python
%%js

/* Primitive Data Types
These are data types that store a single value.
*/

// Number: Represents numerical values, such as health and speed
let health = 100; // Integer
let playerSpeed = 5.75; // Float representing the player's speed

console.log("Health (Number):", health, "Type:", typeof health);
console.log("Player Speed (Number):", playerSpeed, "Type:", typeof playerSpeed);

// String: Represents text, such as the user's name or keypress
let userName = "Hero123"; // User name
let keyPress = 'a'; // Keypress

console.log("User Name (String):", userName, "Type:", typeof userName);
console.log("Key Press (String):", keyPress, "Type:", typeof keyPress);

// Compare single character to its ASCII value
let asciiValue = keyPress.charCodeAt(0);
console.log("ASCII Value of Key Press:", asciiValue, "Type:", typeof asciiValue);
console.log("Is Key Press 'a' (ASCII 97)?", asciiValue === 97);

// Boolean: Represents true/false values, such as isAlive
let isAlive = true;

console.log("Is Alive (Boolean):", isAlive, "Type:", typeof isAlive);

// Undefined: Represents a variable that has been declared but not yet assigned a value
let questReward;

console.log("Quest Reward (Undefined):", questReward, "Type:", typeof questReward);

// Null: Represents the intentional absence of any object value, such as an empty inventory slot
let inventorySlot = null;

console.log("Inventory Slot (Null):", inventorySlot, "Type:", typeof inventorySlot);

// Symbol: Represents a unique and immutable value, often used as unique identifiers for game objects
let uniqueID = Symbol('playerID');

console.log("Unique ID (Symbol):", uniqueID, "Type:", typeof uniqueID);

// BigInt: Represents very large integers, such as the total time played in milliseconds
let totalTimePlayed = 1234567890123456789012345678901234567890n;

console.log("Total Time Played (BigInt):", totalTimePlayed, "Type:", typeof totalTimePlayed);

/* Reference Data Types
These are data types that store references to memory locations.
*/

// Object: Represents a collection of key-value pairs, such as player attributes or game settings
let playerAttributes = {
  name: "Hero123",
  health: 100,
  mana: 50
};

console.log("Player Attributes (Object):", playerAttributes, "Type:", typeof playerAttributes);

// Array: Represents an ordered collection of values, such as a list of high scores or inventory items
let highScores = [1500, 1200, 900, 600, 300];

console.log("High Scores (Array):", highScores, "Type:", typeof highScores);

// Function: Represents a block of code designed to perform a specific task, such as attacking an enemy or saving the game
function attackEnemy() {
  console.log("Enemy attacked!");
}

console.log("Attack Enemy (Function):", attackEnemy, "Type:", typeof attackEnemy);
attackEnemy();
```


    <IPython.core.display.Javascript object>


### Data Type Operations

In JavaScript, we will be interacting with data and data types. Data types have operators that allow you to alter the data types.

### Assignment Operators and Math Operators

In this example height is being assigned the value of a calculation in relation to conventional screen sizes. These operators are straight forward (`=`, `+`, `-`, `*`, `/`)

```js
let width = 1920;
let height = Math.round(width * 9 / 16);
```

### Compound Assignment

These are shorthand for common operations and are specified as follows. Here is an example of one compound assignment. Make a code cell and try some more (`+=`, `*=`, `-=`, `\=`)

```js
let number = 100;
number += 1;  // short for number = number + 1;
```

### Concatenation

Concatenation is used to join two or more elements together. This is the same as the plus (`+`) operator. It looks like math, but once a string gets involved, it turns into concatenation.

```js
// Simple concatenation
let blockSize = 50;
block.style.width = blockSize + "px";
```

```js
/// Math at first and then concatenation following PEMDAS
block.style.height = blockSize * 9 / 16 + "px";
```

### Popcorn Hack 1

Make a code cell that show usage of compound assignment in a Data Type Operations.


```python
%%js

let number = 17;

number+= 5;
console.log("After += 5: ", number);
number*= 2;
console.log("After *= 2: ", number);

```


    <IPython.core.display.Javascript object>


## Scale a Block

Scalling is an important Math operation that is used in Gaming.  This example is considering HD formats to construct a block.


```python
%%html 

<p>This example uses data types, operators, and functions to scale a block based on a user-defined width.</p>

<!-- Input definitions -->
<div>
  <label for="width">Enter Width (1280, 1920, 2560, 3840):</label>
  <input type="number" id="width" name="width" min="1280" max="3840" step="640" value="1280">
  <button onclick="submitScale()">Submit</button>
</div>

<!-- Document Object Model (DOM) output locations -->
<div id="output"></div>
<div id="error"></div>

<!-- Block display -->
<div id="block" style="width: 64px; height: 64px; background-color: red;"></div>

<script>

  // Function to validate and output the scale value
  function submitScale() {
    const BLOCK_SCALE_DIVISOR = 20;
    const ASPECT_RATIO = 16 / 16;
    let block = document.getElementById('block');
    let width = parseInt(document.getElementById('width').value);
    
    // Restrict sizes to common HD resolutions
    if (width === 1280 || width === 1920 || width === 2560 || width === 3840) {
      // Calculate height based on 16:9 aspect ratio
      let height = Math.round(width * ASPECT_RATIO);
      
      // Calculate block size as 1/20th of the scale dimensions
      let blockSize = Math.min(width, height) / BLOCK_SCALE_DIVISOR;
      
      // Set/clear error messages when the value is valid
      document.getElementById('error').innerHTML = "";
      // Output the scale value to the console
      document.getElementById('output').innerHTML = "Scale set to: " + width + " x " + height + " (Block size: " + blockSize + "px)";
      
      // Adjust the size of the block
      block.style.width = blockSize + "px";
      block.style.height = blockSize * ASPECT_RATIO + "px";
    } else {
      // Set/clear output messages when there is an error
      document.getElementById('output').innerHTML = "";
      // Output an error message to the console
      // Output an error message to the HTML page
      document.getElementById('error').innerHTML = "Invalid HD resolution: " + width;

      // Clear the block size
      block.style.width = "0px";
      block.style.height = "0px";
    }
    console.error("HD resolution:", block.style.width, "x", block.style.height);
  }
</script>
```



<p>This example uses data types, operators, and functions to scale a block based on a user-defined width.</p>

<!-- Input definitions -->
<div>
  <label for="width">Enter Width (1280, 1920, 2560, 3840):</label>
  <input type="number" id="width" name="width" min="1280" max="3840" step="640" value="1280">
  <button onclick="submitScale()">Submit</button>
</div>

<!-- Document Object Model (DOM) output locations -->
<div id="output"></div>
<div id="error"></div>

<!-- Block display -->
<div id="block" style="width: 64px; height: 64px; background-color: red;"></div>

<script>

  // Function to validate and output the scale value
  function submitScale() {
    const BLOCK_SCALE_DIVISOR = 20;
    const ASPECT_RATIO = 16 / 16;
    let block = document.getElementById('block');
    let width = parseInt(document.getElementById('width').value);

    // Restrict sizes to common HD resolutions
    if (width === 1280 || width === 1920 || width === 2560 || width === 3840) {
      // Calculate height based on 16:9 aspect ratio
      let height = Math.round(width * ASPECT_RATIO);

      // Calculate block size as 1/20th of the scale dimensions
      let blockSize = Math.min(width, height) / BLOCK_SCALE_DIVISOR;

      // Set/clear error messages when the value is valid
      document.getElementById('error').innerHTML = "";
      // Output the scale value to the console
      document.getElementById('output').innerHTML = "Scale set to: " + width + " x " + height + " (Block size: " + blockSize + "px)";

      // Adjust the size of the block
      block.style.width = blockSize + "px";
      block.style.height = blockSize * ASPECT_RATIO + "px";
    } else {
      // Set/clear output messages when there is an error
      document.getElementById('output').innerHTML = "";
      // Output an error message to the console
      // Output an error message to the HTML page
      document.getElementById('error').innerHTML = "Invalid HD resolution: " + width;

      // Clear the block size
      block.style.width = "0px";
      block.style.height = "0px";
    }
    console.error("HD resolution:", block.style.width, "x", block.style.height);
  }
</script>



### Popcorn Hack 2

Make a code cell that changes block into a square, versus HD resolution

## Placing a Block

Often in gaming you will want to position on element in relationship to another.


```python
%%html 

<p>This example uses data types, operators, and functions to scale a block based on a user-defined width.</p>

<!-- Input definitions -->
<div>
  <label for="widthCanvas">Enter Width (1280, 1920, 2560, 3840):</label>
  <input type="number" id="widthCanvas" name="widthCanvas" min="1280" max="3840" step="640" value="1280">
  <button onclick="submitScaleImg()">Submit</button>
</div>

<!-- Document Object Model (DOM) output locations -->
<div id="outputMsg"></div>
<div id="errorMsg"></div>

<!-- Canvas for background display -->
<canvas id="canvas"></canvas>

<script>
  // Function to validate and output the scale value
  function submitScaleImg() {
    const BLOCK_SCALE_DIVISOR = 20;
    const ASPECT_RATIO = 9 / 16;
    const SCALE_DOWN_FACTOR = 0.5;
    let canvas = document.getElementById('canvas');
    let c = canvas.getContext('2d');
    let width = parseInt(document.getElementById('widthCanvas').value);
    
    // Restrict sizes to common HD resolutions
    if (width === 1280 || width === 1920 || width === 2560 || width === 3840) {
      // Calculate height based on 16:9 aspect ratio
      let height = Math.round(width * ASPECT_RATIO);
      
      // Set the canvas dimensions
      canvas.width = width * SCALE_DOWN_FACTOR;
      canvas.height = height * SCALE_DOWN_FACTOR;
      
      // Calculate block size as 1/20th of the scale dimensions and scale down by 50%
      let blockSize = Math.min(width, height) / BLOCK_SCALE_DIVISOR;
      
      // Set/clear error messages when the value is valid
      document.getElementById('errorMsg').innerHTML = "";
      // Output the scale value to the console
      document.getElementById('outputMsg').innerHTML = "Scale set to: " + width + " x " + height + " (Block size: " + blockSize + "px)";
      
      // Load background image
      let imageBackground = new Image();
      imageBackground.src = 'https://samayass.github.io/samayaCSA/images/background.png';
      imageBackground.onload = function() {
        // Clear the canvas before drawing
        c.clearRect(0, 0, canvas.width, canvas.height);
        // Draw the background image on the canvas
        c.drawImage(imageBackground, 0, 0, canvas.width, canvas.height);
        
        // Draw red blocks in each corner
        c.fillStyle = 'red';
        c.fillRect(0, 0, blockSize, blockSize); // Top-left corner
        c.fillRect(canvas.width - blockSize, 0, blockSize, blockSize); // Top-right corner
        c.fillRect(0, canvas.height - blockSize, blockSize, blockSize); // Bottom-left corner
        c.fillRect(canvas.width - blockSize, canvas.height - blockSize, blockSize, blockSize); // Bottom-right corner
      };
    } else {
      // Set/clear output messages when there is an error
      document.getElementById('outputMsg').innerHTML = "";
      // Output an error message to the console
      console.error("Invalid HD resolution:", width);
      // Output an error message to the HTML page
      document.getElementById('errorMsg').innerHTML = "Invalid HD resolution: " + width;
      
      // Clear the canvas
      c.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
</script>
```



<p>This example uses data types, operators, and functions to scale a block based on a user-defined width.</p>

<!-- Input definitions -->
<div>
  <label for="widthCanvas">Enter Width (1280, 1920, 2560, 3840):</label>
  <input type="number" id="widthCanvas" name="widthCanvas" min="1280" max="3840" step="640" value="1280">
  <button onclick="submitScaleImg()">Submit</button>
</div>

<!-- Document Object Model (DOM) output locations -->
<div id="outputMsg"></div>
<div id="errorMsg"></div>

<!-- Canvas for background display -->
<canvas id="canvas"></canvas>

<script>
  // Function to validate and output the scale value
  function submitScaleImg() {
    const BLOCK_SCALE_DIVISOR = 20;
    const ASPECT_RATIO = 9 / 16;
    const SCALE_DOWN_FACTOR = 0.5;
    let canvas = document.getElementById('canvas');
    let c = canvas.getContext('2d');
    let width = parseInt(document.getElementById('widthCanvas').value);

    // Restrict sizes to common HD resolutions
    if (width === 1280 || width === 1920 || width === 2560 || width === 3840) {
      // Calculate height based on 16:9 aspect ratio
      let height = Math.round(width * ASPECT_RATIO);

      // Set the canvas dimensions
      canvas.width = width * SCALE_DOWN_FACTOR;
      canvas.height = height * SCALE_DOWN_FACTOR;

      // Calculate block size as 1/20th of the scale dimensions and scale down by 50%
      let blockSize = Math.min(width, height) / BLOCK_SCALE_DIVISOR;

      // Set/clear error messages when the value is valid
      document.getElementById('errorMsg').innerHTML = "";
      // Output the scale value to the console
      document.getElementById('outputMsg').innerHTML = "Scale set to: " + width + " x " + height + " (Block size: " + blockSize + "px)";

      // Load background image
      let imageBackground = new Image();
      imageBackground.src = 'https://samayass.github.io/samayaCSA/images/background.png';
      imageBackground.onload = function() {
        // Clear the canvas before drawing
        c.clearRect(0, 0, canvas.width, canvas.height);
        // Draw the background image on the canvas
        c.drawImage(imageBackground, 0, 0, canvas.width, canvas.height);

        // Draw red blocks in each corner
        c.fillStyle = 'red';
        c.fillRect(0, 0, blockSize, blockSize); // Top-left corner
        c.fillRect(canvas.width - blockSize, 0, blockSize, blockSize); // Top-right corner
        c.fillRect(0, canvas.height - blockSize, blockSize, blockSize); // Bottom-left corner
        c.fillRect(canvas.width - blockSize, canvas.height - blockSize, blockSize, blockSize); // Bottom-right corner
      };
    } else {
      // Set/clear output messages when there is an error
      document.getElementById('outputMsg').innerHTML = "";
      // Output an error message to the console
      console.error("Invalid HD resolution:", width);
      // Output an error message to the HTML page
      document.getElementById('errorMsg').innerHTML = "Invalid HD resolution: " + width;

      // Clear the canvas
      c.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
</script>



### Popcorn Hack 3

Try to place a square in every corner.


### Turtle / Fish HW

Make the Turtle and Fish start on screen in different locations (ie Fish Center/Left, Turtle Center/Right)
