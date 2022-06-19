const cargarJsonArray = document.querySelector('#cargarJSONArray');
cargarJsonArray.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    const url = 'data/empleados.json';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => mostrarHTML(datos))
}

function mostrarHTML(empleados){
    const contenido = document.querySelector('.contenido');
    let html = ``;

    empleados.forEach(empleado => {
        const {id, nombre, empresa, trabajo} = empleado;

        html += `
            <p>Empleado: ${nombre}</p>
            <p>Empresa: ${empresa}</p>
            <p>Trabajo: ${trabajo}</p>
            <p>ID: ${id}</p>
        `;

        contenido.innerHTML = html;
    });
}