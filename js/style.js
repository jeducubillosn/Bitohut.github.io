function updateProgress(progressPercentage) {
    const progressBar = document.querySelector('.progress');
    progressBar.style.width = `${progressPercentage}%`; // Corrección aquí
}

function setBodyClassByLevel(level) {
    document.body.className = '';
    document.body.classList.add(`nivel-${level}`); // Corrección aquí
}

function initializeUI() {
    updateProgress(0);
}

document.addEventListener('DOMContentLoaded', initializeUI);
