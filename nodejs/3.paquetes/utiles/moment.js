const moment = require('moment')

hora = moment()

console.log(hora)

console.log(hora.toString())

console.log(hora.format('YYYY/MM/DD - HH:MM'))

moment.caller(hora.format())