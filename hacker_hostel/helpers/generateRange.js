//input two arrays
//output array
export function generateRange(from, to){
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

//input 3D array[[[1],[2]],[[3],[4]]]
//output 2D array
function getRange(array){
	return array.map(arr => generateRange(...arr))
}

export default getRange

// assertArray(1, ["touch"], splitString('touch'), 'Should return passed string inside array')
// assertArray(2, [""], splitString(''), 'Should return passed string inside array')
// assertArray(3, ["touch", "touch"], splitString('touch to touch'), 'Should split string into two using " to " separater and return array of size two')
// assertArray(4, [[],["2018", "09", "13"], ["2018", "09", "15"]], validate([['touch'],['2018-09-13', '2018-09-15']]), 'Should return array of two arrays')
// assertArray(5, [['touch'], ['touch']], validate(['touch', 'touch']), 'Should return array of two arrays')
// assertArray(6, [[''], ['touch']], validate(['', 'touch']), 'Should return array of two arrays')
// assertArray(7, [[], []], validate([['touch'], ['touch']]), 'Should return array of two empty arrays')
// assertArray(8, [[], ['2018', '09', '13']], range([[], ['2018', '09', '13']]), 'Should return array of two arrays one of each is empty')
// assertArray(9, [[], ['2018', '09', '13']], validate([['2018', '9', '13'], ['2018', '09', '13']]), 'Should return array of two arrays one of each is empty')
// assertArray(10, [['2018', '09', '15'], ['2018', '09', '13']], validate([['2018', '09', '15'], ['2018', '09', '13']]), 'Should return array of two arrays that are correct')
// assertArray(11, ['2018-9-13', '2018-9-14', '2018-9-15'], ranges([['2018', '09', '13'], ['2018', '09', '15']]), 'Should return array of ranges between two dates')