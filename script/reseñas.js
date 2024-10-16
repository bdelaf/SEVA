document.addEventListener("DOMContentLoaded", reseñas);

let calificacionSeleccionada = 0;

function reseñas() {
  const formulario = document.querySelector(".review-form");
  const textoResena = document.getElementById("review-text");
  const seccionComentarios = document.getElementById("seccion");
  const estrellas = document.querySelectorAll(".stars-container .star");
  
  estrellas.forEach(asignarEventoEstrella)
  formulario.addEventListener("submit", enviarFormulario);
}

function asignarEventoEstrella(estrella, index) {
  estrella.addEventListener("click", function() {
    sumarEstrella(index, estrellas);
  });
}

function sumarEstrella(index, estrellas) {
  calificacionSeleccionada = index + 1;
  actualizarEstiloEstrellas(estrellas, calificacionSeleccionada);
}

function actualizarEstiloEstrellas(estrellas, calificacionSeleccionada) {
  estrellas.forEach(actualizarEstrella);
}

function actualizarEstrella(estrella, index) {
  estrella.classList.toggle("checked", index < calificacionSeleccionada);
}

function enviarFormulario(evento) {
  evento.preventDefault();

  const textoReseña = document.getElementById("review-text");
  const seccionComentarios = document.getElementById("seccion");
  const estrellas = document.querySelectorAll(".stars-container .star");

  if (textoReseña.value.trim() === "" || calificacionSeleccionada === 0) {
    alert("Por favor, escribe tu reseña y selecciona una calificación.");
    return;
  }

  const nuevaReseña = document.createElement("div");
  nuevaReseña.classList.add("review-c");
  nuevaReseña.innerHTML = `
    <p class="reviewer-c">Anónimo <span class="stars-c">${"★".repeat(
      calificacionSeleccionada
    )}${"☆".repeat(5 - calificacionSeleccionada)}</span> <span class="check-c">✔</span></p>
    <p class="review-text">${textoReseña.value}</p>
  `;

  seccionComentarios.appendChild(nuevaReseña);

  textoReseña.value = "";
  calificacionSeleccionada = 0;
  actualizarEstiloEstrellas(estrellas, calificacionSeleccionada);
}
