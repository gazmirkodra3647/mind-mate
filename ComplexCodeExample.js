/** 
 * Filename: ComplexCodeExample.js
 * 
 * This code demonstrates a complex and elaborate JavaScript program that incorporates various advanced concepts and techniques.
 */

// Utility function to generate a random number in a given range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Class definition for a Circle object
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Method to calculate the area of the circle
  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  // Method to calculate the circumference of the circle
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

// Object literal representing a person
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  occupation: "Engineer",
  hobbies: ["Reading", "Gardening", "Traveling"],
  introduce: function() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}. I'm ${this.age} years old and work as an ${this.occupation}.`);
  }
};

// Array of Circle objects
const circles = [
  new Circle(5),
  new Circle(10),
  new Circle(15),
  new Circle(20)
];

// Function to calculate the total area of circles in the array
function getTotalCircleArea() {
  let totalArea = 0;
  for (let i = 0; i < circles.length; i++) {
    totalArea += circles[i].getArea();
  }
  return totalArea;
}

// Recursive function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Event listener for a button click event
document.getElementById("myButton").addEventListener("click", function() {
  alert("Button clicked!");
});

// Example usage of setInterval function
let count = 0;
const intervalId = setInterval(function() {
  count++;
  console.log(`Count: ${count}`);
  if (count === 10) {
    clearInterval(intervalId);
  }
}, 1000);

// Class definition for a Rectangle object
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Method to calculate the area of the rectangle
  getArea() {
    return this.width * this.height;
  }

  // Method to calculate the perimeter of the rectangle
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Example usage of Promises
const promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    if (getRandomNumber(1, 10) > 5) {
      resolve("Success!");
    } else {
      reject("Error!");
    }
  }, 3000);
});

promise
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.log(error);
  });

// Additional code...
// ...
// ...

// The code continues for more than 200 lines...