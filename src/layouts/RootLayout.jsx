import React from 'react'
import TopBar from '../Components/TopBar'
import { Outlet } from 'react-router-dom'
import Breadcrumps from '../Components/Breadcrumps'


function RootLayout() {
  return (
    <div className='root-layout'>
       <header className="bg-slate-800 text-white">
        <TopBar />
      </header>
      <Breadcrumps />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
