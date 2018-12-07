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

class FixedSizeQueue {
  constructor(size){
    this.arr = []
    this.size = 0
    this.current = 0
  }

  isEmpty(){
    return this.size === 0
  }

  pop(){
    const val = this.arr[this.current]
    this.current++
    return val
  }

  push(item){
    this.arr[this.size] = item
    this.size++
  }
}

function swap(arr, idx1, idx2){
  const tmp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = tmp
}

// function shift(arr){
//   const len = arr.length
//   const q = new FixedSizeQueue(len)
//   for(let i = 0; i < len; i++){
//     if(arr[i] !== 0 && !q.isEmpty()){
//       swap(arr, i, q.pop())
//     } 
    
//     if(arr[i] === 0){
//       q.push(i)
//     }
//   }
//   return arr
// }

// function shift(arr){
//   const len = arr.length
//   let zeroes = 0, nonZeroes = 1
//   while(nonZeroes < len && zeroes < len){
//     if((arr[zeroes] === 0 && arr[nonZeroes] !== 0) && nonZeroes > zeroes){
//       swap(arr, zeroes, nonZeroes)
//       zeroes++
//       nonZeroes++
//     } else if(arr[zeroes] !== 0){
//       zeroes++
//     } else {
//       nonZeroes++
//     }
//   }
  
//   return arr
// }

function shift(arr){
  const len = arr.length
  let count = 0

  for(let i = 0; i < len; i++){
    if(arr[i] !== 0){
      arr[count] = arr[i]
      count++
    }
  }

  while(count < len){
    arr[count] = 0
    count++
  }
  return arr
}


assertEqual(1, [], shift([]), 'Should return array')
assertEqual(2, [1,2,3,0,0,0], shift([1,0,2,0,3,0]), 'Should shift all zeroes to the right')
assertEqual(3, [1,2,3,0,0,0], shift([1,2,3,0,0,0]), 'Should not modified array if all zeroes on the right')
assertEqual(4, [1,2,0,0,0,0], shift([1,0,2,0,0,0]), 'Should modified array')
assertEqual(5, [1,2,3,0,0,0], shift([0,0,0,1,2,3]), 'Should modified array')
assertEqual(6, [1,0,0,0,0,0], shift([0,0,0,0,0,1]), 'Should modified array')