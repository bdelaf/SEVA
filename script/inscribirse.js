function checkInscri() {
  var botones_inscri = document.getElementsByClassName("inscribirse active");
  for (var i = 0; i < botones_inscri.length; i++) {
    (function(boton) {
      boton.addEventListener("click", function () {
        if (boton.innerHTML === "Inscribirse") {
          var confirmacion = confirm("¿Estás seguro que quieres inscribirte a esta comisión?");
          if (confirmacion) {
            boton.innerHTML = "❌ Darse de baja";
            boton.style.color = "white";
            boton.style.backgroundColor = "red";
            alert("Te has inscrito exitosamente.");

            var estudiantes = boton.parentElement.querySelector('.students');
            var inscritos_total = estudiantes.innerText.split('/');
            var inscritos = parseInt(inscritos_total[0]);
            var total = parseInt(inscritos_total[1]);

            if (inscritos < total) {
              inscritos += 1;
              estudiantes.innerText = inscritos + "/" + total;
            }
          }
        } else if (boton.innerHTML === "❌ Darse de baja") {
          var confirmacionBaja = confirm("¿Estás seguro que quieres darte de baja de esta comisión?");
          if (confirmacionBaja) {
            boton.innerHTML = "Inscribirse";
            boton.style.color = "";
            boton.style.backgroundColor = "";
            alert("Se ha dado de baja exitosamente.");

            var estudiantes = boton.parentElement.querySelector('.students');
            var inscritos_total = estudiantes.innerText.split('/');
            var inscritos = parseInt(inscritos_total[0]);
            inscritos -= 1;
            estudiantes.innerText = inscritos + "/" + inscritos_total[1];
          }
        }
      });
    })(botones_inscri[i]);
  }
}

document.addEventListener("DOMContentLoaded", checkInscri);
