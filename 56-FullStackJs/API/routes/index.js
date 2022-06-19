const express = require('express');
const pacienteController = require('../controllers/pacienteControllers.js');
const router = express.Router();

module.exports = function(){

    // Agrega nuevos pacientes via POST
    router.post('/pacientes', pacienteController.nuevoPaciente);

    // Obtiene todos los registros de pacientes de la base de datos
    router.get('/pacientes', pacienteController.obtenerPacientes);

    // Obtiene un paciente en especifico
    router.get('/pacientes/:id', pacienteController.obtenerPaciente);

    // Actualizar un registro basado en un id
    router.put('/pacientes/:id', pacienteController.actualizarPaciente);

    router.delete('/pacientes/:id', pacienteController.eliminarPaciente);
    
    return router;
}