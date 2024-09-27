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

    if (validatePassword(password)) {
      console.log("La contraseña es válida");
    } else {
      console.log("La contraseña no es válida");
    }
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (legajo === "") {
      alert('El campo "Legajo" no puede estar vacío.');
      return;
    }

    // Simulación de validación exitosa
    if (validateEmail(email)) {
      alert("Inicio de sesión exitoso.");
      window.location.href = "paginaprincipal.html"; // Redirigir a la página principal
    } else {
      alert("Credenciales incorrectas. Inténtelo de nuevo.");
    }
  });

  // Función para validar el formato del email
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@uca.edu.ar$/;
    return re.test(String(email).toLowerCase());
  }
  function validatePassword(password) {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  }
});

document.addEventListener('DOMContentLoaded', function () {
  // Eliminar aula
  const eliminarLinks = document.querySelectorAll('.aula a');
  eliminarLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const confirmacion = confirm('¿Estás seguro de que deseas eliminar esta aula?');
      if (confirmacion) {
        const aula = this.parentElement;
        aula.remove(); // Elimina el aula del DOM
      }
    });
  });

  // Editar aulas
  const editLinks = document.querySelectorAll('.edit-link');
  editLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const columna = this.parentElement;
      const aulas = columna.querySelectorAll('.aula p');

      aulas.forEach(aula => {
        const aulaTexto = aula.textContent;
        aula.innerHTML = `<input type="text" value="${aulaTexto}">`;
      });

      this.textContent = 'Guardar';
      this.classList.add('save-link');

      this.addEventListener('click', function() {
        aulas.forEach(aula => {
          const input = aula.querySelector('input');
          aula.textContent = input.value;
        });

        this.textContent = 'Editar';
        this.classList.remove('save-link');
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

    // Simular el guardado de datos (puedes reemplazar esto con una llamada a una API)
    console.log("Datos guardados:");
    console.log(`Nombre: ${nombre}`);
    console.log(`Email: ${email}`);
    console.log(`Teléfono: ${telefono}`);
    console.log(`Código de administrador: ${codigoadm}`);

    // Mostrar mensaje de éxito
    alert("Información guardada con éxito!");

    // Opcional: Limpiar el formulario después de enviar
    form.reset();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form-miperfil');
  const codigoadmInput = document.getElementById('codigoadm');

  // Evento para validar el campo "Código de administrador"
  codigoadmInput.addEventListener('input', () => {
      const value = codigoadmInput.value;

      // Eliminar caracteres no numéricos
      const numericValue = value.replace(/[^0-9]/g, '');

      // Limitar a 3 caracteres
      if (numericValue.length > 3) {
          codigoadmInput.value = numericValue.slice(0, 3);
      } else {
          codigoadmInput.value = numericValue;
      }
  });

  // Validar el formulario al enviarlo
  form.addEventListener('submit', (e) => {
      const codigoadmValue = codigoadmInput.value;
  });
});





