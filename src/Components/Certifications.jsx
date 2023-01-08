import React from 'react';
import { certifications } from './ProfileData';

function Certifications() {
  return (
    <section id='certification' className='bg-none px- 6 py-20 w-screen h-fit'>
        <div>
            <h1 className='text-xl text-blue-900 text-center my-5'>CERTIFICATIONS</h1>
            <div className='w-full  h-fit flex flex-col md:flex-row py-2'>
                {certifications.map(certification => (
                    <a href={certification.link} key={certification.id} className='w-full py-5 md:w-1/2 px-5'>
                        <div className='w-full cert-image' style={{backgroundImage: `url(${certification.image})`}}></div>
                        <p className='text-2xl'>{certification.title}</p>
                    </a>
                ))}
            </div>
        </div>
    </section>
    
  )
}

export default Certifications;