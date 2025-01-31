// JavaScript Objects

// Creating Objects

// Objects are collections of key-value pairs. They can be created using curly braces `{}`.

let person = {
  firstName: "John",
  lastName: "Lennon",
  age: 20,
  isStudent: true,
};

// Accessing Properties

// Properties can be accessed using dot notation or square bracket notation.
console.log(person.firstName);
console.log(person.isStudent);
console.log(person);

// Square Bracket Notation

console.log(person["lastName"]); // Lennon

person.email = "student@email.com";
person["phone"] = "702-xxx-xxx";

console.log(person);
console.log(person["phone"]);

// You can delete properties from an object using the `delete` operator.

delete person.age;
console.log(person);

//  The 'this' keyword points to the object from where it is called
const firstName = "Tunde";
const lastName = "Kol";

const newStudent = {
  firstName: "Kola",
  lastName: "Wole",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(newStudent);
console.log(newStudent.fullName());

// Object.keys() & Object.values()
console.log(Object.keys(newStudent)); // [ 'firstName', 'lastName', 'fullName' ]
console.log(Object.values(newStudent)); // ["Kola", "Wole", " fullName()"]
