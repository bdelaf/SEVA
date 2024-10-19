document.addEventListener("DOMContentLoaded", checkInscri);

function checkInscri() {
    var botones_inscri = document.getElementsByClassName("inscribirse active");
    for (var i = 0; i < botones_inscri.length; i++) {
        asignarEvento(botones_inscri[i]);
    }
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
    var confirmacion = confirm("¿Estás seguro que quieres inscribirte a esta comisión?");
    if (confirmacion) {
        boton.innerHTML = "❌ Dar de baja";
        boton.style.color = "white";
        boton.style.backgroundColor = "red";
        boton.classList.add("dar-de-baja");
        alert("Te has inscrito exitosamente.");
        actualizarEstudiantes(boton, 1);
    }
}

function darseDeBaja(boton) {
    var confirmacionBaja = confirm("¿Estás seguro que quieres darte de baja de esta comisión?");
    if (confirmacionBaja) {
        boton.innerHTML = "Inscribirse";
        boton.style.color = "";
        boton.style.backgroundColor = "";
        boton.classList.remove("dar-de-baja");
        alert("Se ha dado de baja exitosamente.");
        actualizarEstudiantes(boton, -1);
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
