async function userRegistered(urlAPI) {
  const emailInput = document.querySelector("#email").value;
  const passwordInput = document.querySelector("#password").value;
  const response = await fetch(urlAPI);
  const data = await response.json();

  if (data[0].email == emailInput && data[0].password == passwordInput) {
    window.location.href = "./login.html";
    console.log('Success')
  } else {
    console.log(data[0].email, data[0].password, emailInput, passwordInput);
    console.log("usuario incorrecto");
  }
}

export { userRegistered };