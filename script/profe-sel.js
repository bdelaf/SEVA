// RESERVAR AULAS PROFESOR //

var timer; // Variable para almacenar el temporizador
var tiempoRestante; // Variable para el tiempo restante

// Función que inicia la cuenta regresiva
function iniciarCuentaRegresiva(tiempo) {
    tiempoRestante = tiempo * 60 * 60; // Convertir horas a segundos
    var display = document.getElementById('tiempo-restante');

    // Actualiza el temporizador cada segundo
    timer = setInterval(function () {
        if (tiempoRestante <= 0) {
            clearInterval(timer);
            display.innerText = "El tiempo ha terminado";
            return; // Sale de la función
        }

        // Calcula minutos y segundos restantes
        var minutos = Math.floor(tiempoRestante / 60);
        var segundos = tiempoRestante % 60;

        // Muestra el tiempo restante
        display.innerText = minutos + " : " + (segundos < 10 ? '0' : '') + segundos;
        tiempoRestante--; // Disminuye el tiempo restante
    }, 1000); // Ejecuta cada segundo
}

// Manejador de evento para el botón de alargar reserva
document.getElementById('alargar-reserva').addEventListener('click', function () {
    // Muestra el bloque de selección de horas
    document.getElementById('selector-horas').style.display = 'block';
});

// Manejador de evento para el botón de confirmar alargue
document.getElementById('confirmar-alargue').addEventListener('click', function () {
    var horasSeleccionadas = parseInt(document.getElementById('horas').value);
    if (isNaN(horasSeleccionadas) || horasSeleccionadas < 0) {
        alert('Por favor, selecciona un tiempo válido.'); // Validación de tiempo
        return;
    }
    iniciarCuentaRegresiva(horasSeleccionadas); // Inicia la cuenta regresiva
    document.getElementById('selector-horas').style.display = 'none'; // Oculta el selector después de confirmar
});

// Manejador de evento para el botón de cancelar reserva
document.getElementById('cancelar-reserva').addEventListener('click', function () {
    clearInterval(timer); // Cancela la cuenta regresiva
    document.getElementById('tiempo-restante').innerText = "00 : 00"; // Resetea el tiempo mostrado
    alert('Reserva cancelada'); // Muestra la notificación
});
