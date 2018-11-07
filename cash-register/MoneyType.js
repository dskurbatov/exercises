const getValue = require('./helpers')

class MoneyType {
  constructor(name, amount){
    this.name = name
    this.amount = amount
    this.remain = 0
  }

  get remain(){
    return this.remain
  }

  set remain(value){
    this.remain = value
  }

  getChange(changeDue){
    const value = getValue(this.name)
    console.log(value)
    let part = 0.0
    while(changeDue >= value && this.amount >= value){
      changeDue -= value
      this.amount -= value
      part += value
      changeDue = Math.round(changeDue * 100) / 100
      console.log(changeDue, part, this.amount)
    }
    this.remain = changeDue
    return part > 0 ? [this.name, part] : null
  }
}

module.exports = MoneyType