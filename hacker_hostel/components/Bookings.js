import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import debounce from 'lodash.debounce'
import stringToArray from '../helpers/string_to_array'

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
		return this.setState({
			names: stringToArray(e.target.value, (name) => {
				if(name){
					return name
				} else {
					return null
				}
			})
		});		
	}

	
	updateDates(e) {
		return this.setState({
			dates: stringToArray(e.target.value, (date) => {
				if(date){
					return date.split(' to ')
				} else {
					return []
				}
			})
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