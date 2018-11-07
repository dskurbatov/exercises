const MoneyType = require('./MoneyType')
const Register = require('./Register')

const startRegister = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]].reverse()

const moneyTypes = startRegister.map(moneyTypeArr)
const register = new Register('register1', moneyTypes)

function change(price, cash, register){
  return register.getChange(cash - price)  
}

function moneyTypeArr(arr){
  return new MoneyType(...arr)
}

console.log(change(19.5, 20, register))
