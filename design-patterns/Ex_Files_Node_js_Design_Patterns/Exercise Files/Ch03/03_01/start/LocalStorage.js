const { existsSync, writeFile, unlink, readFileSync } = require('fs')

class LocalStorage {
  constructor(){
    if(existsSync('localStorage.json')){
      console.log('Loading data from localStorage...')
      const txt = readFileSync('localStorage.json')
      this.items = JSON.parse(txt)
    } else {
      this.items = {}
    }
  }

  get length() {
    return Object.keys(this.items).length
  }

  getItem(key) {
    return this.items[key]
  }

  setItem(key, value){
    this.items[key] = value
    console.log(this.items)
    writeFile('localStorage.json', JSON.stringify(this.items), error => {
      if(error){
        console.error(error)
      }
    })
  }

  clear(){
    this.items = {}
    unlink('localStorage.json', () => {
      console.log('localStorage has been removed')
    })
  }
}

module.exports = new LocalStorage()