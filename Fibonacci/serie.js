//usar Filesystem
const fs = require('fs');

let crearSerie = () => {
//Serie de Fibonacci
    let fibo1 = 1;
    let fibo2 = 1;
    let serie = '';


serie += `${fibo1}\n`;

    for(let i = 2; i<= 7; i++){
        serie += (`${fibo2}\n`);
        fibo2 = fibo1 + fibo2;
        fibo1 = fibo2 - fibo1;
    };

fs.writeFile('fibonacci.txt', serie, (err)=>{
    if (err)
        return 'Error al crear el archivo';
    else
        return console.log('El archivo se guardo!');

})
}

//Exportar archivos

module.exports = {
    crearSerie
}
