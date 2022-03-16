const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    
    if (email.endsWith('@jacobs-university.de')) {
        alert("A link has been sent to your email address.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})