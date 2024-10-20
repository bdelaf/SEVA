var tiemporestante;
var contador;
var timer;

function ContFin() {
    alert("El tiempo ha terminado");
}

function temporizador(tiempo) {
    tiempoRestante = tiempo * 60; // Convertir horas a segundos
    var contenedor = document.getElementById('tiempo-restante');
    
    actualizar();

    function actualizar() {
        if (tiempoRestante <= 0) {
            ContFin();
            return;
        }
        var minutos = Math.floor(tiempoRestante / 60);
        var segundos = tiempoRestante % 60;

        contenedor.innerText = minutos + " : " + (segundos < 10 ? '0' : '') + segundos;
        
        tiempoRestante--;
        
        timer = setTimeout(actualizar, 1000);
    }
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

function desactivarCheckboxes() {
    var checkboxes = document.querySelectorAll('input[name="materia"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                checkboxes.forEach(function(cb) {
                    if (cb !== checkbox) cb.checked = false; // Desmarcar otros checkboxes
                });
                document.querySelector('.materia').innerText = "Materia: " + this.value; // Mostrar la materia seleccionada
            }
        });
    });
}

// Agregar los event listeners
document.getElementById("alargar-reserva").addEventListener("click", mostrarSelectorHoras);
document.getElementById("confirmar-alargue").addEventListener("click", confirmarAlargue);
document.getElementById("cancelar-reserva").addEventListener("click", cancelarReserva);
desactivarCheckboxes();
