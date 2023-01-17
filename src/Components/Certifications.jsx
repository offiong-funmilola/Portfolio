import React from 'react';
import { certifications } from './ProfileData';

function Certifications() {
  return (
    <section id='certification' className='bg-none px- 6 py-20 w-screen h-fit'>
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <h1 className='text-xl text-blue-900 mb-5'>CERTIFICATIONS</h1>
            <div className='w-11/12 h-fit flex flex-col justify-center items-center md:flex-row py-2'>
                {certifications.map(certification => (
                    <a href={certification.link} key={certification.id} className='w-full h-[350px] py-5 mb-8 md:mb-0 md:w-1/2 md:h-[500px] md:h-full px-5'>
                        <div className='w-full h-full cert-image' style={{backgroundImage: `url(${certification.image})`}}></div>
                        <p className='text-2xl mt-[5px]'>{certification.title}</p>
                    </a>
                ))}
            </div>
        </div>
    </section>
    
  )
}

export default Certifications;