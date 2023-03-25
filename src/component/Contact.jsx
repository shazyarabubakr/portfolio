import React from 'react';

//la getform create y form ek akait w link akai lawe da aney bo away ka paiwandyan pewa krdy awa bot betawa.
//method=POST *
const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            
            <div className='pb-8'>
                <p className='text-4xl inline font-bold border-b-4 border-gray-400'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                
                <form action="https://getform.io/f/0ff9f51d-9e7c-4687-a2f7-ddbc0fbce10f" method="POST"className='flex flex-col w-full md:2-1/2'>
                    <input type="text" name="name" placeholder="Enter your name" className='p-2  bg-transparent border-2 rounded-md text-white focus:outline-none'></input>
                    <input type="text" name="email" placeholder="Enter your email" className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></input>
                    <textarea name="message" rows="10" placeholder="Enter your message" className='p-2 i bg-transparent border-2 rounded-md text-white focus:outline-none '></textarea>
                    <button className='text-white bg-gradient-to-r from-cyan-500 to-pink-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300' >Let's talk</button>
                
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact