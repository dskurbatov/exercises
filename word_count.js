/*
how many 4 letter words in the sentence
*/
const assert = require('./assert')

function wordsInSentence(size, sentence){
  return sentence.split(' ').reduce((count, word) => {
    if(word.length === size){
      count++
    }
    return count
  }, 0)
}

assert(1, 0, wordsInSentence(4, 'These are me'), 'Should return 0 when where are no words of size 4')
assert(2, 2, wordsInSentence(4, 'This is mine'), 'Should return 2 when where are 2 words of size 4')
