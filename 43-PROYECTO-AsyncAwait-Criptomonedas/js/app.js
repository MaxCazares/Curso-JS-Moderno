const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedasSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const obtenerCriptomonedas = criptomonedas => new Promise(resolve =>{
    resolve(criptomonedas)
});

const objBusqueda = {
    moneda: '',
    criptomoneda: ''
}

window.onload = () => {
    consultarCriptomonedas();

    formulario.addEventListener('submit', cotizarCriptos);

    criptomonedasSelect.addEventListener('change', leerValor);
    monedasSelect.addEventListener('change', leerValor);
}

async function consultarCriptomonedas(){
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    // fetch(url)
    //     .then(respuesta => respuesta.json())
    //     .then(resultado => obtenerCriptomonedas(resultado.Data))
    //     .then(criptomonedas => selectCriptomonedas(criptomonedas))

    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        const criptomonedas = await obtenerCriptomonedas(resultado.Data);
        selectCriptomonedas(criptomonedas)
    } catch (error) {
        console.error(error);
    }
}

function selectCriptomonedas(criptomonedas){
    criptomonedas.forEach(criptomoneda => {
        const {FullName, Name} = criptomoneda.CoinInfo;
        
        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;
        criptomonedasSelect.appendChild(option);
    });
}

function cotizarCriptos(e){
    e.preventDefault();

    const {moneda, criptomoneda} = objBusqueda;
    if(moneda === '' || criptomoneda === ''){
        mostrarAlerta('Ambos campos son obligatorios');
        return ;
    }

    consultarAPI();
}

function leerValor(e){
    objBusqueda[e.target.name] = e.target.value;
}

function mostrarAlerta(mensaje){
    const existeError = document.querySelector('.error');

    if(!existeError){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error');
        divMensaje.textContent = mensaje;
    
        formulario.appendChild(divMensaje);
    
        setTimeout( () => {
            divMensaje.remove();
        }, 3000);
    }
}

async function consultarAPI(){
    const {moneda, criptomoneda} = objBusqueda;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    
    mostrarSpinner();

    // fetch(url)
    //     .then(respuesta => respuesta.json())
    //     .then(res => mostrarcotizacionHTML(res.DISPLAY[criptomoneda][moneda]))
    
    try {           
        const respuesta = await fetch(url);
        const res = await respuesta.json();
        mostrarcotizacionHTML(res.DISPLAY[criptomoneda][moneda])

    } catch (error) {
        console.error(error);
    }

}

function mostrarcotizacionHTML(cotizacion){
    limpiarHTML();

    const  { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;

    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `El Precio es: <span> ${PRICE} </span>`;

    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `<p>Precio más alto del día: <span>${HIGHDAY}</span> </p>`;

    const precioBajo = document.createElement('p');
    precioBajo.innerHTML = `<p>Precio más bajo del día: <span>${LOWDAY}</span> </p>`;

    const ultimasHoras = document.createElement('p');
    ultimasHoras.innerHTML = `<p>Variación últimas 24 horas: <span>${CHANGEPCT24HOUR}%</span></p>`;

    const ultimaActualizacion = document.createElement('p');
    ultimaActualizacion.innerHTML = `<p>Última Actualización: <span>${LASTUPDATE}</span></p>`;

    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHoras);
    resultado.appendChild(ultimaActualizacion);

    formulario.appendChild(resultado);
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function mostrarSpinner() {
    limpiarHTML();

    const spinner = document.createElement('div');
    spinner.classList.add('spinner');

    spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>    
    `;

    resultado.appendChild(spinner);
}