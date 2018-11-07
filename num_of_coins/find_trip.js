/*
Imagine​ ​a​ ​company​ ​sends​ ​you​ ​on​ ​a​ ​trip​ ​from​ ​SFO​ ​to​ ​JFK,​ ​
from​ ​JFK​ ​to​ ​LGN,​ ​from​ ​LGN to​ ​BUR,​ ​from​ ​BUR​ ​to​ ​PHX,​ ​
and​ ​from​ ​PHX​ ​to​ ​PDO.​ ​As​ ​you​ ​see,​ ​
your​ ​first​ ​departure was​ ​SFO​ ​and​ ​the​ ​last​ ​arrival​ ​was​ ​PDO.​ ​
Given​ ​an​ ​array​ ​of​ ​arrays​ ​where​ ​the​ ​first​ ​item​ ​is always​ ​departure​
and​ ​the​ ​last​ ​is​ ​arrival,​ ​
please​ ​find​ ​the​ ​trip’s​ ​original​ ​departure​ ​and last​ ​destination.​
Example:
Input​ ​->​ ​[​ ​[SFO,​ ​JFK], [JFK,​ ​LGN],
[LGN,​ ​BUR],
[BUR,​ ​PHX],
[PHX,​ ​PDO]​ ​]
Output​ ​->​ ​[​ ​SFO,​ ​PDO​ ​]
*/
function helper(dict){
  const res = Array(2).fill(0)
  let i
  Object.keys(dict).forEach(item => {
     i = (dict[item] === "destination") ? 1 : 0
     res[i] = item
  })
  return res
}

function find_trip(arr){
  let depart, dest
  const obj = arr.reduce((acc, item) => {
    [depart, dest] = item
    if(acc[depart]){
      delete acc[depart]
    } else {
      acc[depart] = "departure"
    }

    if(acc[dest]){
      delete acc[dest]
    } else {
      acc[dest] = "destination"
    }

    return acc
  }, {})
  return helper(obj)
}

const result = find_trip([["JFK", "LGN"], ["LGN", "BUR"], ["BUR", "PHX"], ["PHX", "PDO"], ["SFO", "JFK"]])
console.log(result)