// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load existing tasks from Local Storage
    loadTasks();

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            addTask(taskText, false); // false = don't save again to avoid duplication
        });
    }

    // Function to save tasks to Local Storage
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('#task-list li').forEach(li => {
            // li.firstChild.nodeValue gets the text before the remove button
            tasks.push(li.firstChild.nodeValue.trim());
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to add a new task
    function addTask(taskText, save = true) {
        // If called from user input, get and trim value
        if (typeof taskText !== 'string') {
            taskText = taskInput.value.trim();
        }

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create list item for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        // Remove task when button is clicked
        removeButton.onclick = () => {
            taskList.removeChild(li);
            saveTasks(); // Update local storage after removal
        };

        // Append remove button to list item
        li.appendChild(removeButton);

        // Append list item to the task list
        taskList.appendChild(li);

        // Save to local storage if needed
        if (save) {
            saveTasks();
        }

        // Clear the input field if the task was added manually
        if (typeof taskText !== 'string') {
            taskInput.value = "";
        }
    }

    // Event listener for button click
    addButton.addEventListener('click', () => addTask());

    // Event listener for pressing Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
