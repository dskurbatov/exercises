import React, {Component} from 'react';
import Bookings from './components/Bookings';
import ListOfMeals from './components/List_of_meals';
import isValidDateAndRange from './helpers/date_validater'
import Error from './components/Error';

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			hackers: [],
			errors: []
		}	
		
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(names, dates){
		const hackers = []
		const errors = []
		let name = null, date = null
		for(let i = 0, len = names.length; i < len; i++){
			name = names[i]
			date = dates[i]
			if(date.length > 0 && isValidDateAndRange(...date)){
				hackers.push({
					name,
					date
				})
			} else {
				errors.push({
					name
				})
			}
		}
		return this.setState({
			hackers,
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
					errors.map(({ name }, idx) => <Error key={idx} name={name}></Error>)
				}
				{
					hackers.map(({ name, date }, idx) => <ListOfMeals key={idx} name={name} date={date}></ListOfMeals>)
				}
			</div>
		</div>);
	}
}

export default App;