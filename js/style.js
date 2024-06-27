function updateProgress(progressPercentage) {
    const progressBar = document.querySelector('.progress');
    progressBar.style.width = `${progressPercentage}%`;
}

function setBodyClassByLevel(level) {
    document.body.className = '';
    document.body.classList.add(`nivel-${level}`);
}

function initializeUI() {
    updateProgress(0);
}

document.addEventListener('DOMContentLoaded', initializeUI);
