---
comments: True
layout: post
title: CSP Period 4 Unit 3.7.2 Nested Conditionals Javascript Lesson
description: Nested conditionals in JavaScript allow for more complex decision-making by placing one conditional statement inside another. This structure enables a program to check additional conditions only if the previous condition is true, creating a layered decision process. In this lesson, students will learn how to implement nested if, else if, and else statements to create more specific control flows in their programs. Through examples and exercises, they will gain a deeper understanding of how to manage multiple conditions effectively, enhancing the logic of their code.
permalink: /csp/big-idea/p4/3-7-2
type: ccc
author: Avantika Chittari
menu: nav/csp_units/csp_unit3_p4_fundamentals.html
---

<h2><span style="font-family: Ariel; color:#94c4ff">Homework - Integers, Booleans, AND Random</span></h2>

Objective:
Write a JavaScript program that randomly assigns a student grade level (from 0 to 12) and outputs the school level the student would be in (kindergarten, elementary, middle, or high school). The program also identifies if the student is in their last year at their current school level.

Instructions:

Open a JavaScript file (e.g., schoolLevel.js).

Generate a Random Grade:

Use Math.random() to generate a random number between 0 to 1 and multiply it by 12, which will represent the student’s grade.
Round the number to the nearest whole number using Math.round().
Store this number in a variable called grade.
Print the grade to the console with a message such as, "You are in ___ grade."
Determine the School Level:

Use if statements to check the value of grade and print which school level the student is in:
Kindergarten for grade 0
Elementary School for grades 1–5
Middle School for grades 6–8
High School for grades 9–12
For each school level, add an additional check to see if the student is in their final year. If all is done correctly, it will print a message like this, “You will graduate this year from _____.”



- Booleans are a data type that can only have two different values True or Flase. 
- Random generates random values with unpredictable results, usually within a specified range such as 0-1


```python
%%js 
// Generate a random grade between 0 and 12
let grade = Math.round(Math.random() * 12);

// Output the grade
console.log("You are in " + grade + " grade.");

// Determine the school level and whether it's the final year
if (grade === 0) {
  console.log("You are in Kindergarten.");
} else if (grade >= 1 && grade <= 5) {
  console.log("You are in Elementary School.");
  if (grade === 5) {
    console.log("You will graduate this year from Elementary School.");
  }
} else if (grade >= 6 && grade <= 8) {
  console.log("You are in Middle School.");
  if (grade === 8) {
    console.log("You will graduate this year from Middle School.");
  }
} else if (grade >= 9 && grade <= 12) {
  console.log("You are in High School.");
  if (grade === 12) {
    console.log("You will graduate this year from High School.");
  }
}

```


    <IPython.core.display.Javascript object>

