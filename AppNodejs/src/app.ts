const express = require('express');
import indexRutas from './Rutas/rutas';

export class Server {
    app = express();

    constructor() {
        this.app = express();
        this.routes();
    }
    routes(){
        this.app.use(indexRutas);
    }

    settings(){       
       this.app.set('json spaces',2);
       this.app.use(express.json());
    }

    async listen() {
        await this.app.listen(3000 || 3005);
        console.log('Server port 3000')
    }
}