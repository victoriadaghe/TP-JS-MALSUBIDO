

let elementos = document.querySelectorAll("#mi-lista li")
elementos.forEach((elemento)=>{
  elemento.addEventListener("click",() =>{
    console.log("Se hizo click en: " + elemento.textContent);
  })
})