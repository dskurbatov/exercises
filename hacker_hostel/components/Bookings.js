import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import debounce from 'lodash.debounce'
import getRange from '../helpers/generateRange'
import validate from '../helpers/date_validater'

function pipe(...func){
	return (value) => {
		return func.reduce((value, fn) => fn(value), value)
	}
}

const splitIntoRange = pipe(validate, getRange)

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

	debounced(func, delay){
		const f = debounce(func, delay)
		return e => {
			e.persist()
			return f(e)
		}
	}
	
	updateNames(e) {
		const names = e.target.value.split('\n')
		return this.setState({
			names
		});		
	}

	//rewrite function so that dates property is range of dates provided	
	//check if input is valid range othewise return empty array
	updateDates(e) {
		const dates = e.target.value.split('\n')
		return this.setState({
			dates 
		})
	}
	
	//should return names as array of strings and dates as array of arrays
	onClick(){
		const { names, dates } = this.state
		const splitDates = splitIntoRange(dates)
		return this.props.handleClick(names, splitDates)
	}

	render() {
		return (
		<div className="row">
			<TextField
				className="col-md-6"
				multiline
				rows="4"
				placeholder="Enter the hacker list (one hacker per line)"
				onChange={this.debounced(this.updateNames, 500)}
			/>
			<TextField
				className="col-md-6"
				multiline
				rows="4"
				placeholder="Enter the date range for each hacker's stay (one range per line)"
				onChange={this.debounced(this.updateDates, 1000)}
			/>
			<Button variant="outlined" color="primary" className="block-center" onClick={this.onClick}>Get Meals Schedule</Button>
		</div>);
	}
}

Bookings.propTypes = {
	onClick: PropTypes.func
}

export default Bookings;