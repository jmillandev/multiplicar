const { crearArchivo, crearTabla } = require('./multiplicar/multiplicar');
const colors = require('colors')
const { argv } = require('./config/yargs')

const comando = argv._[0]

switch ( comando ) {
    case 'crear':
        tabla = crearTabla(argv.base, argv.limite)
        crearArchivo(`tabla-${argv.base}-al-${argv.limite}.txt`, tabla)
            .then(archivo => console.log('Àrchivo creado:', colors.green(archivo) ))
            .catch(err => console.log(err))
        break;
    case 'listar':
        tabla = crearTabla(argv.base, argv.limite)
        console.log('=================='.green)
        console.log(`Tabla del ${argv.base}`.green)
        console.log('=================='.green)
        console.log(tabla)
        break
    default:
        console.log("Comando no reconocido.")
        break;
}