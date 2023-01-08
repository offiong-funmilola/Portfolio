import React from 'react'

function Contact() {
  return (
    <section id='contact' className='bg-gray-100 w-screen px-6 h-fit py-24'>
        <div className='w-full h-screen flex justfy-center items-center md:flex-row md:justify-between md:items-center'>
            <div className='w-full flex flex-col h-[80vh] justify-center items-center md:w-1/2 md:justify-start'>
                <h1 className='text-3xl font-bold mb-5 text-left'>Let's Talk</h1>
                <form className='w-full pr-10'>
                    <label htmlFor='Name'className='text-base'> Name
                        <input type='text' name='Name' placeholder='Your Name' className='block w-full px-3 py-3 text-left mb-3'/>
                    </label>
                    <label htmlFor='email' > Your email*
                        <input type='email' name='email' placeholder='Your Email Address' className='block w-full px-3 py-3 text-left mb-3'/>
                    </label>
                    <label htmlFor='message'> Message*
                        <textarea name='message' placeholder='Enter your message' className='block w-full px-3 py-5 text-left mb-3'></textarea>
                    </label>
                    <button className='px-10 py-4 bg-violet-900 text-white'>
                        Submit
                    </button>
                </form>
            </div>
            <div className='hidden md:block md: w-1/2 h-[90vh] bg-red-400 rounded-xl hero-image' style={{backgroundImage:`url(/assets/heroimage.jpg)`}}>
            </div>
        </div>
    </section>
  )
}

export default Contact