function fallaAsyncrono(){
    setTimeout(function(){

        return 3 + z;
    })
}

try{
    fallaAsyncrono();
}catch(err){
    console.error('Fallo')
    console.error(err.message)
}