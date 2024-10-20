var tiemporestante;
var contador;

document.getElementById("materia-select").addEventListener("change", mostrarMateria);
document.getElementById("alargar-reserva").addEventListener("click", mostrarSelectorHoras);
document.getElementById("confirmar-alargue").addEventListener("click", confirmarAlargue);
document.getElementById("cancelar-reserva").addEventListener("click", cancelarReserva);

function ContFin() {
    alert("El tiempo ha terminado");
}

function temporizador(tiempo) {
    tiemporestante = tiempo * 60; // Convertir horas a segundos
    var contenedor = document.getElementById('tiempo-restante');
    actualizar(contenedor);
}

function actualizar(contenedor) {
    if (tiemporestante <= 0) {
        return ContFin();
    }
    var minutos = Math.floor(tiemporestante / 60);
    var segundos = tiemporestante % 60;

    contenedor.innerText = minutos + " : " + (segundos < 10 ? '0' : '') + segundos;
    
    tiemporestante--;
    
    timer = setTimeout(function() { actualizar(contenedor); }, 1000);
}

function mostrarMateria() {
    var select = document.getElementById("materia-select");
    var materiaNombre = document.getElementById("materia-nombre");
    materiaNombre.textContent = select.value ? select.value : "Ninguna";
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
    document.getElementById('tiempo-restante').innerText = "00 : 00"; 
    alert('Reserva cancelada'); 
}

