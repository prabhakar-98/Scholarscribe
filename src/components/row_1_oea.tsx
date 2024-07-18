import React, { MouseEvent, useState, useRef, useEffect } from 'react';
import rowonedata from './row_1_data';
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';


export const RowOEA = () => {

  // orange hover color --------

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

  // ----------------------------


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
      if (activeIndex === -1) return rowonedata;
  
      const hoveredItem = rowonedata[activeIndex];
      const remainingItems = rowonedata.filter((item, index) => index !== activeIndex);
  
      return [hoveredItem, ...remainingItems];
    };
  
    // Reorder rowonedata based on activeIndex
    const reorderedData = reorderData(activeIndex);
  



  return (
    <>

    <div className="trig translate-y-[-8em] w-[100vw] h-[1vh] top-0 left-0"></div>
      {/* desktop version */}

      <div className="row-1-wrapper relative hidden w-[100%] md:h-[50vh] mb-[1em] md:flex justify-around items-center mt-[2em]">
        
          <div>
            <div id="art" className="absolute w-[100vw] min-h-screen top-[-39em] left-0 z-[-1]"></div>
          </div> 
        
        <div className="row-1-cont no-sb overflow-y-hidden p-4 flex md:w-[40%] gap-4 place-items-center">
            {reorderedData.map((item, index) => (
              <div
                key={index}
                className="rounded-[1.5em] min-w-[60%] md:min-w-[100%] p-4 pt-6 flex flex-col justify-evenly gap-4 place-content-center"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <p id='title' className='card-title font-black md:text-[1.3em] lg:text-[3em]'>{item.title} </p>
                <div className="desc-container w-[100%] flex place-items-center custom-scrollbar pr-3 overflow-y-scroll h-[6em] items-start place-content-center text-[1em] ">
                    <p id='description' className=''>{item.description} </p>
                </div>

                  {/* Buttons */}
                  <div className="btn-wrapper pt-4">
                    <div className='w-[100%] flex place-content-center justify-center gap-7'>
                    {rowonedata.map((item, index) => (
                      <button
                        id='buttons'
                        key={index}
                        className='text-[0.7em] p-4 rounded-[1.5em]'
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

        <div className="row-1-title-cont w-[50%] font-black flex flex-col">

      <div className='animation-el scale-[80%]'>
      <DotLottiePlayer
      src="https://lottie.host/34c0482a-888a-47b3-8efb-c057b46378e5/pyKAz1LWt2.lottie"
      autoplay
      loop
      >
      </DotLottiePlayer>
      </div>
        </div>
      </div>
      {/* end */}

      {/* mobile version */}
      <div className="row-1-wrapper relative w-[100%] h-[70vh] flex flex-col place-items-center md:hidden">
      <div>
        <div id="art" className="absolute w-[100vw] min-h-screen top-[-39em] left-0 z-[-1]"></div>
      </div> 
      <div className="row-1-title-cont w-[70%] font-black">

        <div className='animation-el'>
        <DotLottiePlayer
        src="https://lottie.host/34c0482a-888a-47b3-8efb-c057b46378e5/pyKAz1LWt2.lottie"
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
                className="rounded-[1.5em] text-center place-items-center min-w-[100%] gap-7 p-9 pt-6 flex flex-col justify-evenly"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <p className='card-title font-black md:text-[1.5em] lg:text-[3em] translate-y-[1em]'>{item.title} </p>
                <div className="desc-container w-[100%] flex place-items-center custom-scrollbar pr-2 pl-2 overflow-y-scroll h-[6em] items-start place-content-center text-[1em]">
                <p className=''>{item.description} </p>
                </div>

                  {/* Buttons */}
                  <div className="btn-wrapper pt-4">
                    <div className='w-[100%] flex place-content-center justify-center gap-7'>
                    {rowonedata.map((item, index) => (
                      <button
                        id='buttons'
                        key={index}
                        className='text-[0.7em] p-3 rounded-[1.5em]'
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