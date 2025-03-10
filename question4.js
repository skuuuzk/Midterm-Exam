let task = [];

const taskForm =document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const tasklist = document.getElementById('task-list');

function renderTodos() {
    tasklist.innerHTML = ''; 
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `  
            <span>${todo}</span>
            <button onclick="editTodo(${index})">Edit</button>
            <button onclick="deleteTodo(${index})">Delete</button>
        `;
        tasklist.appendChild(li);
    });
}

// Function to add a new task
function addTask(event) {
    event.preventDefault(); // Prevent form submission 
    const newTask = taskInput.value.trim();
    if (newTask) {
        tasks.push(newTask);
        taskInput.value = ''; // Clear the input
        renderTasks();
    }     
}

// Function to edit a task 
function editTask(index) {
    const updateTask = prompt('Edit your task:', tasks[index]);
    if (updateTask !== null) {
        tasks[index] = updateTask.trim();
        renderTask();
    }
}

// Function to delete a task
function deleteTask(index) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks.splice(index, 1);
        renderTasks();
    }
}

// Event Listeners
taskForm.addEventListener('submit', addTask);

// Initial render 
renderTasks();