let tarea = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");
let deleteBtn = document.getElementById("eliminarTarea");
let taskSelected;

addTaskBtn.addEventListener("click", function () {
  if (tarea.value.trim() !== "") {
    taskList.innerHTML += `
      <li class="task-item d-flex justify-content-between align-items-center">
        ${tarea.value}
        <button class="btn btn-warning mark-important">⭐</button>
      </li>`;
    tarea.value = "";
  }
});

taskList.addEventListener("click", (event) => {
  taskSelected = event.target;

  if (taskSelected.classList.contains("mark-important")) {
    let taskItem = taskSelected.parentElement;

    taskItem.classList.toggle("important");

    if (taskItem.classList.contains("important")) {
      taskSelected.textContent = "⭐";
    } else {
      taskSelected.textContent = "☆";
    }
  }

  if (taskSelected.classList.contains("task-item")) {
    taskSelected.classList.toggle("completed");
  }
});

deleteBtn.addEventListener("click", (event) => {
  if (!!taskSelected) {
    taskSelected.remove();
  } else {
    event.preventDefault();
  }
});
