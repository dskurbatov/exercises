var CatalogItem = require('./CatalogItem');
const CatalogGroup = require('./CatalogGroup')

var boots = new CatalogItem("Leather Boots", 79.99);
var sneakers = new CatalogItem("Kicks", 39.99);
var flipFlops = new CatalogItem("California work boots", 19.99);

const shoes = new CatalogGroup('shoes and such', [boots, sneakers, flipFlops])
const foods = new CatalogGroup('food while shopping', [
  new CatalogItem('milkShake', 5.99),
  new CatalogItem('fries', 3.99)
])

const keyChain = new CatalogItem('key-chain', .99)

const catalog = new CatalogGroup('food and shoes', [keyChain, shoes, foods])

console.log(`$${catalog.total}`)
catalog.print()
