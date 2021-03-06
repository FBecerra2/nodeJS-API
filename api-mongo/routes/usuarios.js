const express = require('express');
const Usuario = require('../models/usurio_model');
const ruta = express.Router();

ruta.get('/',(req,res) => {
    res.json('Listo el Get de Usuarios.')
});

ruta.post('/',(req,res) => {
    let body = req.body;
    let resultado = crearUsuario(body);

    resultado.then(user => {
        res.json({
            valor: user
        })
    }).catch(err => {
        res.status(400).json({
            error: err
        })
    });
});

async function crearUsuario(body){
    let usuario = new Usuario({
        email : body.email,
        nombre: body.nombre,
        password: body.password
    });
    return await usuario.save();
}
module.exports = ruta;