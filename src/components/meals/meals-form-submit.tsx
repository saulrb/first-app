'use client'

import React, { FC } from 'react'
import { useFormStatus } from 'react-dom'

const MealsFormSubmit: FC = () => {
  const { pending } = useFormStatus()
  return (
    <>
      <button disabled={pending}> {pending ? 'Submitting...' : 'Share Meal'} </button>
    </>
  )
}

export default MealsFormSubmit
