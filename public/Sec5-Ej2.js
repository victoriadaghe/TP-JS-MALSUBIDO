//SECCIÓN 5



//Ejercicio  2
let libro = {
    titulo: "Don Quijote",
    autor: "Miguel de Cervantes",
    año: 1605,
    esAntiguo: function() {
        let añoActual = new Date().getFullYear();
        return (añoActual - this.año) > 10; // Retorna true si el libro es antiguo
    }
}
// Muestra el resultado en la consola
console.log("El libro:", libro.titulo, "es Antiguo:", libro.esAntiguo());