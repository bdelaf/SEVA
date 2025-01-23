document.addEventListener("DOMContentLoaded", verificacion);
document.addEventListener("DOMContentLoaded", olvidarContra);

function verificacion() {
  var forms = document.querySelectorAll("form");
  for (var i = 0; i < forms.length; i++) {
    agregarEvento(forms[i]);
  }
}

function agregarEvento(form) {
  form.addEventListener("submit", validar);
}

function validar(event) {
  event.preventDefault();

  var form = event.target;
  var email = form.querySelector('input[type="email"]').value;
  var password = form.querySelector('input[type="password"]').value;
  var legajo = form.querySelector('input[type="text"]').value;

  if (!validateEmail(email)) {
    return alert("Por favor, ingrese un correo electrónico válido.");
  }
  if (password.length < 6) {
    return alert("La contraseña debe tener al menos 6 caracteres.");
  }
  if (legajo === "") {
    return alert('El campo "Legajo" no puede estar vacío.');
  }

  var confirmLogin = confirm("¿Está seguro de que desea iniciar sesión?");
  if (confirmLogin) {
    if (form.id === "login-profe") {
      window.location.href = "inicio-profe.html";
    } else if (form.id === "login-a") {
      window.location.href = "inicio-alumno.html";
    } else if (form.id === "login-adm") {
      window.location.href = "inicio-admin.html";
    }
  } else {
    alert("Inicio de sesión cancelado.");
  }
}

function validateEmail(email) {
  var re = /^[a-zA-Z0-9._-]+@uca.edu.ar$/;
  return re.test(String(email).toLowerCase());
}

function olvidarContra() {
  var forgotPasswordButton = document.querySelector(".forgot-password");
  forgotPasswordButton.addEventListener("click", validarOlvidarContra);
}

function validarOlvidarContra(event) {
  event.preventDefault();

  var form = document.querySelector("form");
  var email = form.querySelector('input[type="email"]').value;

  if (!validateEmail(email)) {
    return alert("Por favor, ingrese un correo electrónico válido.");
  }

  alert("Se ha enviado un correo electrónico con las instrucciones para restablecer tu contraseña. Por favor, revisa tu bandeja de entrada.");
}
