import * as UI from './interfaz.js';
import API from './api.js';

UI.formulariobuscar.addEventListener('submit', buscarCancion);

function buscarCancion(e){
    e.preventDefault();

    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if(artista === '' || cancion === ''){
        UI.divMensajes.textContent = 'Ambos campos son obligatorio';
        UI.divMensajes.classList.add('error');

        setTimeout(() => {
            UI.divMensajes.remove();
        }, 5000);

        return ;
    }

    const busqueda = new API(artista, cancion);
    busqueda.consultarAPI();
    
}