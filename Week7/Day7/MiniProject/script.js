document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.querySelector('.task-form');
    const taskList = document.getElementById('taskList');
    const taskChart = document.getElementById('taskChart').getContext('2d');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskName = document.getElementById('taskName').value;
        const taskDescription = document.getElementById('taskDescription').value;
        const taskStart = document.getElementById('taskStart').value;
        const taskEnd = document.getElementById('taskEnd').value;

        const task = {
            name: taskName,
            description: taskDescription,
            start: taskStart,
            end: taskEnd,
            isCompleted: false
        };

        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        taskForm.reset();
        displayTasks();
        displayChart();
    });

    const displayTasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        taskList.innerHTML = '';

        tasks.sort((a, b) => new Date(a.start) - new Date(b.start));

        tasks.forEach((task, index) => {
            const taskItem = document.createElement('div');
            taskItem.classList.add('task-item');

            const today = new Date();
            const endDate = new Date(task.end);

            if (task.isCompleted) {
                taskItem.classList.add('completed');
            } else if (today > endDate) {
                taskItem.classList.add('overdue');
            } else {
                taskItem.classList.add('uncompleted');
            }

            const remainingDays = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));

            taskItem.innerHTML = `
                <h3>${task.name}</h3>
                <p>Start: ${new Date(task.start).toLocaleString()}</p>
                <p>${remainingDays} days left to complete the task.</p>
                <button onclick="toggleTask(${index})">${task.isCompleted ? 'Mark as Uncompleted' : 'Mark as Completed'}</button>
                <button onclick="deleteTask(${index})">Delete</button>
                <button onclick="editTask(${index})">Edit</button>
                <div class="description">${task.description}</div>
            `;

            taskList.appendChild(taskItem);
        });
    };

    const displayChart = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const startOfWeek = new Date();
        startOfWeek.setHours(0, 0, 0, 0);
        startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(endOfWeek.getDate() + 6);

        const weekTasks = tasks.filter(task => {
            const startDate = new Date(task.start);
            return startDate >= startOfWeek && startDate <= endOfWeek;
        });

        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const taskCounts = new Array(7).fill(0);

        weekTasks.forEach(task => {
            const startDate = new Date(task.start);
            const day = startDate.getDay();
            taskCounts[day]++;
        });

        new Chart(taskChart, {
            type: 'bar',
            data: {
                labels: days,
                datasets: [{
                    label: 'Number of Tasks',
                    data: taskCounts,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    };

    window.toggleTask = (index) => {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks[index].isCompleted = !tasks[index].isCompleted;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
        displayChart();
    };

    window.deleteTask = (index) => {
        if (confirm('Are you sure you want to delete this task?')) {
            let tasks = JSON.parse(localStorage.getItem('tasks'));
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            displayTasks();
            displayChart();
        }
    };

    window.editTask = (index) => {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        const task = tasks[index];

        document.getElementById('taskName').value = task.name;
        document.getElementById('taskDescription').value = task.description;
        document.getElementById('taskStart').value = task.start;
        document.getElementById('taskEnd').value = task.end;

        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    displayTasks();
    displayChart();
});
