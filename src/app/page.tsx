import Image from 'next/image'
import Link from 'next/link'
import classes from './page.module.css'
import ImageSlidesshow from '~/components/shared/images/image-slidesshow'

export default function Home() {
  console.log('Executing page...')
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlidesshow />
        </div>
        <div className={classes.hero}>
          <h1>NextLevel Food for NextLevel Foodies</h1>
          <p>Taste & share food from all over the world</p>
        </div>
        <div className={classes.cta}>
          <Link href="/community">Join the Community</Link>
          <Link href="/meals">Explore Meals</Link>
        </div>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite recipes with the world.
            It&apos;s a place to discover new dishes, and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite recipes with the world.
            It&apos;s a place to discover new dishes, and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect with other food lovers.
          </p>
        </section>
      </main>
    </>
  )
}
