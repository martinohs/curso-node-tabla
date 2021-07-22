//Se accede devido a que se usa la logica de desestructuración
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

//TODO console.log(argv.base); // si yo hago: --algo=X lo accedo mediante argv.algo = X | tambien puedo hacer --algo 5 (es decir ya es indistinto si uso el = o no)

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));





























//! ---- MANERA TOXICA DE HACERLO (para que se entienda) LA GUARDO COMO DOCUMENTACION---------------------------
//Primero tomo el argumento con desestructuracion (process.argv devuelve los argumentos del comando)
//TODO const [, , arg3 = 'base=5'] = process.argv;
//vuelvo a desestructurar a partir del =, por lo tanto tomo solo el numero
//TODO  const [, base = 5] = arg3.split('=');
//? Este metodo no es optimo porque solo toma el primer parametro que se pase al comando y a partir del mismo realiza la multiplicacion
//? Deberiamos realizarlo de tal manera que controle que el parametro pasado sea --base y lo tome ya sea el argumento 2 , 3 o 10 (por ejemplo)