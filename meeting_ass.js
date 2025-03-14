let tasks = [];
let meetingNotes = "";

// Function to save meeting notes
function saveNotes() {
    meetingNotes = document.getElementById('meetingNotes').value;
    alert("Meeting notes saved!");
}

// Function to add task
function addTask() {
    const taskDescription = document.getElementById('taskInput').value;
    const taskDeadline = document.getElementById('taskDeadline').value;
    if (taskDescription.trim() === "" || taskDeadline === "") {
        alert("Please provide both task description and deadline.");
        return;
    }
    tasks.push({ taskDescription, taskDeadline });
    displayTasks();
}

// Function to display tasks
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = `${task.taskDescription} - Due: ${task.taskDeadline}`;
        taskList.appendChild(li);
    });
}

// Voice input functionality using Web Speech API
function startVoiceInput() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function(event) {
        const voiceInput = event.results[0][0].transcript;
        document.getElementById('voiceResult').textContent = "Voice input: " + voiceInput;
        document.getElementById('meetingNotes').value = voiceInput;
    };

    recognition.onerror = function(event) {
        alert("Error occurred in voice recognition: " + event.error);
    };
}

// Function to set meeting reminder
function setReminder() {
    const reminderTime = document.getElementById('meetingReminder').value;
    if (!reminderTime) {
        alert("Please set a valid reminder time.");
        return;
    }
    alert(`Meeting reminder set for: ${reminderTime}`);
}

// Function to generate meeting summary
function generateSummary() {
    const summary = `Meeting Summary:\n${meetingNotes || "No notes yet."}`;
    document.getElementById('meetingSummary').textContent = summary;
}
