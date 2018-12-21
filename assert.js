function assert(number, actual, expected, testName){
  if(actual === expected){
    console.log(number, `PASSED ${testName}`)
  } else {
    console.log(number, `FAILED ${testName} expected ${expected} to be equal ${actual}`)
  }
}

module.exports = assert