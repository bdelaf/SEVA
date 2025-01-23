document.addEventListener("DOMContentLoaded", reseñas);
let calificacionSeleccionada = 0;

function reseñas() {
    var formulario = document.querySelector(".review-form");
    var estrellas = document.querySelectorAll(".stars-container .star");

    estrellas.forEach(function(estrella, index) {
        asignarEventoEstrella(estrella, index);
    });
    formulario.addEventListener("submit", enviarFormulario);
}

function asignarEventoEstrella(estrella, index) {
    estrella.addEventListener("click", function() {
        sumarEstrella(index);
    });
}

function sumarEstrella(index) {
    calificacionSeleccionada = index + 1;
    actualizarEstiloEstrellas();
}

function actualizarEstiloEstrellas() {
    var estrellas = document.querySelectorAll(".stars-container .star");
    estrellas.forEach(function(estrella, index) {
        actualizarEstrella(estrella, index);
    });
}

function actualizarEstrella(estrella, index) {
    estrella.classList.toggle("checked", index < calificacionSeleccionada);
}

function enviarFormulario(evento) {
    evento.preventDefault();
    var textoReseña = document.getElementById("review-text");
    var seccionComentarios = document.getElementById("seccion");
    if (textoReseña.value.trim() === "" || calificacionSeleccionada === 0) {
        alert("Por favor, escribe tu reseña y selecciona una calificación.");
        return;
    }
    var nuevaReseña = document.createElement("div");
    nuevaReseña.classList.add("review-c");
    nuevaReseña.innerHTML = `
        <p class="reviewer-c">Anónimo <span class="stars-c">${"★".repeat(calificacionSeleccionada)}${"☆".repeat(5 - calificacionSeleccionada)}</span> <span class="check-g">✔</span></p>
        <p class="review-text">${textoReseña.value}</p>
    `;
    seccionComentarios.appendChild(nuevaReseña);
    textoReseña.value = "";
    calificacionSeleccionada = 0;
    actualizarEstiloEstrellas();
}
