document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();

        // Check if the input is not empty
        if (taskText !== "") {
            // Create new list item (li) element
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create a remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.className = 'remove-btn';

            // Set an onclick event to remove the task
            removeButton.onclick = function() {
                taskList.removeChild(li);
            };

            // Append the remove button to the li element
            li.appendChild(removeButton);

            // Append the li element to the task list
            taskList.appendChild(li);

            // Clear the task input field
            taskInput.value = "";
        } else {
            // Alert if the input field is empty
            alert("Please enter a task.");
        }
    }

    // Attach event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Attach event listener for the 'Enter' key on the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
