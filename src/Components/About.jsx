import React from 'react'
import { about } from './ProfileData';
import { skills } from './ProfileData';

function About() {
  return (
    <section id='about' className='bg-gray-50 h-screen w-screen py-8 flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center'>
        <div className='bg-transparent flex w-full h-1/2 flex-col justify-center flex-start md:w-3/4 md:h-full md:pr-24'>
            <h1 className='text-blue-900 text-xl mb-5'>- ABOUT ME</h1>
            <p>{about}</p>
        </div>
        <div className='bg-transparent w-full h-1/2 flex flex-col justify-center items-center md:items-left md:w-1/4 md:h-full md:flex-start'>
            <h1 className='text-blue-900 text-xl mb-5 text-left'>- SKILLS</h1>
            <ul className='flex flex-col item-center'>
                {skills.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    </section>
  )
}

export default About