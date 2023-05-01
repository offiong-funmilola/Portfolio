import React from 'react'
import { about } from './ProfileData';


function About() {
  return (
    <section id='about' className='bg-gray-50 h-96 w-screen'>
        <div className='bg-transparent w-full h-full p-10 flex flex-col justify-center items-center'>
          <h1 className=' text-violet-900 text-4xl mb-2 md:mb-4'>- ABOUT ME</h1>
          <div className='w-full p-2 text-xl md:w-3/4 md:p-0 md:text-2xl flex items-center'>
            <p>{about}</p>
          </div>    
        </div> 
    </section>
  )
}

export default About