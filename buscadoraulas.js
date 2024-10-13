document.addEventListener("DOMContentLoaded", function() {
  var searchInput = document.getElementById("search-input-clases");
  var sizeFilter = document.getElementById("size-filter");
  var computersFilter = document.getElementById("computers-filter");
  var projectorsFilter = document.getElementById("projectors-filter");
  var classrooms = document.querySelectorAll(".classroom");
  var classroomsContainer = document.querySelector(".classrooms-container");
  var noResultsMessage = document.getElementById("no-results-message");

  function filterClassrooms() {
    var searchValue = searchInput.value.toLowerCase();
    var sizeValue = sizeFilter.value;
    var computersValue = computersFilter.value;
    var projectorsValue = projectorsFilter.value;
    var hasResults = false;

    classrooms.forEach(function(classroom) {
      var classroomName = classroom.querySelector(".classroom-info p").textContent.toLowerCase();
      var capacity = parseInt(classroom.querySelector(".details p:nth-child(1)").textContent.replace('Capacidad: ', ''));
      var hasComputers = classroom.querySelector(".details p:nth-child(3)").textContent.includes("Sí");
      var hasProjector = classroom.querySelector(".details p:nth-child(2)").textContent.includes("Sí");

      var matchesSearch = searchValue === "" || classroomName.includes(searchValue);
      var matchesSize = sizeValue === "" || 
        (sizeValue === "small" && capacity <= 50) ||
        (sizeValue === "medium" && capacity > 50 && capacity <= 100) ||
        (sizeValue === "large" && capacity > 100);
      var matchesComputers = computersValue === "" || (computersValue === "yes" && hasComputers) || (computersValue === "no" && !hasComputers);
      var matchesProjectors = projectorsValue === "" || (projectorsValue === "yes" && hasProjector) || (projectorsValue === "no" && !hasProjector);

      if (matchesSearch && matchesSize && matchesComputers && matchesProjectors) {
        classroom.style.display = "block";
        hasResults = true;
      } else {
        classroom.style.display = "none";
      }
    });

    // Mostrar u ocultar mensaje si no hay resultados
    if (!hasResults) {
      noResultsMessage.style.display = "block";
    } else {
      noResultsMessage.style.display = "none";
    }
  }

  // Agregar evento al botón de búsqueda
  document.getElementById("search-button").addEventListener("click", filterClassrooms);
});
