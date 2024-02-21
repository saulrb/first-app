import { NextPage } from 'next'
import Image from 'next/image'
import { getMeal } from '~lib/meals'
import MealModel from '~/components/meals/meal-model'
import classes from './page.module.css'
import { notFound } from 'next/navigation'

type Props = {
  params: {
    mealId: any
  }
}

const MealsPostPage: NextPage<Props> = ({ params: { mealId = null } }) => {
  const meal: MealModel = getMeal(mealId)
  if (!meal) {
    notFound()
  }
  meal.instructions = meal.instructions.replace(/\n/g, '<br />')
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  )
}

export default MealsPostPage
