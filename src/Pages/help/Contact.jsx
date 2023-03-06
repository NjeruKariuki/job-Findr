import React from 'react'

function Contact() {
    return (

        <div className='f bg-slate-400 h-full w-full p-3'>
            <form  className='flex flex-col justify-center items-center pb-3'>
                <h1 className='text-2xl font-mono p-3 font-bold'>Contact Us</h1>
                <label className='text-white text-xl font-mono'>Name:</label>
                <input className='border border-black text-black h-12 rounded w-3/4' type="text" name="" value="" />
                <label className='text-white text-xl font-mono'>email:</label>
                <input className='border border-black text-black h-12 rounded w-3/4' type="text" name="" value="" />
                <label className='text-white text-xl font-mono'>message:</label>
                <input className='border border-black text-black h-12 rounded w-3/4' type="text" name="" value="" />
                <button className='mt-2 bg-slate-600 text-white font-mono h-12 w-3/4 rounded' type="submit">Send Mail</button>
            </form>

        </div>
    )
}

export default Contact
