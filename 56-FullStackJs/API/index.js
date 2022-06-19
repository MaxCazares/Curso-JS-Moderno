const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

// Crear el servidor
const app = express();

// Habilitar cors únicamente para localhost:3000
const whitelist = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) => {
        const existe = whitelist.some(dominio => dominio === origin);
        if(existe){
            callback(null, true);
        }else{
            callback(new Error('No permitido por cors'));
        }
    }
}
// app.use(cors(corsOptions));

// Habilitar cors
app.use(cors());

// Conectar a MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Habilitar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Habilitar routing
app.use('/', routes());

// Puerto y arrancar el servidor
app.listen(4000, () => {
    console.log('Servidor funcionando en el puerto 4000');
});