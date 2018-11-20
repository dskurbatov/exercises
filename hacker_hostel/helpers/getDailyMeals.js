import React from 'react'

//get a meal
export function getMeal(date, names, type){
  return names.map(name => <li key={date+name+type}>{`${type} for ${name} on ${date}`}</li>)
}

//get DailyMeals
function getDailyMeals(date, names){
  return ['Breakfast', 'Lunch', 'Dinner'].map(type => getMeal(date, names, type))
}

export default getDailyMeals