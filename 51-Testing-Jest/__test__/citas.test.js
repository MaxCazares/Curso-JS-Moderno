import Citas from "../js/classes/Citas";

describe('Probar la clase de citas', () => {

    const citas = new Citas();
    const id = Date.now();

    test('Agregar una nueva cita', () =>{
        const citaObj = {
            id,
            mascota: 'Poppy',
            propietario: 'Valeria',
            telefono: '1234567890',
            fecha: '10-12-2022',
            hora:'10:20',
            sintomas: 'solo duerme'
        }

        citas.agregarCita(citaObj);

        expect(citas).toMatchSnapshot();

    });

    test('Actualizar cita', () =>{
        const citaActualizada = {
            id,
            mascota: 'Otra mascota',
            propietario: 'Valeria',
            telefono: '1234567890',
            fecha: '10-12-2022',
            hora:'10:20',
            sintomas: 'solo duerme'
        }

        citas.editarCita(citaActualizada);
        expect(citas).toMatchSnapshot();
    });

    test('Eliminar cita', () => {
        citas.eliminarCita(id);

        expect(citas).toMatchSnapshot();
    });

});