import React, {Component} from 'react';
import Bookings from './components/Bookings';
import Meals from './components/Meals';
import Error from './components/Error';


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
				<Error></Error>
				<Meals></Meals>
			</div>
		</div>);
	}
}

export default App;