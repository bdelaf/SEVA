document.addEventListener("DOMContentLoaded", comentarios);

function comentarios() {
    var checks = document.querySelectorAll('.check-c-adm');
    var EliminarCom = document.querySelectorAll('.elim-com');
    asignarEventosChecks(checks);
    asignarEventosEliminar(EliminarCom);
    mostrarMensajeSiNoHayResultados();
}

function asignarEventosChecks(checks) {
    for (var i = 0; i < checks.length; i++) {
        checks[i].addEventListener('click', verificarComentario);
    }
}

function verificarComentario() {
    if (confirm('¿Quieres verificar este comentario?')) {
        this.classList.toggle('active');
    }
}

function asignarEventosEliminar(EliminarCom) {
    for (var j = 0; j < EliminarCom.length; j++) {
        EliminarCom[j].addEventListener('click', eliminarComentario);
    }
}

function eliminarComentario(event) {
    event.preventDefault();
    if (confirm('¿Estás seguro de que quieres eliminar este comentario?')) {
        var review = this.closest('.review-c');
        if (review) {
            review.remove();
            mostrarMensajeSiNoHayResultados();
        }
    }
}

function mostrarMensajeSiNoHayResultados() {
    var comentariosVisibles = Array.from(document.querySelectorAll(".review-c")).filter(function(comentario) {
        return comentario.style.display !== "none";
    });

    var mensaje = document.getElementById("no-results-message");
    if (comentariosVisibles.length === 0) {
        mensaje.style.display = "inline";
        mensaje.style.color = "black"
        mensaje.style.fontSize = "16px"
    } else {
        mensaje.style.display = "none";
    }
}
