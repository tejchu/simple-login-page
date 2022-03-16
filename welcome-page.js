const loginForm = document.getElementById("login-form");
const loginButtonAdmin = document.getElementById("login-page-admin");
const loginButtonUser = document.getElementById("login-page-user");


loginButtonAdmin.addEventListener("click", (e) => {
    window.location.href = "login-page-admin.html";
})
loginButtonUser.addEventListener("click", (e) => {
    window.location.href = "login-page-user.html";
})