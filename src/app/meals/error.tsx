'use client'
import React, { FC } from 'react'
import { useEffect } from 'react'

type Props = {
  error: any
  reset: any
}

const Error: FC<Props> = ({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
  useEffect(() => {
    console.error(error)
  }, [error])
  return (
    <>
      <main className="error">
        <h1>An Error ocurred!</h1>
        <button className="retry-btn" onClick={() => reset()}>
          Try again
        </button>
      </main>
    </>
  )
}

export default Error
