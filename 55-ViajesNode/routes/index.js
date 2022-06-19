import express from "express";
import { paginaInicio, 
        paginaNosotros, 
        paginaTestimoniales, 
        paginaViajes, 
        paginaDetalleViaje 
} from "../controllers/paginasController.js";
import { guardarTestimonial } from "../controllers/testimonialController.js";

const router = express.Router();

// req: lo que estamos enviando res: lo que express nos responde
router.get('/', paginaInicio);

router.get('/Nosotros', paginaNosotros);

router.get('/Viajes', paginaViajes);

router.get('/Viajes/:slug', paginaDetalleViaje);

router.get('/Testimoniales', paginaTestimoniales);

router.post('/Testimoniales', guardarTestimonial);

export default router;