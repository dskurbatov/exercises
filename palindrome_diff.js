/*
  count difference in palindrome
  example: 
  'abba' - 0
  'aaabbb' - 6
  'abcbcaa' - 2
*/
const assert = require('./assert')

function palindrome_diff(str){
  let front = 0, back = str.length - 1, count = 0
  while(front < back){
    if(str[front] !== str[back]){
      count += 2
    }
    front++
    back--
  }

  return count
}

const start = process.hrtime();
assert(1, 0, palindrome_diff('abba'), 'Should return 0 if word is palindrome')
assert(2, 6, palindrome_diff('aaabbb'), 'Should return 6')
assert(3, 2, palindrome_diff('abcbcaa'), 'Should return 2')
const end = process.hrtime(start);
console.log(`timeout callback executed after ${end[0]}s and ${end[1]/Math.pow(10,9)}ms`);