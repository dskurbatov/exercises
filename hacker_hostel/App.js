import React, {Component} from 'react';
import Bookings from './components/Bookings';
import ListOfMeals from './components/List_of_meals';
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
					}).map(({name, date}) => <ListOfMeals name={name} date={date}></ListOfMeals>)
				}
			</div>
		</div>);
	}
}

export default App;