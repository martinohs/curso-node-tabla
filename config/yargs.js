const argv = require('yargs')
    //Con option condiguro mis argumentos y los customizo, en este caso uso b para poder hacer referencia a --base y asi utilizar -b 
    .option('b', {
        alias: 'base', // Con esto hago referencia al alias o variable
        type: 'number', // Indico el tipo de dato del argumento
        demandOption: true, //True = el argumento se vuelve obligatorio
        describe: 'Es la base de la tabla de multiplicar'
    })
    .check((argv, options) => { //Con esto puedo realizar validaciones en mis argumentos mediante codigo custom
        if (isNaN(argv.b)) {
            throw 'La base debe ser un numero'; //Si paso un string (NaN = none at number) entonces muestro ese mensaje
        } else {
            return true;
        }
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        describe: 'Lista la tabla por pantalla'
    })
    .option('h', {
        alias: 'hasta', // Con esto hago referencia al alias o variable
        type: 'number', // Indico el tipo de dato del argumento
        demandOption: true, //True = el argumento se vuelve obligatorio
        describe: 'Numero hasta el cual desea multiplicar'
    })
    .check((argv, options) => { //Con esto puedo realizar validaciones en mis argumentos mediante codigo custom
        if (isNaN(argv.h)) {
            throw 'debe ser un numero'; //Si paso un string (NaN = none at number) entonces muestro ese mensaje
        } else {
            return true;
        }
    })
    .argv;

module.exports = argv; //Directamente mando el objeto