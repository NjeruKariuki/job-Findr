import React from 'react'
import { Form, redirect, useActionData } from 'react-router-dom'

function Contact() {
    const data = useActionData();
    return (

        <div className='f bg-slate-400 h-full w-full p-3'>
            <Form method="post" action="/help/contact" className='flex flex-col justify-center items-center pb-3'>
                <h1 className='text-2xl font-mono p-3 font-bold'>Contact Us</h1>
                <label className='text-white text-xl font-mono'>Name:</label>
                <input className='border border-black text-black h-12 rounded w-3/4' type="text" name="name" />
                <label className='text-white text-xl font-mono'>email:</label>
                <input className='border border-black text-black h-12 rounded w-3/4' type="text" name="email" />
                <label className='text-white text-xl font-mono'>message:</label>
                <textarea className='border border-black text-black h-12 rounded w-3/4' name="message"></textarea>
                <button className='mt-2 bg-slate-600 text-white font-mono h-12 w-3/4 rounded' type="submit">Send Mail</button>
                {data && data.error && <p>{data.error}</p>}
            </Form>

        </div>
    )
}

export default Contact


export const contactAction = async ({ request }) => {
    const data = await request.formData();

    const submission = {
        email: data.get('email'),
        message: data.get("message")
    }
    console.log(submission)
    //send post request and redirect/  handle errors
    if (submission.message.length < 10) {
        return { error: 'Message must be longer than 10 chars' }
    }
    return redirect("/")
}