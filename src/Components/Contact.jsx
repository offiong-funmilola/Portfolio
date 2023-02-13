import React from 'react'
import contact from '../assets/contact.jpg'

function Contact() {
  return (
    <section id='contact' className='w-screen h-screen'>
        <div style={{backgroundImage:`url(${contact})`}} className='relative w-full h-full bg-center bg-cover bg-no-repeat flex items-center justify-center'>
            <div className='w-5/6 h-11/12 px-3 md:px-0 md:w-11/12 bg-white  absolute flex flex-col items-center py-10'>
                <h2 className='text-violet-900 text-4xl mb-5'>CONTACT</h2>
                <div className="w-full h-full flex flex-col items-center">
                    <h2 className='font-bold text-3xl'>Let's Talk</h2>
                    <div className='w-11/12 h-full flex flex-col items-center lg:justify-center'>
                        <form className='w-full h-5/6 lg:h-3/4 lg:w-5/6 flex flex-col justify-center px-16 lg:px-10'>
                            <label htmlFor='Name'className='text-xl font-semibold  text-violet-900'> Name
                                <input type='text' name='Name' placeholder='Your Name' className='block w-full px-3 py-3 text-left mb-3 mt-2 border-b-2'/>
                            </label>
                            <label htmlFor='email' className='text-xl font-semibold  text-violet-900'> Your email*
                                <input type='email' name='email' placeholder='Your Email Address' className='block w-full px-3 py-3 text-left mb-3 mt-2 border-b-2'/>
                            </label>
                            <label htmlFor='message' className='text-xl font-semibold text-violet-900'> Message*
                                <textarea name='message' placeholder='Enter your message' className='block w-full px-3 py-6 text-left mb-3 mt-2 border-b-2'></textarea>
                            </label>
                            <div>
                                <button className='btn btn-primary mt-5'>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact

