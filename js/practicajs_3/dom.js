var varhola = document.getElementById("hola");
var varholag = document.querySelector(".holag");
var todoslosdiv = document.getElementsByClassName('div')

varhola.innerHTML = "hola yo soy el contenido"
varhola.style.background = "red"
varhola.style.padding = "25px"
varhola.style.color = "white"
varhola.className = "claseejemplo titulo"


function colorx(color){
    varhola.style.background = color;

}

var todoslosdiv = document.getElementsByTagName('div')

var divCont = todoslosdiv[2]

divCont.innerHTML = "XXXXXXX"


//console.log(varhola)
//console.log(varholag)
//console.log(todoslosdiv)

var parrafo = document.createElement("p")
var texto = document.createTextNode("El salvador")
parrafo.appendChild(texto);
documente.querySelector("#mi").appendChild(parrafo);
var xc = documente.querySelector("#mi")
document.write("hhhhhhhhhhhhhhhhhhhhh")

document.write("<div>hhhhhhhhhhhhhhhhhhhhh")
document.write("hhhhhhhhhhhhhhhhhhhhh")
document.write("hhhhhhhhhhhhhhhhhhhhh")
console.log(divCont)




