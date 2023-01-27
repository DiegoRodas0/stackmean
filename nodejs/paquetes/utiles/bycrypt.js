const bcrypt = require('bcrypt')

const password= '123456guatemala@1'

bcrypt.hash(password, 5, function(err, hash){
    console.log(hash);
})  