 const {exec, spawn} = require('child_process');
//  const { stdout } = require('process');

// exec('dir',(err, stdout, stderr)=>{

//     if(err){
//         console.error(err)
//         return false;

//     }
//     console.log(stdout)
// })

// exec('node console.js',(err, stdout, stderr)=>{

//     if(err){
//         console.error(err)
//         return false;

//     }
//     console.log(stdout)
// })

const procesos = spawn('dir',['c:\\'],{shell:true})

procesos.stdout

console.log(precesos)