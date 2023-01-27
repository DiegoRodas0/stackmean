// function soyAsincrono(){
//     console.log('hola soy una funcion asincronica');
//     setTimeout(function(){
//         console.log('estoy siendo asincronico')

//     }, 1000)
// }

//  console.log('iniciando proceso....')
//  soyAsincrono();
//  console.log('terminando precesos....')
 
// ////////////////////////////////////////////////////////////

 function soyAsincrono(miCallback){
   console.log('hola soy una funcion asincrona');
    setTimeout(function(){
         console.log('estoy siendo asincrono')
        miCallback();
     }, 1000)
     }
 
 console.log('iniciando preoceso,,,,')
 soyAsincrono(     function(){
     console.log('terminando proceso....')
 });
// ///////////////////////////////////////////////

// function hola(nombre, miCallback){
//     settimeout(function(){
//         console.log('hola' + nombre)
//         miCallback();

// },100   );
// }

// function hola(nombre, otroCallback){
//     settimeout(function(){
//         console.log('adios' + nombre)
//         miCallback();

// },100   );
// }

// console.log('iniciando preocesos....')
// hola('carlos', function(){
//     adios('carlos', function(){
//         console.log('termino preoceso...')
//     })
// })npm i -g nodemon
// npm i -g pm2