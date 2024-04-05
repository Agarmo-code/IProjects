"use strict"

document.addEventListener("DOMContentLoaded", function() {
    let dropArea = document.querySelector(".drop-area")
    let dragText = dropArea.querySelector("h2");
    let button = dropArea.querySelector("button");
    let input = dropArea.querySelector("#input-file");
    let file;
    
    button.addEventListener("click", e => {
        input.click();
    })

    input.addEventListener("change", e => {
        file = this.file;
        dropArea.classList.add("active");
        showFile(file);
        dropArea.classList.remove("active");
    });

    dropArea.addEventListener("dragover", e => {
        e.preventDefault();
        dropArea.classList.add("active");
        dragText.textContent = "Suelta para subir la foto";
    });
    
    dropArea.addEventListener("dragleave", e => {
        e.preventDefault();
        dropArea.classList.remove("active");
        dragText.textContent = "Arrastra y suelta tu imágen";

    });

    dropArea.addEventListener("drop", (e) => {
        e.preventDefault();
        file = e.dataTransfer.files;
        showFile(file);
        dropArea.classList.remove("active");
        dragText.textContent = "Buena elección, sales fenomenal... supongo";
    });

    function showFile(file){
        if(file.length === undefined){
            processFile(file);
        } else {
            alert("No puedes subir más de una foto de perfil");
        }
    }

    function processFile(file){
        let docType = file.type;
        let validExtensions = ["image/jpg", "image/png"];

        if (validExtensions.includes(docType)) {
            let fileReader = new FileReader();
            let id = `file-${Math.random().toString(32).substring(7)}`;
            

        } else {
            alert("Recuerda, sólo ficheros .jpg o .png");
        }
    }
});