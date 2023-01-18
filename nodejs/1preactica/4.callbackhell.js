function hola(nombre, miCallback){
    setTimeout(function (){
        console.log('hola' + nombre)
        miCallback();
    }, 1500);
}



function hablar(nombre, otroCallback){
    setTimeout(function (){
        console.log("bla bla  bla bla bla ........");
        callbaackhablar();
    })
}



function adios (nombre, otroCallback) {
    settimeout(function (){
        console.log('adios' + nombre)
        otroCallback();

    }, 1000);
}



//ejemplo del callback hell

console.log("iniciando proceso")
hola('carlos', function (nombre)(
    hablar(function (){
        hablar(function (){
            hablar(function (){
                adios('carlos',function () {
                    console.log('termino preceso...');
                });
            });
        });
    });
))


function conversacion(nombre, veces, callback){
    if(veces>0){
        hablar(function (){
            conversacion(nombre, --veces,callback);
        })
    }else{
        adios(nombre, callback);
    }
}

console.log('iniciando preoceso')