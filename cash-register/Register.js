class Register {
  constructor(name, composites){
    this.status = 'Open'
    this.name = name
    this.composites = composites
  }
  getChange(changeDue){
    const result = []
    let part
    const due = this.composites.reduce((remain, item) => {
      part = item.getChange(remain)
      if(part){
        result.push(part)
      }
      remain = item.remain
      console.log(remain)
      return remain
    }, changeDue)

    if(due > 0){
      this.status = 'Not enough funds'
    }

    return {
      status: this.status,
      change: result
    }
  }
}

module.exports = Register