// Loops allow us to perform actions a certain number of times...
/* For example:
  - A program that logs the every number from 1 to 200
  - simple program that prompts a user for a number and then you return list of even numbers from 2 to that number
*/

// While loop — The while loop executes a block of code as long as a specified condition is true.
/*
while (condition) {
  // perform a task
}
*/

let count = 0;

while (count < 5) {
  console.log(`Number: ${count}`);
  count = count + 1;
}

// Examples
// 1. A program that logs every number from 1 to 200
let num = 1;

while (num <= 200) {
  console.log(`Number: ${num}`);
  num = num + 1;
}

// Create a program that keeps asking (prompt) the user for a password until they enter the correct one.

const correct_pssword = "test123";

while (condition) {}

/*
Class exercise - Rub minds together

1. Create a program that:
  - Prompts the user for a number, X.
  - Uses a for loop to calculate the sum of all numbers from 1 to X.
  - Logs the result.
  Example: if the user input 8, The sum numbers between 1 and 8 = 36.

2. Analyse the following broken code and fix it so it does not run infinitely:
  let counter = 20;

  while (counter > 0) {
    console.log(`Number: ${counter}`);
  }
  Tip: use external code editor like https://www.jsplayground.dev/ so that you can easily break the loop.

3. Reverse Numbers
  Write a program that:
  Prompts the user for a number, W.
  Uses a for loop to log all numbers from W down to 1 in reverse order.

4. Range Even Numbers
  Write a program that:

  Prompts the user for two numbers: start and end.
  Uses a while loop to log all even numbers between start and end.

5. FizzBuzz
  Write a program that:

  Uses a for loop to iterate through numbers from 1 to 100.
  Prints:
  "Fizz" for numbers divisible by 3.
  "Buzz" for numbers divisible by 5.
  "FizzBuzz" for numbers divisible by both 3 and 5.
  The number itself for all other cases.
*/
