// let argv = process.argv

const opts = {
    base:{
        demand: true,
        alias: 'b'
    },
    limite:{
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un tabla de multiplicar de [base].', opts)
    .command('listar', 'Lista la tabla de multiplicar de [base].', opts)
    .help()
    .argv

module.exports = {
    argv
} 