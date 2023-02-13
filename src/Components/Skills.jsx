import React from 'react';
import { skills } from './ProfileData';

function Skills() {
  return (
    <>
        <section id='skill' className='w-screen h-5/6 flex items-center justify-center'>
        <div className='bg-transparent w-full h-full p-10 flex flex-col justify-center items-center'>
            <h1 className=' text-violet-900 text-4xl mb-6'>- SKILLS</h1>
            <div className='font-bold text-lg'>
                <ol className='grid grid-cols-3 gap-5 list-disc md:grid-cols-5 md:gap-12'>
                    {skills.map((item, index) => <li key={index}>{item}</li>)}
                </ol>
            </div>
            
        </div>
            
        </section>
    </>
  )
}

export default Skills