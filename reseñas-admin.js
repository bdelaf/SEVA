// ADMINISTRADOR : ELIMINAR COMENTARIOS //

document.addEventListener("DOMContentLoaded", function () {
  var checks = document.querySelectorAll('.check-c-adm');
  var deleteLinks = document.querySelectorAll('.elim-com');

  for (var i = 0; i < checks.length; i++) {
      checks[i].addEventListener('click', function() {
          if (confirm('¿Quieres verificar este comentario?')) {
              this.classList.toggle('active');
          }
      });
  }

  for (var j = 0; j < deleteLinks.length; j++) {
      deleteLinks[j].addEventListener('click', function(event) {
          event.preventDefault();
          if (confirm('¿Estás seguro de que quieres eliminar este comentario?')) {
              var review = this.closest('.review-c');
              if (review) {
                  review.remove();
              }
          }
      });
  }
