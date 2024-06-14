// GET THE FORM AND ERROR MESSAGE ELEMENTS
const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message')
// ADD AN EVENT LISTENER TO THE FORM
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // PREVENT THE DEFAULT FORM SUBMISSION BEHAVIOR

    // GET THE USERNAME AND PASSWORD VALUES
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // VALIDATE THE USERNAME AND PASSWORD
if (username === 'admin' && password === 'wisdombalicholo') {
    // LOGIN SUCCESSFUL, REDIRECT TO HOME PAGE
    window.location.href = 'home.html';
} else {
    // LOGIN FAILED,DISPLAY ERROR MESSAGE
    errorMessage.innerHTML = 'Invalid username or password ❌';
}
});

// SHOW PASSWORD TOGGLE
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const showPasswordCheckbox = document.getElementById('show-password');

    if (showPasswordCheckbox.checked) {
        passwordInput.type = 'text'
    } else {
        passwordInput.type = 'password'
    }
}