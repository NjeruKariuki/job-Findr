import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

function CareerError() {
    const error = useRouteError();
  return (
    <div className='flex flex-col h-screen font-mono text-2xl w-screen bg-slate-200 justify-center items-center py-24'>
        <h1 className='text-red-500 text-3xl'>Error!</h1>
      <h1>{error.message}</h1>
      <Link to="/" className='font-bold hover:text-red-600 duration-200 underline'>Go to Homepage</Link>
    </div>
  )
}

export default CareerError
