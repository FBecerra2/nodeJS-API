const express = require('express');
const app = express();

//configuracion
app.set('port', process.env.PORT || 3000);

//middlewars
app.use(express.json());

//Rutas
app.use(require('./routes/employees'));

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});

