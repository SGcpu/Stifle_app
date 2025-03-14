// ghost_mode.js
document.getElementById('normal-mode').addEventListener('click', () => {
    const notifications = document.querySelectorAll('.notification');
    notifications.forEach(notification => notification.classList.remove('hidden'));
    alert('Switched to Normal Mode! All notifications are visible.');
});

document.getElementById('ghost-mode').addEventListener('click', () => {
    const notifications = document.querySelectorAll('.notification');
    notifications.forEach(notification => {
        if (notification.dataset.type !== 'work') {
            notification.classList.add('hidden');
        }
    });
    alert('Switched to Ghost Mode! Only work-related notifications are visible.');
});
