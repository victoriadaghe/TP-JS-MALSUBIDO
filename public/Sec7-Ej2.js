
//SECCIÓN 7

//Ejercicio 2
const boton = document.getElementById("boton-enviar");

boton.addEventListener("click", () => {
  const texto = document.getElementById("texto").value;
  alert("Has ingresado: " + texto);
})
