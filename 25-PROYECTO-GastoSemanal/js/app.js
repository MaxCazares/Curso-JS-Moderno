// Variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

// Eventos
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agregarGasto);
}

// Classes
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }

    calcularRestante(){
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;
        // console.log(this.restante);
    }

    eliminarGasto(id){       
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
        this.calcularRestante()
    }
}

class UI{
    insertarPresupuesto(P){
        const {presupuesto, restante} = P;
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(alerta, tipo){
        
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');
        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }

        divMensaje.textContent = alerta;
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

    mostrarGastos(gastos){
        this.limpiarHTML();

        gastos.forEach(gasto => {
            const {cantidad, nombre, id} = gasto;

            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id = id;
            
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary, badge-pill">$${cantidad}</span>`;

            const boton = document.createElement('button');
            boton.className = 'btn btn-danger borrar-gasto';
            boton.innerHTML = `Borrar &times`;
            boton.onclick = () => {
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(boton);

            gastoListado.appendChild(nuevoGasto);
        });
    }

    limpiarHTML(){
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
        
    }

    comprobarPresupuesto(p){
        const {presupuesto, restante} = p;
        const divRestante = document.querySelector('.restante');

        if((presupuesto * 0.25) > restante){
            divRestante.classList.remove('alert-sucess', 'alert-warning');
            divRestante.classList.add('alert-danger');
        }else
            if((presupuesto * 0.5) > restante){
                divRestante.classList.remove('alert-sucess');
                divRestante.classList.add('alert-warning');
            }else{
                divRestante.classList.remove('alert-warning', 'alert-danger');
                divRestante.classList.add('alert-sucess');
            }

        if(restante <= 0){
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }
}

// Instanciar
const ui = new UI();
let presupuesto;

// Funciones
function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cuál es tu presupuesto?');
    // console.log(presupuestoUsuario);

    if(presupuestoUsuario === '' || presupuestoUsuario == null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0 ){
        window.location.reload();
    }

    presupuesto = new Presupuesto(presupuestoUsuario);
    // console.log(presupuesto);
    ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e){
    e.preventDefault();

    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    if(nombre === '' || cantidad === ''){
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return ;
    }else
        if(cantidad <= 0 || isNaN(cantidad)){
            ui.imprimirAlerta('Cantidad no válida', 'error');
            return ;
        }

    const gasto = {nombre, cantidad, id: Date.now()}
    presupuesto.nuevoGasto(gasto);
    
    ui.imprimirAlerta('Gasto agregado correctamente');
    ui.mostrarGastos(presupuesto.gastos);
    ui.actualizarRestante(presupuesto.restante);
    ui.comprobarPresupuesto(presupuesto);
    formulario.reset();
}

function eliminarGasto(id){
    presupuesto.eliminarGasto(id);
    const {restante, gastos} = presupuesto;
    ui.mostrarGastos(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);
}