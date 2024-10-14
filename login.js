
document.addEventListener("DOMContentLoaded", verificacion);
document.addEventListener("DOMContentLoaded", olvidarContra);

// VALIDAr EL EMAIL CONTRASEÑA Y LEGAJO AL INICIAR CESION A//

function verificacion() {
  const forms = document.querySelectorAll("form");
  forms.forEach(agregarEvento(form))
}


function agregarEvento(form) {
  form.addEventListener("submit", validar() )
}


function validar (event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  // Obtiene los valores de los inputs
  const email = form.querySelector('input[type="email"]').value;
  const password = form.querySelector('input[type="password"]').value;
  const legajo = form.querySelector('input[type="text"]').value;

  // Validaciones básicas
  if (!validateEmail(email)) {
    alert("Por favor, ingrese un correo electrónico válido.");
    return;
  }

  if (password.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres.");
    return;
  }

  if (legajo === "") {
    alert('El campo "Legajo" no puede estar vacío.');
    return;
  }

  // Simulación de validación exitosa con ventana de confirmación
  if (validateEmail(email)) {
    const confirmLogin = confirm(
      "¿Está seguro de que desea iniciar sesión?"
    );
    if (confirmLogin) {
      // Redirigir según el formulario
      if (form.id === "login-profe") {
        window.location.href = "inicio-profe.html";
      } else if (form.id === "login-a") {
        window.location.href = "incio-alumno.html";
      } else if (form.id === "login-adm") {
        window.location.href = "inicio-admin.html";
      } 
    } else {
      alert("Inicio de sesión cancelado.");
    }
  } else {
    alert("Credenciales incorrectas. Inténtelo de nuevo.");
  }
}



function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@uca.edu.ar$/;
  return re.test(String(email).toLowerCase());
}



// OLVIVE MI CONTRASEÑA //


function olvidarContra() {
  const forms = document.querySelectorAll("form");
  document.querySelector(".forgot-password").addEventListener("click", validarOlvidarContra(event))
}


function validarOlvidarContra(event) {
  event.preventDefault(); // Evita que el enlace recargue la página
  
  const form = document.querySelector("form"); // Selecciona el primer formulario en la página
  const email = form.querySelector('input[type="email"]').value; // Obtiene el valor del input de email

   if (!validateEmail(email)) {
    alert("Por favor, ingrese un correo electrónico válido.");
    return;
  }
  
  if (validateEmail(email)) {
    alert(
      "Se ha enviado un correo electrónico con las instrucciones para restablecer tu contraseña. Por favor, revisa tu bandeja de entrada."
    );
    return;
  }
}

