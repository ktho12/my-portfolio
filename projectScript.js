document.addEventListener('DOMContentLoaded',() => {
     const toggleBtn = document.getElementById('toggle-dark');
    const body = document.body;

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
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }

    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});
