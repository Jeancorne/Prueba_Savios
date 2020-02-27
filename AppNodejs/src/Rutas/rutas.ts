import {Router} from 'express';
import {Obtener} from '../Controller/index.controller';
const ruta = Router();

ruta.route('/obtener').post(Obtener);


export default ruta;