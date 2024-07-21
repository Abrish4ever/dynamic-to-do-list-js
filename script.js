document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Retrieve and trim the value from the task input field
        let taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText !== '') {
            // Create new <li> element
            let taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            // Create remove button
            let removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';

            // Add click event to remove button
            removeButton.onclick = function() {
                taskList.removeChild(taskItem);
            };

            // Append remove button to task item
            taskItem.appendChild(removeButton);

            // Append task item to task list
            taskList.appendChild(taskItem);

            // Clear the task input field
            taskInput.value = '';
        } else {
            // Alert user if taskText is empty
            alert('Please enter a task!');
        }
    }

    // Event listener for add button click
    addButton.addEventListener('click', addTask);

    // Event listener for enter key press in task input
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Invoke addTask function on DOMContentLoaded
    addTask();
});
