import React, { FC } from 'react'
import classes from './meals-grid.module.css'
import MealItem from './meals-item'
import MealModel from './meal-model'

type Props = {
  meals: MealModel[]
}
const MealsGrid: FC<Props> = ({ meals }) => {
  return (
    <>
      {' '}
      <ul className={classes.meals}>
        {meals.map(meal => (
          <li key={meal.id}>
            <MealItem meal={meal} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default MealsGrid
