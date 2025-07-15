document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const comment = document.getElementById('comment');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const commentError = document.getElementById('commentError');

    const success = document.getElementById('successMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let isValid = true;
        
        nameError.textContent = '';
        emailError.textContent = '';
        commentError.textContent = '';
        success.textContent = '';

        if (name.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            isValid = false;
        }

        if (email.value.trim() === '') {
            emailError.textContent = 'Email is required.';
            isValid = false;
        }

        if (comment.value.trim() === '') {
            commentError.textContent = 'Comment is required.';
            isValid = false;
        }
    
        if (isValid) {
            success.textContent = 'Thank you! Your comment has been submitted.';
        }
    });
});
