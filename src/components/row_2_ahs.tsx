import React, { MouseEvent, useState, useRef } from 'react';
import rowtwodata from './row_2_data';
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
import bg from '../assets/design.jpg'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


export const RowAHS = () => {

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

    // hover sorting ------------
  
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleMouseEnterButton = (index: number) => {
      setActiveIndex(index);
    };
  
    const handleMouseLeaveButton = () => {
      setActiveIndex(-1);
    };
  
    // Function to reorder rowonedata based on activeIndex
    const reorderData = (activeIndex: number) => {
      if (activeIndex === -1) return rowtwodata;
  
      const hoveredItem = rowtwodata[activeIndex];
      const remainingItems = rowtwodata.filter((item, index) => index !== activeIndex);
  
      return [hoveredItem, ...remainingItems];
    };
  
    // Reorder rowonedata based on activeIndex
    const reorderedData = reorderData(activeIndex);

    // gsap -------------
  
    const animateTitle = useRef(null);
    const animateLottie = useRef(null);
    const triggerRef = useRef(null);
    
    useGSAP(() => {
      const title = animateTitle.current;
      const lottie = animateLottie.current;
      const trigger = triggerRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: 'top center',
          end: 'bottom 80%',
          scrub: 1,
        },
      });
  
      tl.from(title, { x: '100%', duration: 0.818, opacity: 0, ease: "sine.inOut" })
      .from(lottie, { x: '-100%', duration: 0.818, opacity: 0, ease: "sine.inOut" });
  
    });

  return (
    <>


    <div className="trig w-[100vw] h-[1vh] top-0 left-0" ref={triggerRef}></div>
      {/* desktop version */}
      <div className="row-1-wrapper relative hidden w-[100%] md:h-[50vh] mt-[1em] mb-[1em] md:flex justify-around items-center">
      {/* <img src={bg} alt="" className="bg mix-blend-multiply absolute top-[-60%] opacity-[40%]" /> */}
      <div ref={animateLottie} className="row-1-title-cont w-[50%] font-black flex flex-col ">

          <div className='animation-el scale-[80%]'>
          <DotLottiePlayer
          src="https://lottie.host/73aaab1e-fd35-4b93-8546-9ee6c8a4ff3c/CLKR9SU4gw.lottie"
          autoplay
          loop
          >
          </DotLottiePlayer>
          </div>
      </div>
        <div ref={animateTitle} className="row-1-cont no-sb overflow-y-hidden p-4 flex md:w-[40%] gap-4 place-items-center">
            {reorderedData.map((item, index) => (
              <div
                key={index}
                className="rounded-[1.5em] min-w-[60%] md:min-w-[100%] p-4 pt-6 flex flex-col justify-evenly gap-4 place-content-center"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <p className='card-title font-black md:text-[1.3em] lg:text-[3em]'>{item.title} </p>
                <div className="desc-container  flex place-items-center custom-scrollbar pr-3 overflow-y-scroll h-[12em] items-start place-content-center text-[1em] ">
                    <p className=''>{item.description} </p>
                </div>

                  {/* Buttons */}
                  <div className="btn-wrapper pt-4">
                    <div className='w-[100%] flex place-content-center justify-center gap-7'>
                    {rowtwodata.map((item, index) => (
                      <button
                        key={index}
                        className='text-[0.7em] p-4  rounded-[1.5em]'
                        onMouseEnter={() => handleMouseEnterButton(index)}
                        // onMouseLeave={handleMouseLeaveButton}
                        style={{
                          backgroundColor: activeIndex === index ? 'blue' : 'gray',
                          border: 'none',
                          cursor: 'pointer',
                        }}
                          >
                        </button>
                        ))}
                    </div> 
                    </div>
                    {/* button end */}
                    
              </div>
              
            ))}
        

        </div>
      </div>
      {/* end */}

      {/* mobile version */}
      <div className="mobile-trigger"></div>
      <div className="row-1-wrapper w-[100%] flex flex-col place-items-center md:hidden">
      <div className="row-1-title-cont w-[70%] font-black">

        <div className='animation-el'>
        <DotLottiePlayer
          src="https://lottie.host/73aaab1e-fd35-4b93-8546-9ee6c8a4ff3c/CLKR9SU4gw.lottie"
          autoplay
        loop
        >
        </DotLottiePlayer>
        </div>
      </div>
        
        <div className="row-1-cont translate-y-[-0.5em] no-sb overflow-y-hidden p-4 flex gap-4 place-items-center w-[70%]">
            {reorderedData.map((item, index) => (
              <div
                key={index}
                className="rounded-[1.5em] text-center place-items-center min-w-[100%] gap-3 p-9 pt-6 flex flex-col justify-evenly"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <p className='card-title font-black md:text-[1.5em] lg:text-[3em] '>{item.title} </p>
                <div className="desc-container w-[100%] flex place-items-center custom-scrollbar pl-3 pr-3 overflow-y-scroll h-[12em] items-start place-content-center text-[1em]">
                <p className=''>{item.description} </p>
                </div>

                         {/* Buttons */}
                         <div className="btn-wrapper pt-4">
                    <div className='w-[100%] flex place-content-center justify-center gap-7'>
                    {rowtwodata.map((item, index) => (
                      <button
                        key={index}
                        className='text-[0.7em] p-2 rounded-[1.5em]'
                        onMouseEnter={() => handleMouseEnterButton(index)}
                        // onMouseLeave={handleMouseLeaveButton}
                        style={{
                          backgroundColor: activeIndex === index ? 'blue' : 'gray',
                          border: 'none',
                          cursor: 'pointer',
                        }}
                          >
                        </button>
                        ))}
                    </div> 
                    </div>
                    {/* button end */}
              </div>
            ))}
        </div>
      </div>
      {/* end */}

    </>
  );
};
