// app.js

import TodoList from './todo.js';

// Create a new instance of TodoList
const todoList = new TodoList();

// Add tasks
todoList.addTask('Complete homework');
todoList.addTask('Write report');
todoList.addTask('Prepare presentation');

// Mark task as complete
todoList.markTaskComplete('Write report');

// List all tasks
console.log('Tasks:');
todoList.listAllTasks();
