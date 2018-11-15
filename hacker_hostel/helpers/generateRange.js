//import isDateValid from "./date_validater";
function isDateValid(array){
	const currentYear = new Date().getFullYear()
	if(array.length !== 3){
		return []
	}

	const isEvery = array.every(item => !isNaN(item))
	if(!isEvery) {
		return []
	}
	
	const [year, month, date] = array
	if(year.length !== 4 || +year < currentYear){
		return []
	}
	
	if(month.length !== 2 || +month > 12){
		return []
	}
	
	if(date.length !== 2 || +date > 31){
		return []
	}
	return array
}

//input two arrays
//output array

function generateRange(from, to){
	if(from.length === 0 || to.length === 0){
		return []
	}
	const dateFrom = new Date(...from)
	const dateTo = new Date(...to)
	const range = []
	let date = null
	while(dateFrom.getTime() <= dateTo.getTime()){
		date = `${dateFrom.getFullYear()}-${dateFrom.getMonth()}-${dateFrom.getDate()}`
		range.push(date)
		dateFrom.setDate(dateFrom.getDate() + 1)
	}
	return range
}

//input string
//output array
function splitString(str){
	return str.split(' to ')
}

//input array
//output array
function splitIntoNumbers(array){
	return array.map(str => str.split('-'))
}

function validate(array){
	return array.map(arr => {
		return isDateValid(arr)
	})
}

function ranges(array){
	return generateRange(...array)
}

function assertArray(number, actual, expected, testName){
	const isEveryEqual = actual.every((item, idx) => {
		if(Array.isArray(item)){
			return item.every((el, index) => el === expected[idx][index]) 
						 && item.length === expected[idx].length 
		}
		return item === expected[idx]
	})
	const isSameLength = (actual.length === expected.length)
	if(isEveryEqual && isSameLength){
		console.log(number, 'passed')
	} else {
		console.log(number, `FAILED [${testName}] Expected [${expected}] to be equal [${actual}]`)
	}
}
//export default generateRange

assertArray(1, ["touch"], splitString('touch'), 'Should return passed string inside array')
assertArray(2, [""], splitString(''), 'Should return passed string inside array')
assertArray(3, ["touch", "touch"], splitString('touch to touch'), 'Should split string into two using " to " separater and return array of size two')
assertArray(4, [["2018", "09", "13"], ["2018", "09", "15"]], splitIntoNumbers(['2018-09-13', '2018-09-15']), 'Should return array of two arrays')
assertArray(5, [['touch'], ['touch']], splitIntoNumbers(['touch', 'touch']), 'Should return array of two arrays')
assertArray(6, [[''], ['touch']], splitIntoNumbers(['', 'touch']), 'Should return array of two arrays')
assertArray(7, [[], []], validate([['touch'], ['touch']]), 'Should return array of two empty arrays')
assertArray(8, [[], ['2018', '09', '13']], validate([['touch'], ['2018', '09', '13']]), 'Should return array of two arrays one of each is empty')
assertArray(9, [[], ['2018', '09', '13']], validate([['2018', '9', '13'], ['2018', '09', '13']]), 'Should return array of two arrays one of each is empty')
assertArray(10, [['2018', '09', '15'], ['2018', '09', '13']], validate([['2018', '09', '15'], ['2018', '09', '13']]), 'Should return array of two arrays that are correct')
assertArray(11, ['2018-9-13', '2018-9-14', '2018-9-15'], ranges([['2018', '09', '13'], ['2018', '09', '15']]), 'Should return array of ranges between two dates')