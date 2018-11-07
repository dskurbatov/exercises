/*
The​ ​following​ ​code​ ​must​ ​produce​ ​an​ ​array​ ​of​ ​functions​ ​
each​ ​of​ ​which​ ​must​ ​return​ ​the integer​ ​in​ ​regard​ ​to​ ​the​ ​index​ ​
they​ ​are​ ​invoked​ ​from.​ ​
For​ ​example:​ ​arr[0]()​ ​=>​ ​0; 
another​ ​example:​ ​arr[3]()​ ​=>​ ​3
var​ ​arr​ ​=​ ​[];
for(var​ ​i​ ​=​ ​0;​ ​i​ ​<​ ​10;​ ​i​ ​+=​ ​1)​ ​{ ​ ​​ ​
  arr.push(function()​ ​{
​ ​​ ​​ ​return​ ​i;
​ ​​ ​});
}

Please​ ​write​ ​a​ ​code​ ​that​ ​first​ ​would​ ​test​ ​the​ ​expected​ ​output.​ ​
Once​ ​you​ ​done​ ​with​ ​the test,​ ​please​ ​fix​ ​the​ ​provided​ ​code​ ​so​ ​
it​ ​makes​ ​the​ ​test​ ​pass.
*/

const arr = []
// original
// for(var i = 0; i < 10; i++){
//   arr.push(function(){
//     return i
//   })
// }

// first solution using closure 
// helper function
// function setNum(int){
//   return function(){
//     return int
//   }
// }

// for(var i = 0; i < 10; i++){
//   arr.push(setNum(i))
// }

// second solution using let keyword and arrow function
for(let i = 0; i < 10; i++){
  arr.push(() => i)
}

function testFunction(arr){
  let res
  for(let i = 0, len = arr.length; i < len; i++){
    res = arr[i]()
    if(res !== i){
      console.log(res, i)
      return false
    }
  }
  return true
}

/*

write a function that takes two inputs:

 vocabulary - array of strings (words)
 sentence - string

and returns:
 true - if the sentence can be split in the words given; words can be repeated, words can have any order; you can use only subset of words
 false - if the sentence cannot be split in the words

Both sentence and words contain only lower-letter characters [a-z].
Note: the sentence does not need to be semantically correct.

example:
words = [“i”, “am”, "her", “here”]
sentence: 
  “iamhere” -> true
  “amami” -> true
  “iambla” -> false
  "iii" -> true
  "" -> true
*/

// words = ["her", “here”, "em"]
// sentence = "herem"
  

console.log(testFunction(arr))