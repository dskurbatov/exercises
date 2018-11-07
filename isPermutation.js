/*
Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.
Example 1:
Input:s1 = "ab" s2 = "eidbaooo"
Output:True
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:
Input:s1= "ab" s2 = "eidboaoo"
Output: False
Note:
The input strings only contain lower case letters.
The length of both given strings is in range [1, 10,000].
*/

function assert(number, actual, expected, testName){
  if(actual === expected){
    console.log(number, 'passed')
  } else {
    console.log(number, `FAILED [${testName}] Expected "${expected}" is equal "${actual}"`)
  }
}

//convert character to index
function hash(char){
  return char.charCodeAt(0) - 'a'.charCodeAt(0)
}

function isPermutation(s1, s2){
  const len1 = s1.length
  const len2 = s2.length
  if(len1 > len2){
      return false
  }
  const hashMap1 = new Array(26).fill(0)
  const hashMap2 = new Array(26).fill(0)
  
  for(let i = 0; i < len1; i++){
      hashMap1[hash(s1[i])]++
      hashMap2[hash(s2[i])]++
  }
  let count = 0
  for(let i = 0; i < 26; i++){
      if(hashMap1[i] === hashMap2[i]){
          count++
      }
  }
  
  let left = null, right = null
  for(let i = 0, diff = len2 - len1; i < diff; i++){
      if(count === 26){
          return true
      }
      right = hash(s2[i + len1])
      left = hash(s2[i])
      
      hashMap2[right]++
      if(hashMap2[right] === hashMap1[right]){
          count++
      } else if(hashMap2[right] === hashMap1[right] + 1){
          count--
      }
      hashMap2[left]--
      if(hashMap2[left] === hashMap1[left]){
          count++
      } else if(hashMap2[left] === hashMap1[left] - 1){
          count--
      }
  }
  return count === 26
}

//tests
assert(1, true, isPermutation('apple', 'appealing'), 'Should return true')
assert(2, true, isPermutation('apple', 'ppleaasdflkn'), 'Should return true')
assert(3, false, isPermutation("hello", "ooolleoooleh"), 'Should return false')
assert(3, true, isPermutation("ab", "eidbaooo"), 'Should return true')