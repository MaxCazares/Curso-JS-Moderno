const cargarJson = document.querySelector('#cargarJSON');
cargarJson.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    const url = 'data/empleado.json';

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos => mostrarHTML(datos))
}

function mostrarHTML({empresa, id, nombre, trabajo}){
    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
        <p>Empleado: ${nombre}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
        <p>ID: ${id}</p>
    `;
}