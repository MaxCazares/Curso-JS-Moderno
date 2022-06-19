const cargarAPI = document.querySelector('#cargarAPI');
cargarAPI.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    const url = 'http://picsum.photos/list';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => mostrarHTML(datos))

    function mostrarHTML(datos){
        const contenido = document.querySelector('.contenido');
        let html = ``;

        datos.forEach(perfil => {
            const {author, post_url} = perfil;

            html += `
                <p>Autor: ${author}</p>
                <a href= "${post_url}" target="_blank">Ver Imagen </a>
                `;
            });
        contenido.innerHTML = html;
    }
}