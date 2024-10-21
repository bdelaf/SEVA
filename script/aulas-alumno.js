document.addEventListener("DOMContentLoaded", inicio);

function inicio() {
    document.getElementById("search-button").addEventListener("click", buscador);
}

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
