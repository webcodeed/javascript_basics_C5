/* A function is a block of reusable code designed to perform a specific task. It helps in organizing code and avoiding repetition.

function name(parameter1, parameter2) {
  // code to be executed
}

*/
function greet_user(name, title = "Mr.", salutations) {
  console.log(`Welcome ${title} ${name} - ${salutations}`);
}

greet_user("Ade", "Aluta");
greet_user("Bola", "Mrs");
greet_user("Collins");
greet_user("Dotun");
greet_user("Edun", "Chief");

function sum(a, b) {
  return a + b;
}

const result = sum(4, 5);
console.log(result);

function difference(num1, num2) {
  const diff = num2 - num1;
  return diff;
}

function square(num) {
  return num ** 2;
}

const final_res = square(difference(4, 10));
console.log(final_res);

function diff(a, b) {
  let result;
  if (a > b) {
    result = a - b;
  } else {
    result = b - a;
  }

  return result;
}

console.log(diff(2, 8));
console.log(diff(8, 2));

function currencyFormatter(num, currency = "₦") {
  let numStr = String(num);

  let end_pointer = numStr.length;
  let start_pointer = numStr.length - 3;

  let sum = "";

  if (numStr.length <= 3) {
    return `${currency} ${num}`;
  }

  while (end_pointer) {
    sum = `,${numStr.slice(start_pointer, end_pointer)}` + sum;

    end_pointer = start_pointer;
    start_pointer -= 3;

    if (start_pointer <= 0) {
      sum = `${numStr.slice(0, end_pointer)}` + sum;
      break;
    }
  }

  return `${currency} ${sum}`;
}

console.log(currencyFormatter(100)); // ₦ 100
console.log(currencyFormatter(25000, "GH₵")); // GH₵ 25,000
console.log(currencyFormatter(1000000, "£")); // £ 1,000,000
/*
📌 Test Question
Write a function called formatNumber that takes two parameters:

num → A number to format.
separator → A string that will be used to separate every three digits (default is a comma ,).
Your function should format the number by inserting the separator every three digits from the right.
*/

/*
function formatNumber(num, separator = ",") {
  let numstr = String(num);

  let end = numstr.length
  let start = numstr.length - 3
  let sum = ""
  
  if (end <= 3) return num
  
  while(end){
    sum = `${separator}${numstr.slice(start, end)}` + sum
    console.log(sum)
    end = start
    start -= 3
    
    if(start <= 0){
      let h = numstr.slice(0, end) + sum
      return h
    }
  }
}
console.log(formatNumber(30000, "."))
*/

// () => {}

const product = (a, b) => {
  const res = a * b;

  return res;
};

console.log(product(4, 8));
console.log(product(16, 2));

const division = (a, b) => a / b;

console.log(division(10, 2));
