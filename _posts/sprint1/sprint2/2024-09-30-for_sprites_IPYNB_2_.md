---
comments: True
layout: post
title: JavaScript For Loops and Sprites
description: An introduction to JavaScript for loops and working with Sprites.
permalink: /csse/javascript/fundamentals/for-loops/
categories: ['JavaScript Fundamentals']
courses: {'csse': {'week': 7}}
type: ccc
---

## MetaData, Class, For Loops

The objective of this article is to enhance your knowledge and understanding of MetaData, Class Definitions, and For-Loops.

**MetaData**: In this article, MetaData contains information about the sprite, including its name, source URL, and orientation details such as the number of rows and columns, header size, padding, and jagged rows.

**Class**: In this context, the canvas and drawing operations are initialized and stored in a class. These are used to output the sprite sheet image and individual frames within the sprite sheet.
  - **constructor**: Initializes the canvas, context, and sprite image.
  - **draw() method**: Uses nested **for-loops** to iterate through the sprite sheet and draw each frame independently on the canvas. It calculates the source and destination coordinates for each frame, taking into account the header and padding.

### Introduction to For Loops

For Loops are commonly used to iterate over data structures, including JavaScript Arrays and Objects. 

Below is an example of a conventional for loop that iterates over an array of names and displays each name in a paragraph (`<p>`) tag within a designated HTML div.



```python
%%html

<!-- HTML output div -->
<div id="forConventional"></div>

<script>
    var names = ['turtle', 'fish', 'frog', 'penguin'];

    // Conventional for loop with index used to access elements
    for (let i = 0; i < names.length; i++) {

        // Create a p tag for each name and add it to the forConventional div
        const p = document.createElement('p');
        p.innerHTML = names[i];
        document.getElementById('forConventional').appendChild(p);

    }
</script>
```



<!-- HTML output div -->
<div id="forConventional"></div>

<script>
    var names = ['turtle', 'fish', 'frog', 'penguin'];

    // Conventional for loop with index used to access elements
    for (let i = 0; i < names.length; i++) {

        // Create a p tag for each name and add it to the forConventional div
        const p = document.createElement('p');
        p.innerHTML = names[i];
        document.getElementById('forConventional').appendChild(p);

    }
</script>



### ForEach Loop

The ForEach loop is another way to iterate over data structures, such as JavaScript Arrays and Objects. Below is an example of a ForEach loop that iterates over an array of coding adventures and displays each adventure in a paragraph (`<p>`) tag within a designated HTML div.


```python
%%html

<!-- HTML output div -->
<div id="forEach"></div>

<script>
    var codingAdventures = ['GitHub', 'Terminal', 'Jupyter', 'JavaScript'];

    // ForEach loop to iterate over the array
    for (let adventure of codingAdventures) {

        // Create a p tag for each adventure and add it to the forEach div
        const p = document.createElement('p');
        p.innerHTML = adventure;
        document.getElementById('forEach').appendChild(p);

    }
</script>
```

### 2D array

There is a data structure called **arrays in arrays** or **2D arrays**.  The data structure helps organize the data efficiently and access it using **nested loops**. Each row in the 2D array will represent a category (e.g., GitHub, Terminal), and each column will contain an array of questions and answers for that category.


