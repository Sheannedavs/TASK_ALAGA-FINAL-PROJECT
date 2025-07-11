window.addEventListener('DOMContentLoaded', () => {
    // To-do List
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
        const doneTasks = document.querySelectorAll('.todo-item.done');
        if (doneTasks.length === 0) {
            alert("No completed tasks to delete.");
            return;
        }
        doneTasks.forEach(task => task.remove());
    });

    // High Contrast
    const contrastBtn = document.getElementById('high-contrast-btn');
    contrastBtn.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });

    // Guardian and Support Button Actions
    const guardianBtn = document.getElementById('guardian-btn');
    const supportBtn = document.getElementById('support-btn');

    guardianBtn.addEventListener('click', () => {
        window.location.href = 'guardian.html';
    });

    supportBtn.addEventListener('click', () => {
        window.location.href = 'support.html';
    });

    // Dynamically add profile images
    function insertProfileImages() {
        const mainContent = document.querySelector('.main-content');
        if (!mainContent) return;

        const container = document.createElement('div');
        container.className = 'profile-gallery';

        const profiles = [
            { src: 'f9f2297a-2b46-4fb8-b2f9-dc1bd6c210a1.jpg', caption: 'Caregiver Profile' },
            { src: '19657ce1-80e2-42ff-ba08-b310d811b3e1.jpg', caption: 'Elderly Profile' }
        ];

        profiles.forEach(profile => {
            const card = document.createElement('div');
            card.className = 'profile-card';

            const img = document.createElement('img');
            img.src = profile.src;
            img.alt = profile.caption;

            const caption = document.createElement('p');
            caption.className = 'profile-caption';
            caption.textContent = profile.caption;

            card.appendChild(img);
            card.appendChild(caption);
            container.appendChild(card);
        });

        const todoContainer = document.getElementById('todo-list-container');
        mainContent.insertBefore(container, todoContainer);
    }

    insertProfileImages();
});

    function navigateTo(page) {
      window.location.href = page;
    }

    const emojiPicker = document.getElementById("emoji-picker");
    const latestEmoji = document.getElementById("latest-emoji");
    if (emojiPicker && latestEmoji) {
      emojiPicker.querySelectorAll("span").forEach((emoji) => {
        emoji.addEventListener("click", () => {
          latestEmoji.textContent = emoji.textContent;
        });
      });
    }
