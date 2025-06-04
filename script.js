function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');

    if (email === '') {
        alert('Please enter your email.');
        return false; // Prevent form submission
    }

    if (password === '') {
        alert('Please enter your password.');
        return false; // Prevent form submission
    }

    if (password.length < 8) {
        passwordError.classList.remove('hidden');
        return false;
    } else {
        passwordError.classList.add('hidden');
        // Redirect to index.html after successful validation
        window.location.href = 'index.html';
        return false;
    }
}

function validateSignupForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordError = document.getElementById('passwordError');

    if (password.length < 8 || password !== confirmPassword) {
        passwordError.classList.remove('hidden');
        return false;
    } else {
        passwordError.classList.add('hidden');
        window.location.href = 'login.html';
        return false;
    }
}

// Mobile menu toggle with animation
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('mobile-menu-enter');
            setTimeout(() => mobileMenu.classList.remove('mobile-menu-enter'), 400);
        } else {
            mobileMenu.classList.add('hidden');
        }
    });
}

// Hide login/signup if user is logged in
const authButtons = document.getElementById('authButtons');
if (localStorage.getItem('isLoggedIn') === 'true' && authButtons) {
    authButtons.style.display = 'none';
}

localStorage.setItem('isLoggedIn', 'true');
