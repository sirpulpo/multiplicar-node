const fs = require('fs');
const colors = require('colors');


module.exports.listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base introducida ${base} no es un número.`);
            return;
        }

        if (!Number(limite)) {
            reject(`El límite introducido ${limite} no es un número.`);
            return;
        }

        console.log('==============='.blue);
        console.log(`| Tabla del ${base} |`.blue);
        console.log('==============='.blue);

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`.brightYellow);
        }

        resolve('Éxito.');
    });
}

module.exports.crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número.`);
            return;
        }

        if (!Number(limite)) {
            reject(`El límite introducido ${limite} no es un número.`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`.brightBlue);
        });
    });
}

// Para usar la siguiente manera la funcion de arriba se deberia declarar con let y no con module.exports
// module.exports = {
//     crearArchivo
// }