// Control or Conditional Statements
/*
  Syntax of an if-statement:
  if (condition) {
    // Code to execute if the condition is true
  } else {
    // Code to execute if the condition is false (optional)
  }
*/

// Check if a number is even or odd
let val = Number(prompt("Input a number")); // Prompt user for input and convert to number
if (val % 2 === 0) {
  alert("Yep, that's an even number"); // Executes if the number is divisible by 2
} else {
  alert("Nope, it is an odd number"); // Executes if the number is not divisible by 2
}

// Checking eligibility for a driver's license
const age = Number(prompt("What is your age?")); // Prompt for age and convert to number
if (age >= 18) {
  alert("Congratulations, you are eligible for a driver's license."); // Age is 18 or above
} else {
  alert(`${age} is not eligible for a driver's license`); // Age is below 18
}

// Using if -> else if -> else for grading system
const score = +prompt("Input your score"); // The plus (+) sign converts the input to a number
if (score >= 70) {
  console.log("A"); // Grade A for scores 70 and above
} else if (score >= 60 && score < 70) {
  console.log("B"); // Grade B for scores between 60 and 69
} else if (score >= 50 && score < 60) {
  console.log("C"); // Grade C for scores between 50 and 59
} else {
  console.log("F"); // Grade F for scores below 50
}

// Checking a single condition with a truthy value
const skyIsBlue = "yes"; // The string 'yes' is a truthy value
if (skyIsBlue) {
  alert("As expected"); // Executes because 'yes' evaluates to true
} else {
  alert("Nope!"); // Will not execute because 'yes' is truthy
}

// SWITCH STATEMENT

const day = "Monday";
// ===
switch (day) {
  case "Monday": // day === "Monday"
    console.log("Start of the work week!");
    break;
  case "Wednesday": // day === "Wednesday"
    console.log("Midweek already!");
    break;
  case "Friday":
    console.log("Almost the weekend!");
    break;
}

let month = "February";

switch (month) {
  case "January":
  case "February":
  case "March":
    console.log("This is within the first quarter of the business year");
    break;

  case "April":
  case "May":
  case "June":
    console.log("This is within the second quarter of the business year");
    break;

  case "July":
  case "August":
  case "September":
    console.log("This is within the third quarter of the business year");
    break;

  case "October":
  case "November":
  case "December":
    console.log("This is within the fourth quarter of the business year");
    break;

  default:
    console.log("Invalid month");
    break;
}

// [a, b, c]
// (2 + 2) / 4
// {}
