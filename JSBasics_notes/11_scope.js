let num = 12;

if (num < 10) {
  let x = 0; // locally scoped to the if statement
  let y = 13; // locally scoped to the if statement
  x = 90; // throws an error because you can't initialised the same variable twice in the same scope
} else {
  let z = 16; // valid because it's created within a new scope i.e else statement
  let x = 5; // locally scoped to the else statement
  console.log(num);
}

num = 10; // throws an error because you can't initialised the same variable twice in the same scope

// console.log(x);

const A = "A";
let F;

function doStuff(B) {
  console.log(B); // 1.True or False; Answer: True -> Within same block i.e function block
  const C = "C";
  let H = "H";

  if (1 + 1 === 2) {
    const D = "D";
    H = "something else";
  }

  console.log(D); // 2.True or False; Answer: False -> Declared in the if-block
  console.log(H); // 3.True or False; Answer: True -> Within same block
  F = "F";
}

let E = 0;

while (E < 3) {
  E++;
  console.log(A); // 4.True or False; Answer: True -> Declared in the global block
  const G = "G";
}

console.log(E); // 5.True or False; Answer: True -> Declared in the global block
console.log(G); // 6.True or False; Answer: False -> Declared in the while-block

doStuff("B");
console.log(B); // 7.True or False; Answer: False -> Declared in the function doStuff block
console.log(C); // 8.True or False; Answer: False -> Declared in the function doStuff block
console.log(F); // 9.True or False; Answer: True -> Declared in the global block
