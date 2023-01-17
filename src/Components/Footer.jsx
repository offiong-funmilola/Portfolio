import React from 'react'

function Footer() {
  return (
    <>
    <div className='w-screen h-[50vh] bg-violet-900 flex flex-col justify-center px-6 py-8 items-center md:flex-row md:justify-between '>
        <h1 className='text-4xl fony-bold bg-transparent text-white text-left pb-5 md:mb-0 md: h-[100px]'>Funmi O.</h1>
        <div className='flex w-fit h-fit flex justify-center items-center'>
            <div className='text-base text-white bg-transparent w-[150px] h-[100px]'>
                <h2 className='mb-2'> - SOCIALS</h2>
                <a href="https://linkedin.com/in/funmilola-offiong" className='block'>Linkedin</a>
                <a href="https://facebook/fawolefunmilola" className='block'>Facebook</a>
                <a href="https://twitter.com/offiongfunmilo2" className='block'>Twitter</a>
            </div>
            <div className='text-base text-white bg-transparent w-[250px] h-[100px]'>
                <h2 className='mb-2'> - CONTACTS</h2>
                <a href="mailto:fawolefunmilola2@gmail.com" className='block'>fawolefunmilola2@gmail.com</a>
                <a href="tel:+2347066296861" className='block'>+2347066296861</a>
            </div>
        </div>

    </div>
    </>
  )
}

export default Footer;