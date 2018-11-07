// function minCoinsToOne(n, coins){
//   let cache = {}
//   function subtractCoins(num){
//     if(cache[num] !== undefined){
//       return cache[num]
//     }
    
//     if(num === 0){
//       return 0
//     }

//     let minCoins = Infinity
//     for(let i = 0; i < coins.length; i++){
//       if(num - coins[i] >= 0){
//         minCoins = Math.min(minCoins, subtractCoins(num - coins[i]))
//       }
//     }
//     cache[num] = minCoins + 1
//     return minCoins + 1
//   }

//   return subtractCoins(n)
// }

// console.log(minStepsToOne(50, [1, 2, 5]))

// function minCoinChange(num, coins){
//   let table = [0]
//   for(let i = 1; i <= num; i++){
//     let minCoins = Infinity
//     for(let coin = 0; coin < coins.length; coin++){
//       let currentCoin = coins[coin]
//       if(i - currentCoin >= 0){
//         minCoins = Math.min(minCoins, table[i - currentCoin])
//       }
//     }
//     table.push(minCoins + 1)
//   }
//   return table[num]
// }

// console.log(minCoinChange(11, [5, 8, 9, 1]))

function latt(n, m){
  const arr = new Array(m).fill(1)
  for(let row = 1; row < n; row++){
    for(let col = 1; col < m; col++){
      arr[col] = arr[col - 1] + arr[col]
    }
  }
  return arr[arr.length - 1]
}

console.log(latt(4,4))