const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');

module.exports = function()  {
    // Agrega nuevos pacientes vía POST
    router.post('/pacientes', 
        pacienteController.nuevoCliente
    );

    // Obtiene todos los registros de pacientes en la BD
    router.get('/pacientes', 
        pacienteController.obtenerPacientes
    );

    // Obtener un paciente en específico (ID)
    router.get('/pacientes/:id',
        pacienteController.obtenerPaciente
    );

    // Actualizar un registro con un ID específico
    router.put('/pacientes/:id',    
        pacienteController.actualizarPaciente
     );

    //  Eliminar un paciente por su ID
    router.delete('/pacientes/:id',
        pacienteController.eliminarPaciente
    )

    return router;
}