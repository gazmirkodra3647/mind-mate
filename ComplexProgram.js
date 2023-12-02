/*
Filename: ComplexProgram.js

Description: This JavaScript code is a complex program that simulates a virtual shopping cart with various operations such as adding items, removing items, calculating totals, applying discounts, and generating reports. It implements object-oriented design principles and showcases advanced JavaScript concepts like closures, prototypes, and module patterns.

Author: John Doe
Date: October 1, 2022
*/

// Define the Product class
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Define the ShoppingCart module
const ShoppingCart = (function() {
  // Private variables and functions
  let items = [];
  let total = 0;

  function calculateTotal() {
    total = 0;
    items.forEach(item => {
      total += item.price;
    });
  }

  // Public API
  return {
    addItem: function(item) {
      items.push(item);
      calculateTotal();
    },
    removeItem: function(item) {
      items = items.filter(prod => prod !== item);
      calculateTotal();
    },
    getTotal: function() {
      return total;
    },
    applyDiscount: function(discountPercentage) {
      const discount = (total * discountPercentage) / 100;
      total -= discount;
    },
    generateReport: function() {
      console.log("Shopping Cart Report:");
      items.forEach(item => {
        console.log(`${item.name} - $${item.price}`);
      });
      console.log(`Total: $${total}`);
    }
  };
})();

// Usage example
const shirt = new Product("Shirt", 25);
const pants = new Product("Pants", 40);
const shoes = new Product("Shoes", 60);

ShoppingCart.addItem(shirt);
ShoppingCart.addItem(pants);
ShoppingCart.addItem(shoes);

console.log("Before Discount:");
ShoppingCart.generateReport();

ShoppingCart.applyDiscount(10); // Apply 10% discount

console.log("After Discount:");
ShoppingCart.generateReport();

ShoppingCart.removeItem(pants);
console.log("After Removing Pants:");
ShoppingCart.generateReport();

// Output:
// Before Discount:
// Shopping Cart Report:
// Shirt - $25
// Pants - $40
// Shoes - $60
// Total: $125
// After Discount:
// Shopping Cart Report:
// Shirt - $25
// Pants - $40
// Shoes - $60
// Total: $112.5
// After Removing Pants:
// Shopping Cart Report:
// Shirt - $25
// Shoes - $60
// Total: $85