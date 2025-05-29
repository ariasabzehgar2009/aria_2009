---
comments: True
layout: post
title: Data Abstraction Homework
description: An intro to data abstraction
permalink: /csse/javascript/fundamentals/data-abstraction-homework
categories: ['CSSE JavaScript Fundamentals']
author: Akhil Kulkarni, Santhosh Karthik
---

# JavaScript BankAccount Class - Required Homework

Create a `BankAccount` class that returns an object. Inside this function, follow these steps:

### 1. **Initialize Balance**:
- Create a `balance` variable and initialize it to `100`, or any balance you want (representing $100).

### 2. **Methods**:
- `deposit(amount)`: Adds a specified amount to the balance.
- `withdraw(amount)`: Deducts a specified amount from the balance, but only if there is enough balance.
- `getBalance()`: Returns the current balance.
- `transfer(amount, targetAccount)`: Transfers a specified amount from this account to another account.

### 3. **Encapsulation**:
- Only allow access to the `balance` variable through the `deposit`, `withdraw`, `getBalance`, and `transfer` methods.
- Make sure to avoid direct access to `balance` from outside the `BankAccount` function.

### 4. **Validation**:
- A deposit can only add positive amounts.
- A withdrawal can only occur if the account has enough balance.
- Transfers should be allowed only if both accounts have sufficient balance to complete the transaction.

### 5. **Testing**:
- Create a new `BankAccount` instance with a starting balance.
- Call each method (`deposit`, `withdraw`, `getBalance`, `transfer`) to verify functionality.

### 6. **Inheritance**:
- Create a subclass of `BankAccount`, called `PremiumBankAccount`, which offers additional benefits like no transaction fees or higher transfer limits, or whatever you want.

---

### Example Scenario:

1. **Create two BankAccount instances**:
   - Account 1 has an initial balance of $500.
   - Account 2 has an initial balance of $1000.

2. **Test the following:**
   - Deposit $200 into Account 1.
   - Withdraw $50 from Account 1.
   - Transfer $100 from Account 2 to Account 1.
   - Print the balances of both accounts.

Make sure to implement the `transfer` method so that it checks if both accounts have enough balance before transferring money.

---



```python
%%js 
    class BankAccount {

    }
```


    <IPython.core.display.Javascript object>


# JavaScript Car Class Code - Optional Homework (Extra Credit)

Create a `Car` class that models a car with a few basic properties and methods. Follow these steps:

### 1. **Initialize Properties**:
- Create properties for `make`, `model`, and `fuelLevel` (a number between 0 and 100 representing the amount of fuel in the car).
  
### 2. **Methods**:
- `drive(distance)`: Decreases the `fuelLevel` by a certain percentage based on the distance traveled.
- `refuel(amount)`: Increases the `fuelLevel` by a specified amount, but make sure that it does not exceed 100 (the max fuel capacity).
- `getFuelLevel()`: Returns the current `fuelLevel`.

### 3. **Encapsulation**:
- Keep the `fuelLevel` private, and only allow it to be modified or read via the `drive`, `refuel`, and `getFuelLevel` methods.
- Do not allow direct access to `fuelLevel` from outside the class.

### 4. **Validation**:
- Ensure that when refueling, the `fuelLevel` does not exceed 100.
- When driving, ensure that the car does not drive without enough fuel (so if fuel is 0, they cant drive).

### 5. **Testing**:
- Create a `Car` instance with an initial fuel level.
- Test the following:
  - Drive the car and check how the fuel level changes.
  - Refuel the car and check that the fuel level increases without exceeding 100.
  - Try driving the car when the fuel level is 0 and ensure that it cannot drive.

---

### Example Scenario:

1. **Create a Car instance**:
   - The car has a `make` of `"Toyota"`, a `model` of `"Corolla"`, and a `fuelLevel` of 50%.

2. **Test the following:**
   - Drive the car for 100 km (decreases fuel level by 10%).
   - Refuel the car with 30 units (increases fuel level, but should not exceed 100%).
   - Try to drive the car with 0 fuel and verify it doesn’t drive.

---




```python
%%js
class Car{

}
```
