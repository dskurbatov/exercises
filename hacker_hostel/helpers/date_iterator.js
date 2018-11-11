class DateIterator{
  constructor(from, to){
    this.from = new Date(...from.split('-'))
    this.to = new Date(...to.split('-'))
  }

  isNext(){
    return this.from.getTime() <= this.to.getTime()
  }

  next(){
    const current = [this.from.getFullYear(), this.from.getMonth(), this.from.getDate()]
    this.from.setDate(this.from.getDate() + 1)
    return `${current[0]}-${current[1]}-${current[2]}`
  }
}

export default DateIterator

// function assert(number, actual, expected, testName){
//   if(actual === expected){
//     console.log(number, 'passed')
//   } else {
//     console.log(number, `FAILED [${testName}] Expected "${expected}" is equal "${actual}"`)
//   }
// }

// const iterator = new DateIterator('2018-09-30', '2018-10-02')
// assert(1, '2018-9-30', iterator.next(), 'Should return "from" date without leading zero in the month')
// assert(2, '2018-9-31', iterator.next(), 'Should return next day after "from" date 2018-9-31')
// assert(3, '2018-10-1', iterator.next(), 'Should return first day of the next month 2018-10-1')
// assert(4, true, iterator.isNext(), 'Should return true if there is next')
// assert(5, '2018-10-2', iterator.next(), 'Should return next value')
// assert(6, false, iterator.isNext(), 'Should return false if there is no next') 