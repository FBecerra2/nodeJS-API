/* //Funciones FLECHA

const years = [2000, 2005, 2008, 2012];

//Funcion tipo fleacha

 let edad = years.map((el) =>{

    return 2020 - el;

}); 


//mas corto
let edad = years.map(el => 2019 - el);


console.log(edad); */

//funciones CALLBACK

function Mensaje(CALLBACK){
    console.log('Mensaje antes de llamar a CAllback');
    CALLBACK();
};

function saludo(){
    console.log('Saludo despues del callback');
};

Mensaje(saludo);