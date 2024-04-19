document.addEventListener("DOMContentLoaded", function() {
    var accountLink = document.querySelector(".account-link");
    var loginForm = document.getElementById("loginForm");

    accountLink.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.style.display = "block";
    });
});
