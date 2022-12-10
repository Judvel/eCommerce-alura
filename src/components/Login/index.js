import { userRegistered } from "../../service/client-service.js";
import { valid } from "../formValidity.js";
const API = "http://localhost:3000/perfil";

const loginInputs = document.querySelectorAll(".input-login");

loginInputs.forEach((input) => {
  input.addEventListener("blur", (input) => valid(input.target));
});

const enterLoginButton = document.querySelector("#login-enter");


enterLoginButton.addEventListener("click", (event) => {
  event.preventDefault();
  userRegistered(API);
});
