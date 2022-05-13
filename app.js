const form = document.getElementById("form")
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailRegex = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";

form.addEventListener("submit", e => {
    e.preventDefault();

    var fNameValue = fName.value.trim();
    var lNameValue = fName.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();

    if(fNameValue === "") {
        sendError(fName, "First Name cannot be empty");
    }
    else {
        sendSuccess(fName);
    }

    if(lNameValue === "") {
        sendError(lName, "Last Name cannot be empty");
    }
    else {
        sendSuccess(lName);
    }

    if(emailValue === "") {
        sendError(email, "Email cannot be empty");
    }
    else if(emailValue.match(emailRegex)) {
        sendError((email, "Looks like this is not an email"));
    }
    else {
        sendSuccess(email);
    }

    if(passwordValue === "") {
        sendError(password, "Password cannot be empty");
    }
    else {
        sendSuccess(password);
    }
})

function sendError(req, message) {
    const formValidation = req.parentElement;
    const span = formValidation.querySelector("span");

    span.innerText = message;
    req.className += "error";
    span.className += "error-text";

    if(req !== email && req !== password) {
        req.value = " ";
    }
    else if(req === password) {
        req.placeholder = "";
        req.value = "";
    }
    else {
        req.value = "email@example/com"
        req.style.color = "hsl(0, 100%, 74%)";
    }
}

function sendSuccess(req) {
    req.className += "success";
}
