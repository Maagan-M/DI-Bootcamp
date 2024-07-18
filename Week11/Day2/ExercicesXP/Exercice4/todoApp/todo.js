// todo.js

class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({ task, completed: false });
    }

    markTaskComplete(task) {
        const foundTask = this.tasks.find(t => t.task === task);
        if (foundTask) {
            foundTask.completed = true;
        }
    }

    listAllTasks() {
        this.tasks.forEach((task, index) => {
            console.log(`${index + 1}. [${task.completed ? 'x' : ' '}] ${task.task}`);
        });
    }
}

export default TodoList;
