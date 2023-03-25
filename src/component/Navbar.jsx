import React, { useState } from 'react';

import {FaBars,FaTimes} from "react-icons/fa";

import {Link} from 'react-scroll'


//navbar ek akain dasta chape pity SH 
//Rastish nav items akan

const Navbar = () => {
  
  const [nav,setNav]=useState(false);

  const links =[
    { 
      id:1,
      link :'home'
    },
    { 
      id:2,
      link :'about'
    },
    { 
      id:3,
      link :'portfolio'
    },
    { 
      id:4,
      link :'experience'
    },
    { 
      id:5,
      link :'contact'
    },
    
  ];
  //chunka by def mob-first a boya hidden akain nav items akan law kataya agar 768px gawratr bw awa pshany bat
  //nav items akan hamuyan yak style yan haya boya aikaina 1 array awa w map akain.
  //ka map man krf abe key dabnein bo away ka gorankari-click man krd bzanet kam item' aya

  return (
    <>
    <div className="flex justify-between items-center  w-full h-15 px-4 text-white bg-black fixed ">
        <div>
            <h1 className='text-5xl font-signature ml-2'>sh</h1>
        </div>

       <ul className='hidden md:flex'> 
      
      {links.map(({id,link})=>(
      <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-600 hover:scale-110 duration-300'>
      <Link to={link} smooth duration={500}>{link}</Link>
      </li>
      ))}

    </ul>
        
      <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-600 md:hidden'  >

      {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
      </div>

      {nav && (
      <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-600'>
        
      {links.map(({id,link})=>(
      <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
            <Link  to={link} smooth duration={500} onClick={()=>setNav(!nav)}>{link}</Link>

      </li>
      ))}
       
      </ul>
      )}
    </div>

    </>
  )
}

export default Navbar;

