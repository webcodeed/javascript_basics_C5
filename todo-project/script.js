document.querySelector("form").addEventListener("submit", addTask);

function addTask(event) {
  event.preventDefault();
  let taskInput = document.querySelector("#taskInput");
  let taskText = taskInput.value.trim();
  if (taskText === "") return;

  let li = document.createElement("li");
  li.innerHTML = `<span>${taskText}</span> <div><button class="edit">Edit</button> <button class="delete">Delete</button></div>`;
  document.querySelector("#taskList").appendChild(li);
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

document.querySelector("#taskList").addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains("edit")) {
    editTask(el);
  } else if (el.classList.contains("delete")) {
    deleteTask(el);
  }
});
