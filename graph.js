function tasks(list){
  const len = list.length
  const sortedList = []
  const visited = Array(len).fill(0)
  const map = {}
  for(let i = 0; i < len; i++){
    if(!map[list[i].name]){
      map[list[i].name] = i
    }
  }

  let task = null
  for(let i = 0; i < len; i++){
    task = list[i]
    if(visited[i] === 0){
      if(task.dependOn.length > 0){
        finishedTask(task.dependOn, visited, sortedList, list, map)
      }
      visited[i] = 1
      sortedList.push(task)
    }
  }
  return sortedList
}

function finishedTask(tasks, visited, sortedList, list, map){
  let name = null
  for(let i = 0; i < tasks.length; i++){
    name = tasks[i]
    if(visited[map[name]] === 0 && list[map[name]].dependOn.length > 0){
      finishedTask(list[map[name]].dependOn, visited, sortedList, list, map)
    }
    visited[map[name]] = 1
    sortedList.push(list[map[name]])
  }
}

const list = [
  {
    name: 'A',
    dependOn: ['B', 'C']
  },
  {
    name: 'B',
    dependOn: ['D']
  },
  {
    name: 'C',
    dependOn: ['P']
  },
  {
    name: 'D',
    dependOn: []
  },
  {
    name: 'P',
    dependOn: []
  },
  {
    name: 'Q',
    dependOn: []
  },
]

console.log(tasks(list))