```python
%%html

<div id="questionsAnswers"></div>

<script>
    // 2D array of questions and answers with titles
    var qaArray = [
        [
            'GitHub',
            [
                { question: 'What is a repository?', answer: 'A repository is a storage space where your project lives.' },
                { question: 'How do you create a branch?', answer: 'You can create a branch by using the command git checkout -b branchName.' },
                { question: 'How do you merge branches?', answer: 'You can merge branches by using the command git merge branchName.' },
                { question: 'How do you push changes to GitHub?', answer: 'You can push changes to GitHub by using the command git push origin branchName.' }
            ]
        ],
        [
            'Terminal',
            [
                { question: 'What is the command to list hidden files in a directory?', answer: 'The command to list files in a directory is ls -a.' },
                { question: 'What is the command to change directories?', answer: 'The command to change directories is cd.' },
                { question: 'What is the command to create a new directory?', answer: 'The command to create a new directory is mkdir.' },
                { question: 'What is the command to remove a directory?', answer: 'The command to remove a directory is rm -rf.' }
            ]
        ],
        [
            'Jupyter Notebook',
            [
                { question: 'How do you setup a markdown cell?', answer: 'You setup a markdown cell by selecting the cell type dropdown and selecting markdown.' },
                { question: 'How do you setup a code cell?', answer: 'You setup a code cell by selecting the cell type dropdown and selecting code.' },
                { question: 'What kernel do you select to run JavaScript code?', answer: 'You select the Python kernel to run JavaScript code.' },
                { question: 'How do you see JavaScript console output?', answer: 'You see JavaScript console output by using the console.log() method.' }
            ]
        ],
        [
            'JavaScript',
            [
                { question: 'What is JavaScript?', answer: 'JavaScript is a programming language that enables you to create interactive web pages.' },
                { question: 'What is a variable?', answer: 'A variable is a container that stores data.' },
                { question: 'What is a function?', answer: 'A function is a block of code that performs a specific task.' },
                { question: 'What is a loop?', answer: 'A loop is a programming structure that repeats a sequence of instructions.' }
            ]
        ]
    ];

    // Nested for loops to display questions and answers with titles
    for (let category of qaArray) {
        // Create an h2 tag for each category title
        const h2 = document.createElement('h2');
        h2.innerHTML = category[0];  // index 0 is the title of the category
        document.getElementById('questionsAnswers').appendChild(h2);

        // Iterate through each question and answer in the category
        for (let qa of category[1]) {  // index 1 is the array of questions and answers
            // Create a p tag for each question and answer
            const p = document.createElement('p');
            p.innerHTML = `<strong>Q:</strong> ${qa.question} <br> <strong>A:</strong> ${qa.answer}`;
            document.getElementById('questionsAnswers').appendChild(p);
        }
    }
</script>
```



<div id="questionsAnswers"></div>

<script>
    // 2D array of questions and answers with titles
    var qaArray = [
        [
            'GitHub',
            [
                { question: 'What is a repository?', answer: 'A repository is a storage space where your project lives.' },
                { question: 'How do you create a branch?', answer: 'You can create a branch by using the command git checkout -b branchName.' },
                { question: 'How do you merge branches?', answer: 'You can merge branches by using the command git merge branchName.' },
                { question: 'How do you push changes to GitHub?', answer: 'You can push changes to GitHub by using the command git push origin branchName.' }
            ]
        ],
        [
            'Terminal',
            [
                { question: 'What is the command to list hidden files in a directory?', answer: 'The command to list files in a directory is ls -a.' },
                { question: 'What is the command to change directories?', answer: 'The command to change directories is cd.' },
                { question: 'What is the command to create a new directory?', answer: 'The command to create a new directory is mkdir.' },
                { question: 'What is the command to remove a directory?', answer: 'The command to remove a directory is rm -rf.' }
            ]
        ],
        [
            'Jupyter Notebook',
            [
                { question: 'How do you setup a markdown cell?', answer: 'You setup a markdown cell by selecting the cell type dropdown and selecting markdown.' },
                { question: 'How do you setup a code cell?', answer: 'You setup a code cell by selecting the cell type dropdown and selecting code.' },
                { question: 'What kernel do you select to run JavaScript code?', answer: 'You select the Python kernel to run JavaScript code.' },
                { question: 'How do you see JavaScript console output?', answer: 'You see JavaScript console output by using the console.log() method.' }
            ]
        ],
        [
            'JavaScript',
            [
                { question: 'What is JavaScript?', answer: 'JavaScript is a programming language that enables you to create interactive web pages.' },
                { question: 'What is a variable?', answer: 'A variable is a container that stores data.' },
                { question: 'What is a function?', answer: 'A function is a block of code that performs a specific task.' },
                { question: 'What is a loop?', answer: 'A loop is a programming structure that repeats a sequence of instructions.' }
            ]
        ]
    ];

    // Nested for loops to display questions and answers with titles
    for (let category of qaArray) {
        // Create an h2 tag for each category title
        const h2 = document.createElement('h2');
        h2.innerHTML = category[0];  // index 0 is the title of the category
        document.getElementById('questionsAnswers').appendChild(h2);

        // Iterate through each question and answer in the category
        for (let qa of category[1]) {  // index 1 is the array of questions and answers
            // Create a p tag for each question and answer
            const p = document.createElement('p');
            p.innerHTML = `<strong>Q:</strong> ${qa.question} <br> <strong>A:</strong> ${qa.answer}`;
            document.getElementById('questionsAnswers').appendChild(p);
        }
    }
