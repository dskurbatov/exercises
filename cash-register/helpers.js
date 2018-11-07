module.exports = function(string){
  switch(string){
    case 'QUARTER':
      return 0.25
    case 'ONE':
      return 1
    case 'ONE HUNDRED':
      return 100
    case 'DIME':
      return 0.1
    case 'PENNY':
      return 0.01
    case 'NICKEL':
      return 0.05
    case 'TEN':
      return 10
    case 'TWENTY':
      return 20
    case 'FIVE':
      return 5
    default:
      return 0
  }
}