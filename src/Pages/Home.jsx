import React, { useEffect } from 'react'
import Job from '../Components/Job';
import axios from 'axios';

import { useLoaderData, Link } from 'react-router-dom';


function Home() {
  const careers = useLoaderData();
  console.log(careers)
  return (
    <div className="h-full w-full bg-white">
      <section className="jobSearchHeader h-auto w-screen bg-slate-700 text-white">
        <div className="flex flex-col justify-center items-center py-3">
          <form className=" py-16 flex items-center justify-center">

            <input className="w-auto md:w-96  border border-black rounded p-3 m-3 text-black" type="text" name="" value="" placeholder="Enter job to search for..." />
            <button className=" md:w-36   px-5 py-3 mx-2 bg-red-700 rounded hover:bg-red-900 transition duration-700" type="submit">Search</button>
          </form>
          <h2 className=" text-xl font-serif font-extralight">We search, you find</h2>
        </div>

      </section>
      <section className="jobPostings bg-slate-200 h-100vh w-screen flex flex-col items-center p-3 space-y-6 py-6">
        {careers.map(career => (
          <Job
            key={career.id}
            title={career.title}
            description={career.description}
            location={career.location}
            salary={career.salary}
            skills={career.skills}
          />
        ))}
      </section>
    </div>
  )
}

export default Home


//loader function
export const jobsLoader = async () => {
  const res = await fetch('http://localhost:4000/careers')
  return res.json()
}