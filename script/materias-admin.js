// ADMINISTRADOR: AGREGAR, EDITAR O ELIMINAR MATERIAS //

document.addEventListener("DOMContentLoaded", inicializar);


function inicializar() {
  const materiasColumn = document.querySelector(".materias-column");
  const addMateriaButton = document.querySelector(".add-materia-button");

  materiasColumn.addEventListener("click", manejarClickMateria);
  addMateriaButton.addEventListener("click", agregarMateria);
}


// Función para manejar el clic en las materias (editar o eliminar)
function manejarClickMateria(event) {
  if (event.target.classList.contains("edit-button")) {
    editarMateria(event);
  } else if (event.target.classList.contains("delete-button")) {
    eliminarMateria(event);
  }
}


// Función para editar una materia
function editarMateria(event) {
  event.preventDefault();
  const materiaItem = event.target.closest(".materia-item");
  const materiaName = materiaItem.querySelector("p").innerText;
  const newMateriaName = prompt("Editar materia:", materiaName);

  if (newMateriaName) {
    materiaItem.querySelector("p").innerText = newMateriaName;
  }
}


// Función para eliminar una materia
function eliminarMateria(event) {
  event.preventDefault();
  const materiaItem = event.target.closest(".materia-item");
  const confirmacion = confirm("¿Estás seguro de que deseas eliminar esta materia?");

  if (confirmacion) {
    const materiasColumn = materiaItem.parentElement;
    materiasColumn.removeChild(materiaItem);
  }
}


// Función para agregar una nueva materia
function agregarMateria(event) {
  event.preventDefault();
  const newMateriaName = prompt("Nombre de la nueva materia:");

  if (newMateriaName) {
    const newMateriaItem = document.createElement("div");
    newMateriaItem.classList.add("materia-item");
    newMateriaItem.innerHTML = `
      <p>${newMateriaName}</p>
      <div class="materia-actions">
        <a href="#" class="edit-button">Editar</a>
        <a href="#" class="delete-button">Eliminar</a>
      </div>
    `;
    const materiasColumn = document.querySelector(".materias-column");
    const addMateriaButton = document.querySelector(".add-materia-button");
    materiasColumn.insertBefore(newMateriaItem, addMateriaButton);
  }
}

