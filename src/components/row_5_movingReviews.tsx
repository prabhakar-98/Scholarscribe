import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import reviewdataOne from '../components/row_5_data'
import reviewdataTwo from '../components/row_5_data'
import Marquee from 'react-fast-marquee';


export const MovingTestimonials = () => {
    
    const [direction, setDirection] = useState('left');

    const handleMarqueeFinish = () => {
        // Toggle the direction based on the current direction
        setDirection(direction === 'left' ? 'right' : 'left');
      };

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

    <div className='flex flex-col pt-7'>

        <div className="first-row-moving flex flex-col gap-7">
            <div className="row-1-title-cont w-[100%] text-center flex flex-col items-center">
            <h2 className='row-1-title text-[1.3em] md:text-[1.9em] font-black'>
            Still in Two Minds? The Proof is in Numbers!
                </h2>
                <h4 className='text-[0.8em] md:text-[1.5em]'>
                    <strong className='text-[#ee8038]'>38983</strong> Genuine Reviews With a Rating of <strong className='text-[#ee8038]'>4.9/5</strong>.
                </h4>
            </div>
            <div className="row-1-wrapper w-[100%]">
                <Marquee style={{
                    display: 'flex',
                    justifyItems: 'evenly',
                    justifyContent: 'evenly',
                }}
                direction='right'
                pauseOnHover
                >
            <div className="row-1-cont no-sb flex gap-[3em] pl-[3em] ">
            {reviewdataOne.map((item, index) => (
                <div
                key={index}
                className="dark-div cursor-pointer p-5 w-[15em] md:w-[30em] h-[20em] rounded-[1.5em]"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} 
                >
                    <div className='flex flex-col gap-2'>
                        <div className="star flex justify-between w-[100%]"><span> {item.star}</span> {item.date}</div>
                        <h2 className="card-title name font-black md:text-[1.5em]">{item.title}</h2>
                    </div>
                    <p className='text-[0.8em] md:text-[1em] overflow-scroll items-start place-content-center text-[0.7em] md:text-[1em] h-[35%] no-sb'>Essay: {item.assignment}, Deadline: {item.deadline} </p>
                    <div className="who flex relative w-[100%] justify-evenly">
                    {/* <img src={item.deadline} alt={item.title} className='rounded-[2em]' /> */}
                    <div className="name-place flex flex-col items-end">
                        <h3 className='text-[0.8em] md:text-[1em]'>{item.review}</h3>
                    </div>
                    </div> 
                </div>
                ))} 
            </div>
            </Marquee> 
            </div>
        </div>

        <div className="second-row-moving flex flex-col gap-7 pt-7">
            <div className="row-1-wrapper w-[100%]">
                <Marquee style={{
                    display: 'flex',
                    justifyItems: 'around',
                    justifyContent: 'around'
                }}
                direction='left'
                pauseOnHover
                >
            <div className="row-1-cont no-sb flex gap-[3em] pl-[3em]">
            {reviewdataTwo.map((item, index) => (
                <div
                key={index}
                className="dark-div cursor-pointer p-5 w-[15em] md:w-[30em] h-[20em] rounded-[1.5em]"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} 
                >
                    <div className='flex flex-col gap-2'>
                    <div className="star flex justify-between w-[100%]"><span> {item.star}</span> {item.date}</div>
                        <h2 className="card-title name font-black md:text-[1.5em]">{item.title}</h2>
                    </div>
                    <p className='text-[0.8em] md:text-[1em] overflow-scroll items-start place-content-center text-[0.7em] md:text-[1em] h-[35%] no-sb'>Essay: {item.assignment}, Deadline: {item.deadline} </p>
                    <div className="who flex relative w-[100%] justify-evenly">
                    {/* <img src={item.deadline} alt={item.title} className='rounded-[2em]' /> */}
                    <div className="name-place flex flex-col items-end">
                        <h3 className='text-[0.8em] md:text-[1em]'>{item.review}</h3>
                    </div>
                    </div> 
                </div>
                ))} 
            </div>
            </Marquee> 
            </div>
        </div>


    </div>
    </>
  );
};

