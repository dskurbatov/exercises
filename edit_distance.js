/*
  Given two strings str1 and str2 
  and below operations that can performed on str1. 
  Find minimum number of edits (operations) required 
  to convert ‘str1’ into ‘str2’.
*/
const assert = require('./assert')

function toIndex(char){
  return char.charCodeAt(0) - 'a'.charCodeAt(0)
}

function countASCII(str1, str2){
  const arr = Array(26).fill(0)
  let index = null, sum = 0
  for(let i = 0, len = str1.length; i < len; i++){
    index = toIndex(str1[i])
    arr[index]++
    sum += str1[i].charCodeAt(0)
  }

  for(let i = 0, len = str2.length; i < len; i++){
    index = toIndex(str2[i])
    if(arr[index] > 0){
      arr[index]--
      sum -= str2[i].charCodeAt(0)
    } else {
      arr[index] = 1
      sum += str2[i].charCodeAt(0)
    }
  }
  return sum
}


assert(1, 99, countASCII('at', 'cat'), 'Should return 99 ascii code for "c"')
assert(2, 197, countASCII('cat', 'bat'), 'Should return 197 ascii code for "c"')
assert(3, 298, countASCII('boat', 'got'), 'Should return 298 ascii code for "b" + "a" + "g"')
assert(4, 414, countASCII('boat', 'gott'), 'Should return 414 ascii code for "b" + "a" + "g" + "t"')
