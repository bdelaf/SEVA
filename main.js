document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
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

    else if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    else if (legajo === "") {
      alert('El campo "Legajo" no puede estar vacío.');
      return;
    }

    // Simulación de validación exitosa
    else {
      alert("Inicio de sesión exitoso.");
      window.location.href = "paginaprincipal.html"; // Redirigir a la página principal
    } 
  });

  // Función para validar el formato del email
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  }
});
