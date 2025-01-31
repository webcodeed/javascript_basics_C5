// JavaScript Arrays

// Arrays are ordered collections of values and can be created using square brackets `[]`.

// Creating Arrays

let fruits = ["Apple", "Banana", "Cherry"];

// Accessing Elements - Array elements can be accessed using their index, which starts from 0.

console.log(fruits[0]); // Apple
console.log(fruits[2]); // Cherry

// Adding Elements

// You can add elements to an array using the `push` method or by setting the value at a specific index.

fruits.push("Date");
fruits[4] = "Elderberry";

// Removing Elements - You can remove elements from an array using the `pop` method (removes the last element) or the `shift` method (removes the first element).

let lastFruit = fruits.pop(); // Elderberry
let firstFruit = fruits.shift(); // Apple

// Common Array Methods

// 1. push(): Adds one or more elements to the end of an array.

fruits.push("Fig", "Grape");

// 2. pop(): Removes the last element from an array and returns that element.

let last = fruits.pop();

// Loop over an array
for (let index = 0; index < fruits.length; index++) {
  const item = array[index];
  console.log(item);
}
