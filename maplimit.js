/*
  maplimit(collection, concurancyLevel, asyncfunc, callback)
  asyncfunc(item) => item apply to each element of the collections
  callback(err, collection) => collection or err 
*/


function mapLimit(collection, cl, asyncFunc, done){
  const len = collection.length
  const arr = Array(len).fill(null)
  let i = 0
  let currentNum = 0;

  (function () {
    return new Promise((resolve, reject) => {
      function help(){
        while(i < len && currentNum <= cl) {
          currentNum++
          asyncFunc(collection[i])
            .then((function (idx){
              return (item) => {
                arr[idx] = item
                currentNum--
                help()
            }})(i++))
            .catch((err) => reject(err))
        }
        if(currentNum === 0){
          resolve()
        }
      }
      help()
    })
  })()
  .then(() => done(null, arr))
  .catch((err) => done(err))
}

function powerOf2(x){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof x === 'number'){
        resolve(x**2)
      } else {
        reject('Not a number')
      }
    }, Math.random()*1000) 
  })
}

function log(idx){
  return (err, arr) => {
    console.log(idx, err, arr)
  }
}

// mapLimit([], 2, powerOf2, log(1))
// mapLimit([1,2,"a",4,5], 2, powerOf2, log(2))
// mapLimit(["a",2,3,4,5], 2, powerOf2, log(3))
// mapLimit([1,2,3,4,5], 2, powerOf2, log(4))

function logging(){
  console.log('Last')
}
console.log('Before')
process.nextTick(logging)
console.log('After')
