var document, window;

var inputName = document.getElementById("inputName");
var inputEmail = document.getElementById("inputEmail");
var inputPhone = document.getElementById("inputPhone");
var inputCompany = document.getElementById("inputCompany");
var inputMessage = document.getElementById("inputMessage");

function validate() {
    if (validateName() && validateEmail() && validateMessage()) {
        buildNewPage();
    }
}

function validateName() {
    if (inputName.value != "") {
        return true;
    }
    window.alert("Please enter your name");
    return false;
}

function validateEmail() {
    if (inputEmail.value != "" && inputEmail.value.match(/@/)) {
        return true;
    }
    window.alert("Please enter a valid email");
    return false;
}

function validateMessage() {
    if (inputMessage.value != "") {
        return true;
    }
    window.alert("Please enter your message");
    return false;
}

function buildNewPage() {
    window.alert("Valid");
}