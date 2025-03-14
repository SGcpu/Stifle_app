document.addEventListener('DOMContentLoaded', () => {
    let timerInterval;
    let seconds = 0;

    const taskInput = document.getElementById('taskInput');
    const startTaskButton = document.getElementById('startTaskButton');
    const endTaskButton = document.getElementById('endTaskButton');
    const focusTimer = document.getElementById('focusTimer');
    const taskLog = document.getElementById('taskLog');

    function formatTime(s) {
        const hrs = Math.floor(s / 3600).toString().padStart(2, '0');
        const mins = Math.floor((s % 3600) / 60).toString().padStart(2, '0');
        const secs = (s % 60).toString().padStart(2, '0');
        return `${hrs}:${mins}:${secs}`;
    }

    startTaskButton.addEventListener('click', () => {
        const task = taskInput.value.trim();
        if (task === '') {
            alert('Please enter a task!');
            return;
        }

        taskInput.disabled = true;
        startTaskButton.disabled = true;
        endTaskButton.disabled = false;

        seconds = 0;
        focusTimer.textContent = formatTime(seconds);

        timerInterval = setInterval(() => {
            seconds++;
            focusTimer.textContent = formatTime(seconds);
        }, 1000);
    });

    endTaskButton.addEventListener('click', () => {
        clearInterval(timerInterval);

        const task = taskInput.value.trim();
        const taskDuration = formatTime(seconds);

        const taskItem = document.createElement('li');
        taskItem.textContent = `${task} - ${taskDuration}`;
        taskLog.appendChild(taskItem);

        taskInput.value = '';
        taskInput.disabled = false;
        startTaskButton.disabled = false;
        endTaskButton.disabled = true;
        focusTimer.textContent = '00:00:00';
    });
});
