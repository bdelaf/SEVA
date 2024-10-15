// AGREGAR COMENTARIOS RESEÑAS //

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".review-form");
  const reviewText = document.getElementById("review-text");
  const commentsSection = document.getElementById("seccion");
  const stars = document.querySelectorAll(".stars-container .star");
  let selectedRating = 0;

  // Función para  la calificación
  stars.forEach((star, index) => {
    star.addEventListener("click", function ()  {
      selectedRating = index + 1; 
      updateStarDisplay(); // Actualiza la visualización de estrellas
    });
  });

  // Actualiza el estilo de las estrellas según la calificación seleccionada
  function updateStarDisplay() {
    stars.forEach((star, index) => {
      star.classList.toggle("checked", index < selectedRating);
    });
  }

  // Manejar el envío del formulario
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el envío del formulario

    if (reviewText.value.trim() === "" || selectedRating === 0) {
      alert("Por favor, escribe tu reseña y selecciona una calificación.");
      return; // Detiene la ejecución si no hay reseña o calificación
    }

    // Crea un nuevo comentario
    const newReview = document.createElement("div");
    newReview.classList.add("review-c");
    newReview.innerHTML = `
          <p class="reviewer-c">Anónimo <span class="stars-c">${"★".repeat(
            selectedRating
          )}${"☆".repeat(
      5 - selectedRating
    )}</span> <span class="check-c">✔</span></p>
          <p class="review-text">${reviewText.value}</p>
      `;

    // Agrega el nuevo comentario a la sección de comentarios
    commentsSection.appendChild(newReview);

    // Limpia el formulario
    reviewText.value = "";
    selectedRating = 0;
    updateStarDisplay();
  });
});
