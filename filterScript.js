document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const games = document.querySelectorAll('.spiel');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            games.forEach(game => {
                const categories = game.getAttribute('data-category').split(',');
                
                if (category === 'all' || categories.includes(category)) {
                    game.style.display = 'block';
                } else {
                    game.style.display = 'none';
                }
            });
        });
    });
});