// Objective: Write a function that takes a sentence (string) as input
// and returns the sentence with the first letter of each word capitalized.
// Example: titleCase("hello world") should return "Hello World".

function titleCase(sentence) {
  // Your code here

  const splitSentence = sentence.split(" "); // ["hello", "world"]

  const capitalizedWords = splitSentence.map((item) => {
    // Split each word in the array to letters. "hello" -> ["h", "e", "l", "l", "o"]
    const letters = item.split("");
    // Convert the first item in the array to uppercase
    letters[0] = letters[0].toUpperCase();

    // join the letters back into a word and return
    return letters.join("");
  });
  // join each word in the array into a sentence
  const answer = capitalizedWords.join(" ");

  return answer;
}

// Objective: Write a function that takes a number as input and returns the sum of its digits.
// Example: sumOfDigits(1234) should return 10 (1 + 2 + 3 + 4).

function sumOfDigits(num) {
  // Your code here
}

// Objective: Write a function that takes a sentence (string) as input
// and returns the longest word in the sentence.
// Example: longestWord("Web development is fun") should return "development".

function longestWord(sentence) {
  // Your code here
}

// Objective: Write a function that takes a string and a letter as input,
// and returns how many times the letter appears in the string.
// Example: countLetter("banana", "a") should return 3.

function countLetter(str, letter) {
  // Your code here
}

// Objective: Write a function that takes a number as input
// and returns its factorial (the product of all positive integers up to that number).
// Example: factorial(5) should return 120 (5 * 4 * 3 * 2 * 1).
// Example: factorial(7) should return 5040 (7 * 6 * 5 * 4 * 3 * 2 * 1)

function factorial(num) {
  // Your code here
}

// Objective: Write a function that takes a sentence (string) as input
// and returns the number of words in the sentence.
// Example: countWords("JavaScript is fun") should return 3.

function countWords(sentence) {
  // Your code here
}

// Objective: Write a function that takes two numbers (min and max) as input
// and returns a random number between them (inclusive).
// Example: randomInRange(1, 10) should return a number between 1 and 10.

function randomInRange(min, max) {
  // Your code here
}

// Objective: Write a function that takes an array of numbers as input
// and returns the smallest number in the array.
// Example: findMin([4, 1, 9, -3, 5]) should return -3.

function findMin(arr) {
  // Your code here
}

//
// DO NOT TOUCH ANYTHING BELOW THIS LINE
//
export {
  titleCase,
  sumOfDigits,
  longestWord,
  countLetter,
  factorial,
  countWords,
  randomInRange,
  findMin,
};
