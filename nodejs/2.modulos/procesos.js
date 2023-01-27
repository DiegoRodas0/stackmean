const { Console } = require("console")


process.on('exit',()=>{
    console.log('el proceso va a  terminar')
 } )

 process.on('exit',()=>{
    console.log('el proceso termino')
    setTimeout(()=>{
        Console.LOG('ESTO NUNCA VA A VER')
    },0)
 } )

 process.on('uncaughtException',(err, origin)=>{
    console.error('vaya se me olvido un try catch')
    // console.error(err)
})

funcionexiste();

console.log('que paso con el error')