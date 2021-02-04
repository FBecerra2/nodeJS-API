const express = require('express');
const mongoose = require('mongoose');


//conexion a al BBDD
mongoose.connect('mongodb://localhost:27017/demo', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Conectado a MongoDB...'))
    .catch(err=> console.log('No se pudo conectar con MongoDB..', err));

const app = express();

const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log('Api RESTFul Ok, y ejecutándose...');
})

