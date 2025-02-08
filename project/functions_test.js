/**
 * WARNING: Do not touch anything here.
 *
 * Test suite for the titleCase function.
 *
 * @file /bootcamp/javascript_basics/project/functions_test.js
 * @module functions_test
 * @requires ./functions_exercise.js
 */

import {
  titleCase,
  sumOfDigits,
  longestWord,
  countLetter,
  factorial,
  countWords,
  randomInRange,
  findMin,
} from "./functions_exercise.js";

describe("titleCase", () => {
  it("should capitalize the first letter of each word", () => {
    expect(titleCase("hello world")).to.equal("Hello World");
    expect(titleCase("niger delta")).to.equal("Niger Delta");
    expect(titleCase("javaScript is fun")).to.equal("JavaScript Is Fun");
  });
});

describe("sumOfDigits", () => {
  it("should return the sum of all digits in a number", () => {
    expect(sumOfDigits(1234)).to.equal(10);
    expect(sumOfDigits(987)).to.equal(24);
    expect(sumOfDigits(0)).to.equal(0);
    expect(sumOfDigits(505)).to.equal(10);
  });
});

describe("longestWord", () => {
  it("should return the longest word in a sentence", () => {
    expect(longestWord("Web development is fun")).to.equal("development");
    expect(longestWord("I love programming")).to.equal("programming");
    expect(longestWord("Hello world")).to.equal("Hello");
    expect(longestWord("A quick brown fox")).to.equal("quick");
  });
});

describe("countLetter", () => {
  it("should return the number of times a letter appears in a string", () => {
    expect(countLetter("banana", "a")).to.equal(3);
    expect(countLetter("javascript", "a")).to.equal(2);
    expect(countLetter("hello", "l")).to.equal(2);
    expect(countLetter("mississippi", "s")).to.equal(4);
  });
});

describe("factorial", () => {
  it("should return the factorial of a number", () => {
    expect(factorial(5)).to.equal(120);
    expect(factorial(3)).to.equal(6);
    expect(factorial(0)).to.equal(1);
    expect(factorial(1)).to.equal(1);
  });
});

describe("countWords", () => {
  it("should return the number of words in a sentence", () => {
    expect(countWords("JavaScript is fun")).to.equal(3);
    expect(countWords("I love coding")).to.equal(3);
    expect(countWords("Hello")).to.equal(1);
    expect(countWords("This is a test case")).to.equal(5);
  });
});

describe("randomInRange", () => {
  it("should return a number within the given range", () => {
    const num = randomInRange(1, 10);
    expect(num).to.be.at.least(1);
    expect(num).to.be.at.most(10);

    const anotherNum = randomInRange(-5, 5);
    expect(anotherNum).to.be.at.least(-5);
    expect(anotherNum).to.be.at.most(5);
  });
});

describe("findMin", () => {
  it("should return the smallest number in an array", () => {
    expect(findMin([4, 1, 9, -3, 5])).to.equal(-3);
    expect(findMin([10, 20, 30, 5, 25])).to.equal(5);
    expect(findMin([-10, -5, -1, -50])).to.equal(-50);
    expect(findMin([100, 200, 300])).to.equal(100);
  });
});

mocha.run();
