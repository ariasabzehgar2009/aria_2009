---
comments: True
layout: post
title: Strings and functions
description: Strings and functions
author: Matthew Borg
permalink: /csse/lessons/strings/2024-10-30-strings-lesson-4-2.ipynb/
categories: ['Strings and Functions']
---

## Strings and Functions

Some strings below can help find the instances of a certain word to replacing a word in a sentence at random


* const lionFact = sets the value for lionFact
* toLowerCase and toUpperCase makes the given sentence in lionFact entirely lowercase or Uppercase


```javascript
// String Example and Case Conversion
const lionFact = "lions are the only cats that live in groups";

// Convert to lowercase and uppercase
console.log(lionFact.toLowerCase());  // Lowercase
console.log(lionFact.toUpperCase());  // Uppercase
```

lions are the only cats that live in groups

LIONS ARE THE ONLY CATS THAT LIVE IN GROUPS

## Occurrences
* The .match() method returns all matches of the string "the" in tiger_fact using a regular expression (/the/g).

* The g flag ensures that the following code finds all occurrences in the string, not just the first one.


```javascript
// Count occurrences of the word 'groups'
let count = (lionFact.match(/the/g) || []).length;
console.log(count); 
```

## Finding Index
* index is finding the first letter of a given word in a given const


```javascript
// Example finding Index of a Substring
console.log(lionFact.indexOf("group"));  // Find the index of the word 'group'
```

38

The g in group was the 38th character in the lionFact 

## Replacing Substrings

* .replace can replace a word in a given const to another word as shown below


```javascript
// Replacing Substrings
let newLionFact = lionFact.replace('lions', 'giraffes');
console.log(newLionFact);  // Replaced string

// Or replace it directly
lionFact = lionFact.replace('lions', 'giraffes');
console.log(lionFact);  // Replaced string directly
```

giraffes are the only cats that live in groups

## Concatenation
* Used to join together multiple variables
* can get messy at times as shown below if not in good format


```javascript
// Concatenation
let fish = "fish";
let fish1 = "angel";
let fish2 = "cat";
let fish3 = "puffer";

// Bad format
let badFormatSpecies = fish1 + fish + fish2 + fish + fish3 + fish;
console.log(badFormatSpecies);

// Good format with commas
let goodFormatSpecies = `${fish1}${fish}, ${fish2}${fish}, and ${fish3}${fish}`;
console.log(goodFormatSpecies);
```

angelfishcatfishpufferfish

angelfish, catfish, pufferfish

## Explanation for "Good" and "Bad" formatting

* fish1 + fish: Concatenates the value of fish1 with fish. This is equivalent to what you can do in Python with fish1 + fish.

* , ' ': The comma and space are explicitly added in between fish1 + fish and fish2 + fish to ensure proper formatting and cleaning output.

* ${} Templateliteral.The ${} syntax is used to embed expressions inside the string. Each ${fish1}${fish} inserts the value of fish1 followed by fish into the string.

## Formatted Strings

* The variable betterFormatSpecies is defined using a template literal (denoted by backticks `).

* Inside the template literal, the values of the variables fish1, fish2, fish3, and fish are embedded using ${} syntax from before.

* This string uses commas to separate the fish types and includes the word "and" before the last fish.


```javascript
// Formatted Strings
let betterFormatSpecies = `${fish1}${fish}, ${fish2}${fish}, and ${fish3}${fish} are my favorite fish!`;
console.log(betterFormatSpecies);
```

angelfish, catfish, pufferfish are my favorite fish!