</script>



### Hack #1: Apply Your Own Game Idea

Create new code cells to implement some of the sprite interactions or features you have ideated for your game. This exercise is crucial if you plan to have interactions with a Non-Player Character (NPC).

**Challenge**: Use the concepts of 2D arrays and nested loops to create and display interactions or features for your game. Think about how you can organize and manage different elements, such as NPC dialog, questions, and receiving answers.

## Sprite Files

### Transition to Sprite Files

Now that we have a solid understanding of data structures and loops, we will transition to working with Sprite Files. This section will help you understand how to manage and display sprite images, which are essential for creating animations in your game.

### Sprite Files

Sprite files are essentially a 2D table of sprite images. They contain 2D columnar sequences of pictures that aid in creating animation.

### Display Sprite File

The next code block shows a sprite file. This can be helpful in understanding the properties of your sprite. It contains `console.log` output that shows the sprite properties.

Here are some terms that you will see in the next code block:
- **MetaData**: Data that describes the file
  - **name**: A friendly identifier naming the file
  - **src**: The location of the file
- **drawImage**: A function call that, when used with five parameters, outputs the entirety of the file
- **class**: A coding structure that contains a constructor, data, and method (draw) to read and output a file


```python
%%html

<style>
    #gameCanvas {
        border: 4px solid rgb(102, 4, 4);
        /* Red border for the canvas */
    }
</style>

<canvas id="gameCanvas" width="521" height="967"></canvas>

<script>
    function defineAndDrawImage() {
        /**
        * Function to define the sprite metadata for Tux the penguin
        * @returns {Object} spriteMetaData - The metadata for the Tux sprite
        */
        function TuxSpriteMetaData() {
            // NPC sprite data (Tux the penguin)
            const isLocal = window.location.protocol === 'vscode-webview:' | false;
            const baseUrl = isLocal ? '.' : '{{site.baseurl}}';
            console.log(baseUrl);
            const spriteMetaData = {
                name: 'tux',
                src: `${baseUrl}/images/tux.png`,
            };

            return spriteMetaData;
        }

        /**
        * Class to handle the canvas data and drawing of the image file
        */
        class CanvasDrawImage {
            constructor(spriteMetaData) {
                this.INIT_POSITION = { x: 0, y: 0 };
                this.spriteMetaData = spriteMetaData;
                this.canvas = document.getElementById('gameCanvas');
                this.ctx = this.canvas.getContext('2d');
                this.spriteImage = new Image();
                this.spriteImage.src = spriteMetaData.src;
                this.spriteImage.onload = () => this.draw(); // Ensure draw is called after image is loaded
            }

            // Method to draw the sprite on the canvas
            draw() {
                // This is the size of the sprite file, calculated from the PNG file 
                const width = this.spriteImage.width;
                const height = this.spriteImage.height;

                console.log(`Drawing sprite: ${this.spriteMetaData.name}`);
                console.log(`Sprite Dimensions: ${width}x${height}`);

                this.ctx.drawImage(this.spriteImage, 0, 0, width, height);
            }
        }

        const tux = new CanvasDrawImage(TuxSpriteMetaData());
    }

    // Call the function to define the class and draw the sprite
    defineAndDrawImage();
</script>
```



