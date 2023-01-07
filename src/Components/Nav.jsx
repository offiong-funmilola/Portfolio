import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

function Nav() {
    const[isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked);
    }
  return (
    <>
        <header className='w-screen h-[80px] bg-gray-100 sticky top-0 z-100 flex p-8'>
            <div className='w-full h-full px-2 flex justify-between item-center'>
                <div className='flex item-center'>
                    <h1 className='text-3xl font-bold text-violet-900'>Funmi</h1>
                </div>
                <ul className='hidden md:flex ml-auto justify-between item-center'>
                    <li className='px-4 my-2 text-violet-900 text-base'><a href="#about">About Me</a></li>
                    <li className='px-4 my-2 text-violet-900 text-base'><a href="#project">Projects</a></li>
                    <li className='px-4 my-2 text-violet-900 text-base'><a href="#certification">Certifications</a></li>
                    <li className='px-4 my-2 text-violet-900 text-base'><a href="#contact">Contact</a></li>
                </ul>
                <button className='w-[30px] h-[30px] bg-transparent md:hidden' onClick={handleClick}>
                    {!isClicked ? <FaBars /> : <FaTimes />}
                </button>
            </div>
        </header>
        <div className={!isClicked ? 'hidden' : 'bg-gray-50 w-full fixed'}>
            <ul className='w-full bg-transparent'>
                <li className="p-4 border-b-2 border-black-900 text-violet-900 text-center"><a href="#about">About Me</a></li>
                <li className="p-4 border-b-2 border-black-900 text-violet-900 text-center"><a href="#project">Projects</a></li>
                <li className="p-4 border-b-2 border-black-900 text-violet-900 text-center"><a href="#skill">Skills</a></li>
                <li className="p-4 border-b-2 border-black-900 text-violet-900 text-center"><a href="#certification">Certifications</a></li>
                <li className="p-4 border-b-2 border-black-900 text-violet-900 text-center"><a href="#contact">Contact</a></li>
            </ul>
        </div>
   </>
  )
}

export default Nav