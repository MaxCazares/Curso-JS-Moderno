// Eventos que suceden en el formulario

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
     // Previene la acción por defecto
    e.preventDefault();
    console.log(e.target.action);
};