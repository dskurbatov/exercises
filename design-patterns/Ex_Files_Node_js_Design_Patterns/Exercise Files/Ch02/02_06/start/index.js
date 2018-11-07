const userConstructor = require('./userContructor')

var alex = userConstructor('Alex Banks', 100);
var eve = userConstructor('Eve Porcello', 100,'employee', 'This and That');

eve.payDay(100)

console.log( alex.toString() )
console.log( eve.toString() )
