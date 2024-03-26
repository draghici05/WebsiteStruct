document.addEventListener("DOMContentLoaded", function() {
    var accountPage = document.querySelector(".account-page");
    var loginPage = document.getElementById("loginPage");

    accountPage.addEventListener("click", function(event) {
        event.preventDefault();
        loginPage.style.display = "block";
    });
}); 