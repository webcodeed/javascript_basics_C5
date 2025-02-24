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

/*
const person = {
  // key: value
  fname: "John",
  lname: "Wick", age: 41, isAnAssasin: true,
  hobbies: {
    morning: "Yoga",
    afternoon: "Soccer",
    evening: ["Killing", "Maiming", "Threatning"]
  }
}
console.log(person)

console.log(person.hobbies.afternoon)
console.log(person.hobbies.evening[2])
console.log(person["age"])


person.wanted = true
person["health status"] = "dead 💀"

console.log(person)
console.log(person["health status"])

*/
// LOOPING OVER AN OBJECT
for (let key in person) {
  console.log(person[key]);
}
/*
Write a function that takes an object and returns an array of all the keys in uppercase.
*/

// for in loop
/*
function upperCaseKeys(obj){
  let upper_case = []
for (let key in obj) {
let result = key.toUpperCase()
upper_case.push(result)
}
  return upper_case;
}

let ayo = { name: "sam", class: "ss2", age: 15}

console.log(upperCaseKeys(ayo))
*/

// forEach
/*
function upperCaseKeys(obj){
  let upper_case = []
Object.keys(obj).forEach((key) => {
 let result =  key.toUpperCase()
 upper_case.push(result)
});
  return upper_case;
}

let ayo = { name: "sam", class: "ss2", age: 15}

console.log(upperCaseKeys(ayo))
*/

// Map
/*
function upperCaseKeys(obj){
  
 const ans = Object.keys(obj).map((key) => {
 return key.toUpperCase()
});
  return ans;
}

let ayo = { name: "sam", class: "ss2", age: 15}

console.log(upperCaseKeys(ayo))
*/

