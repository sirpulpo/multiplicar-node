const flags = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar.', flags)
    .command('crear', 'Crea un archivo de texto con la tabla de multiplicar.', flags)
    .help()
    .argv;

module.exports = {
    argv
}