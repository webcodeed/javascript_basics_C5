/*

GitHub Copilot: Sure, here's a short note on async JavaScript:

### Async JavaScript

1. Sync vs Async
-Synchronous (Sync): In synchronous programming, tasks are performed one after another. Each task waits for the previous one to complete before starting. This can lead to blocking, where a long-running task prevents subsequent tasks from starting.

-Asynchronous (Async): In asynchronous programming, tasks can be performed concurrently. A task can start before the previous one finishes, allowing for non-blocking operations. This is particularly useful for tasks like network requests, file I/O, and timers.
*/

// Synchronous Example:
console.log("Start");
console.log("Middle");
console.log("End");

// Asynchronous Example:

console.log("Start");
setTimeout(() => {
  console.log("Middle");
}, 1000);
console.log("End");

/*
  Output:

  Start
  End
  Middle
*/

/*
3. Focus on async/await
-async/await: Introduced in ES2017, `async` and `await` provide a way to write asynchronous code that looks and behaves like synchronous code. This makes it easier to read and maintain.

  -async: The `async` keyword is used to declare an asynchronous function. It ensures that the function returns a promise.
  -await: The `await` keyword is used to pause the execution of an `async` function until a promise is resolved or rejected.
*/
// Example:

async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();

/*
In this example, `fetchData` is an asynchronous function that fetches data from an API. The `await` keyword pauses the function execution until the `fetch` promise is resolved, making the code easier to read and understand compared to traditional promise chaining.

### Summary
Asynchronous programming in JavaScript allows for non-blocking operations, improving performance and responsiveness. The `async` and `await` keywords provide a cleaner and more readable way to handle asynchronous code compared to traditional callbacks and promises. 
*/
