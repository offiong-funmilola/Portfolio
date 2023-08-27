import React from 'react'
import {FaTimes} from 'react-icons/fa'

function Modal({show, title, message, setShow}) {
    const closeModal = () => {
        setShow(false)
    }
    return (
        <div className={show ? "modal modal-open" : 'hidden'}>
            <div className="modal-box relative">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="py-4">{message}</p>
                <div className='absolute w-8 h-8 flex items-center justify-center rounded-full top-5 right-5'>
                    <button onClick={closeModal} className='w-full h-full'><FaTimes /></button> 
                </div>
            </div>
           
              
        </div>
    )
}

export default Modal
