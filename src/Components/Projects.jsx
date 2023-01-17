import React from 'react'
import { projects } from './ProfileData';


function Projects() {
  return (
    <section id='project' className='py-8 px-6 w-full h-fit bg-gray-100 flex flex-col'>
        <h1 className="text-center text-xl text-blue-900 my-10">MY PROJECTS</h1>
        <div className='w-full h-fit bg-transparent flex flex-col'>
            {projects.map(project => (
                <div key={project.id} className="w-full h-fit bg-transparent flex flex-col justify-center items-center md:flex md:flex-row md:h-[500px] md:justify-between items-center lg:justify-items-between lg:items-start">
                    <div className="w-[500px] h-[350px] rounded-lg project-image md:w-[350px] lg:w-[600px] lg:h-[400px]" style={{backgroundImage: `url(${project.image})`}}></div>
                    <div className='flex flex-col w-full h-[250px] justify-start items-center py-5 md:py-0 md:justify-center md:items-start md:h-[350px] md:w-[350px] lg:w-[500px] lg:items-start'>
                        <p className='text-lg text-neutral-700'>{project.title}</p>
                        <p className='text-lg text-neutral-700 my-5'>{project.description}</p>
                        <div>
                            <button className='bg-violet-600 rounded-lg text-neutral-100 p-2 mr-5'><a href={project.link1}>source live</a></button>
                            <button className='bg-violet-600 rounded-lg text-neutral-100 p-2'><a href={project.link2}>source code</a></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      
    </section>
  )
}

export default Projects
