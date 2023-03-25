import React from 'react';

import searchbar from "../asset/portfolio/searchbar.jpg"
import furniture from "../asset/portfolio/furniture.jpg"
import todolist from "../asset/portfolio/todolist.png"

//chunka kar'akan wak yaka card akayan aikain ba array ak w map akain wak peshtr.
const Portfolio = () => {
    const portfolios=[
        {
            id:1,
            src:searchbar
        },
        {
            id:2,
            src:furniture
        },
        {
            id:3,
            src:todolist
        },
      
    ];
  return (
      <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'> 

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my works right here</p>
            </div>
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'> 

            {
            portfolios.map(({id,src})=>(
                
                <div key={id} className='shadow-md shadow-gray-600'>
                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'></img>

                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                    </div>
                </div>
            ))
            }
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio