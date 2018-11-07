/*
Consider​ ​a​ ​stack​ ​data​ ​structure.​ ​
Please​ ​create​ ​your​ ​own​ ​“stack”​ ​based​ ​data​ ​structure 
that​ ​will​ ​give​ ​you​ ​min​ ​and​ ​max​ ​of​ ​the​ ​integers​ ​stored​ ​in​ ​it.​ ​
Min​ ​and​ ​Max​ ​functions​ ​must be​ ​of​ ​a​ ​constant​ ​time.
Expectations:​ ​a​ ​candidate​ ​must​ ​understand​ ​stack​ ​data​ ​structure,​ ​
and​ ​implement​ ​pull and​ ​push​ ​“custom”​ ​methods.​ ​
The​ ​solution​ ​must​ ​be​ ​in​ ​constant​ ​time​ ​-​ ​a​ ​candidate​ ​
must think​ ​which​ ​data​ ​structures​ ​to​ ​use​ ​to​ ​store​ ​the​ ​data.
*/

class Stack {
  constructor(){
    this.arr = []
    this.size = 0
  }

  isEmpty(){
    return this.size === 0
  }

  ifEmpty(){
    return "stack is empty!!!"
  }

  pull(){
    this.size--
    return this.arr.pop() || this.ifEmpty()
  }

  push(item){
    this.arr.push(item)
    this.size++
  }

  peak(){
    return this.arr[this.size - 1]
  }
}

class MinMaxStack extends Stack {
  constructor(){
    super()
    this.min = []
    this.max = []
    this.minSize = 0
    this.maxSize = 0
  }

  currentMin(){
    return this.min[this.minSize - 1]
  }

  currentMax(){
    return this.max[this.maxSize - 1]
  }

  pullMax(){
    this.maxSize--
    this.max.pop()
  }

  pullMin(){
    this.minSize--
    this.min.pop()
  }

  pull(){
    const item = super.pull()
    if(this.currentMax() === item){
      this.pullMax()
    }

    if(this.currentMin() === item){
      this.pullMin()
    }

    return item
  }

  pushMax(item){
    this.maxSize++
    this.max.push(item)
  }

  pushMin(item){
    this.minSize++
    this.min.push(item)
  }

  push(item){
    super.push(item)
    //check if current min is bigger or equal(only if we have duplicates) than number
    if(this.currentMin() >= item || this.minSize === 0){
      this.pushMin(item)
    }

    if(this.currentMax() <= item || this.maxSize === 0){
      this.pushMax(item)
    }
  }

  peak(){
    return super.peak()
  }
}

// 1 is push, 2 is pull and 3 is print min and max
function minMax(arr){
  const stack = new MinMaxStack()
  let command, int
  for(let i = 0, len = arr.length; i < len; i++){
    [command, int] = arr[i]
    switch(command){
      case '1':
        console.log('adding ', int)
        stack.push(int)
        break;
      case '2':
        console.log('removing ', stack.peak())
        stack.pull()
        break;
      case '3':
        console.log('max is: ', stack.currentMax())
        console.log('min is: ', stack.currentMin())
        break;
      default: 
        console.log('Wrong command')
    }
  }
}

minMax([['1', 1],['2'],['3'],['1', 4],['1', 5],['1', 4],['3'],['2'],['3']])