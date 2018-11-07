/*​ ​
Description

We​ ​want​ ​to​ ​know​ ​if​ ​a​ ​word​ ​is​ ​a​ ​palindrome​ ​or​ ​not.​ ​
A​ ​palindrome​ ​is​ ​a​ ​word,​ ​phrase,​ ​or sequence​ ​
that​ ​reads​ ​the​ ​same​ ​backward​ ​as​ ​forward.​ ​
The​ ​input​ ​word​ ​is​ ​going​ ​to​ ​be specified​ ​
by​ ​the​ ​end​ ​user​ ​in​ ​the​ ​console​ ​so​ ​they​ ​can​ ​type​ ​anything.​ ​
Even​ ​not​ ​valid words.

Restrictions
To​ ​solve​ ​the​ ​problem​ ​you​ ​must​ ​build​ ​a​​ ​linked​ ​list​.​ ​
Each​ ​node​ ​in​ ​the​ ​list​ ​will​ ​contain​ ​a char​ ​
and​ ​a​ ​pointer​ ​to​ ​the​ ​next​ ​node​ ​(unidirectional​ ​linked​ ​list).​ ​
The​ ​method​ ​to​ ​solve​ ​the problem​ ​should​ ​receive​ ​
the​ ​head​ ​of​ ​the​ ​list​ ​and​ ​should​ ​return​ ​either​ ​true​ ​or​ ​false 
depending​ ​if​ ​the​ ​word​ ​is​ ​or​ ​not​ ​a​ ​palindrome.​ ​
An​ ​example​ ​of​ ​how​ ​the​ ​method​ ​can​ ​look like​ ​is​ ​below.

public​ ​boolean​ ​isPalindrome(Node​ ​head)​ ​{ ​ ​​ ​//code​ ​here
}

Example
For​ ​​null​​ ​the​ ​output​ ​should​ ​be​ ​false
For​ ​"abba"​ ​the​ ​output​ ​should​ ​be​ ​true 
For​ ​"civic"​ ​the​ ​output​ ​should​ ​be​ ​true 
For​ ​"qwerty"​ ​the​ ​output​ ​should​ ​be​ ​false 
For​ ​"43flf34"​ ​the​ ​output​ ​should​ ​be​ ​true 
*/


//compare two linked lists
function compare(head1, head2){
  let curr1 = head1, curr2 = head2
  while(curr1 !== null){
    if(curr1.data !== curr2.data){
      return false
    }
    curr1 = curr1.next
    curr2 = curr2.next
  }
  return true
}

class Node {
  constructor(data){
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor(){
    this.head = null
  }

  add(node){
    if(this.head === null){
      this.head = node
      return
    }

    let curr = this.head
    while(curr.next !== null){
      curr = curr.next
    }

    curr.next = node
    return
  }

  reverse(){
    let curr = this.head, prev = null, next = this.head.next
    while(next !== null){
      curr.next = prev
      prev = curr
      curr = next
      next = curr.next
    }

    curr.next = prev
    this.head = curr
    return
  }
}

function isPalindrome(word){
  //if no word is provided return false
  if(!word){
    return false
  }
  // if word is empty string or 1 character return true
  if(word.length < 2){
    return true
  }
  
  //create linked list
  const list1 = new LinkedList()
  const list2 = new LinkedList()
  
  //populate linked list
  let node
  for(let i = 0, len = word.length; i < len; i++){
    node = new Node(word[i])
    list1.add(node)
  }

  //divide list into two
  let slow = list1.head, fast = list1.head, prev
  while(fast !== null && fast.next !== null){
    prev = slow
    slow = slow.next
    fast = fast.next.next
  }

  if(fast === null){
    list2.head = slow
  } else {
    list2.head = slow.next
  }
  prev.next = null
  
  //reverse second linked list
  list2.reverse()

  //compare two lists
  return compare(list1.head, list2.head)
}

console.log('abba', isPalindrome('abba'))
console.log('abcba', isPalindrome('abcba'))
console.log(isPalindrome())
console.log('civic', isPalindrome('civic'))
console.log('qwerty', isPalindrome('qwerty'))
console.log('43flf34', isPalindrome('43flf34'))
console.log('a', isPalindrome('a'))
console.log('ab', isPalindrome('ab'))