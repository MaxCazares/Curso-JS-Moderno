const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');
let editando;

class Citas{
    constructor(){
        this.citas = []
    }

    agregarCita(cita){
        this.citas = [...this.citas, cita];
    }

    eliminarCita(id){
        this.citas = this.citas.filter(cita => cita.id !== id);
    }

    editarCita(citaActualizada){
        this.citas = this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada: cita);
    }
}

class UI{
    imprimirAlerta(alerta, tipo){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');

        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }
        else{
            divMensaje.classList.add('alert-success');
        }

        divMensaje.textContent = alerta;
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

    imprimirCitas({citas}){
        this.limpiarHTML();

        citas.forEach(cita => {
            const {mascota, propietario, telefono, fecha, hora, sintomas, id}  = cita;
            const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;

            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
            mascotaParrafo.textContent = mascota;

            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML = `
                <span class="font-weight-bolder">Propietario: </span> ${propietario}
            `;

            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `
                <span class="font-weight-bolder">Teléfono: </span> ${telefono}
            `;

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `
                <span class="font-weight-bolder">Fecha: </span> ${fecha}
            `;

            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `
                <span class="font-weight-bolder">Hora: </span> ${hora}
            `;

            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `
                <span class="font-weight-bolder">Sintomas: </span> ${sintomas}
            `;

            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML = 'Eliminar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
            btnEliminar.onclick = () => eliminarCita(id);

            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn', 'btn-info');
            btnEditar.innerHTML = 'Editar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>';
            btnEditar.onclick = () => editarCita(cita);

            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);

            contenedorCitas.appendChild(divCita);
        });
    }

    limpiarHTML(){
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }
}

const ui = new UI();
const administrarCitas = new Citas();

eventListener();
function eventListener(){
    mascotaInput.addEventListener('input', datosCita);
    propietarioInput.addEventListener('input', datosCita);
    telefonoInput.addEventListener('input', datosCita);
    fechaInput.addEventListener('input', datosCita);
    horaInput.addEventListener('input', datosCita);
    sintomasInput.addEventListener('input', datosCita);

    formulario.addEventListener('submit', nuevaCita)
}

const CitaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

function datosCita(e){
    CitaObj[e.target.name] = e.target.value;
}

function nuevaCita(e){
    e.preventDefault();
    
    const {mascota, propietario, telefono, fecha, hora, sintomas}  = CitaObj;
    if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === ''){
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error')
        return ;
    }

    if(editando){
        console.log('modo edicion');

        ui.imprimirAlerta('Cita modificada correctamente');

        administrarCitas.editarCita({...CitaObj});

        formulario.querySelector('button[type="submit"]').textContent = 'Crear cita';

        editando = false;
    }else{
        console.log('modo nueva cita');
        CitaObj.id = Date.now();
        administrarCitas.agregarCita({...CitaObj});
        ui.imprimirAlerta('Cita agregada correctamente');
    }

    reiniciarObjeto();
    formulario.reset();
    ui.imprimirCitas(administrarCitas);
}

function reiniciarObjeto(){
    CitaObj.mascota = '';
    CitaObj.propietario = '';
    CitaObj.telefono = '';
    CitaObj.fecha = '';
    CitaObj.hora = '';
    CitaObj.sintomas = '';
}

function eliminarCita(id){
    administrarCitas.eliminarCita(id);
    ui.imprimirAlerta('cita se eliminó correctamente');
    ui.imprimirCitas(administrarCitas);
}

function editarCita(cita){
    const {mascota, propietario, telefono, fecha, hora, sintomas, id}  = cita;
    
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    CitaObj.mascota = mascota;
    CitaObj.propietario = propietario;
    CitaObj.telefono = telefono;
    CitaObj.fecha = fecha;
    CitaObj.hora = hora;
    CitaObj.sintomas = sintomas;
    CitaObj.id = id;
    
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar cambios';

    editando = true;
}