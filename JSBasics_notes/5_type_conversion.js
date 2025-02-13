// CONVERT TO STRING
// String(value)
let num1 = 200
let bool = true
let undf = String(undefined)
let empty = String(null)

let new_num = String(num1)
let new_bool = String(bool)

console.log(new_num, typeof new_num);
console.log(new_bool, typeof new_bool);
console.log(undf, typeof(undf));
console.log(empty, typeof(empty));

// CONVERT TO NUMBER
// Number(value)
console.log("Below you find conversion to number");
// 1. If the value is an empty string, the result is 0
console.log(Number(""))
// 2. If the value is a string that doesn't contain a number, the result is NaN
console.log(Number("nigeria"))
// 3. If the value is true, the result is 1
console.log(Number(true));
// 4. If the value is false, the result is 0
console.log("Boolean - false", Number(false)); // 0
// 5. If the value is undefined, the result is NaN
console.log("undefined", Number(undefined)); // NaN
// 6. If the value is null, the result is 0
console.log("null", Number(null)) // 0
// 7. valid number string
console.log(Number("1980"));

// CONVERT TO BOOLEAN -> Boolean(value)

/* RULES
1. 0, null, undefined, NaN and "" will return false. These values are referred to as FALSY VALUES
2. Any other value will return true
*/

// Examples
console.log(Boolean("nice")) // 1
console.log(Boolean("")) // 0
console.log(Boolean(200)) // 1
console.log(Boolean(" ")) // 1 -> This is not an empty string
console.log(Boolean(undefined)) // 0

/*
  Create a program that accepts a number as an input and then return the square value of the number as output. Use alert() to return the value to the user.
*/


/*
  Create a program that accepts two numbers as an input and then return the sum of the inputs as output. Use alert() to return the value to the user.
*/

/*
Create a program that accepts temperature in Fahrenheit and then returns the temperature in Celsius. Use alert() to return the value to the user.

Formula: C = (F - 32) * 5/9
*/