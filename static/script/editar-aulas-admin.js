// Inicialización al cargar el DOM
document.addEventListener("DOMContentLoaded", init);

function init() {
    const inputFile = document.getElementById("foto-aula");
    const imgPlaceholder = document.getElementById("image-preview-placeholder");

    if (inputFile) {
        addImageUploadListener(inputFile, imgPlaceholder);
    }
}

function addImageUploadListener(inputFile, imgPlaceholder) {
    inputFile.addEventListener("change", () => handleFileUpload(inputFile, imgPlaceholder));
}

function handleFileUpload(inputFile, imgPlaceholder) {
    const file = getSelectedFile(inputFile);
    
    if (file) {
        readFileAsDataURL(file, (imageSrc) => updateImagePlaceholder(imgPlaceholder, imageSrc));
    }
}

function getSelectedFile(inputFile) {
    return inputFile.files && inputFile.files[0] ? inputFile.files[0] : null;
}

function readFileAsDataURL(file, callback) {
    const reader = new FileReader();

    reader.onload = () => {
        if (typeof callback === "function") {
            callback(reader.result);
        }
    };

    reader.readAsDataURL(file);
}

function updateImagePlaceholder(imgPlaceholder, imageSrc) {
    imgPlaceholder.src = imageSrc;
}
