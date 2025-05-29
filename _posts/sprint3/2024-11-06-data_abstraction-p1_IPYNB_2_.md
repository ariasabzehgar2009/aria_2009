---
comments: True
layout: post
title: Data Abstraction
description: An intro to data abstraction
permalink: /csse/javascript/fundamentals/data-abstraction-p1
type: ccc
author: Santhosh Karthik
---

# What is Data Abstraction?
Data Abstraction is hiding the complex inner workings of code, and only exposing the part that the user/coder needs to know.
## Real Life Examples
Some real life examples of Data Abstraction include cars, mobile apps, games, and even the computer that you are using!!
### Car example
Cars are a real life example of Data Abstraction with their steering wheel. The inner electronics of the system is hidden, and only the steering wheel, and the option of moving the car left and right are shown
### Mobile App example
Mobile App's are another great example for Data Abstraction. One example of this is the YouTube app. Youtube hides the complex hosting features that is use, and only shows you the actual video. Another example of Data abstraction would be the messages app on your phone. It hides the complex innerworkings of how it is being sent to someone elses phone, and only shows if it is sent or not.
### Games example
In games such as Minecraft as Pokemon Data abstraction is a necessary, as you need to hide how multiple things are being done in order to simplify the user experience
## Relevant examples in Javascript
Some examples of Data abstraction in Javascript include classes, function and objects. We will go more in depth into how these are examples

# Built in functions
Built in Javascript functions are a great example of Data Abstraction. The method to create them is already defined, the user simply has to call it. For example **Math.cos()** is a built in function that takes a number as an argument and returns the cosine of that number. The user does not need to know how the function works, they only need to know that it takes a number as an argument and returns the cosine of that number. 


```python
%%js 
let angleInDegrees = 57;
let angleInRadians = angleInDegrees * (Math.PI / 180);
// 11 lines of code to calculate the cosine of an angle without using built in operators
    function factorial(n) {
        let result = 1;
        for (let i = 2; i <= n; i++) { // Start at 2, as multiplying by 1 is unnecessary
            result *= i;
        }
        return result;
    }
function cosine(x) {
    return 1 - x**2 / factorial(2) + x**4 / factorial(4) - x**6 / factorial(6) + x**8 / factorial(8) + x**10 / factorial(10);
}
let createdOutput = cosine(angleInRadians);

// 1 line of code to calculate the cosine of an angle using built in operators
let inBuiltOutput = Math.cos(angleInRadians);

console.log("My created function: " + createdOutput);
console.log("Original function: " + inBuiltOutput);
console.log("You can also see that my function is less accurate by a little bit")

```


    <IPython.core.display.Javascript object>


# Functions as Data Abstractions

Functions are a great example of data abstraction because they help us simplify complex tasks. Here’s how they do that:

1. **Simplification**: Functions take a set of instructions and bundle them together. This way, we don’t have to think about all the details every time we want to use them.

2. **Reusability**: Once we create a function, we can use it multiple times throughout our code. This saves time and effort since we don't need to rewrite the same steps.

3. **Clarity**: By giving functions clear names, we can easily understand what they do. This makes our code easier to read and follow.

In short, functions allow us to focus on the bigger picture without getting lost in the details, making programming simpler and more organized.

Below is an example of a reusable function that can add 2 numbers together


```python
%%html
    <div>
        <p>Please put your first number here</p>
        <input type="number" id="num1" name="num1">
        <p>Please put your second number</p>
        <input type="number" id="num2" name="num2">
        <br>
        <br>
        <button onclick="addNumbers('num1', 'num2', 'output')">Submit</button>
    </div>
    <p id="output"></p>
    <div>
        <p>Please put your first number here</p>
        <input type="number" id="number1" name="number1">
        <p>Please put your second number</p>
        <input type="number" id="number2" name="number2">
        <br>
        <br>
        <button onclick="addNumbers('number1', 'number2', 'output2')">Submit</button>
    </div>
    <p id="output2"></p>
    <script>
        function addNumbers(id1, id2, output) {
            let num1 = parseFloat(document.getElementById(id1).value);
            let num2 = parseFloat(document.getElementById(id2).value);
            let solution = num1 + num2;
            document.getElementById(output).innerHTML = solution;
        }
    </script>
```


<div>
    <p>Please put your first number here</p>
    <input type="number" id="num1" name="num1">
    <p>Please put your second number</p>
    <input type="number" id="num2" name="num2">
    <br>
    <br>
    <button onclick="addNumbers('num1', 'num2', 'output')">Submit</button>
</div>
<p id="output"></p>
<div>
    <p>Please put your first number here</p>
    <input type="number" id="number1" name="number1">
    <p>Please put your second number</p>
    <input type="number" id="number2" name="number2">
    <br>
    <br>
    <button onclick="addNumbers('number1', 'number2', 'output2')">Submit</button>
</div>
<p id="output2"></p>
<script>
    function addNumbers(id1, id2, output) {
        let num1 = parseFloat(document.getElementById(id1).value);
        let num2 = parseFloat(document.getElementById(id2).value);
        let solution = num1 + num2;
        document.getElementById(output).innerHTML = solution;
    }
</script>



# Classes as Data Abstractions

Classes play a crucial role in data abstraction in programming. Here’s how they achieve this:

1. **Reusability and Inheritance**:  
   Once a class is defined, it can be reused to create multiple instances (objects) without rewriting code. Through inheritance, new classes can inherit properties and methods from existing ones, promoting code reuse and reducing redundancy.

2. **Polymorphism**:  
   This allows objects of different classes to be treated as objects of a common superclass. It enables more flexible and generic code that can operate on different types of objects, enhancing code extensibility.

In summary, classes help create organized, reusable, and understandable code by encapsulating data and behavior, abstracting complexity, and supporting a robust inheritance structure.


