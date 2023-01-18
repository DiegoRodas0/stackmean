const os = require('os');

// console.log(os.arch());
// console.log(os.platform);
// console.log(os.cpus);
// console.log(os.cpus().length);
// console.log(os.freemem());
// console.log();


const SIZE = 1024
function kb(bytes){ return bytes / SIZE}
function MB(bytes){ return kb(bytes) / SIZE}
function GB(bytes){ return mb(bytes) / SIZE}

console.log(kb(os.freemem()));
console.log(kb(os.freemem()));
console.log(gb(os.freemem()));
