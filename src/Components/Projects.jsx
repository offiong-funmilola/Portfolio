import React from 'react'
import { projects } from './ProfileData';


function Projects() {
  return (
    <section id='project' className='w-screen h-fit bg-gray-100 py-16 z-0'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className=' text-violet-900 text-4xl mb-10'>MY PROJECTS</h1>
            <div className='w-5/6 h-fit grid md:grid-cols-2 md:w-full md:px-10 gap-6 gap-y-10 px-4 lg:px-10'>
                {projects.map(project => (
                    <div key={project.id} className="card lg:card-side bg-base-100 w-full">
                        <figure>
                            <img src={project.image} alt="projects"/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl font-semibold">{project.title}</h2>
                            <p className='text-lg'>{project.description}</p>
                            <div className='flex'>
                                <div className="card-actions mr-3">
                                    <a href={project.link1} target='_blank' rel="noreferrer">
                                        <button className="btn btn-primary text-base">Source live</button>
                                    </a>
                                </div>
                                <div className="card-actions">
                                    <a href={project.link2} target='_blank' rel="noreferrer">
                                        <button className="btn btn-primary text-base">Source code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>  
    </section>
  )
}

export default Projects
