---
layout: post
title: Javascript Mathematical Operations
description: Homework
categories: ['JavaScript']
comments: True
---

## Problem 1: Basic Arithmetic
Define two variables, `a` and `b`, with values of your choice. Compute the following operations and log each result to the console:
1. Sum of `a` and `b`
2. Difference of `a` and `b`
3. Product of `a` and `b`
4. Quotient of `a` divided by `b`

Console.log code 

console.log("Sum:", a + b);          
console.log("Difference:", a - b);   
console.log("Product:", a * b);      
console.log("Quotient:", a / b);


```python
%%js
let a = 5;
let b = 450; 
console.log("Sum:",a+b);
console.log("Difference:",a-b);
console.log("Product:",a*b);
console.log("Quotient:",a/b);
```


    <IPython.core.display.Javascript object>


## Problem 2: Modulus Operator
Define two numbers, `num1` and `num2`. Use the modulus operator `%` to find the remainder when `num1` is divided by `num2`. Log the result to the console.
### Instructions:
1. Define a variable `num1` (the dividend).
2. Define a variable `num2` (the divisor).
3. Use the modulus operator `num1 % num2` to calculate the remainder.
4. Log the result to the console using `console.log()`.
 
console.log code 

console.log("Remainder:", YOURVARIABLE (CORRECT MATHEMATICAL OPERATION) YOUROTHERVARIABLE);  // Output: 1


```python
%%js 

let num1 = 7;
let num2 = 500;
console.log("Remainder:", num1 % num2);
```


    <IPython.core.display.Javascript object>


## Problem 3: Increment and Decrement
Define a variable `count` and set it to an initial value. Increment and then decrement the variable in two different ways:
1. Using the `++` and `--` operators.
2. Using the `+=` and `-=` operators.
Log the result after each operation.
### Instructions:
1. Define a variable `count` and assign it an initial value (e.g., 10).
2. Use `++` to increment the variable by 1 and log the result.
3. Use `--` to decrement the variable by 1 and log the result.
4. Use `+=` to increment the variable by a specific value and log the result.
5. Use `-=` to decrement the variable by a specific value and log the result.
6. Log result 3 times (Use these operations to increment/decremnt your number atleast 3 times)
### Example:
```javascript
let count = 10;
console.log("Initial Count:", count);  // Output: 10
// Increment using ++
count++;




```python
%%js 

let count = 17;
console.log("Initial Count:", count);  // Output: 17

// Increment using ++
count++;
console.log("After Incrementing with ++:", count);  // Output: 18

// Decrement using --
count--;
console.log("After Decrementing with --:", count);  // Output: 17

// Increment using +=
count += 5;  // Increment by 5
console.log("After Incrementing with +=:", count);  // Output: 22

// Decrement using -=
count -= 3;  // Decrement by 3
console.log("After Decrementing with -=:", count);  // Output: 19

// Additional increments and decrements
count++;
console.log("After another Incrementing with ++:", count);  // Output: 20

count--;
console.log("After another Decrementing with --:", count);  // Output: 19

count += 2;  // Increment by 2
console.log("After another Incrementing with +=:", count);  // Output: 21

count -= 4;  // Decrement by 4
console.log("After another Decrementing with -=:", count);  // Output: 17

```


    <IPython.core.display.Javascript object>

