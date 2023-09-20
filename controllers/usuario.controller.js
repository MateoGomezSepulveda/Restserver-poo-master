const Usuario = require('../models/Usuario.js');
const bcryptjs = require('bcryptjs');

const getUsers = (req, res)=>{
    res.status(500).json({
        "message":"home page"
    }); 
}

const postUsers = async (req, res)=>{
    const {nombre, email, password, rol} = req.body;
    const usuario = new Usuario({nombre, email, password, rol});

    // Encriptar nuestra contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    await usuario.save();
    res.status(500).json({
        "message":"post api",
        usuario
    });
}

const deleteUsers = (req, res)=>{
    res.status(500).json({
        "message":"delete api"
    });
}

const putUsers = (req, res)=>{
    res.status(500).json({
        "message":"update api"
    });
}

const patchUsers = (req, res)=>{
    res.status(500).json({
        "message":"patch api"
    });
}

module.exports = {
    getUsers,
    postUsers,
    deleteUsers,
    putUsers,
    patchUsers
}