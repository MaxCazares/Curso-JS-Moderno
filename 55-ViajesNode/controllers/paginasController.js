import { Testimonial } from "../models/testimoniales.js";
import { Viajes } from "../models/Viaje.js";

const paginaInicio = async (req, res) => {

    const promiseDB = [];

    promiseDB.push(Viajes.findAll({limit: 3}));
    promiseDB.push(Testimonial.findAll({limit: 3}));

    try {
        const resultado = await Promise.all(promiseDB);
        res.render('inicio',{
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.error(error);
    }

}

const paginaNosotros = (req, res) => {
    res.render('nosotros',{
        pagina: 'Nosotros'
    });
}

const paginaViajes = async  (req, res) => {

    const viajes = await Viajes.findAll();

    res.render('viajes',{
        pagina: 'Próximos Viajes',
        viajes,
    });
}

const paginaTestimoniales = async (req, res) => {

    try {
        const testimoniales = await Testimonial.findAll();
        res.render('Testimoniales',{
            pagina: 'Testimoniales',
            testimoniales
        });  

    } catch (error) {
        console.error(error);
    }
}

const paginaDetalleViaje = async (req, res) => {
    const {slug} = req.params;
    try {
        const viaje = await Viajes.findOne({where: {slug}});
        res.render('viaje', {
            pagina: 'Informacion Viaje',
            viaje,
        });
    } catch (error) {
        console.error(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}