var tiempoRestante; // Corrige el nombre de la variable
var timer; // Mover la declaración de timer aquí para hacerlo accesible

function ContFin() {
    alert("El tiempo ha terminado");
}

function temporizador(tiempo) {
    tiempoRestante = tiempo * 60; // Convertir horas a segundos
    var contenedor = document.getElementById('tiempo-restante');

    function actualizar() {
        if (tiempoRestante <= 0) {
            ContFin(); // Llama a ContFin sin return
            return; // Asegúrate de salir de la función
        }

        var minutos = Math.floor(tiempoRestante / 60);
        var segundos = tiempoRestante % 60;

        contenedor.innerText = minutos + " : " + (segundos < 10 ? '0' : '') + segundos;

        tiempoRestante--;
        timer = setTimeout(actualizar, 1000);
    }
    actualizar();
}

document.getElementById("alargar-reserva").addEventListener("click", function () {
    document.getElementById("selector-horas").style.display = "block";
});

document.getElementById("confirmar-alargue").addEventListener("click", function () {
    var horasSeleccionadas = parseInt(document.getElementById("horas").value);

    temporizador(horasSeleccionadas);
    document.getElementById("selector-horas").style.display = "none";
});

document.getElementById("cancelar-reserva").addEventListener("click", function () {
    clearTimeout(timer);
    document.getElementById('tiempo-restante').innerText = "00 : 00";
    alert('Reserva cancelada');
});


// Obtener todos los checkboxes
var checkboxes;
var materiaSeleccionada = document.getElementById('materia-seleccionada');

// Función para manejar el cambio de selección
function manejarCambio(event) {
    var checkbox = event.target;
    desmarcarOtros(checkbox);
    actualizarMateria(checkbox);
}

// Función para desmarcar las otras opciones
function desmarcarOtros(checkboxSeleccionado) {
    checkboxes.forEach(function(box) {
        if (box !== checkboxSeleccionado) {
            box.checked = false; // Desmarca las otras opciones
        }
    });
}

// Función para actualizar la materia seleccionada
function actualizarMateria(checkbox) {
    materiaSeleccionada.textContent = checkbox.checked ? checkbox.value : '';
}

// Función para añadir el evento 'change' a cada checkbox
function inicializarCheckboxes() {
    checkboxes = document.querySelectorAll('.materia-selector input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', manejarCambio);
    });
}


document.addEventListener('DOMContentLoaded', inicializarCheckboxes )
