function checkInscri() {
  var botones_inscri = document.getElementsByClassName("inscribirse active");

  for (var i = 0; i < botones_inscri.length; i++) {
    (function(boton) {
      boton.addEventListener("click", function () {
        var confirmacion = confirm("¿Estás seguro que quieres inscribirte a esta comisión?");
        
        if (confirmacion) {
          boton.innerHTML = "✔ Inscrito";
          boton.style.color = "white";
          boton.style.backgroundColor = "green";
          boton.classList.remove("active");

          var spanEstudiantes = boton.parentElement.querySelector('.students');
          
          var inscritos_total = spanEstudiantes.innerText.split('/');
          var inscritos = parseInt(inscritos_total[0]);
          var total = parseInt(inscritos_total[1]);

          if (inscritos < total) {
            inscritos += 1;
            spanEstudiantes.innerText = inscritos + "/" + total;
          }
        }
      });
    })(botones_inscri[i]);
  }
}

document.addEventListener("DOMContentLoaded", checkInscri);
