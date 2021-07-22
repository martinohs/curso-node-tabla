const fs = require('fs'); //fs es filesystem, es decir utilizar la libreria filesystem de node
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    const nombreArchivo = `tabla-${base}.txt`;

    try {
        if (listar) {
            console.log('====================='.rainbow);
            console.log('TABLA DEL: ', base);
            console.log('MULTIPLICA HASTA: ', hasta);
            console.log('====================='.rainbow);

            let salida = '';
            for (let i = 1; i <= hasta; i++) {
                salida += (`${base} ${'x'.green} ${i} ${'='.red} ${base * i}\n`);
            }

            fs.writeFileSync(`./salida/${nombreArchivo}`, salida); //OTRA FORMA: esta debe manejarse con un try-catch q la rodee try -> fs.writeFileSync -> catch: error

            //TODO FILESYSTEM LEER ARCHIVO
            // fs.readFile(`tabla-${base}.txt`, 'utf8', (err, data) => {
            //     if (err) throw err;
            //     console.log(data);
            // });

            console.log(salida);

        }

        return (nombreArchivo);

    } catch (error) {
        throw error;
    }
};

//Para exportar mis funciones y que puedan ser accedidas debo realizar lo siguiente:
//Luego en el archivo que las imboque se usara la siguiente sintaxis:
//const { nombreDeLaFuncion } = require('path/del/archivo');
module.exports = {
    crearArchivo
};