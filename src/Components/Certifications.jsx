import React from 'react';
import { certifications } from './ProfileData';

function Certifications() {
  return (
    <section id='certification' className='w-screen h-fit p-10'>
        <div className='w-full h-full flex flex-col'>
            <h2 className='self-center text-violet-900 text-4xl mb-10'>CERTIFICATIONS</h2>
            <div className='h-11/12 flex flex-col md:flex-row justify-start items-center'>
                {certifications.map(certification => (
                    <div className="card w-full h-full md:w-1/2 flex justify-center items-center">
                        <fiqure className='w-11/12 md:w-full'>
                            <a href={certification.link} target='_blank' rel="noreferrer">
                                <img src={certification.image} alt=''></img>
                            </a>
                        </fiqure>
                    <div className="card-body">
                      <h2 className="card-title">{certification.title}</h2>
                    </div>
                  </div>
                ))}
            </div>
        </div>
        
    </section>
    
  )
}

export default Certifications;

