const loginForm = document.querySelector('#login-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const errMsg = document.querySelector('.msg');
//const loginForm = document.querySelector('login-form');

loginForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
     console.log('clicked');
}