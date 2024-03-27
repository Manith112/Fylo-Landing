function validateEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
// first email 
const submit = document.getElementById("submit");
const first = document.getElementById("first-email")
submit.addEventListener("click", function() {
    var email = first.value;
    var validationMessage = document.getElementById("invalid");

    if (validateEmail(email)) {
        validationMessage.textContent = "success";
        first.style.border = "1px solid green"
        validationMessage.style.color = "green"
        // Here you can proceed with further actions like submitting the form
    } else {
        validationMessage.style.color = "red"
        validationMessage.textContent = "Please check your email";
        first.style.border = "1px solid red"
        // Here you can prompt the user to enter a valid email address
    }
});

// second email 
const secondSubmit = document.getElementById("second-submit");
const second = document.getElementById("second-email")
secondSubmit.addEventListener("click", function() {
    var email = second.value;
    var validationMessage = document.getElementById("second-invalid");

    if (validateEmail(email)) {
        validationMessage.textContent = "success";
        second.style.border = "1px solid green"
        validationMessage.style.color = "green"
        // Here you can proceed with further actions like submitting the form
    } else {
        validationMessage.style.color = "red"
        validationMessage.textContent = "Please check your email";
        second.style.border = "1px solid red"
        // Here you can prompt the user to enter a valid email address
    }
});

