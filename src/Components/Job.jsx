import React from 'react'

function Job() {
    return (
        <div className="jobCard h-auto w-full md:my-16 md:w-3/4 bg-slate-600 rounded my-6 p-5 text-white font-mono">
            <h3 className="text-xl ">Senior Software Engineer</h3>
            <hr />
            <br />
            <p className="">Get this job to code beautiful websites, making the difference in the world by writing clean code for our eco-friendly company. If you want to maek a difference, apply now!</p>
            <br />
            <span className="flex justify-between">
                <span className="hidden md:flex md:space-x-2">
                    <button className="border border-white p-2 rounded-sm" type="text">Python</button>
                    <button className="border border-white p-2 rounded-sm" type="text">Javascript</button>
                    <button className="border border-white p-2 rounded-sm" type="text">Tailwind</button>
                </span>
                <button className="lg:hidden border border-white p-2 rounded-sm" type="text">Django</button>
                <p>Nairobi, Kenya</p>
            </span>
        </div>
    )
}

export default Job