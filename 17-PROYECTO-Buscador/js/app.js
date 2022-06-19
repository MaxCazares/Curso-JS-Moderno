// Variables
const marca = document.querySelector('#marca');
const anio = document.querySelector('#anio');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor para los resultados
const resultado = document.querySelector('#resultado');

// Año minimo y maximo
const max = new Date().getFullYear();
const min = max - 11;

// Generar un objeto con las búsqueda
const datosBusqueda = {
    marca : '',
    anio : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : ''
};

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);

    // Llena las opciones de años
    selectAnio();
});

// Event listeners para los select
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});
anio.addEventListener('change', e => {
    datosBusqueda.anio = e.target.value;
    filtrarAuto();
});
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
    filtrarAuto();
});
transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});


// Funciones
function mostrarAutos(autos){
    // Elimina el HTML previo
    limpiarHTML();
    autos.forEach(autos => {
        const {marca, modelo, anio, precio, puertas, color, transmision} = autos;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
            ${marca} - ${modelo} - ${anio} - $${precio} - ${puertas} puertas - ${color} - transmisión ${transmision}
        `;

        // Insertar en el html
        resultado.appendChild(autoHTML);
    });
}

// Limpiar HTML
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}

// Genera los años del select
function selectAnio(){
    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        anio.appendChild(opcion);
    }
}

// Función que filtra en base a la busqueda
function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarAnio)
    .filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas)
    .filter(filtrarColor).filter(filtrarTransmision);

    if(resultado.length){
        mostrarAutos(resultado);
    }else{
        noResultado();
    }
}

function noResultado(){
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados';
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto){
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    }
    return auto;
}

function filtrarAnio(auto){
    if(datosBusqueda.anio){
        return auto.anio === parseInt(datosBusqueda.anio);
    }
    return auto;
}

function filtrarMinimo(auto){
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo;
    }
    return auto;
}

function filtrarMaximo(auto){
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo;
    }
    return auto;
}

function filtrarPuertas(auto){
    if(datosBusqueda.puertas){
        return auto.puertas === parseInt(datosBusqueda.puertas);
    }
    return auto;
}

function filtrarColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    }
    return auto;
}

function filtrarTransmision(auto){
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    }
    return auto;
}