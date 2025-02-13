document.querySelector("form").addEventListener("submit", addTask);

function addTask(event) {
  event.preventDefault();
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();
  if (taskText === "") return;

  let li = document.createElement("li");
  li.innerHTML = `${taskText} <button class="edit" onclick="editTask(this)">Edit</button> <button class="delete" onclick="deleteTask(this)">Delete</button>`;
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

function editTask(button) {
  let newText = prompt(
    "Edit your task:",
    button.parentElement.firstChild.textContent.trim(),
  );
  if (newText !== null && newText.trim() !== "") {
    button.parentElement.firstChild.textContent = newText;
  }
}

function deleteTask(button) {
  button.parentElement.remove();
}
