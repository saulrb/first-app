'use server'
import { revalidatePath } from 'next/cache'
import { saveMeal } from './meals'
import { redirect } from 'next/navigation'

const isInvalidText = (text: string | undefined) => {
  return !text || text.trim() === ''
}

const shareMeal = async (prevState: any, formData: any) => {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email')
  }
  if (
    isInvalidText(meal.title?.toString()) ||
    isInvalidText(meal.summary?.toString()) ||
    isInvalidText(meal.creator?.toString()) ||
    isInvalidText(meal.creator_email?.toString()) ||
    !meal.creator_email?.toString().includes('@') ||
    !meal.image ||
    meal.image?.size === 0
  ) {
    return {
      message: 'Invalid input.'
    }
  }
  await saveMeal(meal)
  revalidatePath('/meals', 'layout') // revalidate the layout or page levels
  redirect('/meals')
}

export default shareMeal
