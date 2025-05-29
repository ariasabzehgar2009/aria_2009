---

---

## Printing Strings
You can print strings directly or using variables. Here's an example of both:


```javascript
%%js
// Directly printing a string
console.log("dog");

// Using Variables
const animal = "cat";
const favoriteAnimal = "caribou";

console.log(animal); // Output: cat
console.log(favoriteAnimal); // Output: caribou
```

```

    dog
    cat
    caribou


## Handling Apostrophes
If your string contains an apostrophe, make sure to escape it when using single quotes.


```javascript
%%js
// Escaping apostrophes in strings
const food2 = 'I\'m eating pizza';
const food3 = "I'm eating lasagna";

console.log(food2); // Output: I'm eating pizza
console.log(food3); // Output: I'm eating lasagna
```

```

    I'm eating pizza
    I'm eating lasagna


## Strings with Multiple Lines
You can create multi-line strings using template literals (backticks). Here's an example:


```javascript
%%js
// Multi-line string using template literals
const riddle = `my favorite animal
is associated with winter
and Christmas`;

console.log(riddle);
```

```

    my favorite animal
    is associated with winter
    and Christmas


## Length of a String
You can find the length of a string using the `.length` property.


```javascript
%%js
// Find the length of a string
console.log("earthmovers".length); // Output: 11
```

```

    11


## Printing Specific Parts of a String
You can extract specific parts of a string using indexing and slicing. Here are some examples:


```javascript
%%js
// Extracting specific parts of a string
const funFact = "woodchucks do not actually chuck wood, they chuck dirt more often than not";

// Specific character:
console.log(funFact[10]); // Output: 'c'

// Range (substring):
console.log(funFact.slice(5, 15)); // Output: 'chucks do n'

// Slicing:
console.log(funFact.slice(0, 25)); // Output: 'woodchucks do not act'
console.log(funFact.slice(35)); // Output: 'dirt more often than not'
```

```

    c
    chucks do n
    woodchucks do not act
    dirt more often than not


## Popcorn Hack - Palindromes
A palindrome is a word or phrase that reads the same backward as forward. You can create a function to check for palindromes. Here's a function that does that:


```javascript
%%js
// Function to check if a string is a palindrome
function palindrome(inputStr) {
    // Remove spaces and convert the string to lowercase
    const cleanStr = inputStr.replace(/\s+/g, '').toLowerCase();
    // Check if the cleaned string is equal to its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

console.log(palindrome("did you know that sahas spelled backwards is sahas")); // Output: false
console.log(palindrome("hi")); // Output: false
```

```

    false
    false

