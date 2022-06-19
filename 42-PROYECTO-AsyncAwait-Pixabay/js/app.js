const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const paginacionDiv = document.querySelector('#paginacion');

const registroPorPagina = 30;
let totalPaginas, iterador, paginaActual = 1;

window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(e){
    e.preventDefault();

    const termino = document.querySelector('#termino').value;

    if(termino === ''){
        mostrarAlerta('El rérmino de busqueda es obligatorio');
        return ;
    }

    buscarImagenes();
}

function mostrarAlerta(mensaje){
    const alerta = document.querySelector('.alertaExistente');
    if(!alerta) {
        const alerta = document.createElement('p');

        alerta.classList.add('bg-red-100', "border-red-400", "text-red-700", 
        "px-4", "py-3", "rounded",  "max-w-lg", "mx-auto", "mt-6", "text-center", 'alertaExistente');
    
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;
    
        formulario.appendChild(alerta);
    
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

async function buscarImagenes(){
    const termino = document.querySelector('#termino').value;
    const key = '25205766-33d1f7aad0ec1f5d11d7563b1';
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=${registroPorPagina}&page=${paginaActual}`;
    
    // fetch(url)
    //     .then(resultado => resultado.json())
    //     .then(imagenes => {
    //             totalPaginas = calcularPaginas(imagenes.totalHits);
    //             mostrarImagenes(imagenes.hits);
    //         }
    //     )

    try {
        const respuesta = await fetch(url);
        const imagenes = await respuesta.json();
        totalPaginas = calcularPaginas(imagenes.totalHits);
        mostrarImagenes(imagenes.hits);

    } catch (error) {
        console.error(error);
    }
}   

function mostrarImagenes(imagenes){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }

    imagenes.forEach(imagen => {
        const { likes, views, previewURL, largeImageURL } = imagen;
        resultado.innerHTML += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 mb-4 p-3">
                <div class="bg-white ">
                    <img class="w-full" src=${previewURL} alt={tags} />
                    <div class="p-4">
                        <p class="card-text">${likes} Me Gusta</p>
                        <p class="card-text">${views} Vistas </p>
        
                        <a href=${largeImageURL} 
                        rel="noopener noreferrer" 
                        target="_blank" class="bg-blue-800 w-full p-1 block mt-5 rounded text-center font-bold uppercase hover:bg-blue-500 text-white">Ver Imagen</a>
                    </div>
                </div>
            </div>
        `;
    });

    while(paginacionDiv.firstChild){
        paginacionDiv.removeChild(paginacionDiv.firstChild);
    }

    imprimirPaginador();
}

function calcularPaginas(total){
    return parseInt(Math.ceil(total / registroPorPagina));
}

function *crearPaginador(total){
    for(let i = 1; i <= total; i++){
        yield i;
    }
}

function imprimirPaginador(){
    iterador = crearPaginador(totalPaginas);
    while(true){
        const {value, done} = iterador.next();
        if(done) 
            return;
        
        const botonSiguiente = document.createElement('a');
        botonSiguiente.href = "#";
        botonSiguiente.dataset.pagina = value;
        botonSiguiente.textContent = value;
        botonSiguiente.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'mx-auto', 'mb-10', 'font-bold', 'rounded');
        
        botonSiguiente.onclick = () => {
            paginaActual = value;
            buscarImagenes();
        }

        paginacionDiv.appendChild(botonSiguiente);
    }
}