import React from 'react';
import { skills } from './ProfileData';

function Skills() {
  return (
    <>
        <section id='skill' className='w-screen h-5/6 flex items-center justify-center'>
          <div className='bg-transparent w-full h-full p-10 flex flex-col justify-center items-center'>
            <h1 className=' text-violet-900 text-4xl mb-6'>- SKILLS</h1>
            <div className='font-bold text-lg'>
                <div className='grid grid-cols-2 gap-2 list-disc md:grid-cols-4 md:gap-8'>
                    {skills.map(({title, icon: Component}, index) => 
                      <div key={index} className='col-span-1 flex flex-col items-center justify-center p-5 gap-2'>
                        <Component className='text-center text-blue-500 text-9xl'/>
                        <p>{title}</p>
                      </div>
                    )}
                </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Skills