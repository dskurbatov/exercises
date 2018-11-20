import React, {Component} from 'react'
import {PropTypes} from 'prop-types'
import getDailyMeals from '../helpers/getDailyMeals'

//sorting numeric strings
function sortAlphabet(str1, str2){
  const options = {
    numeric: true
  }
  return str1.localeCompare(str2, undefined, options)
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