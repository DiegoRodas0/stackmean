function otrafuncion(){
    falla();
}



function falla(){
    return 6 + x;
}

// es conveniente utilizar un 
// console.log(err.messege);

try{
    otrafuncion();
}catch(e){
    console.log('el modulo de registro de articulos fallo,  se le aviso a....')
    console.log(e.message);
    console.log(e);
}

console.log('esto va despues del error')
