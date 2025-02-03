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

// 3. shift(): Removes the first element from an array and returns that element.

let first = fruits.shift();

// 4. unshift(): Adds one or more elements to the beginning of an array.

fruits.unshift("Apple", "Banana");

// 5. indexOf(): Returns the first index at which a given element can be found.

let index = fruits.indexOf("Cherry");

// 6. splice(): Adds/Removes elements from an array.

const months = ["Jan", "March", "Jun", "Aug", "Oct", "Dec"];
months.splice(2, 0, "Apple", "Orange");

months.splice(1); // deletes everything starting from index 1
console.log(months);

// 7. slice(): Returns a shallow copy of a portion of an array into a new array.

const res = months.slice(2, 5);

console.log(months); // ["Jan", "March", "Jun", "Aug", "Oct", "Dec"]
console.log(res); // ["Jun", "Aug", "Oct"]

// Loop over an array
for (let index = 0; index < fruits.length; index++) {
  const item = fruits[index];
  console.log(item);
}

for (let i = 0; i < months.length; i++) {
  const value = months[i];
  console.log(`The month is ${value}`);
}

function multiples(num) {
  const arr = [];

  for (let i = 1; i <= 12; i++) {
    const result = num * i;
    arr.push(result);
  }

  return arr;
}

console.log(multiples(3)); // [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36]
console.log(multiples(4)); // [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48]

function multiples_square(arr_num) {
  const res = [];

  for (let i = 0; i < arr_num.length; i++) {
    const result = arr_num[i] ** 2;
    res.push(result);
  }

  return res;
}

console.log(multiples_square([1, 2, 4]));
console.log(multiples_square([3, 6, 9]));

console.log(multiples_square(multiples(3)));

// HIGHER ORDER FUNCTIONS

// 8. forEach(): Executes a provided function once for each array element.

const frenchNumbers = [
  "un",
  "deux",
  "trois",
  "quatre",
  "cinq",
  "six",
  "sept",
  "huit",
  "neuf",
  "dix",
];

function upper(str) {
  return str.toUpperCase();
}

frenchNumbers.forEach(upper);

// Exercise 2: Use forEach() to create a new array `upperCaseNumbers` that contains all elements of `frenchNumbers` in uppercase.

const upperCaseNumbers = [];

// function converter(word) {
//   const result = word.toUpperCase();
//   upperCaseNumbers.push(result);
// }

const converter = (word) => {
  const result = word.toUpperCase();
  upperCaseNumbers.push(result);
};

frenchNumbers.forEach(converter);

// 9. map(): Creates a new array with the results of calling a provided function on every element.

const frenchUpper = frenchNumbers.map(function (word) {
  return word.toUpperCase();
});

console.log(frenchUpper);

const evenNumbers = [2, 4, 6, 8, 10];

const evenNumbersSquare = evenNumbers.map((value) => value ** 2);

console.log(evenNumbersSquare);
