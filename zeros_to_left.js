//given array of integers move all zeroes to left in place.
//[1,0,2,0,3,0] => [1,2,3,0,0,0]

function assertEqual(number, actual, expected, testName){
  const isEqual = actual.every((item, idx) => item === expected[idx])
  const isLengthEqual = actual.length === expected.length
  let message = null
  
  if(isEqual && isLengthEqual){
    message = 'passed'  
  } else {
    message = `FAILED ${testName} expected "${expected}" to equal "${actual}"`
  }
  console.log(number, message)
}

function findNonZero(arr, start, length){
  while(start < length && arr[start] === 0){
    start++
  }
  return start
}

function swap(arr, idx1, idx2){
  const tmp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = tmp
}

function shift(arr){
  let i = 0, len = arr.length, j = null
  while(i < len){
    if(arr[i] === 0){
      j = findNonZero(arr, i + 1, len)
      if(j < len){
        swap(arr, i, j)
      }
      i = j
    } else {
      i++
    }
  }
  return arr
}


assertEqual(1, [], shift([]), 'Should return array')
assertEqual(2, [1,2,3,0,0,0], shift([1,0,2,0,3,0]), 'Should shift all zeroes to the right')
assertEqual(3, [1,2,3,0,0,0], shift([1,2,3,0,0,0]), 'Should not modified array if all zeroes on the right')
assertEqual(4, [1,2,0,0,0,0], shift([1,0,2,0,0,0]), 'Should modified array')