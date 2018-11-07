/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

function recurse(array, str, left, right, total){
  if(right === total){
    array.push(str)
    return
  }
  
  if(left < total){
    recurse(array, str + '(', left + 1, right, total)  
  }
  
  if(left > right){
    recurse(array, str + ')', left, right + 1, total)  
  }
}

var generateParenthesis = function(n) {
    const array = []
    recurse(array, '', 0, 0, n)
    return array
};