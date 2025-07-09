const addListBtn = document.getElementById('add-list-btn');
const deleteAllBtn = document.getElementById('delete-all-btn');
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

    // Toggle task status when clicked
    todoItem.addEventListener('click', () => {
        const isDone = todoItem.classList.toggle('done');
        statusIcon.innerText = isDone ? '✔' : '✖';
    });

    todoListContainer.appendChild(todoItem);

    taskInput.value = ""; // clear input
});

deleteAllBtn.addEventListener('click', () => {
    if (confirm("Are you sure you want to delete all tasks?")) {
        todoListContainer.innerHTML = "";
    }
});
