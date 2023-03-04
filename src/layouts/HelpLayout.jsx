import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function HelpLayout() {
  return (
    <div className='helpLayout '>
        <section>
            <h1 className='text-2xl font-bold font-sans'>Help JobFindr</h1>
            <h2>Welcome to jobFindr, get all the help you can from here!...</h2>
            <nav className='flex justify-center items-center'>
                <NavLink to="faq">FAQS</NavLink>
                <NavLink to="contact">Contact</NavLink>
            </nav>
        </section>
        <section>
            <Outlet />
        </section>
    </div>
  )
}

export default HelpLayout
