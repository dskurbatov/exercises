import React, {Component} from 'react'
import {PropTypes} from 'prop-types'

const Meals = (({name, date}) => {
  return(
    <div>
			<li className="morning">{`Breakfast for ${name} on ${date}`}</li>
			<li className="afternoon">{`Lunch for ${name} on ${date}`}</li>
			<li className="night">{`Dinner for ${name} on ${date}`}</li>
		</div>
  )
})

Meals.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string
}

export default Meals