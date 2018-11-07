const scout = require('./scout')

const alex = scout.clone()
alex.name = 'Alex Banks'
alex.addItemToList('slingshot');

const eve = scout.clone();
eve.name = 'Eve Porcello'
eve.addItemToList('reading light');

console.log( `${alex.name}: ${alex.shoppingList}` );
console.log( `${eve.name}: ${eve.shoppingList}` );
