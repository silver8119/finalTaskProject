const taskManager = new TaskManager(0);

taskManager.load();

taskManager.render();

const newTaskForm = document.querySelector('#newTaskForm');

newTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newTaskNameInput = document.querySelector('#newTaskNameInput');
    const name = newTaskNameInput.value;
    const newTaskDescription = document.querySelector('#newTaskDescription');
    const description = newTaskDescription.value;
    const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
    const assignedTo = newTaskAssignedTo.value;
    const newTaskDueDate = document.querySelector('#newTaskDueDate');
    const dueDate = newTaskDueDate.value;


    taskManager.addTask(name, description, assignedTo, dueDate);

    taskManager.save();

    taskManager.render();

    newTaskNameInput.value = '';
    newTaskDescription.value = '';
    newTaskAssignedTo.value = '';
    newTaskDueDate.value = '';
});

const tasksList = document.querySelector('#tasksList');

tasksList.addEventListener('click', (event) => {
    if (event.target.classList.contains('done-button')) {
        const parentTask = event.target.parentElement.parentElement;

        const taskId = Number(parentTask.dataset.taskId);

        const task = taskManager.getTaskById(taskId);

        task.status = 'DONE';

        taskManager.save();

        taskManager.render();
    }

    // Check if a "Delete" button was clicked
    if (event.target.classList.contains('delete-button')) {
        
        const parentTask = event.target.parentElement.parentElement;

        
        const taskId = Number(parentTask.dataset.taskId);

        
        taskManager.deleteTask(taskId);

        
        taskManager.save();

        
        taskManager.render();
    }
});
