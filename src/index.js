import { valid } from "./components/formValidity.js";
import { redirConsoles, redirLogin } from "./components/redirection.js";

const loginHome = document.querySelector("#login-home");
const seeConsoles = document.querySelector("#see-consoles");

loginHome.addEventListener("click", redirLogin);
seeConsoles.addEventListener("click", redirConsoles);


// ---------- Form Validity -------------------

const inputForm = document.querySelectorAll(".form-input");

inputForm.forEach((input) => {
  input.addEventListener("blur", (input) => valid(input.target));
});

const sendMessageButton = document.querySelector('#send-message');

sendMessageButton.addEventListener('click', (event) => {
    event.preventDefault();
})
