function isPrime(num){
  if(num < 2 || num % 2 == 0){
    return false
  }

  for(let i = 3; i * i <= num; i+=2){
    if(num % i === 0){
      return false
    }
  }
  return true
}

console.log('3',isPrime(3))
console.log('-5',isPrime(-5))
console.log('5', isPrime(5))
console.log('2',isPrime(2))
console.log('4',isPrime(4))
console.log('15',isPrime(15))