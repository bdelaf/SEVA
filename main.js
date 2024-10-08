document.addEventListener("DOMContentLoaded", function () {
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

document.addEventListener("DOMContentLoaded", function () {
  // Eliminar aula
  const eliminarLinks = document.querySelectorAll(".aula a");
  eliminarLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const confirmacion = confirm(
        "¿Estás seguro de que deseas eliminar esta aula?"
      );
      if (confirmacion) {
        const aula = this.parentElement;
        aula.remove(); // Elimina el aula del DOM
      }
    });
  });

  // Editar aulas
  const editLinks = document.querySelectorAll(".edit-link");
  editLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const columna = this.parentElement;
      const aulas = columna.querySelectorAll(".aula p");

      aulas.forEach((aula) => {
        const aulaTexto = aula.textContent;
        aula.innerHTML = `<input type="text" value="${aulaTexto}">`;
      });

      this.textContent = "Guardar";
      this.classList.add("save-link");

      this.addEventListener("click", function () {
        aulas.forEach((aula) => {
          const input = aula.querySelector("input");
          aula.textContent = input.value;
        });

        this.textContent = "Editar";
        this.classList.remove("save-link");
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const materiasColumn = document.querySelector(".materias-column");

  // Función para editar una materia
  materiasColumn.addEventListener("click", (event) => {
    if (event.target.classList.contains("edit-button")) {
      event.preventDefault();
      const materiaItem = event.target.closest(".materia-item");
      const materiaName = materiaItem.querySelector("p").innerText;
      const newMateriaName = prompt("Editar materia:", materiaName);

      if (newMateriaName) {
        materiaItem.querySelector("p").innerText = newMateriaName;
      }
    }

    // Función para eliminar una materia
    if (event.target.classList.contains("delete-button")) {
      event.preventDefault();
      const materiaItem = event.target.closest(".materia-item");
      if (confirm("¿Estás seguro de que deseas eliminar esta materia?")) {
        materiasColumn.removeChild(materiaItem);
      }
    }
  });

  // Función para agregar una nueva materia
  const addMateriaButton = document.querySelector(".add-materia-button");
  addMateriaButton.addEventListener("click", (event) => {
    event.preventDefault();
    const newMateriaName = prompt("Nombre de la nueva materia:");

    if (newMateriaName) {
      const newMateriaItem = document.createElement("div");
      newMateriaItem.classList.add("materia-item");
      newMateriaItem.innerHTML = `
        <p>${newMateriaName}</p>
        <div class="materia-actions">
          <a href="#" class="edit-button">Editar</a>
          <a href="#" class="delete-button">Eliminar</a>
        </div>
      `;
      materiasColumn.insertBefore(newMateriaItem, addMateriaButton);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-miperfil");

  // Función para manejar el envío del formulario
  form.addEventListener("submit", (event) => {
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

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-miperfil");
  const codigoadmInput = document.getElementById("codigoadm");

  // Evento para validar el campo "Código de administrador"
  codigoadmInput.addEventListener("input", () => {
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
  form.addEventListener("submit", (e) => {
    const codigoadmValue = codigoadmInput.value;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".review-form");
  const reviewText = document.getElementById("review-text");
  const commentsSection = document.getElementById("seccion");
  const stars = document.querySelectorAll(".stars-container .star");
  let selectedRating = 0;

  // Función para seleccionar la calificación
  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      selectedRating = index + 1; // La calificación seleccionada (1 a 5)
      updateStarDisplay(); // Actualiza la visualización de estrellas
    });
  });

  // Actualiza el estilo de las estrellas según la calificación seleccionada
  function updateStarDisplay() {
    stars.forEach((star, index) => {
      star.classList.toggle("checked", index < selectedRating);
    });
  }

  // Manejar el envío del formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita el envío del formulario

    if (reviewText.value.trim() === "" || selectedRating === 0) {
      alert("Por favor, escribe tu reseña y selecciona una calificación.");
      return; // Detiene la ejecución si no hay reseña o calificación
    }

    // Crea un nuevo comentario
    const newReview = document.createElement("div");
    newReview.classList.add("review-c");
    newReview.innerHTML = `
          <p class="reviewer-c">Anónimo <span class="stars-c">${"★".repeat(
            selectedRating
          )}${"☆".repeat(
      5 - selectedRating
    )}</span> <span class="check-c">✔</span></p>
          <p class="review-text">${reviewText.value}</p>
      `;

    // Agrega el nuevo comentario a la sección de comentarios
    commentsSection.appendChild(newReview);

    // Limpia el formulario
    reviewText.value = "";
    selectedRating = 0;
    updateStarDisplay();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var searchInput = document.getElementById("search-input");
  var materiasList = document.getElementById("materias-list");
  var materias = materiasList.getElementsByTagName("li");
  var noResultsMessage = document.getElementById("no-results-message");
  var submitButton = document.getElementById("submit-button"); // Botón de enviar o continuar

  // Evento para detectar cuando el usuario escribe en la barra de búsqueda
  searchInput.addEventListener("keyup", function () {
    var searchTerm = searchInput.value.toLowerCase();
    var found = false; // Variable para rastrear si se ha encontrado alguna coincidencia

    // Si no hay término de búsqueda, muestra todas las materias
    if (searchTerm === "") {
      Array.prototype.forEach.call(materias, function (materia) {
        materia.style.display = ""; // Muestra todas las materias
      });
      noResultsMessage.style.display = "none"; // Oculta el mensaje de "No se han encontrado resultados"
    } else {
      // Itera sobre cada elemento de la lista y verifica si coincide con el término de búsqueda
      Array.prototype.forEach.call(materias, function (materia) {
        var materiaText = materia.textContent.toLowerCase();
        if (materiaText.includes(searchTerm)) {
          materia.style.display = ""; // Muestra el elemento si coincide
          found = true; // Se ha encontrado una coincidencia
        } else {
          materia.style.display = "none"; // Oculta el elemento si no coincide
        }
      });

      // Si no se ha encontrado ninguna coincidencia, muestra el mensaje
      if (!found) {
        noResultsMessage.style.display = ""; // Muestra el mensaje
      } else {
        noResultsMessage.style.display = "none"; // Oculta el mensaje si hay coincidencias
      }
    }
  });

  // Evento para verificar si al menos una materia está seleccionada al enviar
  submitButton.addEventListener("click", function (e) {
    e.preventDefault(); // Evita que el formulario se envíe por defecto

    // Verificar si alguna materia está seleccionada (marcada como "checked")
    var selectedMaterias = Array.prototype.filter.call(materias, function (materia) {
      return materia.querySelector('input[type="checkbox"]').checked;
    });

    if (selectedMaterias.length === 0) {
      // Si no hay materias seleccionadas, muestra un mensaje de alerta
      alert("No has seleccionado ninguna materia.");
    } else {
      // Aquí podrías proceder con la lógica de envío, ya que hay materias seleccionadas
      alert("Materias seleccionadas: " + selectedMaterias.map(function (materia) {
        return materia.textContent.trim();
      }).join(", "));
      // O continuar con la lógica que necesites
    }
  });
});

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
      alert("Por favor, ingrese un correo electrónico válido.");
      return;
    }

    // Simulación de validación exitosa con ventana de confirmación
    alert(
      "Se ha enviado un correo electrónico con las instrucciones para restablecer tu contraseña. Por favor, revisa tu bandeja de entrada."
    );
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
