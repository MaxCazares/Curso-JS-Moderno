import express from 'express';
import db from './config/db.js';
import router from './routes/index.js';
import dotenv from 'dotenv';

dotenv.config({path:"variables.env"});

const app = express();

// Conectar a la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error))

// Define el puerto
const port = process.env.PORT || 4000;

// Habilita pug
app.set('view engine', 'pug');

// Obtener el año actual
app.use((req, res, next) => {
    const year = new Date();
    res.locals.currentYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';
    next();
});

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

// Define la carpeta pública
app.use(express.static('public'));

// Agrega el router
app.use('/', router);

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});