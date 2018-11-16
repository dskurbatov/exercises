import React, {Component} from 'react'
import {PropTypes} from 'prop-types'

const Meals = (({ calendar }) => {
  //const dates = Object.keys(calendar).sort(sortAlphabet)
  const sortedDates = Object.keys(calendar)
  const result = []
  let date = null
  for(let i = 0, len = sortedDates.length; i < len; i++){
    date = sortedDates[i]
    result.push(calendar[date].map(name => <li className="morning">{`Breakfast for ${name} on ${date}`}</li>))
    result.push(calendar[date].map(name => <li className="afternoon">{`Lunch for ${name} on ${date}`}</li>))
    result.push(calendar[date].map(name => <li className="night">{`Dinner for ${name} on ${date}`}</li>))
  }
  return(
    <div>
      {result}
		</div>
  )
})

//<li className="morning">{`Breakfast for ${name} on ${date}`}</li>
//<li className="afternoon">{`Lunch for ${name} on ${date}`}</li>
//<li className="night">{`Dinner for ${name} on ${date}`}</li>
Meals.propTypes = {
  calendar: PropTypes.object
}

export default Meals