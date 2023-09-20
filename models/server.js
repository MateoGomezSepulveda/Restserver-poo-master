const express = require('express');
const cors = require('cors');
const router = require('../routes/usuario.routes');
const {dbConnection} = require('../database/config.js');
class Server {

    constructor(){
        this.app = express();
        
        this.port = process.env.PORT
        this.usuariosPath = "/api/usuarios";
        /* Conectar a base de datos MONGODB */
        this.connectDB();
        /* Middlewares */
        this.middlewares();
        /* Routing */
        this.routes();
    }

    async connectDB(){
        await dbConnection();
    }

    middlewares(){
        /* Cors  */
        this.app.use(cors());
        /* Leer y parsear un JSON en BODY */
        this.app.use(express.json());

        /* Public Directory */
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuario.routes.js'));       
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`SERVER RUNNING ON PORT: ${this.port}`);
        })
    }
}

module.exports = Server;