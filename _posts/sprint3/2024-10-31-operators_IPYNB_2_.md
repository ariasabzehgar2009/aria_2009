---
layout: post
title: Javascript Mathematical Operations
description: Popcorn hack 1
categories: ['JavaScript']
comments: True
---

# Mathematical Operators in JavaScript

### 1. **Addition**
   - **Operator**: `+`
   - **Description**: Adds two numbers together.
   - **Example**:
     ```javascript
     let a = 5;
     let b = 3;
     let result = a + b; // result is 8
     ```

### 2. **Subtraction**
   - **Operator**: `-`
   - **Description**: Subtracts the second number from the first.
   - **Example**:
     ```javascript
     let a = 5;
     let b = 3;
     let result = a - b; // result is 2
     ```

### 3. **Multiplication**
   - **Operator**: `*`
   - **Description**: Multiplies two numbers.
   - **Example**:
     ```javascript
     let a = 5;
     let b = 3;
     let result = a * b; // result is 15
     ```

### 4. **Division**
   - **Operator**: `/`
   - **Description**: Divides the first number by the second.
   - **Example**:
     ```javascript
     let a = 15;
     let b = 3;
     let result = a / b; // result is 5
     ```

### 5. **Modulus (Remainder)**
   - **Operator**: `%`
   - **Description**: Returns the remainder after division of one number by another.
   - **Example**:
     ```javascript
     let a = 10;
     let b = 3;
     let result = a % b; // result is 1
     ```

### 6. **Exponentiation**
   - **Operator**: `**`
   - **Description**: Raises the first number to the power of the second.
   - **Example**:
     ```javascript
     let a = 2;
     let b = 3;
     let result = a ** b; // result is 8
     ```

### 7. **Increment**
   - **Operator**: `++`
   - **Description**: Increases a variable by 1.
   - **Example**:
     ```javascript
     let a = 5;
     a++; // a is now 6
     ```

### 8. **Decrement**
   - **Operator**: `--`
   - **Description**: Decreases a variable by 1.
   - **Example**:
     ```javascript
     let a = 5;
     a--; // a is now 4
     ```

### 9. **Unary Negation**
   - **Operator**: `-`
   - **Description**: Converts a positive number to negative, and vice versa.
   - **Example**:
     ```javascript
     let a = 5;
     let result = -a; // result is -5
     ```

### 10. **Unary Plus**
   - **Operator**: `+`
   - **Description**: Attempts to convert the operand to a number.
   - **Example**:
     ```javascript
     let a = "5";
     let result = +a; // result is 5 as a number
     ```

### 11. **Assignment with Operators**

   - **Addition Assignment**: `+=`
     ```javascript
     let a = 5;
     a += 3; // a is now 8
     ```

   - **Subtraction Assignment**: `-=`
     ```javascript
     let a = 5;
     a -= 3; // a is now 2
     ```

   - **Multiplication Assignment**: `*=`
     ```javascript
     let a = 5;
     a *= 3; // a is now 15
     ```

   - **Division Assignment**: `/=`
     ```javascript
     let a = 15;
     a /= 3; // a is now 5
     ```

   - **Modulus Assignment**: `%=`
     ```javascript
     let a = 10;
     a %= 3; // a is now 1
     ```

   - **Exponentiation Assignment**: `**=`
     ```javascript
     let a = 2;
     a **= 3; // a is now 8
     ```


## Example: Incrementing and Decrementing by More Than 1
You can increment or decrement a variable by more than 1 using the `+=` and `-=` operators.
### Instructions:
- Use `+=` to **increment** a variable by a specific number.
- Use `-=` to **decrement** a variable by a specific number.
### JavaScript Example:
```javascript
let count = 10;
// Increment by 5
count += 5;
console.log("After incrementing by 5:", count);  // Output: 15
// Decrement by 3
count -= 3;
console.log("After decrementing by 3:", count);  // Output: 12


## Popcorn Hack One

Change the number below and change one mathematical opperation to your liking. 


```python
%%js

// JavaScript Hack: Even or Odd Transformation with Notebook Display

let origNum = 1001; // Original number
let num = origNum; // Change this number to test different values

// Check if number is even or odd, and then transform
num % 2 === 0 
  ? (num -= 10) // If even, divide by 2
  : (num /= 100); // If odd, square it

// Display initial and final result in Jupyter Notebook cell
console.log("Original number: " + origNum);
console.log("<br>");
console.log("Transformed number: " + num);

```


    <IPython.core.display.Javascript object>

