'use client'

import React, { FC, useRef, useState } from 'react'
import Image from 'next/image'

import classes from './image-picker.module.css'

type Props = {
  label: string
  name: string
}

const ImagePicker: FC<Props> = ({ label, name }) => {
  const imageInput = useRef()
  const [pickedImage, setPickedImage] = useState(null)

  const handlePickClick = () => {
    imageInput.current.click()
  }
  const handleImageChange = (event: any) => {
    const file = event.target.files[0]

    if (!file) {
      setPickedImage(null)
      return
    }

    const fileReader = new FileReader()

    fileReader.onload = () => {
      setPickedImage(fileReader.result)
    }
    fileReader.readAsDataURL(file)
  }

  return (
    <>
      <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.control}>
          <div className={classes.preview}>
            {!pickedImage && <p>No Image Selected</p>}
            {pickedImage && (
              <Image src={pickedImage} alt="The image selected by the user" fill></Image>
            )}{' '}
          </div>
          <input
            className={classes.input}
            type="file"
            id={name}
            accept="image/png, image/jpeg"
            name={name}
            ref={imageInput}
            onChange={handleImageChange}
            required
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
