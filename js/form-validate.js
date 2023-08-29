

const inputs = document.querySelectorAll(".input-group__input");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});


function valida(input) {
    const tipoDeInput = input.dataset.tipo;

    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }

    if (input.validity.valid) {
        input.parentElement.classList.remove("input-group--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("input-group--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML =
        mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];

const mensajesDeError = {
    name: {
        valueMissing: "El campo nombre no puede estar vacío",
        patternMismatch: "No puede exceder los 50 caracteres",
    },
    email: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "Ingrese una dirección de correo con formato válido. Ejemplo: texto@texto.com",
    },
    subject: {
        valueMissing: "El campo asunto no puede estar vacío",
        patternMismatch: "No puede exceder los 50 caracteres",
    },
    message: {
        valueMissing: "El campo mensaje no puede estar vacío",
        customError: "No puede exceder los 300 caracteres",
    },
    
};


const validadores = {
    message: (input) => validarMessage(input),
    };


function validarMessage(input) {
    const textArea = document.querySelector(".input-group__input--textarea").value;
    const caracteres= textArea.length;
    let mensaje = "";

    if (caracteres > 300) {
        mensaje = "No puede exceder los 300 caracteres";
    }
    input.setCustomValidity(mensaje);
    }


function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}

