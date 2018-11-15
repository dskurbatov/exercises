//input two arrays
//output array

function generateRange(from, to){
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


export default generateRange

