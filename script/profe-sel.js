var tiemporestante;
var contador;


function ContFin () {
    return alert("El tiempo a terminado")
};


function temporizador (tiempo) {
    tiempoRestante = tiempo * 60; // Convertir horas a segundos
    var contenedor = document.getElementById('tiempo-restante');
   
    function actualizar () {
        if (tiempoRestante <= 0){
            return ContFin ();
        }
        var minutos = Math.floor(tiempoRestante / 60);
        var segundos = tiempoRestante % 60;

        contenedor.innerText = minutos + " : " + (segundos < 10 ? '0' : '') + segundos;
        
        tiempoRestante--;
        
        timer = setTimeout(actualizar, 1000);
    
    }
    actualizar() 
};  

document.getElementById("alargar-reserva").addEventListener("click", function () {
    document.getElementById("selector-horas").style.display = "block";
});

document.getElementById("confirmar-alargue").addEventListener("click", function () {
    var horasSeleccionadas = parseInt(document.getElementById("horas").value);
    
    temporizador(horasSeleccionadas); 
    document.getElementById("selector-horas").style.display = "none"; 
});

document.getElementById("cancelar-reserva").addEventListener("click", function(){
    clearTimeout(timer)
    document.getElementById('tiempo-restante').innerText = "00 : 00"; 
    alert('Reserva cancelada'); 
});
