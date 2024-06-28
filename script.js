document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.spiel-container');
    const scrollLeftButton = document.getElementById('scroll-left');
    const scrollRightButton = document.getElementById('scroll-right');

    const scrollAmount = 1000;

    function updateButtonsVisibility() {
        scrollLeftButton.style.display = container.scrollLeft === 0 ? 'none' : 'block';
        scrollRightButton.style.display = container.scrollLeft >= container.scrollWidth - container.clientWidth ? 'none' : 'block';
    }

    scrollLeftButton.addEventListener('click', function() {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
        updateButtonsVisibility();
    });

    scrollRightButton.addEventListener('click', function() {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
        updateButtonsVisibility();
    });

    container.addEventListener('scroll', updateButtonsVisibility);

    // Initial update on page load
    updateButtonsVisibility();
});
