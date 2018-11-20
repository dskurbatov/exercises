import React, {Component} from 'react';
import Bookings from './components/Bookings';
import Error from './components/Error';
import Meals from './components/Meals'
import setCalendar from './helpers/setCalendar'

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			calendar: {},
			errors: []
		}	
		
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(names, dates){
		const errors = []
		let calendar = {}
		for(let i = 0, len = names.length; i < len; i++){
			if(names[i] === 'undefined' || names[i].length === 0){
				continue
			}

			if(dates[i] && dates[i].length > 0){
				calendar = setCalendar(dates[i], names[i], calendar)
			} else {
				errors.push(names[i])
			}
		}
		return this.setState({
			calendar,
			errors
		})
	}
	
	render() {
		const { calendar, errors } = this.state
		return (
		<div className="container-fluid">
			<center>
				<h2>Hacker Hostel</h2>
			</center>
			<div className="container">
				<Bookings handleClick={this.handleClick}></Bookings>
				{
					errors.map((name, idx) => <Error key={idx} name={name}></Error>)
				}
				<Meals calendar={calendar}></Meals>
			</div>
		</div>);
	}
}

export default App;