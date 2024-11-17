let tarea = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");
let deleteBtn = document.getElementById("eliminarTarea");
let taskSelected;

// Eventos
addTaskBtn.addEventListener("click", function () {
  if (tarea.value.trim() !== "") {
    taskList.innerHTML += `<li class="task-item">${tarea.value}</li>`;
    tarea.value = ""; // Limpiar el input
  }
});

taskList.addEventListener("click", (event) => {
  // Quitar bordes de todas las tareas
  for (const item of taskList.children) {
    item.style.removeProperty("border");
  }

  // Seleccionar la tarea clickeada
  taskSelected = event.target;

  // Alternar tarea como completada
  if (taskSelected.classList.contains("task-item")) {
    taskSelected.classList.toggle("completed");
  }

  taskSelected.style.border = "1px solid green";
});

deleteBtn.addEventListener("click", (event) => {
  if (!!taskSelected) {
    taskSelected.remove();
  } else {
    event.preventDefault();
  }
});
