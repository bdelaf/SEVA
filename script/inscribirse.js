document.addEventListener("DOMContentLoaded", function() {
    checkInscri();
});

function checkInscri() {
    var botones_inscri = document.querySelectorAll(".inscribirse.active");
    botones_inscri.forEach(function(boton) {
        asignarEvento(boton);
    });
}

function asignarEvento(boton) {
    boton.addEventListener("click", function () {
        if (boton.innerHTML === "Inscribirse") {
            inscribirse(boton);
        } else if (boton.innerHTML === "❌ Dar de baja") {
            darseDeBaja(boton);
        }
    });
}

function inscribirse(boton) {
    if (confirm("¿Estás seguro que quieres inscribirte a esta comisión?")) {
        boton.innerHTML = "❌ Dar de baja";
        boton.style.color = "white";
        boton.style.backgroundColor = "red";
        boton.classList.add("dar-de-baja");
        alert("Te has inscrito exitosamente.");
        actualizarEstudiantes(boton, 1);
        verificarInscripcion(); // Verificar inscripción después de inscribirse
    }
}

function darseDeBaja(boton) {
    if (confirm("¿Estás seguro que quieres darte de baja de esta comisión?")) {
        boton.innerHTML = "Inscribirse";
        boton.style.color = "";
        boton.style.backgroundColor = "";
        boton.classList.remove("dar-de-baja");
        alert("Se ha dado de baja exitosamente.");
        actualizarEstudiantes(boton, -1);
        verificarInscripcion(); // Verificar inscripción después de darse de baja
    }
}

function actualizarEstudiantes(boton, cambio) {
    var estudiantes = boton.parentElement.querySelector('.students');
    var inscritos_total = estudiantes.innerText.split('/');
    var inscritos = parseInt(inscritos_total[0]);
    var total = parseInt(inscritos_total[1]);
    inscritos += cambio;
    estudiantes.innerText = inscritos + "/" + total;
}

function obtenerComisionInscrita(inscripciones) {
    let comisionInscrita = null;

    inscripciones.forEach(function(inscripcion) {
        if (inscripcion.classList.contains("dar-de-baja")) {
            comisionInscrita = inscripcion;
        }
    });

    return comisionInscrita;
}

function verificarCapacidad(inscripcion) {
    var estudiantes = inscripcion.parentElement.querySelector('.students');
    var inscritos_total = estudiantes.innerText.split('/');
    var inscritos = parseInt(inscritos_total[0]);
    var total = parseInt(inscritos_total[1]);

    if (inscritos >= total) {
        inscripcion.classList.add("disabled");
        inscripcion.classList.remove("active");
        inscripcion.style.pointerEvents = "none";
        inscripcion.style.backgroundColor = "#d3d3d3";
    } else {
        inscripcion.classList.remove("disabled");
        inscripcion.classList.add("active");
        inscripcion.style.pointerEvents = "auto";
        inscripcion.style.backgroundColor = "";
    }
}

function deshabilitarOtrasComisiones(inscripciones, comisionInscrita) {
    inscripciones.forEach(function(inscripcion) {
        if (inscripcion !== comisionInscrita && !inscripcion.classList.contains("dar-de-baja")) {
            inscripcion.classList.add("disabled");
            inscripcion.classList.remove("active");
            inscripcion.style.pointerEvents = "none";
            inscripcion.style.backgroundColor = "#d3d3d3";
        }
    });
}

function verificarInscripcion() {
    var materias = document.querySelectorAll(".subject");

    materias.forEach(function(subject) {
        var inscripciones = subject.querySelectorAll(".inscribirse");

        var comisionInscrita = obtenerComisionInscrita(inscripciones);

        inscripciones.forEach(function(inscripcion) {
            if (inscripcion !== comisionInscrita) {
                verificarCapacidad(inscripcion);
            }
        });

        if (comisionInscrita) {
            deshabilitarOtrasComisiones(inscripciones, comisionInscrita);
        }
    });
}