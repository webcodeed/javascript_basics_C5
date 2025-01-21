// QUIZ -> https://codepen.io/kolawole-abdullah-solahudeen/pen/azojwPQ?editors=1010

// A demonstration of logical comparisons in JavaScript
// Comparisons in JavaScript evaluate to a boolean value: true or false

// Basic comparisons
console.log(2 > 1); // true, because 2 is greater than 1
console.log(8 < 15); // true, because 8 is less than 15
console.log(2 == 1); // false, because 2 is not equal to 1
console.log(2 != 1); // true, because 2 is not equal to 1
console.log(2 >= 2); // true, because 2 is greater than or equal to 2

// Interesting Curveball
let a = 0; // a is assigned the number 0
let b = "0"; // b is assigned the string "0"

// Loose equality (==) comparison
// In loose equality, JavaScript attempts type conversion before comparing
console.log("Loose Equality (a == b):", a == b); // true, because "0" is converted to 0 before comparison

// More Examples of Loose Equality
console.log(0 == false); // true, because 0 is considered falsy and equal to false
console.log('' == false); // true, because an empty string is also considered falsy

// Strict equality (===) comparison
// Strict equality does NOT perform type conversion; it compares both value and type
console.log("Strict Equality (a === b):", a === b); // false, because 0 (number) is not the same type as "0" (string)

// Null and Undefined Comparisons
/* 
  The only exception to loose equality is null and undefined.
  null is only ever loosely equal to undefined.
*/
console.log("Null == Undefined:", null == undefined); // true, because loose equality considers them equal
console.log("Null === Undefined:", null === undefined); // false, because they are of different types

