import React from 'react'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className='w-screen h-1/2 bg-violet-900 flex flex-col justify-center py-8 px-16 md:px-12 lg:px-16'>
      <div className='w-full h-90% bg-inherit flex flex-col justify-center items-center md:mt-0 md:flex-row md:justify-between'>
        <div className='text-base text-white bg-transparent'>
          <h1 className='text-4xl font-bold bg-transparent text-white text-left'>Funmi Offiong</h1>
          <a href="mailto:fawolefunmilola2@gmail.com" className='block text-lg'>fawolefunmilola2@gmail.com</a>
        </div>
        <p className='bg-inherit text-white text-lg font-sans'>&copy; {year} All right reserved.</p>
      </div>
  </div>
  )
}

export default Footer;