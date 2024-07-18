import React, { MouseEvent } from 'react';
import rowfourdata from './row_4_data';


export const Testimonials = () => {

  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    const darkDiv = event.currentTarget;
    const cardTitle = darkDiv.querySelector('.card-title');
    if (cardTitle) {
      cardTitle.classList.add('orange-title');
    }
  };

  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    const darkDiv = event.currentTarget;
    const cardTitle = darkDiv.querySelector('.card-title');
    if (cardTitle) {
      cardTitle.classList.remove('orange-title');
    }
  };


  return (
    <>
        <div id="the-form"></div>

    <div className="row-1-title-cont p-4 w-[100%] font-black">
      <h2 className='row-1-title text-[1em] md:text-[1.3em] lg:text-[3em]'>
      Scholarscribe Testimonials      
      </h2>
    </div>

    <div className="row-1-wrapper w-[100%] p-4">
      <div className="row-1-cont custom-scrollbar flex gap-4 place-items-start pb-7">
      {rowfourdata.map((item, index) => (
            <div
              key={index}
              className="dark-div justify-evenly flex flex-col gap-4 rounded-[1.5em] min-w-[60%] md:min-w-[40%] h-[24em] md:h-[26em] p-7"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}   
            >
              <div className='flex flex-col gap-2 '>
                <h2 className="card-title name font-black md:text-[1.5em]">{item.title}</h2>
                <div className="star">{item.star}</div>
              </div>
              <p className='text-[0.8em] md:text-[1em] overflow-scroll no-sb items-start place-content-center text-[0.7em] md:text-[1em] h-[35%]'>{item.quote} </p>
              <div className="who flex relative w-[100%] justify-evenly">
               <img src={item.image} alt={item.title} className='rounded-[2em]' />
               <div className="name-place flex flex-col items-end">
                  <h3 className='text-[0.8em] md:text-[1em]'>{item.name}</h3>
                  <h3 className='text-[0.8em] md:text-[1em]'>{item.country}</h3>
               </div>
               </div> 
            </div>
          ))}  
      </div>
    </div>


    </>
  );
};
