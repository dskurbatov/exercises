import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import debounce from 'lodash.debounce'

class Bookings extends Component {
	constructor(props){
		super(props)
		this.state = {
			names: [],
			dates: []
		}
		
		this.updateNames = this.updateNames.bind(this)
		this.updateDates = this.updateDates.bind(this)
		this.onClick = this.onClick.bind(this)
	}
	
	updateNames(e) {
		const names = e.target.value.split('\n');
		return this.setState({
			names
		});		
	}

	
	updateDates(e) {
		const input = e.target.value.split('\n')
		const dates = input.map((item) => {
			if(item){
				return item.split(' to ')
			} else {
				return item
			}
		})
		return this.setState({
			dates
		})
	}
	
	onClick(){
		const { names, dates } = this.state
		return this.props.handleClick(names, dates)
	}

	render() {
		return (
		<div className="row">
			<TextField
				className="col-md-6"
				multiline
				rows="4"
				placeholder="Enter the hacker list (one hacker per line)"
				onChange={this.updateNames}
			/>
			<TextField
				className="col-md-6"
				multiline
				rows="4"
				placeholder="Enter the date range for each hacker's stay (one range per line)"
				onChange={this.updateDates}
			/>
			<Button variant="outlined" color="primary" className="block-center" onClick={this.onClick}>Get Meals Schedule</Button>
		</div>);
	}
}

export default Bookings;