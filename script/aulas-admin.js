document.addEventListener("DOMContentLoaded", inicio);

function inicio() {
    var eliminarLinks = document.querySelectorAll(".aula a:not(.edit-aula)");
    var editLinks = document.querySelectorAll(".edit-aula");
    var addLinks = document.querySelectorAll(".edit-link");

    asignarEventosEliminar(eliminarLinks);
    asignarEventosEdicion(editLinks);
    asignarEventosAgregar(addLinks);
}

function asignarEventosEliminar(links) {
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", eliminarAula);
    }
}

function eliminarAula(event) {
    event.preventDefault();
    var confirmacion = confirm("¿Estás seguro de que deseas eliminar esta aula?");
    if (confirmacion) {
        var aula = event.target.parentElement;
        aula.remove();
    } else {
        alert("Acción cancelada");
    }
}

function asignarEventosEdicion(links) {
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", habilitarEdicion);
    }
}

function habilitarEdicion(event) {
    event.preventDefault();
    var editLink = event.target;
    var aula = editLink.previousElementSibling;
    var aulaTexto = aula.textContent;

    var input = document.createElement("input");
    input.type = "text";
    input.value = aulaTexto;
    aula.innerHTML = "";  
    aula.appendChild(input);

    editLink.textContent = "Guardar";
    editLink.classList.add("save-link");

    editLink.removeEventListener("click", habilitarEdicion);
    editLink.addEventListener("click", functionGuardarAula);
}

function functionGuardarAula(event) {
    event.preventDefault();
    var editLink = event.target;
    var aula = editLink.previousElementSibling;
    var input = aula.querySelector("input");

    if (input && input.value.trim() !== "") {
        aula.textContent = input.value;

        editLink.textContent = "Editar";
        editLink.classList.remove("save-link");

        var eliminarLink = document.createElement("a");
        eliminarLink.href = "";
        eliminarLink.textContent = "Eliminar";
        aula.appendChild(eliminarLink);

        eliminarLink.addEventListener("click", eliminarAula);

        editLink.removeEventListener("click", functionGuardarAula);
        editLink.addEventListener("click", habilitarEdicion);
    } else {
        alert("El nombre del aula no puede estar vacío.");
    }
}

function asignarEventosAgregar(links) {
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", agregarAula);
    }
}

function agregarAula(event) {
    event.preventDefault();
    var columna = event.target.parentElement;
    var nuevaAula = document.createElement("div");
    nuevaAula.classList.add("aula");

    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Nombre del Aula";

    var guardarAulaLink = document.createElement("a");
    guardarAulaLink.href = "";
    guardarAulaLink.classList.add("save-link");
    guardarAulaLink.textContent = "Guardar";

    nuevaAula.appendChild(input);
    nuevaAula.appendChild(guardarAulaLink);
    columna.insertBefore(nuevaAula, event.target);

    guardarAulaLink.addEventListener("click", functionGuardarNuevaAula);
}

function functionGuardarNuevaAula(event) {
    event.preventDefault();
    var guardarAulaLink = event.target;
    var nuevaAula = guardarAulaLink.parentElement;
    var input = nuevaAula.querySelector("input");
    var aulaTexto = input.value;

    if (aulaTexto.trim() !== "") {
        nuevaAula.innerHTML = '<p>' + aulaTexto + '</p><a href="" class="edit-aula">Editar</a> <a href="#">Eliminar</a>';

        var newEditAula = nuevaAula.querySelector(".edit-aula");
        var newEliminarAula = nuevaAula.querySelector("a:not(.edit-aula)");

        asignarEventosEdicion([newEditAula]);
        asignarEventosEliminar([newEliminarAula]);
    } else {
        alert("El nombre del aula no puede estar vacío");
    }
}
