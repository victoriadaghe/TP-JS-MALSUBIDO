//SECCIÓN 8


//Ejercicio 2

 // Seleccionamos los elementos
 const campoTexto = document.getElementById("campo-texto");
 const deshabilitarBtn = document.getElementById("deshabilitar-btn");
 const habilitarBtn = document.getElementById("habilitar-btn");

 // Evento para deshabilitar el campo de texto
 deshabilitarBtn.addEventListener("click", () => {
     campoTexto.disabled = true;
 });

 // Evento para habilitar el campo de texto
 habilitarBtn.addEventListener("click", () => {
     campoTexto.disabled = false;
 });