document.addEventListener("DOMContentLoaded", cancelar_reserva);
document.addEventListener("DOMContentLoaded", cerrarcesion);

function cancelar_reserva() {
    var btn_cancelar = document.getElementsByClassName("cancelar-reserva");
    for (var i = 0; i < btn_cancelar.length; i++) {
        btn_cancelar[i].addEventListener("click", function() {
            var confirmacion = confirm("¿Seguro que quieres cancelar esta reserva?");
            if (confirmacion) {
                var reserva = this.parentElement;
                reserva.remove();
            }
        });
    }
}


function cerrarcesion() {
    let botoncs = document.querySelector(".cerrarcesion")
    botoncs.addEventListener("click", confirmacion)
}

function confirmacion() {
    var confirmacion = confirm("¿Seguro que quieres cerrar cesión?");
    if (confirmacion) {
        window.location.href = "index.html"
    }
}
