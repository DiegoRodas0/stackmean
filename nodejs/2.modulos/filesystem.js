const fs = require('fs')

function leer (ruta, cb){
    fs.readfile(ruta, (err, data)=>{
        console.log(data.toString())
    })
}
function escribir(ruta, contenido, cb){
    fs.writefille(ruta, contenido, function(err){
        if(err){
            console.error('no he podido escribir', err)

        }else{
            console.log('se ha escrito el archivo ')
        }
    });
}

function borrar (ruta,cb){
fs.unlink(ruta, cb)
}

leer(_dirname + '/lectura.txt', console.log)
escribir(_dirname + '/lectura2.txt', 'soy un archivo nuevo de log', console.log)
leer(_dirname + /lectura.txt', console.log)