<style>
    #gameCanvas {
        border: 4px solid rgb(102, 4, 4);
        /* Red border for the canvas */
    }
</style>

<canvas id="gameCanvas" width="521" height="967"></canvas>

<script>
    function defineAndDrawImage() {
        /**
        * Function to define the sprite metadata for Tux the penguin
        * @returns {Object} spriteMetaData - The metadata for the Tux sprite
        */
        function TuxSpriteMetaData() {
            // NPC sprite data (Tux the penguin)
            const isLocal = window.location.protocol === 'vscode-webview:' | false;
            const baseUrl = isLocal ? '.' : '{{site.baseurl}}';
            console.log(baseUrl);
            const spriteMetaData = {
                name: 'tux',
                src: `${baseUrl}/images/tux.png`,
            };

            return spriteMetaData;
        }

        /**
        * Class to handle the canvas data and drawing of the image file
        */
        class CanvasDrawImage {
            constructor(spriteMetaData) {
                this.INIT_POSITION = { x: 0, y: 0 };
                this.spriteMetaData = spriteMetaData;
                this.canvas = document.getElementById('gameCanvas');
                this.ctx = this.canvas.getContext('2d');
                this.spriteImage = new Image();
                this.spriteImage.src = spriteMetaData.src;
                this.spriteImage.onload = () => this.draw(); // Ensure draw is called after image is loaded
            }

            // Method to draw the sprite on the canvas
            draw() {
                // This is the size of the sprite file, calculated from the PNG file 
                const width = this.spriteImage.width;
                const height = this.spriteImage.height;

                console.log(`Drawing sprite: ${this.spriteMetaData.name}`);
                console.log(`Sprite Dimensions: ${width}x${height}`);

                this.ctx.drawImage(this.spriteImage, 0, 0, width, height);
            }
        }

        const tux = new CanvasDrawImage(TuxSpriteMetaData());
    }

    // Call the function to define the class and draw the sprite
    defineAndDrawImage();
</script>



### Display Frames in Sprite File

The next code block contains logic to extract frames within the sprite sheet. This is a more practical game enhancement compared to the previous example.

Here are terms to describe key elements in the code:

- **MetaData**: Contains information about the sprite file, including its name, source URL, and orientation details.
  - **orientation**: Describes the layout of the sprite in the PNG file.
    - **header**: Size of the area of description above the sprite.
    - **pad**: Size of the area between the sprites.
    - **jagged**: Indicates that each row can contain a different number of sprites.
- **drawImage**: In the 9-property format, it provides the ability to scale the source into the destination.
- **class**: Continues using the constructor and draw methods for source and output; adds math to abstract each frame independently.
- **for-loops**: Demonstrates nested for loops to process each frame within the 2D sprite sheet.


