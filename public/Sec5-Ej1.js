//SECCIÓN 5
//Ejercicio 1
let persona = {
    nombre: "Luciano",
    edad: 20,
    ciudad: "Guaymallén",

    cambiarCiudad: function (ciudad2) {
        this.ciudad = ciudad2;
    }
};

console.log("Ciudad Original:");
console.log(persona);
persona.cambiarCiudad("Godoy Cruz");
console.log("Ciudad Actualizada:");
console.log(persona);