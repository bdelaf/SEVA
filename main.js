  
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




// PERFIL ADMINISTRADOR //

document.addEventListener("DOMContentLoaded", function ()  {
  const form = document.querySelector(".form-miperfil");

  // Función para manejar el envío del formulario
  form.addEventListener("submit", function (event)  {
    event.preventDefault(); // Evita que la página se recargue

    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const codigoadm = document.getElementById("codigoadm").value.trim();

    // Validación simple
    if (!nombre || !email || !telefono || !codigoadm) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    
    // Mostrar mensaje de éxito
    alert("Información guardada con éxito!");

    // Opcional: Limpiar el formulario después de enviar
    form.reset();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-miperfil");
  const codigoadmInput = document.getElementById("codigoadm");

  // Evento para validar el campo "Código de administrador"
  codigoadmInput.addEventListener("input", function () {
    const value = codigoadmInput.value;

    // Eliminar caracteres no numéricos
    const numericValue = value.replace(/[^0-9]/g, "");

    // Limitar a 3 caracteres
    if (numericValue.length > 3) {
      codigoadmInput.value = numericValue.slice(0, 3);
    } else {
      codigoadmInput.value = numericValue;
    }
  });

  // Validar el formulario al enviarlo
  form.addEventListener("submit", function (e) {
    const codigoadmValue = codigoadmInput.value;
  });
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
  }
});

// document.addEventListener("DOMContentLoaded", function () {
//   // Redirección para el botón de Alumno
//   document.getElementById("btn-log_in-a").addEventListener("click", function () {
//     window.location.href = "login-a.html";  // Redirige a login de Alumno
//   });
  
//     // Redirección para el botón de Profesor
//   document.getElementById("btn-log_in-prof").addEventListener("click", function () {
//     window.location.href = "profe-login.html";  // Redirige a login de Profesor
//   });
  
//     // Redirección para el botón de Administrador
//   document.getElementById("btn-log_in-adm").addEventListener("click", function () {
//     window.location.href = "login-adm.html";  // Redirige a login de Administrador
//   });
// });


// RESERVAR AULAS PROFESOR //

var timer; // Variable para almacenar el temporizador
var tiempoRestante; // Variable para el tiempo restante

// Función que inicia la cuenta regresiva
function iniciarCuentaRegresiva(tiempo) {
    tiempoRestante = tiempo * 60 * 60; // Convertir horas a segundos
    var display = document.getElementById('tiempo-restante');

    // Actualiza el temporizador cada segundo
    timer = setInterval(function () {
        if (tiempoRestante <= 0) {
            clearInterval(timer);
            display.innerText = "El tiempo ha terminado";
            return; // Sale de la función
        }

        // Calcula minutos y segundos restantes
        var minutos = Math.floor(tiempoRestante / 60);
        var segundos = tiempoRestante % 60;

        // Muestra el tiempo restante
        display.innerText = minutos + " : " + (segundos < 10 ? '0' : '') + segundos;
        tiempoRestante--; // Disminuye el tiempo restante
    }, 1000); // Ejecuta cada segundo
}

// Manejador de evento para el botón de alargar reserva
document.getElementById('alargar-reserva').addEventListener('click', function () {
    // Muestra el bloque de selección de horas
    document.getElementById('selector-horas').style.display = 'block';
});

// Manejador de evento para el botón de confirmar alargue
document.getElementById('confirmar-alargue').addEventListener('click', function () {
    var horasSeleccionadas = parseInt(document.getElementById('horas').value);
    if (isNaN(horasSeleccionadas) || horasSeleccionadas < 0) {
        alert('Por favor, selecciona un tiempo válido.'); // Validación de tiempo
        return;
    }
    iniciarCuentaRegresiva(horasSeleccionadas); // Inicia la cuenta regresiva
    document.getElementById('selector-horas').style.display = 'none'; // Oculta el selector después de confirmar
});

// Manejador de evento para el botón de cancelar reserva
document.getElementById('cancelar-reserva').addEventListener('click', function () {
    clearInterval(timer); // Cancela la cuenta regresiva
    document.getElementById('tiempo-restante').innerText = "00 : 00"; // Resetea el tiempo mostrado
    alert('Reserva cancelada'); // Muestra la notificación
});

/*separador*/

});
