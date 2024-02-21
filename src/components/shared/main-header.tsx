import Link from 'next/link'
import Image from 'next/image'
import React, { FC } from 'react'

import NavLink from './nav-link'
import MainHeaderBackgroud from './main-header-background'
import logoImg from '~/assets/logo.png'
import classes from './main-header.module.css'

type Props = {
  title?: string
}

const MainHeader: FC<Props> = ({ title }) => {
  return (
    <>
      <MainHeaderBackgroud />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" />
          {title}
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals"> Brows Meals </NavLink>
            </li>
            <li>
              <NavLink href="/community"> Foodies Community </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default MainHeader
