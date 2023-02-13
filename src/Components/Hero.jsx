import React from 'react'


function Hero() {
  return (
  <>
    <div className="card lg:card-side bg-base-100 shadow-xl h-scren w-screen z-0">
        <div className="card-body h-96 shrink-0 grow-0 lg:grow flex flex-col justify-center items-center lg:mt-16 xl:mt-48">
          <div className="card-title text-center flex flex-col justify-center items-center font-bold">
            <p className='text-5xl'>Hi, I am Funmi,</p> 
            <p  className='text-5xl mt-3'>a frontend developer</p>
          </div>
          <div className="card-actions mt-5">
            <a href="#contact">
              <button className="btn btn-primary bg-violet-900 text-lg">Hire me</button>
            </a> 
          </div>
        </div>
        <figure>
          <img src="/assets/heroimage2.jpg" alt="Hero"/>
        </figure>
    </div>

  </> 
  )
}

export default Hero;
