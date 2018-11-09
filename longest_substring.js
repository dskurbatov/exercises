/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

function assert(number, actual, expected, testName){
  if(actual === expected){
    console.log(number, 'passed')
  } else {
    console.log(number, `FAILED [${testName}] Expected "${expected}" to be equal "${actual}"`)
  }
}

function longestSubstring(string){
  const NO_OF_CHARS = 128 // or 256 to include all posible ones
  //create hashmap to store visited characters and there index
  const array = Array(NO_OF_CHARS).fill(-1) // because we will store indexes
  //set first character
  array[string[0].charCodeAt(0)] = 0

  let max = 1, current = 1, seen_at = null
  for(let i = 1, len = string.length; i < len; i++){
    seen_at = array[string[i].charCodeAt(0)]
    if(seen_at < 0 || i - seen_at > current){
      current++
    } else {
      max = Math.max(max, current)
      //reset current so that it is equal current index minus when it is been seen last
      //that way we start from right amount instead of 1
      current = i - seen_at
    }
    //set new index when character has been seen last
    array[string[i].charCodeAt(0)] = i
  }
  max = Math.max(max, current)
  return max
}

assert(1, 3, longestSubstring('abcabcbb'), 'Should return 3 with abcabcbb')
assert(2, 1, longestSubstring('bbbbb'), 'Should return 1 with bbbbb')
assert(3, 3, longestSubstring('pwwkew'), 'Should return 3 with pwwkew')
assert(4, 2, longestSubstring('abba'), 'Should return 2 with abba')
assert(5, 3, longestSubstring('dvdf'), 'Should return 3 with dvdf')
assert(6, 1, longestSubstring('   '), 'Should return 1 with "   "')