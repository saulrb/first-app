'use client'

import React, { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classes from './nav-link.module.css'

type Props = {
  href: string
  children: any
}
const NavLink: FC<Props> = ({ href, children }) => {
  const path = usePathname()
  return (
    <>
      {' '}
      <Link
        href={href}
        className={path.startsWith(href) ? `${classes.link} ${classes.active}` : `${classes.link}`}
      >
        {children}
      </Link>
    </>
  )
}

export default NavLink
