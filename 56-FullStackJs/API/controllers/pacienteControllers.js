const Paciente = require('../models/Paciente.js');

// Cuando se crea un nuevo paciente
exports.nuevoPaciente = async (req, res, next) => {

    // crear un objeto de paciente 
    const paciente = new Paciente(req.body);
    console.log(paciente);
    
    try {
        await paciente.save();
        res.json({mensaje: 'El cliente se agregó correctamente'});

    } catch (error) {
        console.error(error);
        next();
    }
}

exports.obtenerPacientes = async (req, res, next) => {
    try {
        const pacientes = await Paciente.find({});
        res.json(pacientes);

    } catch (error) {
        console.error(error);
        next();
    }
}

exports.obtenerPaciente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findById(req.params.id);
        res.json(paciente);

    } catch (error) {
        console.error(error);
        next();
    }
}

exports.actualizarPaciente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true
        });
        res.json(paciente);
        
    } catch (error) {
        console.error(error);
        next();
    }
}

exports.eliminarPaciente = async (req, res, next) => {
    try {
        await Paciente.findOneAndDelete({_id: req.params.id});
        res.json({mensaje: 'El paciente fue eliminado'});

    } catch (error) {
        console.error(error);
        next();
    }
}