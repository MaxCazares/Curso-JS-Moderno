import React, {Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

const Cita = (props) => {

    if(!props.cita){
        props.history.push('/');
        return null;
    }

    const {cita: {_id, nombre, propietario, fecha, hora, telefono, sintomas}} = props;

    const eliminarCita = id =>{
        Swal.fire({
            title: '¿Estas seguro de eliminar el paciente?',
            text: "Una cita eliminada no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'

        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                'Eliminada',
                'La cita ha sido eliminada',
                'success'
                )

                clienteAxios.delete(`/pacientes/${id}`)
                .then(respuesta => {
                    props.guardarConsulta(true);
                    props.history.push('/');
                })
                .catch(error => console.error(error))
            }
        })
    }

    return ( 
        <Fragment>
            <h1 className='my-5'>Nombre: {nombre}</h1>
            <div className='container mt-5 py-5'>
                <div className='row'>
                    <div className='col-12 mb-5 d-flex justify-content-center'>
                        <Link to={'/'} className='btn btn-success text-uppercase py-2 px-5 font-weight-bold'>Volver</Link>
                    </div>

                    <div className='col-md-8 mx-auto'>
                        <div className='list-group'>
                            <div className='p-5 list-group-item list-group-item-action flex-column align-items-center'>
                                <div className='d-flex w-100 justify-content-between mb-4'>
                                    <h3  className='mb-3'>{nombre}</h3>
                                    <small className='fecha-alta'>
                                        {fecha} - {hora}
                                    </small>
                                </div>

                                <p className='mb-0'>
                                    {sintomas}
                                </p>
                                <div className='contacto py-3'>
                                    <p>Dueño: {propietario}</p>
                                    <p>Teléfono: {telefono}</p>
                                </div>
                                <div className='d-flex'>
                                    <button type='button' onClick={() => eliminarCita(_id)}
                                        className='text-uppercase py-2 px-5 font-weight-bold btn btn-danger col'>
                                        Eliminar 
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <line x1="4" y1="7" x2="20" y2="7" />
                                            <line x1="10" y1="11" x2="10" y2="17" />
                                            <line x1="14" y1="11" x2="14" y2="17" />
                                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default withRouter(Cita);