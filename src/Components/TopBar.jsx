import React, { useState } from 'react'
import { NavLink,  } from "react-router-dom";

function TopBar() {
    let [open, setOpen] = useState(false);

    return (
        <nav>
            <div className={`Navigation bg-slate-700 h-auto shadow-lg fixed w-full top-0 left-0 block justify-between font-mono items-center px-6 md:flex transition-all duration-700 ${open ? "h-12 md:h-auto": "h-32 md:h-auto"}`}>
                <span className='flex space-x-2'>
                <ion-icon size="large" name="search-outline"></ion-icon>
                <h1 className="text-2xl font-bold">JobFindr</h1>
                </span>
                    
                <span className='absolute flex items-center right-6 top-1 cursor-pointer md:hidden'>
                <button onClick={()=>setOpen(!open)}><ion-icon name={open ? "menu-outline": "close-outline"} size="large"></ion-icon>
                    </button>
                </span>

                <span className={`flex flex-col py-2 justify-between md:flex md:flex-row md:justify-between md:space-x-6 ${open ? "hidden": null}`}>
                    <NavLink to="/"><span className='hover:text-red-700 transition-all duration-500' activeStyle={{backgroundColor: "bg-red-400", color: "red"}}>Home</span></NavLink>
                    <NavLink to="about"><span className='hover:text-red-700 transition-all duration-500'>About Us</span></NavLink>
                </span>
            </div>
        </nav>

    )
}

export default TopBar
