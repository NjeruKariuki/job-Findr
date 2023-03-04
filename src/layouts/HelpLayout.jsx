import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function HelpLayout() {
  return (
    <div className='helpLayout '>
        <section>
            <div className='flex flex-col text-2xl justify-center items-center py-36 bg-slate-200 pb-'>
            <h1 className='text-4xl font-bold font-mono pb-6 underline'>Help JobFindr</h1>
            <p className='text-xl font-mono p-6'>Welcome to jobFindr, get all the help you can from here!...</p>
            <nav className='flex justify-center items-center bg-slate-500 w-1/2 rounded-sm h-24 space-x-6 text-white'>
                <NavLink to="faq">FaQs</NavLink>
                <NavLink to="contact">Contact</NavLink>
            </nav>
            </div>
            
        </section>
        <section>
            <Outlet />
        </section>
    </div>
  )
}

export default HelpLayout
