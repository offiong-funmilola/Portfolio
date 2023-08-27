import {useRef} from 'react';
import contact from '../assets/contact.jpg';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Modal from './Modal';


function Contact() {
   const [show, setShow] = useState(false)
   const [message, setMessage] = useState('')
   const [title, setTittle] = useState('')
    const form = useRef();
    
    const handleSubmission = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_vduvvu8', 'template_0d5mt16', form.current, 'qqz96FvLWg8V_I91L')
        .then((result) => {
            setShow(true)
            setTittle('Hello!')
            setMessage('Thanks for the contact')
        },
        (error) => {
            setShow(true)
            setTittle('Oops!')
            setMessage('Something went wrong')
        },
        );
        e.target.reset();
    }
  return (
    <section id='contact' className='w-full h-screen'>
        <div  className='relative w-full h-full bg-center bg-cover bg-no-repeat flex items-center justify-center' style={{backgroundImage:`url(${contact})`}}>
            <div className='w-full h-full px-3 md:px-0 md:w-3/4 md:h-5/6 bg-white  absolute flex flex-col items-center py-10 xl:h-5/6 xl:py-5'>
                <h2 className='text-violet-900 text-4xl mb-3'>CONTACT</h2>
                <div className="w-full h-full flex flex-col items-center">
                    <h2 className='font-bold text-3xl'>Let's Talk</h2>
                    <div className='w-full h-full flex flex-col items-center lg:justify-center'>
                        <form ref={form} onSubmit={handleSubmission} className='w-full h-full md:h-full md:w-full lg:h-3/4 lg:w-5/6 flex flex-col justify-center px-16 lg:px-8'>
                            <label htmlFor='Name'className='text-xl font-semibold  text-violet-900'> Name
                                <input type='text' name='name' placeholder='Your Name' className='block w-full px-3 py-4 lg:py-2 text-left mb-2 mt-1 border-b-2'/>
                            </label>
                            <label htmlFor='email' className='text-xl font-semibold  text-violet-900'> Your email*
                                <input type='email' name='email' placeholder='Your Email Address' className='block w-full px-3 py-4 lg:py-2 text-left mb-2 mt-1 border-b-2'/>
                            </label>
                            <label htmlFor='message' className='text-xl font-semibold text-violet-900 mb-1'> Message*
                                <textarea name='message' placeholder='Enter your message' className='block w-full px-3 py-5 text-left mb-2 mt-1 border-b-2'></textarea>
                            </label>
                            <div>
                                <button  className='btn btn-primary'>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Modal show={show} title={title} message={message} setShow={setShow}/>
        </div>
    </section>
  )
}

export default Contact

