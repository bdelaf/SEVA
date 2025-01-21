document.addEventListener("DOMContentLoaded", function () {
    // Referencias a elementos importantes
    var addLink = document.querySelector(".edit-link");
    var tableBody = document.querySelector(".tabla-materias tbody");

    // Agregar evento al botón "Agregar Materia"
    addLink.addEventListener("click", function (event) {
        event.preventDefault();
        agregarMateria();
    });

    // Agregar funcionalidad básica inicial a los botones existentes
    var editLinks = document.querySelectorAll(".edit-aula");
    var deleteLinks = document.querySelectorAll(".elim-aula");

    for (var i = 0; i < editLinks.length; i++) {
        editLinks[i].addEventListener("click", function (event) {
            event.preventDefault();
            editarMateria(event.target);
        });
    }

    for (var i = 0; i < deleteLinks.length; i++) {
        deleteLinks[i].addEventListener("click", function (event) {
            event.preventDefault();
            eliminarMateria(event.target);
        });
    }

    // Función para agregar una nueva materia
    function agregarMateria() {
        var nuevaMateria = prompt("Ingrese el nombre de la nueva materia:");
        if (nuevaMateria && nuevaMateria.trim() !== "") {
            // Crear nueva fila
            var nuevaFila = document.createElement("tr");

            // Crear celda con el nombre de la materia
            var celdaMateria = document.createElement("td");
            celdaMateria.textContent = nuevaMateria;
            nuevaFila.appendChild(celdaMateria);

            // Crear celda con las acciones (Editar y Eliminar)
            var celdaAcciones = document.createElement("td");
            var editLink = document.createElement("a");
            editLink.href = "#";
            editLink.textContent = "Editar";
            editLink.className = "edit-aula";
            editLink.addEventListener("click", function (event) {
                event.preventDefault();
                editarMateria(event.target);
            });

            var deleteLink = document.createElement("a");
            deleteLink.href = "#";
            deleteLink.textContent = "Eliminar";
            deleteLink.className = "elim-aula";
            deleteLink.addEventListener("click", function (event) {
                event.preventDefault();
                eliminarMateria(event.target);
            });

            celdaAcciones.appendChild(editLink);
            celdaAcciones.appendChild(document.createTextNode(" "));
            celdaAcciones.appendChild(deleteLink);

            nuevaFila.appendChild(celdaAcciones);

            // Agregar la fila a la tabla
            tableBody.appendChild(nuevaFila);
        } else {
            alert("Debe ingresar un nombre válido para la materia.");
        }
    }

    // Función para editar una materia
    function editarMateria(link) {
        var fila = link.parentNode.parentNode;
        var celdaMateria = fila.children[0];
        var materiaActual = celdaMateria.textContent;

        var nuevaMateria = prompt("Editar nombre de la materia:", materiaActual);
        if (nuevaMateria && nuevaMateria.trim() !== "") {
            celdaMateria.textContent = nuevaMateria;
        } else {
            alert("Debe ingresar un nombre válido.");
        }
    }

    // Función para eliminar una materia
    function eliminarMateria(link) {
        var fila = link.parentNode.parentNode;
        var confirmar = confirm("¿Está seguro de que desea eliminar esta materia?");
        if (confirmar) {
            fila.remove();
        }
    }
});
