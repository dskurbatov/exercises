import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Meals from './Meals'

function formateDate(year, month, date){
	const now = new Date(year, month, date)
	const nowMonth = now.getMonth()
	const nowDate = now.getDate()
	return `${now.getFullYear()}-${nowMonth < 10 ? '0' + nowMonth : nowMonth}-${nowDate < 10 ? '0' + nowDate : nowDate}`
}

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

const ListOFMeals = (({ name, date }) => {
	return (
		<div className="col-xs-12  col-sm-12 col-md-12 col-lg-12">
			<ol id="list">
				{generateMeals(name, date[0], date[1])}
			</ol>
		</div>);
});
export default ListOFMeals;
