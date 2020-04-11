const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const email = document.getElementById('email');
const form = document.getElementById('form');
const button = document.querySelector('button');

form.addEventListener('submit', (e) => {
    e.preventDefault();
})

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.classList = 'form-control error';
    formControl.querySelector('small').innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList = 'form-control success';
}

function isValidEmail(email) {

}
if (username.value === '') {
    showError(username, 'unsername is required')
}
else {
    showSuccess(username)
}

if (email.value === '')
    showError(email, 'please enter a valid email')
else
    showSuccess(email)
if (password.value === '')
    showError(password, 'please enter a valid password')
else
    showSuccess(email)
if (password2.value === '')
    showError(password2, 'password does not match')
else
    showSuccess(email)
