document.addEventListener('DOMContentLoaded',() => {

    document.querySelectorAll('.moodBtn').forEach(button => {
        button.addEventListener('click', () => {
            const moodText = button.closest('.flex-item').querySelector('.mood-text');
            if (moodText) {
                moodText.classList.toggle('hidden');
            }
        });
    });

    document.querySelectorAll('.portfolioBtn').forEach(button => {
        button.addEventListener('click', () => {
            const portfolioText = button.closest('.flex-item').querySelector('.portfolio-text');
            if (portfolioText) {
                portfolioText.classList.toggle('hidden');
            }
        });
    });
    
});