### What is inheritance?
Inheritance allows a new class to contain properties from another class using the word **extends**. Below is an example of 2 classes, one being a parent class and the other being a child class. The child class inherits the properties of the parent class such as its **parameters** and **functions**


```python
%%js
    // Define the Phone class
    class Phone {
        constructor(model, specs) {
            this.model = model;
            this.specs = specs;
        }
        
        listSpecs(id) {
            document.getElementById(id).innerHTML = ("The " + this.model + " weighs " + this.specs.weight + 
                        ", has a display of " + this.specs.display + 
                        " and has a " + this.specs.chip);
            console.log("The " + this.model + " weighs " + this.specs.weight + 
                        ", has a display of " + this.specs.display + 
                        " and has a " + this.specs.chip);
        }
    }

    // Define the iPhone16 class
    class iPhone16 extends Phone {
        constructor() {
            const model = "iPhone 16"; // Use const or let here
            const specs = {
                weight: "170 grams",
                display: "6.1 inches",
                chip: "A18"
            };
            super(model, specs); // Call the parent constructor
        }
    }
        let myiPhone;
        if (typeof myiPhone === 'undefined') {
            // Create an instance of iPhone16 and call the listSpecs method
            myiPhone = new iPhone16(); // Create an instance of iPhone16
        }
        myiPhone.listSpecs("iPhone"); // Call the listSpecs method
```


    <IPython.core.display.Javascript object>



```python
%%html
    <p> These are the specs of the iPhone 16:</p>
    <p id="iPhone"></p>
```


<p> These are the specs of the iPhone 16:</p>
<p id="iPhone"></p>



## How to Use `super` in Data Abstraction

The `super` function is used to call methods or access variables from a **parent class** in a **child class**. Here’s how it works:

- **Access Parent Variables**: You can use `super` to bring in variables or properties that are already defined in the parent class, so you don’t have to rewrite them.
- **Modify Parent Methods**: If the parent class has a method, you can use `super` to call that method and then build on it in the child class. For example, if the parent class has a `getPrice` method, you can use `super.getPrice()` in the child class to get the original price, then modify it—like multiplying it by a new factor.

Using `super` is helpful when you know the parent method’s output but need to adjust it slightly without re-creating the whole function. This saves time and keeps the code simpler, especially for complex functions. 

---

**Simple Summary**:  
`super` lets a child class use parts of a parent class without redoing the work. It’s like copying the basics from a template and adding only the extra details you need.


```python
%%js
    class Product{
        constructor(price,size,taxRate) {
            this.price = price;
            this.size = size;
            this.taxRate = taxRate;
        }   
        getPrice() {
            return this.price + this.taxRate * this.price;
        }
        product(){
            const className = this.constructor.name.toLowerCase();
            return "You are ordering a " + className + " with a price of " + this.getPrice() + " dollars, a size of " + this.size;
        }
    }
    class Bagel extends Product{
        constructor(price, size, taxRate, flavor) {
            super(price, size, taxRate);
            this.flavor = flavor;
        }
        getPrice(){
            return super.getPrice() * this.size;
        }
        product(){
            return super.product() + " and a flavor of " + this.flavor;
        }
    }
const sesameBagel = new Bagel(1.5, 2, 0.07, "sesame");
console.log(sesameBagel.product());
```


    <IPython.core.display.Javascript object>


# Polymorphism

Polymorphism is a fundamental concept in object-oriented programming that allows methods to do different things based on the object that is calling them. It enables objects of different classes to be treated as objects of a common superclass.

### Example

A base class `Shape` might have a method `area()`. Subclasses like `Circle` and `Square` provide their specific implementations. When `area()` is called, the correct version is executed based on the object type.

## Benefits

- **Code Reusability**: Use the same interface for different types.
- **Flexibility**: Easily extend and manage code.



```python
%%js
    class RegularShape {
        constructor(sideLength, apothem){
            this.sideLength = sideLength;
            this.apothem = apothem;
        }
        area(){
            throw new Error("This method must be overridden!");
        }
        perimeter(){
            throw new Error("This method must be overridden!");
        }
    }

    class Square extends RegularShape {
        constructor(sideLength){
            super(sideLength, sideLength/2);
        }
        area(){
            return this.sideLength ** 2;
        }
        perimeter(){
            return this.sideLength * 4;
        }
    }

    class RegularPentagon extends RegularShape{
        constructor(sideLength){
            super(sideLength, sideLength/2*Math.tan(Math.PI/5));
        }
        area(){
            return 5 * this.sideLength * this.apothem / 2;
        }
        perimeter(){
            return this.sideLength * 5;
        }
    }
    class Arc extends RegularShape{
        constructor(radius, degrees){
            // Using sideLength for the arc length of an arc in degrees
            super(radius, radius);
            this.radius = radius;
            this.arcLength = 2 * Math.PI * radius * degrees / 360;
            if(degrees >0 && degrees <= 360){
                this.degrees = degrees;
            }
            else{
                throw new Error("Degrees must be between 0 and 360");
            }
        }
        area(){
            return Math.PI * this.radius ** 2 * this.degrees/360;
        }
        perimeter(){
            return this.arcLength + 2 * this.radius;
        }
    }

    let pentagon = new RegularPentagon(9);
    let square = new Square(5);
    let arc = new Arc(1,360 )
    console.log("Area of the pentagon: " + pentagon.area());
    console.log("Perimeter of the pentagon: " + pentagon.perimeter());
    console.log("Area of the Square: "+ square.area());
    console.log("Perimeter of the Square: "+ square.perimeter());
    console.log("Area of the arc: " + arc.area());
    console.log("Perimeter of the arc: " + arc.perimeter());
```


    <IPython.core.display.Javascript object>

