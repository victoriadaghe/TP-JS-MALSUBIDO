//SECCIÓN 7
//Ejercicio 1

const button = document.getElementById("boton-color");
button.addEventListener("click", () => {
  const parrafos = document.querySelectorAll('p');
  parrafos.forEach(p => {
    p.classList.add('blue-text');
  });
});
