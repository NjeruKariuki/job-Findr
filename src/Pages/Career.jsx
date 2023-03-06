import React from 'react'
import { useLoaderData, Link, useNavigate, useParams } from 'react-router-dom'

function Career() {
    const career = useLoaderData()
    const { id } = useParams();
    const navigate = useNavigate()
    const handleBack = (e) => {
        navigate(-1);
    }

    return (
        <div className='font-mono flex flex-col justify-center items-center py-36'>
            <button className='text-2xl bg-slate-500 text-white px-6 py-2 rounded absolute top-12 left-12' onClick={handleBack}><h1>Back</h1></button>
            <div className="Career h-3/4 w-3/4 md:my-16 md:w-3/4 bg-slate-600 rounded p-5 text-white font-mono">
                <h3 className="text-2xl">{career.title}</h3>
                <hr />
                <br />
                <p className="">{career.description}</p>
                <br />
                <h4>Starting Salary:</h4>
                <h4 className='font-mono font-thin'>Ksh {career.salary}</h4>
                <br/>
                <br/>
                <span className="flex justify-between">
                    <span className="hidden md:flex md:space-x-2">
                        {career.skills.map(skill => (

                            <button className="hover:bg-white hover:text-black hover:border-black hover:border-2 border border-white p-2 rounded" type="text">{skill}</button>
                        ))}
                    </span>
                    <button className="lg:hidden md:hidden border border-white hover:bg-white hover:text-black hover:border-black hover:border-2 p-2 rounded-sm" type="text">{career.skills[0]}</button>
                    <p>{career.location}</p>
                </span>
            </div>
        </div>
    )
}

export default Career


export const careerLoader = async ({ params }) => {
    const { id } = params
    console.log(id)
    const res = await fetch('http://localhost:4000/careers/' + id);
    if(!res.ok) {
        throw Error("Career not found!");
    }
    return res.json();
}

