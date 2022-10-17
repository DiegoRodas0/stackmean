var textoA = "segun su constitucion, es una republica"
var textoB = "organizacion para su administracion en 22 departamentos "



var resultado= textoA.toUpperCase()
var resultado= textoB.toUpperCase()
resultado= ["guatemala","salvador","xxx"]


resultado2= textoA.concat(" " + textoB)


var busqueda = textoB.indexOf("administracion")
var busqueda2 = textoA.lastIndexOf("una")
var busqueda3 = textoA.search("una")
var busqueda4= textoA.match(/una/g)

var extraertextp = textoB.substr(19,14)
var extraertextp = textoB.charAt(19)
var extraertextp = textoB.startsWith("org")
var extraertextp = textoB.charAt(19)
var extraertextp = textoB.startsWith("departamentos")
var cambiodeTexto = textoB.includes("administracion", "Guatemala")
var cambiodeTexto = textoB.slice(5)
var cambiodeTexto = textoB.split(" ")

console.log(busqueda)
console.log(busqueda2)
console.log(busqueda3)
console.log(busqueda4)
console.log(extraertextp)
console.log(cambiodeTexto)

/*
if(resultado.length > 0){
console.log("tiene datos");
}else{
console.log("no tiene datos");
}



console.log(resultado.length);
console.log(resultado);
*/

//que pasaria si yo quisiera identificar alguna palabra en algun texto?
//KDE CUAL ES LA ESTRUCTURA DE LOS FICHEREOS DE LINIX 
//LOS ENLACES SIMBOLICOS ES UNA DIRECCION QUE APUNTA UN ARCHIVO  
//