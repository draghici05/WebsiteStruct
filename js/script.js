 document.addEventListener("DOMContentLoaded", function() {
    var accountPage = document.querySelector(".account-page");
    var loginPage = document.getElementById("loginPage");

    accountPage.addEventListener("click", function(event) {
        event.preventDefault();
        loginPage.style.display = "block";
    });
});  


  document.addEventListener("DOMContentLoaded", function() {
    var closeButton = document.querySelector(".close-button");
    var FormContainer = document.querySelector(".form-container");

    closeButton.addEventListener("click", function() {
        FormContainer.style.display = "none"; 
    });
});
