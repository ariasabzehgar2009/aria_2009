---
comments: True
layout: post
title: Data Abstraction Hacks
description: An intro to data abstraction
permalink: /csse/javascript/fundamentals/data-abstraction-hacks
type: ccc
author: Veera Kalakota, Santhosh Karthik, Akhil Kulkarni
---

# Popcorn Hack #1
Create a child class of the class **Appliance**, and call it's name() function


```python
%%js
class Appliance {
    constructor(name) {
        this.name = name;
    }
    returnname() {
        return "I am a " + this.constructor.name + " and my model is " + this.name;
    }
}

// Creating a child class called WashingMachine
class WashingMachine extends Appliance {
    constructor(name) {
        super(name); // Call the parent class constructor with the name argument
    }
}

const washer = new WashingMachine("Model X");
console.log(washer.returnname());

```


    <IPython.core.display.Javascript object>


### Popcorn Hack #2
Create child classes of the product class with items, and add parameters depending on what it is. An example is provided of a bagel.


```python
%%js 
class Product {
    constructor(price, size, taxRate) {
        this.price = price;
        this.size = size;
        this.taxRate = taxRate;
    }
    getPrice() {
        return this.price + this.taxRate * this.price;
    }
    product() {
        const className = this.constructor.name.toLowerCase();
        return "You are ordering a " + className + " with a price of " + this.getPrice().toFixed(2) + " dollars, a size of " + this.size;
    }
}

class HockeyStick extends Product {
    constructor(price, size, taxRate, handOrientation, flex, brand) {
        super(price, size, taxRate);
        this.handOrientation = handOrientation;
        this.flex = flex;
        this.brand = brand;
    }
    product() {
        return super.product() + ", a hand orientation of " + this.handOrientation + ", a flex of " + this.flex + ", and a brand of " + this.brand;
    }
}

var ccmHockeyStick = new HockeyStick(120, "standard", 0.1, "right-handed", 50, "CCM");
console.log(ccmHockeyStick.product());

```


    <IPython.core.display.Javascript object>



```python

```
