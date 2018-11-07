/*
Given​ ​an​ ​array​ ​of​ ​integers,​ ​
find​ ​the​ ​largest​ ​difference​ ​between​ ​any​ ​two​ ​elements​ ​such that​
the​ ​larger​ ​element​ ​appears​ ​after​ ​the​ ​smaller​ ​number.
For​ ​ex:​ ​[7,​ ​3,​ ​4,​ ​5,​ ​11,​ ​3,​ ​5,​ ​1,​ ​2]​ ​should​ ​return​ ​8​ ​
because​ ​11​ ​-​ ​​ ​3 
Another​ ​example:​ ​[17,​ ​19,​ ​4,​ ​5,​ ​3,​ ​1]​ ​should​ ​be​ ​2​ ​
because​ ​(19​ ​-​ ​17)
*/

function largestDiff(arr){
  let min = arr[0]
  let max_diff = Number.NEGATIVE_INFINITY
  for(let i = 1, len = arr.length; i < len; i++){
    if(arr[i] - min > max_diff) max_diff = arr[i] - min
    if(arr[i] < min) min = arr[i]
  }

  return max_diff
}

function testLargestDiff(arr, num){
  const res = largestDiff(arr)
  console.log(res, num)
  return res === num
}

console.log(testLargestDiff([7,3,4,5,11,3,5,1,2], 8))
console.log(testLargestDiff([17,19,4,5,3,1], 2))