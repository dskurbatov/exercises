function assertArray(number, actual, expected, testName){
	const isEveryEqual = actual.every((item, idx) => item === expected[idx])
	const isSameLength = (actual.length === expected.length)
	if(isEveryEqual && isSameLength){
		console.log(number, 'passed')
	} else {
		console.log(number, `FAILED [${testName}] Expected [${expected}] to be equal [${actual}]`)
	}
}

function assert(number, actual, expected, testName){
	if(actual === expected){
		console.log(number, 'passed')
	} else {
		console.log(number, `FAILED [${testName}] Expected "${expected}" to be equal "${actual}"`)
	}
}

