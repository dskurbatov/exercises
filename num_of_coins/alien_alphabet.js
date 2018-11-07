/*Given a sorted dictionary of an alien language, find order of characters
Given a sorted dictionary (array of words) of an alien language, find order of characters in the language.

Examples:

Input:  words[] = {"baa", "abcd", "abca", "cab", "cad"}
Output: Order of characters is 'b', 'd', 'a', 'c'
Note that words are sorted and in the given language "baa" 
comes before "abcd", therefore 'b' is before 'a' in output.
Similarly we can find other orders.

Input:  words[] = {"caa", "aaa", "aab"}
Output: Order of characters is 'c', 'a', 'b'
*/
const a = 'a'.charCodeAt(0)

function findOrder(words=[]){
  const g = new Graph(26)
  let arr
  for(let i = 1, len = words.length; i < len; i++){
    arr = diffCharacters(words[i - 1], words[i])
    if(arr){
      g.addEdge(...arr)
    }
  }

  const result = g.topologicalSort()
  console.log(result.join(''))
}

function diffCharacters(word1, word2){
  const min = Math.min(word1.length, word2.length)
  for(let i = 0; i < min; i++){
    if(word1[i] !== word2[i]){
      return charToIndex(word1[i], word2[i])
    }
  }
  return undefined 
}

function charToIndex(char1, char2){
  return [char1.charCodeAt(0) - a, char2.charCodeAt(0) - a]
}

function addCharacters(int1, int2){
  return String.fromCharCode(int1 + int2)
}
//what is function or class
function fillArr(size, what){
  let arr = []
  for(let i = 0; i < size; i++){
    arr.push([])
  }
  return arr
}



class Stack {
  constructor(){
    this.arr = []
    this.size = 0
  }

  push(item){
    this.arr.push(item)
    this.size += 1
  }

  pop(){
    this.size -= 1
    return this.arr.pop()
  }

  isEmpty(){
    return this.size === 0
  }
}

class Graph{
  constructor(size){
    this.v = size
    this.adjacent = fillArr(size)
  }

  addEdge(v, w){
    this.adjacent[v].push(w)
  }

  topologicalSort(){
    const stack = new Stack()
    const visited = Array(this.v).fill(0)
    const res = []
    let i = 0
    while(i < this.v){
      if(this.adjacent[i].length > 0 && visited[i]===0){
        this.topologicalSortHelp(i, visited, stack)
      }
      i++
    }

    while(!stack.isEmpty()){
      res.push(addCharacters('a'.charCodeAt(0), stack.pop()))
    }

    return res
  }

  topologicalSortHelp(index, visited, stack){
    visited[index] = 1
    let list = this.adjacent[index]
    let idx
    for(let i = 0; i < list.length; i++){
      idx = list[i]
      if(visited[idx]===0){
        this.topologicalSortHelp(idx, visited, stack)
      }
    }     
    stack.push(index)
    return
  }
}

findOrder(['ccda', 'ccbk', 'cd', 'a', 'ab'])