function hola(nombre, miCallback){
   
   return new Promise(function(resolve,reject){

   
    setTimeout(function (){
        console.log('hola' + nombre)
        miCallback();
   
   }, 1000);})
}

function hablar(nombre, otroCallback){
   return new promise ((resolve, reject)=>{

  
    setTimeout(function (){
        console.log("bla bla  bla bla bla ........");
        callbaackhablar();
    })
})
}


function adios (nombre) {

    settimeout(function (){
        console.log('adios' + nombre)
        otroCallback();

    }, 1000);
}

console.log('iniciando el proceso ');
hola('carlos')
    .then(nombre => {
        return adios(nombre);
    })
    .then((nombre)=> {
        console.log('terminando el precesos' + nombre)
    });

    console.log('iniciando el proceso');
    hola('carlos')
    .then(adios)
    .then(adios)
    .then(adios)
    .then((nombre) => {
        console.log('terminando el preceso' + nombre)
    })
    .catch(error => {
        console.error('ha habido un erroro')
        console.error(error)
    })