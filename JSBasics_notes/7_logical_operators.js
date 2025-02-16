/*
  Truth Table for AND (&&) and OR (||) Operators
  ---------------------------------------------
  | A    | B    | A AND B (&&) | A OR B (||) |
  ---------------------------------------------
  | true | true | true         | true        |
  | true | false| false        | true        |
  | false| true | false        | true        |
  | false| false| false        | false       |
  ---------------------------------------------
*/

// Explanation:
// - AND (&&) returns true only when **all** inputs are true.
// - OR (||) returns true when **at least one** input is true.

// Important Note:
// In JavaScript, these operators not only return `true` or `false`, 
// but can return the actual value encountered during evaluation based on truthiness.

/* 
  AND (&&)
  - Evaluates operands from left to right.
  - Returns the first "falsy" value it encounters.
  - If all values are "truthy," it returns the last value.
*/

alert(2 && 3); // 3 (both 2 and 3 are truthy, so it returns the last value)
alert(2 && 0 && 3); // 0 (encounters the first falsy value: 0)

/*
  OR (||)
  - Evaluates operands from left to right.
  - Returns the first "truthy" value it encounters.
  - If all values are "falsy," it returns the last value.
*/

alert(1 || 0); // 1 (1 is the first truthy value)
alert(null || 1); // 1 (1 is the first truthy value)
alert(null || 0 || 1); // 1 (the first truthy value)
alert(undefined || null || 0); // 0 (all are falsy, returns the last value)

/* 
  NOT (!)
  - Converts the value to a boolean and then inverts it.
  - A truthy value becomes `false` and a falsy value becomes `true`.
*/

alert(!true); // false (inverts true to false)
alert(!0); // true (0 is falsy, so !0 becomes true)

// Additional Examples and Insights

// AND (&&) with mixed data types
console.log("Mixed AND:", "hello" && 42); // 42 (both are truthy, returns the last value)
console.log("Mixed AND:", null && 42); // null (null is falsy, so it returns null)

// OR (||) with mixed data types
console.log("Mixed OR:", "hello" || 42); // "hello" (first truthy value)
console.log("Mixed OR:", null || 42); // 42 (first truthy value after null)

// Double NOT (!!)
// - Converts any value to its boolean equivalent
console.log("Double NOT:", !!"hello"); // true ("hello" is truthy)
console.log("Double NOT:", !!0); // false (0 is falsy)

// Short-circuiting behavior
// - AND (&&) stops evaluating as soon as it finds a falsy value.
// - OR (||) stops evaluating as soon as it finds a truthy value.
let x = 0;
let y = 10;

console.log("Short-circuit AND:", x && y); // 0 (x is falsy, so it stops and returns x)
console.log("Short-circuit OR:", x || y); // 10 (x is falsy, so it evaluates y and returns y)

// CLASS EXERCISE
// Complete the CodePen exercise at the provided link: 
// https://codepen.io/kolawole-abdullah-solahudeen/pen/GgKBaGB?editors=1010


// CLASS EXERCISE -> https://codepen.io/kolawole-abdullah-solahudeen/pen/GgKBaGB?editors=1010