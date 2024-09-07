document.addEventListener('DOMContentLoaded', () => {
    const modeToggleButton = document.getElementById('modeToggle');
    const modeIcon = document.getElementById('modeIcon');
    const body = document.body;

    // Check for saved mode in localStorage
    const currentMode = localStorage.getItem('mode') || 'light';
    if (currentMode === 'dark') {
        body.classList.add('dark-mode');
        modeIcon.src = 'Ui-Elemente/ModeKnopfLight.png';
    } else {
        body.classList.remove('dark-mode');
        modeIcon.src = 'Ui-Elemente/ModeKnopfDark.png';
    }

    modeToggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            modeIcon.src = 'Ui-Elemente/ModeKnopfDark.png';
            localStorage.setItem('mode', 'light');
        } else {
            body.classList.add('dark-mode');
            modeIcon.src = 'Ui-Elemente/ModeKnopfLight.png';
            localStorage.setItem('mode', 'dark');
        }
    });
});