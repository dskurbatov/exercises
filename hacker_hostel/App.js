import React, {Component} from 'react';
import Bookings from './components/Bookings';
import Error from './components/Error';
import Meals from './components/Meals'

function setCalendar(range, name, calendar){
	range.forEach(item => {
		if(!calendar[item]){
			calendar[item] = []
		}
		calendar[item].push(name)
	})
}

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
		const calendar = {}
		for(let i = 0, len = names.length; i < len; i++){
			if(names[i].length === 0){
				continue
			}

			if(dates[i].length > 0){
				setCalendar(dates[i], names[i], calendar)
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
		const { hackers, errors } = this.state
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
				<Meals calendar={this.state.calendar}></Meals>
			</div>
		</div>);
	}
}

export default App;