import React from 'react';
import {MdKeyboardArrowRight} from 'react-icons/md';
import {Link} from 'react-scroll';

//Home aka akain
//buton ek add akain bo away ka clickm lekrd portfolio ka pshan bat

const Home = () => {
  return (
    <div name="home" className=' h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      
       <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className="text-4xl sm:text-7xl text-center text-white font-bold">I'm a Front End Developer</h2>
                <p className='text-gray-600 py-4 text-center'>I have 4 year experience building and designing software .
                    currently ,i Love to work on web application using technologies like 
                    React,Tailwind, and Next js.
                </p>
                <div className=' flex justify-center'>
                <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-pink-600 cursor-pointer'>Portfolio 
                    <span className='group-hover:rotate-90 duration-300'><MdKeyboardArrowRight size={25} /></span></Link>
            </div>
            </div>
       </div>
    </div>
    
  )
}

export default Home