const http = require ('http')

http.createServer(function(req, res){
    console.log('nueva peticion')
    console.log(req.url)
    res.write('hola mi primer respues desde nodeJS')
    res.end();


}).listen(3000)