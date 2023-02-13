import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';


function Nav() {
    const[isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        
        setTimeout(()=>{
        setIsClicked(isClicked);
        }, 3000)
    };

  return (
    <>
        <header className='w-screen h-[100px] bg-gray-100 sticky top-0 z-40 flex p-8'>
            <div className='w-full h-full px-8 flex justify-between items-center md:px-0'>
                <div className='flex item-center'>
                    <h1 className='text-3xl font-bold text-violet-900 ml-3'>Funmi</h1>
                </div>
                <ul className='hidden md:flex ml-auto justify-between item-center'>
                    <a href="#about" ><li className='px-4 my-2 text-violet-900 text-xl'>About Me</li></a>
                    <a href="#skill" ><li className='px-4 my-2 text-violet-900 text-xl'>Skills</li></a>
                    <a href="#project" ><li className='px-4 my-2 text-violet-900 text-xl'>Projects</li></a>
                    <a href="#certification"><li className='px-4 my-2 text-violet-900 text-xl'>Certifications</li></a>
                    <a href="#contact"><li className='px-4 my-2 text-violet-900 text-xl'>Contact</li></a>
                </ul>
                <button className='w-[30px] h-[30px] bg-transparent md:hidden' onClick={handleClick}>
                    {!isClicked ? <FaBars /> : <FaTimes />}
                </button>
            </div>
        </header>
        <div className={!isClicked ? 'hidden' : 'bg-gray-50 w-full fixed z-40'} >
            <ul className='w-full bg-inherit flex flex-col items-center justify-center border-b-2'>
                <a href="#about" className='block  w-full border-b-2 border-gray-100 text-center'><li className='px-4 my-2 text-violet-900 text-xl'>About Me</li></a>
                <a href="#skill" className='block  w-full border-b-2 border-gray-100 text-center' ><li className='px-4 my-2 text-violet-900 text-xl'>Skills</li></a>
                <a href="#project" className='block  w-full border-b-2 border-gray-100 text-center'><li className='px-4 my-2 text-violet-900 text-xl'>Projects</li></a>
                <a href="#certification" className='block  w-full border-b-2 border-gray-100 text-center'><li className='px-4 my-2 text-violet-900 text-xl'>Certifications</li></a>
                <a href="#contact" className='block  w-full border-b-2 border-gray-100 text-center'><li className='px-4 my-2 text-violet-900 text-xl'>Contact</li></a>
            </ul>
        </div>
   </>
  )
}

export default Nav