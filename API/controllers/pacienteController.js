const Paciente = require('../models/Paciente');

// Cuando se crea un nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
    //Crear objeto de paciente con datos del req.body      
    const paciente = new Paciente(req.body);

    try {
        await paciente.save();
        res.json({ mensaje : 'El cliente se agregó correctamente' });
    } catch (error) {
        console.log(error)
        next();
    }

}

// Obtiene todo los pacientes
exports.obtenerPacientes = async (req, res, next) => {
    try {
        const pacientes = await Paciente.find({});
        res.json(pacientes);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Obtener paciente en específico
exports.obtenerPaciente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findById(req.params.id);
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
} 

// Actualizar un registro con un ID específico
exports.actualizarPaciente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findOneAndUpdate({_id : req.params.id}, req.body, {
            new: true
        });
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Eliminar paciente por su ID
exports.eliminarPaciente =  async (req, res, next) => {
    try {
       await Paciente.findOneAndDelete({_id : req.params.id});
       res.json({mensaje : 'El paciente ha sido eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
} 