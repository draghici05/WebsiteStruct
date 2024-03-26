 document.addEventListener("DOMContentLoaded", function() {
    var accountPage = document.querySelector(".account-page");
    var loginPage = document.getElementById("loginPage");

    accountPage.addEventListener("click", function(event) {
        event.preventDefault();
        loginPage.style.display = "block";
    });
});  

function openForm() {
    document.getElementById("form").classList.toggle("form-show");
    document.getElementById("form-bg").style.display = "block";
  }
  function closeForm() {
    document.getElementById("form").classList.toggle("form-show");
    document.getElementById("form-bg").style.display = "none";
  }