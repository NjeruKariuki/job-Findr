import React from 'react'
import { Link, useLocation } from 'react-router-dom'



function Breadcrumps() {
    const location = useLocation();
    let currentLink = "";
    let crumbs = location.pathname.split("/")
        .filter(crumb => crumb !== "")
        .map(crumb => {
            currentLink += `/${crumb}`
    
        return (
        <div className='hover:text-red-500 bg-slate-400 px-3 py-2 rounded hover:bg-slate-600'>
            <Link to={currentLink}>{crumb}</Link>
        </div>
    )})
        return (
            <div className='flex flex-row text-xl absolute top-28 left-4 space-x-2  font-mono'>
                {crumbs}
            </div>
        )}

export default Breadcrumps
