const userName = document.getElementById("login-form");
const loginBtn = document.getElementById("login-form-submit");
const errorMsg = document.getElementById("login-error-msg");

loginBtn.addEventListener('click', e => {
    let attempts = 0;
    e.preventDefault();
    const username = userName.username.value;
    const pwd = userName.password.value;

    if (username === "user" && pwd === "1234") {
        alert("You have successfully logged in.");
        attempts = 0;
        window.location = 'https://stackblitz.com/';
        username = '';
        pwd = '';
    } else {
        alert('Wrong username or password!');
        attempts++;
        if (attempts > 3) {
            alert('Access denied.');
        }
    }
});