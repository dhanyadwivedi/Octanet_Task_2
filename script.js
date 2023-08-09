const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        <input type="checkbox">
        <span>${taskText}</span>
        <button class="deleteButton">Delete</button>
    `;
    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();

    const deleteButton = li.querySelector(".deleteButton");
    deleteButton.addEventListener("click", () => {
        li.remove();
    });
}

