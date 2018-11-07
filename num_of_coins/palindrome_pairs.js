/*
Given a list of unique words, 
find all pairs of distinct indices (i, j) in the given list, 
so that the concatenation of the two words, 
i.e. words[i] + words[j] is a palindrome.
*/
function isPalindrome(word, start, end){
  while(start < end){
    if(word[start] !== word[end]){
      return false
    }
    start++
    end--
  }
  return true
}

function charToIndex(char){
  return char.charCodeAt(0) - 'a'.charCodeAt(0)
}

class Trie{
  constructor(){
    this.head = new TrieNode()
  }

  insert(word, id){
    const len = word.length - 1
    let pointer = this.head, index
    for(let i = len; i >= 0; i--){
      //Todo charToIndex
      index = charToIndex(word[i])

      if(pointer.children[index] === null){
        pointer.children[index] = new TrieNode()
      }

      if(isPalindrome(word, 0, i)){
        pointer.pos.push(id)
      }

      pointer = pointer.children[index]
    }
    pointer.id = id
    pointer.pos.push(id)
    pointer.isLeaf = true
  }

  search(word, id){
    const len = word.length
    const res = []
    let pointer = this.head, index
    for(let i = 0; i < len; i++){
      index = charToIndex(word[i])
      if(pointer.id >= 0 && pointer.id !== id && isPalindrome(word, i, len - 1)){
        res.push([id, pointer.id])
        return
      }

      if(pointer.children[index] === null){
        return
      }

      pointer = pointer.children[index]
    }
    
    for(let i = 0; i < pointer.pos.length; i++){
      if(pointer.pos[i] !== id){
        res.push([id, pointer.pos[i]])
      }
    }
    return res
  }
}

class TrieNode{
  constructor(){
    this.pos = []
    this.id = -1
    this.children = Array(26).fill(null)
    this.isLeaf = false
  }
}

function palindromPairs(words=[]){
  const trie = new Trie()
  const len = words.length
  const res = []
  let found
  for(let i = 0; i < len; i++){
    trie.insert(words[i], i)
  }

  for(let i = 0; i < len; i++){
    found = trie.search(words[i], i)
    if(found !== undefined){
      res.push(...found)
    }
  }
  return res
}

const result = palindromPairs(["abcd","dcba","lls","s","sssll"])
console.log(result)