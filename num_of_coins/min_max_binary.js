/*
Consider​ ​the​ ​following​ ​list​ ​of​ ​integers: 
2,​ ​4,​ ​7,​ ​9,​ ​13,​ ​14,​ ​19,​ ​5,​ ​2
As​ ​you​ ​can​ ​notice,​ ​
we​ ​have​ ​an​ ​increasing​ ​sequence​ ​and​ ​then​ ​decreasing.​ ​
Thats​ ​the characteristics​ ​of​ ​this​ ​list:​ ​
the​ ​first​ ​part​ ​is​ ​increasing​ ​and​ ​the​ ​second​ ​part​ ​is​ ​decreasing. 
However,​ ​the​ ​decreasing​ ​part​ ​may​ ​be​ ​on​ ​the​ ​middle,​ ​
toward​ ​the​ ​left​ ​or​ ​right.
Please​ ​find​ ​the​ ​Min​ ​and​ ​Max​ ​as​ ​quick​ ​as​ ​possible.
*/

function binarySearch(arr, start, end){
  const mid = Math.round((start + end)/2)
  if(arr[mid - 1] < arr[mid] && arr[mid + 1] < arr[mid]){
    return arr[mid]
  }

  if(arr[mid] < arr[mid + 1]){
    return binarySearch(arr, mid + 1, end)
  }

  return binarySearch(arr, start, mid - 1)
}

function minMax(arr){
  const length = arr.length
  const min = Math.min(arr[0], arr[length - 1])
  const max = binarySearch(arr, 0, length - 1)
  return {min, max}
}

function testMinMax(arr, num1, num2){
  const { min, max } = minMax(arr)
  console.log(min, max)
  return min === num1 && max === num2
}

console.log(testMinMax([2,4,7,9,13,14,19,5,2], 2, 19))
console.log(testMinMax([14,19,13,9,5,3,2], 2, 19))
console.log(testMinMax([9,10,12,14,19,13,9,5,3,2], 2, 19))
