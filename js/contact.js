const name = document.getElementById("name");
const company = document.getElementById("company");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const submitButton = document.getElementById("submitButton");

// numberInput.addEventListener("input", () => {
//   if (numberInput.value.match(/^\d{7}$/)) {
//     submitButton.disabled = false;
//   }
//   else {
//     submitButton.disabled = true;
//   }
// });

function submit() {
    alert("Called");
    if (name.value.length != 0 && email.value.length != 0 && message.value.length != 0) {
        submitButton.disabled = false;
    }
    else {
        submitButton.disabled = true;
    }
}