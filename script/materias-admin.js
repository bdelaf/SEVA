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
        links[i].addEventListener("click", eliminarMateria);
    }
}

function eliminarMateria(event) {
    event.preventDefault();
    var confirmacion = confirm("¿Estás seguro de que deseas eliminar esta materia?");
    if (confirmacion) {
        var materia = event.target.parentElement;
        materia.remove();
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
    var materia = editLink.previousElementSibling;
    var materiaTexto = materia.textContent;

    var input = document.createElement("input");
    input.type = "text";
    input.value = materiaTexto;
    materia.innerHTML = "";  
    materia.appendChild(input);

    editLink.textContent = "Guardar";
    editLink.classList.add("save-link");

    editLink.removeEventListener("click", habilitarEdicion);
    editLink.addEventListener("click", functionGuardarMateria);
}

function functionGuardarMateria(event) {
    event.preventDefault();
    var editLink = event.target;
    var materia = editLink.previousElementSibling;
    var input = materia.querySelector("input");

    if (input && input.value.trim() !== "") {
        materia.textContent = input.value;

        editLink.textContent = "Editar";
        editLink.classList.remove("save-link");

        var eliminarLink = document.createElement("a");
        eliminarLink.href = "";
        eliminarLink.textContent = "Eliminar";
        aula.appendChild(eliminarLink);

        eliminarLink.addEventListener("click", eliminarMateria);

        editLink.removeEventListener("click", functionGuardarMateria);
        editLink.addEventListener("click", habilitarEdicion);
    } else {
        alert("El nombre de la materia no puede estar vacío.");
    }
}

function asignarEventosAgregar(links) {
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", agregarMateria);
    }
}

function agregarMateria(event) {
    event.preventDefault();
    var columna = event.target.parentElement;
    var nuevaMateria = document.createElement("div");
    nuevaAula.classList.add("aula");

    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Nombre de la materia";

    var guardarAulaLink = document.createElement("a");
    guardarMateriaLink.href = "";
    guardarMateriaLink.classList.add("save-link");
    guardarMateriaLink.textContent = "Guardar";

    nuevaMateria.appendChild(input);
    nuevaMateria.appendChild(guardarAulaLink);
    columna.insertBefore(nuevaMateria, event.target);

    guardarMateriaLink.addEventListener("click", functionGuardarNuevaMateria);
}

function functionGuardarNuevaMateria(event) {
    event.preventDefault();
    var guardarMateriaLink = event.target;
    var nuevaMateria = guardarMateriaLink.parentElement;
    var input = nuevaMateria.querySelector("input");
    var materiaTexto = input.value;

    if (materiaTexto.trim() !== "") {
        nuevaMateria.innerHTML = '<p>' + materiaTexto + '</p><a href="" class="edit-aula">Editar</a> <a href="#">Eliminar</a>';

        var newEditMateria = nuevaAula.querySelector(".edit-aula");
        var newEliminarMateria = nuevaAula.querySelector("a:not(.edit-aula)");

        asignarEventosEdicion([newEditMateria]);
        asignarEventosEliminar([newEliminarMateria]);
    } else {
        alert("El nombre de la materia no puede estar vacío");
    }
}
