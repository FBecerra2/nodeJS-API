//Usar framework express
const express = require('express');
const app = express();

//Usa el puerto definido en el server o 300
const port = process.env.PORT || 3000;

//User para probar
const usuarios = [
    {id:1, nombre:'Fak'},
    {id:2, nombre:'Pablo'},
    {id:3, nombre:'Ana'}
];

//Poner JOI para validaciones

//const Joi= require('joi');

//middleware para que devuelva codigo JSON
app.use(express.json());

//app.get();      //peticion
//app.post();     //envio de datos
//app.put();      //actualizacion
//app.delete();   //eliminacion

app.get('/', (req, res) => {
    res.send('Hola mundo desde exprees.');
});

app.get('/api/usuarios', (req, res) => {
    res.send(['grover', 'luis', 'Ana']);
});

//app.get('/api/usuarios/:id', (req, res) => {
//    res.send(req.params.id);
//});

app.get('/api/usuarios/:years/:mes', (req, res) => {
    res.send(req.params);
});

app.get('/api/usuarios/:id', (req, res) => {
    let usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if(!usuario) res.status(404).send('No se encontro');
    res.send(usuario);
});

//Aca pedimos Json
app.post('/api/usuarios', (req, res) => {
        if(!req.body.nombre || req.body.nombre.length <= 2){
            //400 Bad Request
            res.status(400).send('Debe ingresar un nombre, minimo 3 letras');
        return;
        }
        const usuario = {
            id: usuarios.length + 1,
            nombre: req.body.nombre
        };
    usuarios.push(usuario);
    res.send(usuario);
 });

app.put('/api/usuarios/:id', (req,res) => {
    //ver si esxiste el objet
usuario.nombre = req.body.nombre;
res.send(usuario);


});
app.listen(port,()=>{
    console.log(`Escuchando en el puerto ${port}`);
});