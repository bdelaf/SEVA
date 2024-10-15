// BUSCADOR DE MATERIAS //

document.addEventListener("DOMContentLoaded", function () {
  var searchInput = document.getElementById("search-input");
  var materiasList = document.getElementById("materias-list");
  var materias = materiasList.getElementsByTagName("li");
  var noResultsMessage = document.getElementById("no-results-message");
  var submitButtonP = document.getElementById("submit-buttonP"); // Botón de enviar o continuar
  var submitButtonA = document.getElementById("submit-buttonA"); // Botón de enviar o continuar

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
  if (submitButtonA){
  submitButtonA.addEventListener("click", function (e) {
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
      window.location.href = "inscribirse.html"

    }
  });
  }else{
  submitButtonP.addEventListener("click", function (e) {
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
      window.location.href = "profe-sel.html"

    }
  })};
});