/*


Response 1
JavaScript Objects Test 📝
Try answering these questions to test your knowledge of objects in JavaScript.

1️⃣ Object Basics
✅ What will be logged in the console?
const person = { name: "Alice", age: 25, city: "London" };
console.log(person["age"]);

A) undefined
B) age
C) 25
D) Error

2️⃣ Object Properties
✅ How do you add a new property to this object?
const car = { brand: "Toyota", model: "Corolla" };

A) car.color = "Red";
B) car["color"] = "Red";
C) Object.assign(car, { color: "Red" });
D) All of the above

3️⃣ Object Methods
✅ What will be the output?
const user = {
  name: "John",
  greet: function () {
    return `Hello, ${this.name}!`;
  }
};
console.log(user.greet());

A) Hello, John!
B) Hello, undefined!
C) Error
D) Hello, !

4️⃣ Looping Over an Object
✅ Which loop is best for iterating over object properties?

A) for...of
B) for...in
C) Object.loop()
D) while

5️⃣ Object.keys()
✅ What does Object.keys(obj) return?
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj));

A) ["a", "b", "c"]
B) [1, 2, 3]
C) ["a", 1, "b", 2, "c", 3]
D) Error

6️⃣ Object.values()
✅ What does Object.values(obj) return?
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj));

A) ["a", "b", "c"]
B) [1, 2, 3]
C) ["a", 1, "b", 2, "c", 3]
D) Error

7️⃣ Object.entries()
✅ What does Object.entries(obj) return?
const obj = { x: 10, y: 20 };
console.log(Object.entries(obj));

A) [["x", 10], ["y", 20]]
B) { x: 10, y: 20 }
C) ["x", 10, "y", 20]
D) Error

8️⃣ Object Destructuring
✅ What will be logged in the console?
const book = { title: "1984", author: "George Orwell" };
const { title } = book;
console.log(title);

A) "1984"
B) "George Orwell"
C) Error
D) undefined

9️⃣ Checking If a Property Exists
✅ Which of these correctly checks if an object has a property?
const obj = { key: "value" };

A) "key" in obj
B) obj.hasOwnProperty("key")
C) Object.keys(obj).includes("key")
D) All of the above

🔟 Object Modification
✅ What will be the value of person.age at the end?
const person = { name: "Alice", age: 25 };
let anotherPerson = person;
anotherPerson.age = 30;
console.log(person.age);

A) 25
B) 30
C) undefined
D) Error

💡 Bonus Challenge
Write a function that takes an object and returns an array of all the keys in uppercase.
const obj = { name: "Sam", age: 30, city: "Paris" };

// Your function should return: ["NAME", "AGE", "CITY"]
function upperCaseKeys(obj) {
  // Your code here
}



Response 2
JavaScript Objects Test
Instructions:
Answer the following questions by writing JavaScript code.
Try to complete them without running the code first.

1. Object Basics
Create an object named car with the following properties:
brand: "Toyota"
model: "Camry"
year: 2022
Then, log the car’s brand to the console.

2. Adding and Modifying Properties
Using the car object from Question 1:
Add a new property color with the value "red".
Update the year to 2025.
Log the entire updated object.

3. Looping Over an Object
Create an object student with the following properties:
name: "Alice"
age: 20
grade: "A"
Write a loop that prints each key and its value in the format:
name: Alice  
age: 20  
grade: A  

4. Checking If a Property Exists
Using the student object from Question 3, check if the property "email" exists.
If it does, log "Email exists"; otherwise, log "Email does not exist".

5. Object Methods
Create an object calculator with the following methods:
add(a, b): Returns the sum of a and b.
subtract(a, b): Returns the difference between a and b.
Call both methods with the numbers 10 and 5 and log the results.

6. Object.keys() & Object.values()
Create an object book with the following properties:
title: "The Great Gatsby"
author: "F. Scott Fitzgerald"
year: 1925
Use Object.keys() to print an array of keys.
Use Object.values() to print an array of values.

7. Object.entries()
Using the book object from Question 6,
use Object.entries() to loop through and log key-value pairs in this format:
title: The Great Gatsby  
author: F. Scott Fitzgerald  
year: 1925  

8. Array of Objects
Create an array of objects called students, where each object represents a student with properties:
name
age
grade
Example:
const students = [
  { name: "John", age: 18, grade: "B" },
  { name: "Emma", age: 20, grade: "A" },
  { name: "Mike", age: 19, grade: "C" }
];
Write a loop that prints each student's details.

9. Find an Object in an Array
Using the students array from Question 8,
find the student whose name is "Emma" and log their details.

10. Delete a Property
Using the car object from Question 1,
delete the model property and log the updated object.

Bonus Question (Challenge 🚀)
Create a function countProperties(obj) that takes an object as an argument
and returns the number of properties it has.
Example:
const person = { name: "Jake", age: 25, city: "Boston" };
console.log(countProperties(person)); // Output: 3


SOLUTION TO TEST

solution to Response 1

1. c
2. d
3. a
4. b
5. a
6. b
7. b
8. a
9. c
10. b
Bonus Challenge
function upperCaseKeys(obj){
for( let keys in object ) {
let add = key.ToUpperCase()
return add;
}


solution to Response 2

1. let car = { brand: "Toyata", model: "Camry", year : 2022 };
console.log(car.brand):
2. car.color = "red"
car.year = "2025"
3. const person = {name: "Alice", age: 20, grade: "A"}
for (let key in person) {console.log(`${key}: ${person[key]}
4. if (Object.keys(person).includes(email)) {
console.log("email exists"
}else 
{console.log("email  does not exist")}
5. const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};
6. const book = {title: "The Great Gatsby",  author: "F. Scott Fitzgerald",  year: 1925}
 console.log(Object.keys(book))
 console.log(Object.values(book))
7. Object.entries(book).forEach(([key, value]) => {console.log(`${key}: ${value}`);
});
8. let students = [
{name: "John", age: 18, grade: "B"}, 
{name: "Emma", age: 20, grade: "A"}, 
{name: "Toyo", age: 19, grade: "C"} 
]
students.forEach( stud => {console.log(`name: ${stud.name}, age: ${stud.age}, grade: ${stud.grade}`);})
9. 
let result;  
for(let i = 0; i < students.length; i++){
  if (students[i].name === "Emma"){ 
    result = students[i]
    break;
  }
}
console.log(result)
10. delete car.model;

Bonus Challenge
function countProperties(obj) {
  return Object.values(obj).length + Object.keys(obj).length
}
*/