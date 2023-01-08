import React from 'react'


function Hero() {
  return (
    <div className='w-screen max-h-fit bg-gray-100 px-6 py-8 md:flex md:flex-row md:h-screen'>
        <div className='w-full h-52 bg-transparent border-none flex flex-col md:w-1/2 md:justify-center md:h-full'>
          <h1 className='font-bold text-5xl md:text-4xl lg:text-6xl'>Hi, I am Funmi, a frontend developer</h1>
          <h2 className='font-bold bg-violet-900 w-[120px] h-[50px] my-6 flex items-center justify-center text-base text-white md:mt-14'>Hire me</h2>
        </div>
        <div className={'w-full h-screen rounded-3xl md:w-1/2 md:h-full hero-image'} style={{backgroundImage:`url(/assets/heroimage.jpg)`}}>
        
        </div>
    </div>
  )
}

export default Hero;