var boton = document.querySelector("#boton");


function cambiarcolor(){
    console.log(" me presionastes")

   var colordelboton = boton.style.background;
   

   if (colordelboton == "green"){
    boton.style.background = "red";
   }else{
    boton.style.background = "green";
   }
   return true;
    

}

//var 

//boton.addEventListener('load', () => {

//});


boton.addEventListener('click', function(){
   cambiarcolor();
   this.style.border= "10px solid black"

});


boton.addEventListener('mouseover', function(){
    cambiarcolor();
    this.style.border= "black"
    
 });

 boton.addEventListener('mouseout', function(){
    cambiarcolor();
    this.style.border= "#ff5733"
    
 });