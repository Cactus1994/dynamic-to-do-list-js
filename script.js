// Wait for the DOM content to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if the task text is not empty
        if (taskText !== "") {
            // Create a new li element
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create a new button for removing the task
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';

            // Add click event listener to remove the task
            removeButton.addEventListener('click', () => {
                taskList.removeChild(li);
            });

            // Append the remove button to the li element
            li.appendChild(removeButton);

            // Append the li to the task list
            taskList.appendChild(li);

            // Clear the task input field
            taskInput.value = '';
        } else {
            // Alert user if the input is empty
            alert('Please enter a task.');
        }
    }

    // Add event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Add event listener to allow adding tasks with the Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
