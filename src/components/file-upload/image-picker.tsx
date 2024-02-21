'use client'

import React, { FC } from 'react'
import classes from './image-picker.module.css'
type Props = {
  label: string
  name: string
}
const ImagePicker: FC<Props> = ({ label, name }) => {
  const handlePickClick = () => {}

  return (
    <>
      <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.control}>
          <input
            className={classes.input}
            type="file"
            id={name}
            accept="image/png, image/jpeg"
            name={name}
          />
          <button className={classes.button} type="button" onClick={handlePickClick}>
            Pick an image{' '}
          </button>
        </div>
      </div>
    </>
  )
}

export default ImagePicker
