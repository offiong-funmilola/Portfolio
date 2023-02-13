import React from 'react'

function Footer() {
  return (
    <>
    <div className='w-screen h-[50vh] bg-violet-900 flex flex-col justify-center py-8 px-16 items-center md:flex-row md:justify-between md:px-12 lg:px-16 '>
        <h1 className='text-4xl fony-bold bg-transparent text-white text-left pb-5 md:mb-0 md: h-[100px]'>Funmi O.</h1>
        <div className='flex w-full md:w-1/2 h-fit justify-between items-center'>
            <div className='text-base text-white bg-transparent w-[150px] h-[100px]'>
                <h2 className='mb-2 text-2xl'> - SOCIALS</h2>
                <a href="https://linkedin.com/in/funmilola-offiong" className='block text-lg'>Linkedin</a>
                <a href="https://facebook/fawolefunmilola" className='block text-lg'>Facebook</a>
                <a href="https://twitter.com/offiongfunmilo2" className='block text-lg'>Twitter</a>
            </div>
            <div className='text-base text-white bg-transparent w-[250px] h-[100px]'>
                <h2 className='mb-2 text-2xl'> - CONTACTS</h2>
                <a href="mailto:fawolefunmilola2@gmail.com" className='block text-lg'>fawolefunmilola2@gmail.com</a>
                <a href="tel:+2347066296861" className='block text-lg'>+2347066296861</a>
            </div>
        </div>

    </div>
    </>
  )
}

export default Footer;