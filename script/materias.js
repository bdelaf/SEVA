document.addEventListener("DOMContentLoaded", inicializarBuscador);


function inicializarBuscador() {
  var searchInput = document.getElementById("search-input");
  var materiasList = document.getElementById("materias-list");
  var materias = materiasList.getElementsByTagName("li");
  var noResultsMessage = document.getElementById("no-results-message");
  var submitButtonP = document.getElementById("submit-buttonP");
  var submitButtonA = document.getElementById("submit-buttonA");

  searchInput.addEventListener("keyup", function () {
    buscarMaterias(searchInput, materias, noResultsMessage);
  });

  if (submitButtonA) {
    submitButtonA.addEventListener("click", function (e) {
      manejarEnvioMaterias(e, materias, "inscribirse.html");
    });
  } else {
    submitButtonP.addEventListener("click", function (e) {
      manejarEnvioMaterias(e, materias, "profe-sel.html");
    });
  }
}


function buscarMaterias(searchInput, materias, noResultsMessage) {
  var searchTerm = searchInput.value.toLowerCase();
  var found = false;

  if (searchTerm === "") {
    Array.prototype.forEach.call(materias, function (materia) {
      materia.style.display = "";
    });
    noResultsMessage.style.display = "none";
  } else {
    Array.prototype.forEach.call(materias, function (materia) {
      var materiaText = materia.textContent.toLowerCase();
      if (materiaText.includes(searchTerm)) {
        materia.style.display = "";
        found = true;
      } else {
        materia.style.display = "none";
      }
    });

    if (!found) {
      noResultsMessage.style.display = "";
    } else {
      noResultsMessage.style.display = "none";
    }
  }
}


function manejarEnvioMaterias(evento, materias, redireccionarUrl) {
  evento.preventDefault();

  var selectedMaterias = Array.prototype.filter.call(materias, function (materia) {
    return materia.querySelector('input[type="checkbox"]').checked;
  });

  if (selectedMaterias.length === 0) {
    alert("No has seleccionado ninguna materia.");
  } else {
    alert("Materias seleccionadas: " + selectedMaterias.map(function (materia) {
      return materia.textContent.trim();
    }).join(", "));
    window.location.href = redireccionarUrl;
  }
}

