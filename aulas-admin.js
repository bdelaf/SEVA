// ADMINISTRADOR: ELIMINAR O EDITAR AULAS //

document.addEventListener("DOMContentLoaded", function () {
  // Eliminar aula
  var eliminarLinks = document.querySelectorAll(".aula a:not(.edit-aula)");
  for (var i = 0; i < eliminarLinks.length; i++) {
      eliminarLinks[i].addEventListener("click", function (event) {
          event.preventDefault();
          var confirmacion = confirm("¿Estás seguro de que deseas eliminar esta aula?");
          if (confirmacion) {
              var aula = this.parentElement;
              aula.remove(); // Elimina el aula del DOM
          }
      });
  }

  // Editar aulas
  function habilitarEdicion(editLink) {
      editLink.addEventListener("click", function (event) {
          event.preventDefault();

          var aula = this.previousElementSibling;
          var aulaTexto = aula.textContent;

          var input = document.createElement("input");
          input.type = "text";
          input.value = aulaTexto;
          aula.innerHTML = "";
          aula.appendChild(input);

          this.textContent = "Guardar";
          this.classList.add("save-link");

          // Evento para guardar al hacer clic en "Guardar"
          this.addEventListener("click", function () {
              aula.textContent = input.value;  // Guardar el valor del input como texto en el aula
              this.textContent = "Editar";  // Cambiar el botón de nuevo a "Editar"
              this.classList.remove("save-link");
          });
      });
  }

  var editLinks = document.querySelectorAll(".edit-aula");
  for (var j = 0; j < editLinks.length; j++) {
      habilitarEdicion(editLinks[j]);
  }

  // Agregar aula
  var addLinks = document.querySelectorAll(".edit-link");
  for (var k = 0; k < addLinks.length; k++) {
      addLinks[k].addEventListener("click", function (event) {
          event.preventDefault();
          var columna = this.parentElement;
          var nuevaAula = document.createElement("div");
          nuevaAula.classList.add("aula");

          var input = document.createElement("input");
          input.type = "text";
          input.placeholder = "Nombre del Aula";

          var guardarAula = document.createElement("a");
          guardarAula.href = "";
          guardarAula.classList.add("save-link");
          guardarAula.textContent = "Guardar";

          nuevaAula.appendChild(input);
          nuevaAula.appendChild(guardarAula);
          columna.insertBefore(nuevaAula, this);

          // Al hacer clic en "Guardar"
          guardarAula.addEventListener("click", function (event) {
              event.preventDefault();
              var aulaTexto = input.value;
              
              if (aulaTexto.trim() !== "") {  // Verificar que el nombre no esté vacío
                  nuevaAula.innerHTML = '<p>' + aulaTexto + '</p><a href="" class="edit-aula">Editar</a> <a href="#">Eliminar</a>';

                  var newEditAula = nuevaAula.querySelector(".edit-aula");
                  var newEliminarAula = nuevaAula.querySelector("a:not(.edit-aula)");

                  habilitarEdicion(newEditAula);

                  newEliminarAula.addEventListener("click", function (event) {
                      event.preventDefault();
                      if (confirm("¿Estás seguro de que deseas eliminar esta aula?")) {
                          nuevaAula.remove();
                      }
                  });
              } else {
                  alert("El nombre del aula no puede estar vacío");
              }
          });
      });
  }
});
