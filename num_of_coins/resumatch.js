/* 
  given two strings find what % is match
*/
const text1 = "Youre responsible for our website - dropbox.com and paper.dropbox.com. In addition to everything application engineers do but youre also deeply interested in building a fast, scalable, and responsive Dropbox experience for the modern web, using cutting-edge tools like Typescript, React, and Redux."
const text2 = "Youre responsible for our website - dropbox.com and paper.dropbox.com. In addition to everything application engineers do but youre also deeply interested in building a fast, scalable, and responsive Dropbox experience for the modern web, using cutting-edge tools like Typescript, React, and Redux."

function match (requirements, resume){
  let regEx, count = 0
  const map = requirements.split(/[^a-zA-z]/).reduce((obj, item) => {
    if(!obj[item] && item !== ""){
      obj[item.toLowerCase()] = true
    }
    return obj
  }, {})

  return map
  // for(prop in map){
  //   regEx = new RegExp(prop, "i")
  //   if(regEx.test(text2)){
  //     count++
  //   }
  // }
  // return count
}

console.log(match(text1, text2))