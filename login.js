  // VALIDAr EL EMAIL CONTRASEÑA Y LEGAJO AL INICIAR CESION //
  
  const forms = document.querySelectorAll("form");
  forms.forEach(function (form) {
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
            window.location.href = "paginaprincipal-prof.html";
          } else if (form.id === "login-a") {
            window.location.href = "paginaprincipal.html";
          } else if (form.id === "login-adm") {
            window.location.href = "home-admin.html";
          } else {
            alert("Formulario desconocido.");
          }
        } else {
          alert("Inicio de sesión cancelado.");
        }
      } else {
        alert("Credenciales incorrectas. Inténtelo de nuevo.");
      }
    });
  });

  // Función para validar el formato del email
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@uca.edu.ar$/;
    return re.test(String(email).toLowerCase());
  }

  // Función para validar la contraseña
  function validatePassword(password) {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  }
});






// OLVIVE MI CONTRASEÑA //

document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("form");

  // Agregar el evento para "Olvidé mi contraseña"
  document.querySelector(".forgot-password").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    
    // Seleccionar el formulario adecuado (puedes adaptar esto según tu HTML)
    const form = document.querySelector("form"); // Selecciona el primer formulario en la página
    const email = form.querySelector('input[type="email"]').value; // Obtiene el valor del input de email

    // Validaciones básicas
    if (!validateEmail(email)) {
      alert(
        "Se ha enviado un correo electrónico con las instrucciones para restablecer tu contraseña. Por favor, revisa tu bandeja de entrada."
      );
      return;
    }
    
  });

  // Función para validar el email
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular básica para validar un correo
    return regex.test(email);