```python
%%html

<style>
    #gameCanvasUnique {
        border: 4px solid rgb(4, 102, 33);
        /* Green border for the canvas */
    }
</style>

<canvas id="gameCanvasUnique" width="1280" height="1280"></canvas>

<script>
    // Outer function is required by Jupyter Notebook to avoid conflicts
    function defineAndDrawSprite() {

        /**
         * Function to define the sprite metadata for Tux the penguin
         * @returns {Object} spriteMetaData - The metadata for the Tux sprite
         */
        function TuxSpriteMetaData() {
            // NPC sprite data (Tux the penguin)
            const isLocal = window.location.protocol === 'vscode-webview:' | false;
            const baseUrl = isLocal ? '.' : '{{site.baseurl}}';
            const spriteMetaData = {
                name: 'tux',
                src: `${baseUrl}/images/tux.png`,
                orientation: {
                    rows: 10,
                    columns: 8,
                    header: 18,
                    pad: 2,
                    jagged: [1, 2, 1, 1, 1, 1, 1, 7, 8, 4]
                },
                scale: {
                    x: .75,
                    y: .75
                }
            };

            return spriteMetaData;
        }

        /**
         * Function to define the sprite metadata for Tux the penguin
         * @returns {Object} spriteMetaData - The metadata for the Tux sprite
         */
        function MarioSpriteMetaData() {
            // NPC sprite data (Tux the penguin)
            const isLocal = window.location.protocol === 'vscode-webview:' | false;
            const baseUrl = isLocal ? '.' : '{{site.baseurl}}';
            const spriteMetaData = {
                name: 'mario',
                src: `${baseUrl}/images/mario.png`,
                orientation: {
                    rows: 16,
                    columns: 16,
                },
                scale: {
                    x: 0.33,
                    y: 0.33
                }
            };

            return spriteMetaData;
        }
/**
         * Function to define the sprite metadata for Tux the penguin
         * @returns {Object} spriteMetaData - The metadata for the Tux sprite
         */
         function LuigiSpriteMetaData() {
            // NPC sprite data (Tux the penguin)
            const isLocal = window.location.protocol === 'vscode-webview:' | false;
            const baseUrl = isLocal ? '.' : '{{site.baseurl}}';
            const spriteMetaData = {
                name: 'luigi',
                src: `${baseUrl}/images/luigi.png`,
                orientation: {
                    rows: 4,
                    columns: 3,
                },
                scale: {
                    x: 1.0,
                    y: 1.0,
                }
            };

            return spriteMetaData;
        }

        /**
         * Class to handle the canvas data and drawing of the sprite
         */
        class CanvasData {
            constructor(spriteMetaData) {
                this.spriteMetaData = spriteMetaData;
                this.INIT_POSITION = { x: 0, y: 0 };
                this.canvas = document.getElementById('gameCanvasUnique');
                this.ctx = this.canvas.getContext('2d');
                this.spriteImage = new Image();
                this.spriteImage.src = spriteMetaData.src;
                this.spriteImage.onload = () => this.draw(); // Ensure draw is called after image is loaded
            }

            // Method to draw each sprite individually
            draw() {
                // This is the size of the sprite file, calculated from the PNG file 
                const sheetWidth = this.spriteImage.width;
                const sheetHeight = this.spriteImage.height;
                // This meta data describes the sprite sheet
                const rows = this.spriteMetaData.orientation.rows;
                const cols = this.spriteMetaData.orientation.columns;
                const jagged = this.spriteMetaData.orientation.jagged || null;
                const header = this.spriteMetaData.orientation.header || 0;
                const pad = this.spriteMetaData.orientation.pad || 0;
                // This is the initial output position on the canvas
                const x = this.INIT_POSITION.x;
                const y = this.INIT_POSITION.y;

                // Calculate the dimensions of each individual sprite
                const spriteWidth = sheetWidth / cols;
                const spriteHeight = (sheetHeight - header * rows) / rows;

                console.log(`Sprite Sheet Dimensions: ${sheetWidth}x${sheetHeight}`);
                console.log(`Individual Sprite Dimensions: ${spriteWidth}x${spriteHeight}`);
                console.log(`Rows: ${rows}, Columns: ${cols}`);

                // Nested for loop to draw 2-dimensional sprite sheet
                for (let row = 0; row < rows; row++) {
                    const columnsInRow = jagged ? jagged[row] || cols : cols;
                    for (let col = 0; col < columnsInRow; col++) {
                        // Calculate the source coordinates and dimensions
                        const srcX = col * spriteWidth + (pad * col);
                        const srcY = row * (spriteHeight + header) - (pad * row);
                        const srcWidth = spriteWidth - (pad * 4) - (col + pad); // Subtract 8 pixels (4 from each side)
                        const srcHeight = spriteHeight - (pad * 2); // Subtract 8 pixels (4 from each side)

                        // Calculate the destination coordinates and dimensions
                        const destX = x + col * spriteWidth * this.spriteMetaData.scale.x;
                        const destY = y + row * spriteHeight * this.spriteMetaData.scale.y;
                        const destWidth = spriteWidth * this.spriteMetaData.scale.x;
                        const destHeight = spriteHeight * this.spriteMetaData.scale.y;

                        console.log(`Drawing row: ${row}, column: ${col}`);
                        console.log(`Source: (${srcX}, ${srcY}, ${spriteWidth}, ${spriteHeight})`);
                        console.log(`Destination: (${destX}, ${destY}, ${destWidth}, ${destHeight})`);

                        this.ctx.drawImage(
                            this.spriteImage,
                            srcX, srcY + header, srcWidth, srcHeight, // Source rectangle
                            destX, destY, destWidth, destHeight // Destination rectangle
                        );
                    }
                }
            }
        }

        // Setup to Tux sprite
        // const tux = new CanvasData(TuxSpriteMetaData());
        // const mario = new CanvasData(MarioSpriteMetaData());
        const luigi = new CanvasData(LuigiSpriteMetaData());

    }

    defineAndDrawSprite();
</script>
```



