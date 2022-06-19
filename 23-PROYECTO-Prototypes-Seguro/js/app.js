function Seguro(marca, anio, tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo; 
}

Seguro.prototype.cotizar = function(){
    // Americano 1.15
    // Asiatico = 1.05
    // Europeo = 1.35

    let cantidad;
    const base = 2000;

    switch(this.marca){
        case '1':
            cantidad = base * 1.15;
        break;
        case '2':
            cantidad = base * 1.05;
        break;
        case '3':
            cantidad = base * 1.35;
        break;
        default:
            break;
    }

    const diferencia = new Date().getFullYear() - this.anio;
    cantidad -= ((diferencia * 0.03) * cantidad);

    // básico = 1.30
    // completo = 1.50
    if(this.tipo === 'basico'){
        cantidad *= 1.30;
    }else{
        cantidad *= 1.50;
    }

    return cantidad;
}

function UI(){}

UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
        min = max - 20;

    const selectYear = document.querySelector('#year');

    for(let i = max; i >= min; i--){
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.append(option);
    }
}

UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('div');
    if(tipo == 'error'){
        div.classList.add('error');
    }else{
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;
    
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));
    

    setTimeout(() => {
        div.remove();
    }, 3000);
}

UI.prototype.mostarResultado = (total, seguro) => {
    const {marca, anio, tipo} = seguro;
    let nombreMarca;
    switch(marca){
        case '1':
            nombreMarca = 'Americano';
            break;
        case '2':
            nombreMarca = 'Asiatico';
            break;
        case '3':
            nombreMarca = 'Europeo';
            break;
    }
    
    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
        <p class="header"> Tu resumen </p>
        <p class="font-bold">Total: <span class="font-normal"> ${nombreMarca} </span> </p>
        <p class="font-bold">Año: <span class="font-normal"> ${anio} </span> </p>
        <p class="font-bold">Tipo: <span class="font-normal capitalize"> ${tipo} </span> </p>
        <p class="font-bold">Anio: <span class="font-normal"> $${total} </span> </p>
    `;
    const resultadoDiv = document.querySelector('#resultado');
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none';
        resultadoDiv.appendChild(div);
    
    }, 3000);
}

const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones();
});

eventListener();

function eventListener(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e){
    e.preventDefault();
    
    const marca = document.querySelector('#marca').value;
    const anio = document.querySelector('#year').value;
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    
    if(marca === '' || anio === '' || tipo === ''){
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
    }else{
        ui.mostrarMensaje('Cotizando...', 'correcto');

        const resultado = document.querySelector('#resultado div');
        if(resultado != null){
            resultado.remove();
        }

        const seguro = new Seguro(marca, anio, tipo);
        const total = seguro.cotizar();
        ui.mostarResultado(total, seguro);
    }
}