let confirmPassword = document.querySelector(".confirm-pass-input");




confirmPassword.addEventListener("input", () => {
    let password = document.querySelector(".password-input");

    checkPasswordsMatch();


})

function checkPasswordsMatch() {
    // Checks original password is valid and then checks if confirm password matches
    if (confirmPassword.value === password.value && password.validity.valid === true) {
        confirmPassword.style.borderColor = "#289f4a";
    } else {
        confirmPassword.style.borderColor = "#d75151";
    }


}

function validatePassword() {
    let password = document.getElementById("password");
    let confirmPass = document.getElementById("confirm-pass");

    if (password.value !== confirmPass.value) {
        confirmPass.setCustomValidity("Passwords must match.");
    } else {
        confirmPass.setCustomValidity('');
    }
}

