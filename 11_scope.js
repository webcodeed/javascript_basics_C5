let num = 12;

if (num < 10) {
  let x = 0; // locally scoped to the if statement
  let y = 13; // locally scoped to the if statement
  let x = 90; // throws an error because you can't initialised the same variable twice in the same scope
} else {
  let num = 16; // valid because it's created within a new scope i.e else statement
  let x = 5; // locally scoped to the else statement
  console.log(num);
}

let num = 10; // throws an error because you can't initialised the same variable twice in the same scope
