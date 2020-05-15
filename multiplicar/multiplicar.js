const fs = require('fs')

const crearTabla = (base, limite) => {
    if ( !Number(base) ) {
        return reject(`"${base}" No es un numero!`)
        
    }
    let data = '';
    for (let i = 0; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }
    return data
}

// Estas son las dos formas de exportar un modu en ECMAS6.
module.exports = {
    crearTabla,
}
module.exports.crearArchivo = (filename, data) => {
    return new Promise( (resolve, reject) =>{
        fs.writeFile(`./tablas/${filename}`, data, err => {
            if (err) reject(err);
            else resolve(filename)
        })
    })
}
