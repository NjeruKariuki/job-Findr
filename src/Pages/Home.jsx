import React from 'react'
import Job from '../Components/Job';

function Home() {
  return (
    <div className="h-full w-full bg-white">
      <section className="jobSearchHeader h-48 w-screen bg-slate-700 text-white">
        <form className="py-16 flex items-center justify-center">
          <input className="w-auto md:w-96  border border-black rounded p-3 m-3 text-black" type="text" name="" value="" placeholder="Enter job to search for..." />
          <button className=" md:w-36   px-5 py-3 mx-2 bg-red-700 rounded hover:bg-red-900" type="submit">Search</button>
        </form>
      </section>
      <section className="jobPostings bg-slate-200 h-100vh w-screen flex flex-col items-center p-3 space-y-6 py-6">
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
      </section>
    </div>
  )
}

export default Home