<style>
    #gameCanvasUnique {
        border: 4px solid rgb(4, 102, 33);
        /* Green border for the canvas */
    }
</style>

<canvas id="gameCanvasUnique" width="1280" height="1280"></canvas>

<script>
    // Outer function is required by Jupyter Notebook to avoid conflicts
    function defineAndDrawSprite() {

        /**
         * Function to define the sprite metadata for Tux the penguin
         * @returns {Object} spriteMetaData - The metadata for the Tux sprite
         */
        function TuxSpriteMetaData() {
            // NPC sprite data (Tux the penguin)
            const isLocal = window.location.protocol === 'vscode-webview:' | false;
            const baseUrl = isLocal ? '.' : '{{site.baseurl}}';
            const spriteMetaData = {
                name: 'tux',
                src: `${baseUrl}/images/tux.png`,
                orientation: {
                    rows: 10,
                    columns: 8,
                    header: 18,
                    pad: 2,
                    jagged: [1, 2, 1, 1, 1, 1, 1, 7, 8, 4]
                },
                scale: {
                    x: .75,
                    y: .75
                }
            };

            return spriteMetaData;
        }

        /**
         * Function to define the sprite metadata for Tux the penguin
         * @returns {Object} spriteMetaData - The metadata for the Tux sprite
         */
        function MarioSpriteMetaData() {
            // NPC sprite data (Tux the penguin)
            const isLocal = window.location.protocol === 'vscode-webview:' | false;
            const baseUrl = isLocal ? '.' : '{{site.baseurl}}';
            const spriteMetaData = {
                name: 'mario',
                src: `${baseUrl}/images/mario.png`,
                orientation: {
                    rows: 16,
                    columns: 16,
                },
                scale: {
                    x: 0.33,
                    y: 0.33
                }
            };

            return spriteMetaData;
        }
/**
         * Function to define the sprite metadata for Tux the penguin
         * @returns {Object} spriteMetaData - The metadata for the Tux sprite
         */
         function LuigiSpriteMetaData() {
            // NPC sprite data (Tux the penguin)
            const isLocal = window.location.protocol === 'vscode-webview:' | false;
            const baseUrl = isLocal ? '.' : '{{site.baseurl}}';
            const spriteMetaData = {
                name: 'luigi',
                src: `${baseUrl}/images/luigi.png`,
                orientation: {
                    rows: 4,
                    columns: 3,
                },
                scale: {
                    x: 1.0,
                    y: 1.0,
                }
            };

            return spriteMetaData;
        }

        /**
         * Class to handle the canvas data and drawing of the sprite
         */
        class CanvasData {
            constructor(spriteMetaData) {
                this.spriteMetaData = spriteMetaData;
                this.INIT_POSITION = { x: 0, y: 0 };
                this.canvas = document.getElementById('gameCanvasUnique');
                this.ctx = this.canvas.getContext('2d');
                this.spriteImage = new Image();
                this.spriteImage.src = spriteMetaData.src;
                this.spriteImage.onload = () => this.draw(); // Ensure draw is called after image is loaded
            }

            // Method to draw each sprite individually
            draw() {
                // This is the size of the sprite file, calculated from the PNG file 
                const sheetWidth = this.spriteImage.width;
                const sheetHeight = this.spriteImage.height;
                // This meta data describes the sprite sheet
                const rows = this.spriteMetaData.orientation.rows;
                const cols = this.spriteMetaData.orientation.columns;
                const jagged = this.spriteMetaData.orientation.jagged || null;
                const header = this.spriteMetaData.orientation.header || 0;
                const pad = this.spriteMetaData.orientation.pad || 0;
                // This is the initial output position on the canvas
                const x = this.INIT_POSITION.x;
                const y = this.INIT_POSITION.y;

                // Calculate the dimensions of each individual sprite
                const spriteWidth = sheetWidth / cols;
                const spriteHeight = (sheetHeight - header * rows) / rows;

                console.log(`Sprite Sheet Dimensions: ${sheetWidth}x${sheetHeight}`);
                console.log(`Individual Sprite Dimensions: ${spriteWidth}x${spriteHeight}`);
                console.log(`Rows: ${rows}, Columns: ${cols}`);

                // Nested for loop to draw 2-dimensional sprite sheet
                for (let row = 0; row < rows; row++) {
                    const columnsInRow = jagged ? jagged[row] || cols : cols;
                    for (let col = 0; col < columnsInRow; col++) {
                        // Calculate the source coordinates and dimensions
                        const srcX = col * spriteWidth + (pad * col);
                        const srcY = row * (spriteHeight + header) - (pad * row);
                        const srcWidth = spriteWidth - (pad * 4) - (col + pad); // Subtract 8 pixels (4 from each side)
                        const srcHeight = spriteHeight - (pad * 2); // Subtract 8 pixels (4 from each side)

                        // Calculate the destination coordinates and dimensions
                        const destX = x + col * spriteWidth * this.spriteMetaData.scale.x;
                        const destY = y + row * spriteHeight * this.spriteMetaData.scale.y;
                        const destWidth = spriteWidth * this.spriteMetaData.scale.x;
                        const destHeight = spriteHeight * this.spriteMetaData.scale.y;

                        console.log(`Drawing row: ${row}, column: ${col}`);
                        console.log(`Source: (${srcX}, ${srcY}, ${spriteWidth}, ${spriteHeight})`);
                        console.log(`Destination: (${destX}, ${destY}, ${destWidth}, ${destHeight})`);

                        this.ctx.drawImage(
                            this.spriteImage,
                            srcX, srcY + header, srcWidth, srcHeight, // Source rectangle
                            destX, destY, destWidth, destHeight // Destination rectangle
                        );
                    }
                }
            }
        }

        // Setup to Tux sprite
        // const tux = new CanvasData(TuxSpriteMetaData());
        // const mario = new CanvasData(MarioSpriteMetaData());
        const luigi = new CanvasData(LuigiSpriteMetaData());

    }

    defineAndDrawSprite();
</script>



### Hack #2: Display Individual Sprites

Create new code cell(s) to display individual sprites from a sprite sheet. This sprite sheet will potentially be used in your game.

**Challenge**: Use the concepts of 2D arrays, nested loops, and sprite metadata to extract and display individual sprites. Think about how you can manage and display different frames or animations for your game characters or objects.
