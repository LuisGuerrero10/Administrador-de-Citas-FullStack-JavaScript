const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
// const bodyParser = require('body-parser');
const cors = require('cors');   

// Crear el servidor 
const app = express();
// Habilitar cors
const whitelist = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) => {
        const existe = whitelist.some( dominio => dominio === origin);
        if (existe) {
            callback(null, true)
        }else {
            callback(new Error('No Permitido por Cors'))
        }
    }
}
// Habilitar el Cors
// app.use( cors(corsOptions));
app.use(cors());

// Conectar a mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// habilitar body-parser
app.use(express.json());
app.use(express.urlencoded({ extendend: true }));

// habilitar routing
app.use('/', routes())

// Puerto y arrancar servidor 
app.listen(4000, () => {
    console.log('Servidor funcionando');
})