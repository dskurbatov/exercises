import React, {Component} from 'react'
import {PropTypes} from 'prop-types'

//sorting numeric strings
function sortAlphabet(str1, str2){
  const options = {
    numeric: true
  }
  return str1.localeCompare(str2, undefined, options)
}

//get a meal
function getMeal(date, names, type){
  return names.map(name => <li key={date+name+type}>{`${type} for ${name} on ${date}`}</li>)
}

//get DailyMeals
function getDailyMeals(date, names){
  return ['Breakfast', 'Lunch', 'Dinner'].map(type => getMeal(date, names, type))
}

const Meals = (({ calendar }) => {
  const sortedDates = Object.keys(calendar).sort(sortAlphabet)
  return(
    <ol>
      {sortedDates.map(date => getDailyMeals(date, calendar[date]))}
		</ol>
  )
})

Meals.propTypes = {
  calendar: PropTypes.object
}

export default Meals