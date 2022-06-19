const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima)
});

function buscarClima(e) {
    e.preventDefault();

    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if (ciudad === '' || pais === '') {
        mostrarError('Ambos campos son obligatorios');
        return;
    }

    consultarAPI(ciudad, pais);
}

function mostrarError(mensaje) {
    const alerta = document.querySelector('.ExisteAlerta');

    if(!alerta){
        const alerta = document.createElement('div');
        
        alerta.classList.add('bg-red-100', "border-red-400", "text-red-700", "px-4", "py-3", 
        "rounded", "relative", "max-w-md", "mx-auto", "mt-6", "text-center", "ExisteAlerta");
    
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;
    
        container.appendChild(alerta);
    
        setTimeout(() => {
            alerta.remove();
        }, 5000);
    }
}

function consultarAPI(ciudad, pais){
    const appID = '15cdafaaf7b8a2dec59177d059afd02c';
    // const appID = '9efe7875321d81a0c9a1b81b4cc7bc50';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;

    console.log(url);
}