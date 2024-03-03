import fs from 'node:fs'
import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'
import { error } from 'node:console'

const db = sql('meals.db')

export const getMeals = async () => {
  await new Promise(resolve => setTimeout(resolve, 5000))
  //throw new Error('Loading meals failed')
  return db.prepare('SELECT * FROM meals').all()
}

export const getMeal = slug => {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

export const saveMeal = async meal => {
  meal.slug = slugify(meal.title, { lower: true })
  meal.instructions = xss(meal.instructions)
  const extrension = meal.image.name.split('.').pop()
  const fileName = `${meal.slug}.${extrension}`
  const stream = fs.createWriteStream(`public/images/${fileName}`)
  const bufferedImage = await meal.image.arrayBuffer()
  stream.write(Buffer.from(bufferedImage), error => {
    if (error) {
      throw new Error('Saving image failed:' + error.message)
    }
  })
  meal.image = `/images/${fileName}`

  return db
    .prepare(
      `INSERT INTO meals
    (title, summary, instructions, creator, creator_email, image, slug)
    VALUES(
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug)  
  `
    )
    .run(meal)
}
