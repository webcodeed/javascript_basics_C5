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

let multiplier = 1;

while (multiplier <= 12) {
  console.log(`4 x ${multiplier} = ${4 * multiplier}`);
  multiplier += 1;
}

// Examples
// 1. A program that logs every number from 1 to 200
let num = 1;

while (num <= 200) {
  console.log(`Number: ${num}`);
  num = num + 1;
}

// Create a program that keeps asking (prompt) the user for a password until they enter the correct one.
/*
1. Stop the program if the user inputs wrong password 3 times
2. If the user inputs correct password, alert them
*/

// 1. Create a program that prompts the user for a number, Y, and then logs all odd numbers from 1 to Y using a for loop.

/*
let y = +prompt("Input a number");
let i = 1
while(i > y ) {
  if (i % 2 === 0){
    console.log( i )
    
//     break;
  }
   i += 1
}
*/

// 2. Write a program that prompts the user for a number, Z, and then uses a while loop to log all multiples of 3 from 1 to Z.

/*
let z = +prompt("Input a number");
let i = 1
while(i < z){
  console.log( i * 3);
  i++
}
*/

// 3. Create a program that prompts the user for a number, N, and then uses a for loop to calculate the factorial of N and logs the result.

/*
let z = +prompt("Input a number");
let tot = 0
let i = 1

while (i < z){
  tot += i
  i++
}
console.log(tot);
*/

// 4. Write a program that prompts the user for a number, M, and then uses a while loop to log all prime numbers from 1 to M.


let m = +prompt("Input a number");
let i = 1
while (i < z){
  if (i % 2 === 1 && i % 3 === 1)
  {
    console.log(i);
  
  }
  i++
}



// 5. Create a program that prompts the user for two numbers: start and end. Use a for loop to log all numbers between start and end that are divisible by 4.
const correct_password = "test123";
let input = prompt("Input your password");
let user_attempt = 0;

while (input !== correct_password) {
  user_attempt += 1;
  if (user_attempt === 3) {
    alert("Try again after 3 minutes");
    break;
  }
  input = prompt("Wrong password, Input correct password");
}

if (input === correct_password) {
  alert("Correct pasword!!");
}


// FOR LOOPS
// For loop — The for loop is used to repeat a block of code a certain number of times.
/*
for (initial value; condition; increment/decrement) {
  // Code to be executed in each iteration
}
*/

for (let i = 1; i <= 12; i++) {
  console.log(`6 x ${i} = ${6 * i}`);
}

/*
Class exercise - Rub minds together

1. Create a program that:
  - Prompts the user for a number, X.
  - Uses a for loop to calculate the sum of all numbers from 1 to X.
  - Logs the result.
  Example: if the user input 8, The sum numbers between 1 and 8 = 36.

  let input = +prompt("Input a number")
  let sum = 0

  for(let i = 1; i <= input; i++){
      sum += i
  }
  console.log(sum)

2. Analyse the following broken code and fix it so it does not run infinitely:
  let counter = 20;

  while (counter > 0) {
    console.log(`Number: ${counter}`);
  }
  Tip: use external code editor like https://www.jsplayground.dev/ so that you can easily break the loop.

  let counter = 20;

  while (counter > 0) {
    console.log(`Number: ${counter}`);
    counter -= 1 // counter = counter - 1
  }

3. Reverse Numbers
  Write a program that:
  Prompts the user for a number, W.
  Uses a for loop to log all numbers from W down to 1 in reverse order.

  let input = prompt("Input a number")

  for (let i = input; i > 0; i--){
    console.log(i)
  }

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
