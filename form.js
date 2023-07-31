// The main variables
let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

//The function to validate the name section
function validateName() {
    let name = document.getElementById("contact-name").value;

    if (name.length == 0) {
        nameError.innerHTML = "A name is required!";
        return false;
    }
    if (!name.match (/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Enter your full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

//The function to validate the phone section
function validatePhone() {
    let phone = document.getElementById("contact-phone").value; 

    if (phone.length == 0) {
        phoneError.innerHTML = 'A phone number is required';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'A phone number needs to be 10 digits';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'A phone number must be digits only';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

//The function to validate the email section
function validateEmail() {
    let email = document.getElementById("contact-email").value;

    if (email.length == 0) {
        emailError.innerHTML = 'An email address is required';
        return false;
    }
    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        emailError.innerHTML = 'Email is invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

//The function to validate the message section
function validateMessage() {
    let message = document.getElementById("contact-message").value;
    let required = 25;
    let remaining = required - message.length;

    if (remaining > 0) {
        messageError.innerHTML = remaining + 'more characters needed';
        return false
    }
    messageError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}


//The function to validate the form and all elements and timeout for error message
function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error(s) to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
}

