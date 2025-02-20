// Select the form element from the DOM
const form = document.querySelector("form");

// Select the unordered list element with the id 'taskList' from the DOM
const ul = document.querySelector("#taskList");

// Add an event listener to the form to handle form submission
form.addEventListener("submit", function (e) {
  // Prevent the form from reloading the page
  e.preventDefault();

  // Grabs the input element
  let taskInput = document.querySelector("#taskInput");

  // Extracts the input value and removes any extra whitespace around it
  let taskText = taskInput.value.trim();

  // If the taskText is empty, stop the function early
  if (taskText === "") return; // if (!taskText) return

  // Creates a new list item (li) element
  const li = document.createElement("li");

  // Set the inner HTML of the list item with the task text and action buttons
  li.innerHTML += `
  <span>${taskText}</span>
  <div>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
  </div>
  `;

  // Append the new list item to the unordered list
  ul.append(li);

  // Clear the input field
  taskInput.value = "";
});

// Add an event listener to the unordered list to handle click events
ul.addEventListener("click", (event) => {
  // Get the element that was clicked
  const el = event.target;

  // If the clicked element has the class 'delete', remove the task
  if (el.classList.contains("delete")) {
    el.parentElement.parentElement.remove();
  }
  // If the clicked element has the class 'edit', edit the task
  else if (el.classList.contains("edit")) {
    editTask(el);
  }
});

// Function to edit a task
function editTask(button) {
  // Get the span element containing the task text
  const spanEl = button.parentElement.previousElementSibling;

  // Prompt the user to edit the task text
  let newText = prompt("Edit your task:", spanEl.textContent);

  // If the new text is not empty, update the task text
  if (newText) {
    spanEl.textContent = newText.trim();
  }
}
