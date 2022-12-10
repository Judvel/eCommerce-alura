function valid(input) {
  const inputType = input.dataset.tipo;
  if (input.validity.valid) {
    input.parentElement.querySelector(".message--error").textContent = "";
  } else {
    input.parentElement.querySelector(".message--error").textContent =
      showMessageError(inputType, input);
  }
}

const typeOfError = ["valueMissing", "patternMismatch", 'typeMismatch'];

const errorMessage = {
  name: {
    valueMissing: "Este campo no puede estar vacio",
  },
  message: {
    valueMissing: "Este campo no puede estar vacio",
    patternMismatch: "El campo puede debe contener entre 10 a 120 caracteres",
  },
  password: {
    valueMissing: 'Este campo no puede estar vacio',
    patternMismatch: 'La contraseña debe tener al menos 6 a 12 caracteres, debe contener al menos una mayuscula y no puede tener simbolos'
  },
  email: {
    valueMissing: 'Este campo no puede estar vacio',
    typeMismatch: 'El email no es correcto'
  }
};

function showMessageError(inputType, input) {
  let message = "";
  typeOfError.forEach((err) => {
    if (input.validity[err]) {
      message = errorMessage[inputType][err];
    }
  });
  return message;
}

export { valid };
