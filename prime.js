function prime(num){
  if(num < 2){
    return false
  }
  
  for(let i = 2; i * i <= num; i++){
    if(num % i === 0){
      return false
    }
  }
  return true
}

console.log('3',prime(3))
console.log('-5',prime(-5))
console.log('5', prime(5))
console.log('2',prime(2))
console.log('4',prime(4))
console.log('15',prime(15))