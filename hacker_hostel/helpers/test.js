import validate, { isDateValid } from './date_validater'
import getRange, { generateRange } from './generateRange'
import setCalendar from './setCalendar'

describe('isDateValid', () => {
	test('should return empty array when not formated corretly date is passed', () => {
		const array = isDateValid('touch')
		expect(array).toEqual([])
	})
	
	test('should return array of splitted by "-" string', () => {
		const array = isDateValid('2018-09-13')
		expect(array).toEqual(['2018','09', '13'])
	})

	test('should return empty array if string is not formatted "YYYY-MM-DD"', () => {
		const array = isDateValid('2018-9-13')
		expect(array).toEqual([])
	})
})

describe('validate', () => {
	test('should return 3D array', () => {
		const array = validate(['touch to touch', '2018-09-13 to 2018-09-15'])
		expect(array).toEqual([
			[[], []],
			[['2018', '09', '13'], ['2018', '09', '15']]
		])
	})
})

describe('generateRange',() => {
	it('should return array', () => {
		const array = generateRange(['touch'], ['touch'])
		expect(array).toEqual([])
	})

	it('generates range between two dates', () => {
		const range = generateRange(['2018', '09', '13'], ['2018', '09', '15'])
		expect(range).toEqual(['2018-9-13', '2018-9-14', '2018-9-15'])
	})

	it('returns empty array if dates are not in range', () => {
		const range = generateRange(['2018', '09', '13'], ['2018', '09', '11'])
		expect(range).toEqual([])
	})
})

describe('setCalendar', () => {
	it('returns new object', () => {
		const before = {
			'2018-9-13': ['anton']
		}
		const after = setCalendar(['2018-9-13', '2018-9-14'], 'john', before)
		expect(before).toEqual({
			'2018-9-13': ['anton']
		})
		expect(after).toEqual({
			'2018-9-13': ['anton', 'john'],
			'2018-9-14': ['john']
		})
	})
})


// assert(1, false, dateFormate(["2018","to", "12"]), 'should return false if date string contains not a number')
// assert(2, false, dateFormate(["2017","11","12"]), 'should return false if year is less than current year')
// assert(3, false, dateFormate(["2018","9", "12"]), 'should return false if month is present as one digit')
// assert(4, false, dateFormate(["2018", "9", "12"]), 'should return false if month is present as one digit')
// assert(5, false, dateFormate(["2018", "09", "2"]), 'should return false if date is present as one digit')
// assert(6, false, dateFormate(["2018","13", "02"]), 'should return false if month is greater than 12')
// assert(7, false, dateFormate(["2018", "12", "32"]), 'should return false if date is greater than 31')
// assert(8, true, dateFormate(["2018", "12", "31"]), 'should return true')
// assert(9, false, dateFormate(["2018", "12"]), 'should return false if month or date or year is not present')
// assertArray(1, [], generateRange(['2018', '09', '13'], ['2018', '09', '11']), 'Should return empty array if second date is less than first')
// assertArray(2, ['2018-9-13', '2018-9-14', '2018-9-15'], generateRange(['2018', '09', '13'], ['2018', '09', '15']), 'Should return array of dates from first to the second included')
