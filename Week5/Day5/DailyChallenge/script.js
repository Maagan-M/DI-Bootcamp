const tasks = [];
const listTasks = document.querySelector('.listTasks');
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');

function addTask(event) {
  event.preventDefault();

  if (taskInput.value.trim() === '') {
    return;
  }

  const task = {
    task_id: tasks.length,
    text: taskInput.value,
    done: false,
  };

  tasks.push(task);
  renderTasks();
  taskInput.value = '';
}

function renderTasks() {
  listTasks.innerHTML = '';

  tasks.forEach((task) => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    const taskCheckbox = document.createElement('input');
    taskCheckbox.setAttribute('type', 'checkbox');
    taskCheckbox.classList.add('task-checkbox');
    taskCheckbox.checked = task.done;
    taskCheckbox.addEventListener('change', () => doneTask(task.task_id));

    const taskText = document.createElement('span');
    taskText.classList.add('task-text');
    taskText.textContent = task.text;

    const taskDelete = document.createElement('i');
    taskDelete.classList.add('fas', 'fa-times', 'task-delete');
    taskDelete.setAttribute('data-task-id', task.task_id);
    taskDelete.addEventListener('click', () => deleteTask(task.task_id));

    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(taskDelete);

    listTasks.appendChild(taskItem);
  });
}

function doneTask(taskId) {
  const task = tasks.find((t) => t.task_id === taskId);

  if (task) {
    task.done = !task.done;
    renderTasks();
  }
}

function deleteTask(taskId) {
  const taskIndex = tasks.findIndex((t) => t.task_id === taskId);

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    renderTasks();
  }
}

taskForm.addEventListener('submit', addTask);
renderTasks();

const clearButton = document.getElementById('clear-button');

function clearTasks() {
  tasks.length = 0;
  renderTasks();
}

clearButton.addEventListener('click', clearTasks);

