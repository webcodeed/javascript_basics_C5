// COMMENTS IN JAVASCRIPT
// Single line comment
/*
  Multi-line comment
*/

// 1. Numbers
const num1 = 100;
const num2 = 50;

// +, -, *, /, **, %
console.log(num1 + num2);
console.log(num1 - num2);
console.log(2 ** 3);
console.log(1 / 0);

// 2. Strings
const fName = "John"; // Double quotes
const middleName = 'Lennon'; // Single quotes
const lName = `Wick`; // Backticks

const sentence = "This is 'Adewale'"

/* EXERCISE
1. Create two variables, a and b, with any numbers of your choice. Log their sum, difference, product, and exponent to the console.
BONUS: Store the values in a separate variable before logging them to the console.

2. What happens if you divide a number by zero? Log the result.

3. Try dividing a string by a number and log the result. What do you observe?
*/

const a = 10;
const b = 35;

const sum = a + b;
const difference = a - b;
const product = a * b;
const exponent = a ** b;

console.log(sum, difference, product, exponent);

console.log(a / 0); // Infinity

console.log("this is not a number" / 4); // NaN

// 3. Booleans
const newYear = true;
const isThis2024 = false;

// 4. null -> represents “nothing”, “empty” or “value unknown”
const record = null;

// 5. undefined ->  represents “value is not assigned”. If a variable is declared, but not assigned, then its value is undefined

let undefinedVariable;
// undefinedVariable = undefined; -> Don't do this
console.log("This is an undefined variable", undefinedVariable);

// To check the type of a variable...
// typeof value OR typeof(value)

console.log(typeof 2);
console.log(typeof "Hello");
console.log(typeof(true));
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);
console.log(typeof Infinity);
console.log(typeof("234"));


