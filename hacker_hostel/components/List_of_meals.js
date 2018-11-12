import React from 'react';
import {PropTypes} from 'prop-types';
import Meals from './Meals'
import DateIterator from '../helpers/date_iterator'

function generateMeals(name, from, to){
	const meals = []
	const iterator = new DateIterator(from, to)
	let date = null, i = 0
	while(iterator.isNext()){
		date = iterator.next()
		meals.push(<Meals key={name + i} name={name} date={date}></Meals>)
		i++
	}
	return meals
}

const ListOFMeals = (({ name, date }) => {
	return (
		<div className="col-xs-12  col-sm-12 col-md-12 col-lg-12">
			<ol id="list">
				{generateMeals(name, date[0], date[1])}
			</ol>
		</div>);
});

ListOFMeals.propTypes = {
	name: PropTypes.string,
	date: PropTypes.string
}

export default ListOFMeals;
