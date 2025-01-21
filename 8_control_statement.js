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
const skyIsBlue = 'yes'; // The string 'yes' is a truthy value
if (skyIsBlue) {
  alert("As expected"); // Executes because 'yes' evaluates to true
} else {
  alert("Nope!"); // Will not execute because 'yes' is truthy

// Additional Examples and Enhancements

// Nested if statements
const weather = prompt("How's the weather today? (sunny/rainy)").toLowerCase();
if (weather === "sunny") {
  const temperature = Number(prompt("What's the temperature?"));
  if (temperature > 30) {
    alert("It's a hot sunny day! Stay hydrated.");
  } else {
    alert("It's a pleasant sunny day!");
  }
} else if (weather === "rainy") {
  alert("Don't forget your umbrella!");
} else {
  alert("Enjoy your day regardless of the weather!");
}

// Using switch-case for cleaner code in specific scenarios
const day = prompt("What day is it today?").toLowerCase();
switch (day) {
  case "monday":
    console.log("Start of the work week!");
    break;
  case "friday":
    console.log("It's almost the weekend!");
    break;
  case "saturday":
  case "sunday":
    console.log("It's the weekend! Time to relax.");
    break;
  default:
    console.log("It's just another weekday.");
}

// Using ternary operator for a concise condition
const ageCheck = Number(prompt("Enter your age:"));
const licenseMessage = ageCheck >= 18 ? 
  "You are eligible for a driver's license." : 
  "You are not eligible for a driver's license.";
alert(licenseMessage);
