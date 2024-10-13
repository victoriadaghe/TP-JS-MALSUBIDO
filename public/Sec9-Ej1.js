


//SECCIÓN 9

const emailInput = document.getElementById('emailInput');
const emailForm = document.getElementById('emailForm');
const correoGuardado = document.getElementById('correoGuardado');
const eliminarCorreo = document.getElementById('eliminarCorreo');

function guardarCorreo(event) {
    event.preventDefault();
    const email = emailInput.value;
    localStorage.setItem('correoElectronico', email);
    mostrarCorreoGuardado();
}


function mostrarCorreoGuardado() {
    const emailGuardado = localStorage.getItem('correoElectronico');
    if (emailGuardado) {
        correoGuardado.innerHTML = `Correo guardado: ${emailGuardado}`;
    } else {
        correoGuardado.innerHTML = '';
    }
}

function eliminarCorreoGuardado() {
    localStorage.removeItem('correoElectronico');
    correoGuardado.innerHTML = '';
}


emailForm.addEventListener('submit', guardarCorreo);
eliminarCorreo.addEventListener('click', eliminarCorreoGuardado);


document.addEventListener('DOMContentLoaded', mostrarCorreoGuardado);
