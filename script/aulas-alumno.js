document.getElementById("search-button").addEventListener("click", buscador);


function buscador() {
    var nombreFiltro = document.getElementById("search-input-clases").value.toLowerCase();
    var filtroTamaño = document.getElementById("size-filter").value.toLowerCase();
    var filtroComputadoras = document.getElementById("computers-filter").value.toLowerCase();
    var filtroProyectores = document.getElementById("projectors-filter").value.toLowerCase();
    var aulas = document.querySelectorAll(".classroom");

    aulas.forEach(function(aula) {
        if (filtrado(aula, nombreFiltro, filtroTamaño, filtroComputadoras, filtroProyectores)) {
            aula.style.display = "";
        } else {
            aula.style.display = "none";
        }
    });

    mostrarMensajeSiNoHayResultados();
}


function filtrado(aula, nombreFiltro, filtroTamaño, filtroComputadoras, filtroProyectores) {
    var nombreAula = aula.querySelector(".classroom-info p").textContent.toLowerCase();
    var tamañoAula = parseInt(aula.querySelector(".details p:nth-of-type(1)").textContent.split(': ')[1]);
    var computadorasAula = aula.querySelector(".details p:nth-of-type(3)").textContent.toLowerCase();
    var proyectoresAula = aula.querySelector(".details p:nth-of-type(2)").textContent.toLowerCase();

    var tamañoValido = 
        (filtroTamaño === "" ||
        (filtroTamaño === "small" && tamañoAula <= 30) ||
        (filtroTamaño === "medium" && tamañoAula > 30 && tamañoAula <= 50) ||
        (filtroTamaño === "large" && tamañoAula > 50));
    
    var computadorasValido = 
        (filtroComputadoras === "" ||
        (filtroComputadoras === "yes" && computadorasAula.includes("sí")) ||
        (filtroComputadoras === "no" && computadorasAula.includes("no")));
    
    var proyectoresValido = 
        (filtroProyectores === "" ||
        (filtroProyectores === "yes" && proyectoresAula.includes("sí")) ||
        (filtroProyectores === "no" && proyectoresAula.includes("no")));

    return (
        (nombreFiltro === "" || nombreAula.includes(nombreFiltro)) &&
        tamañoValido &&
        computadorasValido &&
        proyectoresValido
    );
}



function mostrarMensajeSiNoHayResultados() {
    var aulasVisibles = Array.from(document.querySelectorAll(".classroom")).filter(function(aula) {
        return aula.style.display !== "none";
    });

    var mensaje = document.getElementById("no-results-message");
    if (aulasVisibles.length === 0) {
        mensaje.style.display = "block";
    } else {
        mensaje.style.display = "none";
    }
}

// document.addEventListener("DOMContentLoaded", buscador() )


// function buscador() {
//   var searchInput = document.getElementById("search-input-clases");
//   var sizeFilter = document.getElementById("size-filter");
//   var computersFilter = document.getElementById("computers-filter");
//   var projectorsFilter = document.getElementById("projectors-filter");
//   var classrooms = document.querySelectorAll(".classroom");
//   var noResultsMessage = document.getElementById("no-results-message");
//   filterClassrooms();
//   document.getElementById("search-button").addEventListener("click", filterClassrooms);  // Agregar evento al botón de búsqueda
// }


// function filterClassrooms() {
//   var searchValue = searchInput.value.toLowerCase().trim();
//   var sizeValue = sizeFilter.value;
//   var computersValue = computersFilter.value;
//   var projectorsValue = projectorsFilter.value;
//   var hasResults = false;
//   classrooms.forEach(buscar(classroom))
//   // Mostrar u ocultar mensaje si no hay resultados
//   noResultsMessage.style.display = hasResults ? "none" : "block";
// }


// function buscar() {
//     var classroomName = classroom.querySelector(".classroom-info p").textContent.toLowerCase();
//     var capacity = parseInt(classroom.querySelector(".details p:nth-child(1)").textContent.replace('Capacidad: ', ''));
//     var hasComputers = classroom.querySelector(".details p:nth-child(3)").textContent.includes("Sí");
//     var hasProjector = classroom.querySelector(".details p:nth-child(2)").textContent.includes("Sí");

//     // Condiciones para filtrar
//     var matchesSearch = searchValue === "" || classroomName.includes(searchValue);
//     var matchesSize = sizeValue === "" || 
//       (sizeValue === "small" && capacity <= 30) || // capacidad de 30 o menor
//       (sizeValue === "medium" && capacity > 30 && capacity <= 50) || // capacidad de 30 a 50 incluido
//       (sizeValue === "large" && capacity > 50); // capacidad mas de 50
//     var matchesComputers = computersValue === "" || (computersValue === "yes" && hasComputers) || (computersValue === "no" && !hasComputers);
//     var matchesProjectors = projectorsValue === "" || (projectorsValue === "yes" && hasProjector) || (projectorsValue === "no" && !hasProjector);

//     // Mostrar u ocultar el aula según los criterios
//     if (matchesSearch && matchesSize && matchesComputers && matchesProjectors) {
//       classroom.style.display = "block";
//       hasResults = true;
//     } else {
//       classroom.style.display = "none";
//     }
//   }
