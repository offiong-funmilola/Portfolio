import React from 'react';
import { projects } from './ProfileData';

function Projects() {
    return (
        <section id='project' className='bg-gray-100 py-8 w-screen h-fit'>
            <div className='w-full h-full bg-transparent flex flex-col'>
                <h1 className='text-xl text-blue-900 text-center my-5'>PROJECTS</h1>
                <div className='flex flex-col flex-wrap md:flex-row'>
                    {projects.map(project => (
                        <a href={project.link} key={project.id} className='w-full md:w-1/2 px-5 py-7'>
                            <div className='w-full h-full project-image' style={{backgroundImage: `url(${project.image})`}}></div>
                            <p className='text-2xl font-bold'>{project.title}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects