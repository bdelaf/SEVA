var tiempoRestante;
var timer;

function ContFin() {
    alert("El tiempo ha terminado");
}


function temporizador(tiempo) {
    tiempoRestante = tiempo * 60; 
    var contenedor = document.getElementById('tiempo-restante');
    actualizar(contenedor);
}


function actualizar(contenedor) {
    if (tiempoRestante <= 0) {
        ContFin();
        return;
    }

    var minutos = Math.floor(tiempoRestante / 60);
    var segundos = tiempoRestante % 60;

    contenedor.innerText = minutos + " : " + (segundos < 10 ? '0' : '') + segundos;

    tiempoRestante--;
    timer = setTimeout(function() {
        actualizar(contenedor);
    }, 1000);
}


function mostrarSelectorHoras() {
    document.getElementById("selector-horas").style.display = "block";
}


function confirmarAlargue() {
    var horasSeleccionadas = parseInt(document.getElementById("horas").value);
    temporizador(horasSeleccionadas);
    document.getElementById("selector-horas").style.display = "none";
}


function cancelarReserva() {
    clearTimeout(timer);
    tiempoRestante = 0;
    document.getElementById('tiempo-restante').innerText = "00 : 00";
    alert('Reserva cancelada');
}


document.getElementById("alargar-reserva").addEventListener("click", mostrarSelectorHoras);
document.getElementById("confirmar-alargue").addEventListener("click", confirmarAlargue);
document.getElementById("cancelar-reserva").addEventListener("click", cancelarReserva);
