import React, {Component} from 'react';
import Bookings from './components/Bookings';
import Meals from './components/Meals';
import Error from './components/Error';
import './index.css'

function isValidDate(str) {
	const d = new Date(str)
  return d instanceof Date && !isNaN(d);
}

function isValidDateAndRange(str1, str2){
	if(isValidDate(str1) && isValidDate(str2)){
		return str2 > str1
	}
	return false
}

function formateDate(year, month, date){
	const now = new Date(year, month, date)
	const nowMonth = now.getMonth()
	const nowDate = now.getDate()
	return `${now.getFullYear()}-${nowMonth < 10 ? '0' + nowMonth : nowMonth}-${nowDate < 10 ? '0' + nowDate : nowDate}`
}

// function assertArray(arr1, arr2){
// 	const isSameLength = (arr1.length === arr2.length)
// 	const isSame = arr1.every((item, idx) => {
// 		return item === arr2[idx]
// 	})
// 	if(isSameLength && isSame){
// 		return true
// 	} else {
// 		return false
// 	}
// }

function generateRange(from, to){
	const range = []
	const dateFrom = new Date(...from.split('-'))
	const fromArray = [dateFrom.getFullYear(), dateFrom.getMonth(), dateFrom.getDate()]
	let current = from
	while(current <= to){
		range.push(current)
		fromArray[2]++
		current = formateDate(...fromArray)
	}
	return range
}

function generateMeals(name, from, to){
	const range = generateRange(from, to)
	return range.map((date, idx) => {
		return <Meals key={name+idx} name={name} date={date}></Meals>
	})
}


class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			hackers: []
		}	
		
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(names, dates){
		const len = names.length
		const hackers = Array(len).fill(null)
		for(let i = 0; i < len; i++){
			hackers[i] = {
				name: names[i],
				date: dates[i]
			}
		}
		return this.setState({
			hackers
		})
	}
	
	render() {
		return (<div className="container-fluid">
			<center>
				<h2>Hacker Hostel</h2>
			</center>
			<div className="container">
				<Bookings handleClick={this.handleClick}></Bookings>
				{
					this.state.hackers.filter(({ date }) => {
						return date.length === 0 || !isValidDateAndRange(date[0], date[1])
					}).map(({ name }, idx) => <Error key={idx} name={name}></Error>)
				}
				{
					this.state.hackers.filter(({ date }) => {
						return date.length > 0 && isValidDateAndRange(date[0], date[1])
					}).reduce((acc, { name, date }) => {
						return acc.concat(generateMeals(name, date[0], date[1]))
					}, [])
				}
			</div>
		</div>);
	}
}

export default App;