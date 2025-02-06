let tasks = [
    { description: "Task 1", priority: 1 },
    { description: "Task 2", priority: 0 },
    { description: "Task 3", priority: 1 },
];

const taskList = document.getElementById("task-list");
const addTaskBtn = document.getElementById("addTask");
const taskDescInput = document.getElementById("taskDesc");
const taskPriorityInput = document.getElementById("taskPriority");
const showImportantBtn = document.getElementById("showImportant");
const showNotImportantBtn = document.getElementById("showNotImportant");
const showAllBtn = document.getElementById("showAll");

// Function to display tasks
function displayTasks(taskArray) {
    taskList.innerHTML = ""; // Clear the list

    taskArray.forEach((task, index) => {
        const li = document.createElement("li");
        li.classList.add("task", task.priority === 1 ? "high" : "low");
        li.innerHTML =` ${task.description} <button onclick="removeTask(${index})">Remove</button>`;
        taskList.appendChild(li);
    });
}

// Add a new task
addTaskBtn.addEventListener("click", () => {
    const desc = taskDescInput.value.trim();
    const priority = parseInt(taskPriorityInput.value);

    if (desc) {
        tasks.push({ description: desc, priority: priority });
        taskDescInput.value = "";
        taskPriorityInput.value = "0";
        displayTasks(tasks);
    } else {
        alert("Please enter a task description.");
    }
});

// Remove a task
function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks(tasks);
}

// Show tasks based on filters
showImportantBtn.addEventListener("click", () => {
    displayTasks(tasks.filter(task => task.priority === 1));
});

showNotImportantBtn.addEventListener("click", () => {
    displayTasks(tasks.filter(task => task.priority === 0));
});

showAllBtn.addEventListener("click", () => {
    displayTasks(tasks);
});

// Initial render
displayTasks(tasks);