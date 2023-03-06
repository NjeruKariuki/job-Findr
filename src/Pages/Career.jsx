import React from 'react'
import { useLoaderData, Link, useNavigate, useParams } from 'react-router-dom'

function Career() {
    const career = useLoaderData()
    const { id } = useParams();
    console.log(career)
    return (
        <div>
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
                    <button className="lg:hidden md:hidden border border-white hover:bg-white hover:text-black hover:border-black hover:border-2 p-2 rounded-sm" type="text">skill 1</button>
                    <p>location</p>
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
    return res.json();
}

