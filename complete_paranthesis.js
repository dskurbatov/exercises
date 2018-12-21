/*
  count how many changes needed to complete paranthesis
  example:
  '(()())' = 0
  ')(' = 2
  '((())' = 1
*/
const assert = require('./assert')

function countToComplete(str){
  const arr = []
  let count = 0
  for(let i = 0, len = str.length; i < len; i++){
    if(str[i] === '('){
      arr.push('(')
    } else {
      if(arr.length > 0){
        arr.pop()
      } else {
        count++
      }
    }
  }

  if(arr.length > 0){
    arr.pop()
    count++
  }
  return count
}

assert(1, 0, countToComplete('(()())'), 'Should return 0 if all parenthesis have a match of close or open')
assert(2, 2, countToComplete(')('), 'Should return 2 if parenthesis dont match')
assert(3, 1, countToComplete('((())'), 'Should return 1 if open parenthesy does not have match')