---
layout: post
title: Javascript Mathematical Operations
description: Popcorn hack 2
categories: ['JavaScript']
comments: True
---

## How can we implement this into our game?
We can use this to interact with npcs in our game, such as a monster that you are attacking. Here is an example where the main character attack the npc:
```javascript
let mainCharacterHealth = 100;
let npcHealth = 80;
// Main character attacks NPC
let attackDamage = 15;
npcHealth -= attackDamage;  // Subtract damage from NPC's health
console.log("NPC Health: " + npcHealth);  // Output: NPC Health: 65
// NPC counter-attacks the main character
let npcAttackDamage = 12;
mainCharacterHealth -= npcAttackDamage;  // Subtract damage from main character's health
console.log("Main Character Health: " + mainCharacterHealth);  // Output: Main Character Health: 88

### Popcorn Hack Two
 
 ## Problem: Monster Attack Button
When the button is clicked, a monster is attacked. However, the current code doesn't track the monster's health or reduce its health when attacked. Your task is to fill in the missing lines to give the monster **100 health** initially and **deal 10 damage** to the monster with each button click.
### Instructions:
- Set the monster's health to **100** when the page loads.
- Each time the button is clicked, reduce the monster's health by **10**.
- Display the monster's remaining health in the console after each click.
### Hints:
- Look for the comment that says `// Set "monsterHealth" to 100` and initialize the monster's health there.
- Find the placeholder `XXXX` in the code and replace it with the correct operator to reduce the monster's health.
You will need to use an operator that **subtracts** 10 from the current health value.


```python
from IPython.display import display, HTML

html_code = """
<div id="gameContainer" style="margin-top: 20px;">
    <!-- The game will be appended here -->
</div>

<script type="text/javascript">
    // Ensure the game is created only once
    if (!document.getElementById('monsterHealth')) {
        // Create a heading for the game
        const h1 = document.createElement('h1');
        h1.textContent = 'Monster Battle';
        document.getElementById('gameContainer').appendChild(h1);

        // Create a paragraph for the monster's health
        const healthPara = document.createElement('p');
        healthPara.innerHTML = 'Monster Health: <span id="monsterHealth">100</span>';
        document.getElementById('gameContainer').appendChild(healthPara);

        // Create the Attack button
        const attackButton = document.createElement('button');
        attackButton.id = 'attackButton';
        attackButton.textContent = 'Attack';
        attackButton.style.padding = '10px 20px';
        attackButton.style.fontSize = '16px';
        attackButton.style.cursor = 'pointer';
        document.getElementById('gameContainer').appendChild(attackButton);

        // Create a message display paragraph
        const messagePara = document.createElement('p');
        messagePara.id = 'message';
        messagePara.style.marginTop = '20px';
        messagePara.style.fontWeight = 'bold';
        document.getElementById('gameContainer').appendChild(messagePara);

        // Set "monsterHealth" to 100 with variable
         let monsterHealth=100;

        // Function to handle attack
        function attackMonster() {
            // Reduce monster's health by 10
            monsterHealth -= 10;

            // Update the displayed health
            document.getElementById('monsterHealth').textContent = monsterHealth;

            // Check if monster's health is 0 or less
            if (monsterHealth <= 0) {
                document.getElementById('message').textContent = "You defeated the monster!";
                
                // Reset monster's health after defeating
                setTimeout(() => {
                    monsterHealth = 100;
                    document.getElementById('monsterHealth').textContent = monsterHealth;
                    document.getElementById('message').textContent = "";
                }, 2000);  // Wait 2 seconds before resetting
            } else {
                // Clear the message if the monster is not yet defeated
                document.getElementById('message').textContent = "";
            }
        }

        // Attach the attack function to the button
        document.getElementById('attackButton').addEventListener('click', attackMonster);
    }
</script>
"""

# Display the HTML and JavaScript in the notebook
display(HTML(html_code))

```



<div id="gameContainer" style="margin-top: 20px;">
    <!-- The game will be appended here -->
</div>

<script type="text/javascript">
    // Ensure the game is created only once
    if (!document.getElementById('monsterHealth')) {
        // Create a heading for the game
        const h1 = document.createElement('h1');
        h1.textContent = 'Monster Battle';
        document.getElementById('gameContainer').appendChild(h1);

        // Create a paragraph for the monster's health
        const healthPara = document.createElement('p');
        healthPara.innerHTML = 'Monster Health: <span id="monsterHealth">100</span>';
        document.getElementById('gameContainer').appendChild(healthPara);

        // Create the Attack button
        const attackButton = document.createElement('button');
        attackButton.id = 'attackButton';
        attackButton.textContent = 'Attack';
        attackButton.style.padding = '10px 20px';
        attackButton.style.fontSize = '16px';
        attackButton.style.cursor = 'pointer';
        document.getElementById('gameContainer').appendChild(attackButton);

        // Create a message display paragraph
        const messagePara = document.createElement('p');
        messagePara.id = 'message';
        messagePara.style.marginTop = '20px';
        messagePara.style.fontWeight = 'bold';
        document.getElementById('gameContainer').appendChild(messagePara);

        // Set "monsterHealth" to 100 with variable
         let monsterHealth=100;

        // Function to handle attack
        function attackMonster() {
            // Reduce monster's health by 10
            monsterHealth -= 10;

            // Update the displayed health
            document.getElementById('monsterHealth').textContent = monsterHealth;

            // Check if monster's health is 0 or less
            if (monsterHealth <= 0) {
                document.getElementById('message').textContent = "You defeated the monster!";

                // Reset monster's health after defeating
                setTimeout(() => {
                    monsterHealth = 100;
                    document.getElementById('monsterHealth').textContent = monsterHealth;
                    document.getElementById('message').textContent = "";
                }, 2000);  // Wait 2 seconds before resetting
            } else {
                // Clear the message if the monster is not yet defeated
                document.getElementById('message').textContent = "";
            }
        }

        // Attach the attack function to the button
        document.getElementById('attackButton').addEventListener('click', attackMonster);
    }
</script>


