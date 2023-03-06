import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='flex flex-col font-mono text-xl justify-center items-center py-36 bg-slate-200 h-screen w-screen'>
      <div className='w-3/4 h-3/4 bg-slate-500 block justify-center items-center p-12 rounded-md'>
        <h3 className='font-bold text-red-600 pb-6 text-2xl'>404 Not Found! </h3>
        <h3 className='text-white'>The page your are looking for cannot be found, check your url again!</h3>
        <p className='py-12'>Got to <Link className='underline text-red-600 font-bold' to="/">Homepage</Link></p>
      </div>
    </div>
  )
}

export default NotFound;
