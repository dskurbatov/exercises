class CatalogGroup {

  constructor(name, composites){
    this.name = name
    this.composites = composites
  }

  get total() {
    return this.composites.reduce((total, item) => total += item.total, 0)
  }

  print(){
    console.log(`${this.name.toUpperCase()}`)
    this.composites.forEach(element => {
      element.print()
    });
  }
}

module.exports = CatalogGroup