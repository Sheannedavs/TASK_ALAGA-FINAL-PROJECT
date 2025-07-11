// To-do List Function
const addListBtn = document.getElementById('add-list-btn');
const deleteAllBtn = document.getElementById('delete-all-btn');
const deleteSelectedBtn = document.getElementById('delete-selected-btn');
const todoListContainer = document.getElementById('todo-list-container');
const taskInput = document.getElementById('task-input');

addListBtn.addEventListener('click', () => {
    const taskName = taskInput.value.trim();

    if (taskName === "") {
        alert("Please enter a task name.");
        return;
    }

    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    const taskText = document.createElement('span');
    taskText.innerText = taskName;

    const statusIcon = document.createElement('span');
    statusIcon.classList.add('status-icon');
    statusIcon.innerText = '✖';

    todoItem.appendChild(taskText);
    todoItem.appendChild(statusIcon);

    todoItem.addEventListener('click', () => {
        const isDone = todoItem.classList.toggle('done');
        statusIcon.innerText = isDone ? '✔' : '✖';
    });

    todoListContainer.appendChild(todoItem);

    taskInput.value = ""; 
});

deleteAllBtn.addEventListener('click', () => {
    if (confirm("Are you sure you want to delete all tasks?")) {
        todoListContainer.innerHTML = "";
    }
});

deleteSelectedBtn.addEventListener('click', () => {
    const allTasks = document.querySelectorAll('.todo-item.done');

    if (allTasks.length === 0) {
        alert("No completed tasks to delete.");
        return;
    }

    allTasks.forEach(task => task.remove());
});


// End of To-do List Function

// High Contrast Settings Function
const contrastBtn = document.getElementById('high-contrast-btn');
const body = document.body;

contrastBtn.addEventListener('click', () => {
    body.classList.toggle('high-contrast');
});

// End of High Contrast Settings Function

