//JavaScript Built-Ins

//Strings - JavaScript provides a set of built-in methods to manipulate and work with strings.

// Creating Strings
let str1 = "Hello, World!";
let str3 = `Hello, ${str1}!`; // Template literal

// Common String Methods

// 1. Length: Returns the length of the string.

let length = str1.length;
console.log(length);

// 2. toUpperCase(): Converts all characters to uppercase.
let upperStr = str1.toUpperCase();
console.log(upperStr);

// 3. toLowerCase(): Converts all characters to lowercase.
let lowerStr = str1.toLowerCase();

// 4. indexOf(): Returns the index of the first occurrence of a specified value.
let index = str1.indexOf("World"); // 7
console.log(index);

// 5. substring(): Returns a part of the string between the start and end indexes.

let subStr = str1.substring(0, 5); // Hello

// 6. slice(): Extracts a section of the string and returns it as a new string.

let slicedStr = str1.slice(7, 12); // World

// 7. replace(): Replaces a specified value with another value.

let newStr = str1.replace("World", "Universe"); // Hello, Universe!

// 8. split(): Splits the string into an array of substrings based on a specified separator.
let arr = str1.split(","); // ["Hello", " World!"]

// Function checks if string is a palindrome or not
function isPalindrome(str) {
  // split the string -> becomes an array of strings
  const arr_split = str.split("");
  // reverse it
  const arr_reverse = arr_split.reverse();
  // join the array of strings
  const arr_join = arr_reverse.join("");
  // compare original string and reversed string
  const isCorrect = str === arr_join;
  // return true if its equal, else return false
  return isCorrect;
}

const test_cases = ["racecar", "rotator", "books", "radar", "leader", "noon"];
const result = test_cases.map(isPalindrome);
console.log(result);

// NUMBERS

// Creating Numbers

let num1 = 10;
let num2 = 3.14;

// Common Number Methods

// 1. toString(): Converts a number to a string.

let numStr = num1.toString(); // "10"

// 2. toFixed(): Formats a number using fixed-point notation.

let fixedNum = num2.toFixed(1); // "3.1"

// 3. parseInt(): Parses a string and returns an integer.

let intNum = parseInt("10"); // 10

// 4. parseFloat(): Parses a string and returns a floating-point number.

let floatNum = parseFloat("3.14"); // 3.14

//Math Object

// JavaScript's `Math` object provides a set of properties and methods for mathematical constants and functions.

// Common Math Methods

// 1. Math.abs(): Returns the absolute value of a number.

let absValue = Math.abs(-5); // 5

// 2. Math.ceil(): Rounds a number up to the next largest integer.

let ceilValue = Math.ceil(3.14); // 4

// 3. Math.floor(): Rounds a number down to the nearest integer.

let floorValue = Math.floor(3.14); // 3

// 4. Math.round(): Rounds a number to the nearest integer.

let roundedValue = Math.round(3.5); // 4

// 5. Math.max(): Returns the largest of zero or more numbers.

let maxValue = Math.max(1, 2, 3, 4, 5); // 5

// 6. Math.min(): Returns the smallest of zero or more numbers.

let minValue = Math.min(1, 2, 3, 4, 5); // 1

// 7. Math.pow(): Returns the base to the exponent power (base^exponent).

let powerValue = Math.pow(2, 3); // 8

// 8. Math.sqrt(): Returns the square root of a number.

let sqrtValue = Math.sqrt(16); // 4

// 9. Math.random(): Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).

let randomValue = Math.random(); // e.g., 0.123456789
