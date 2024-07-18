import React, { useEffect, useRef } from 'react';
import Marquee from "react-fast-marquee";

export const Stats = () => {
  const statRef1 = useRef(null);
  const statRef2 = useRef(null);
  const statRef3 = useRef(null);

  const animateValue = (start: number, end: number, duration: number, ref: React.MutableRefObject<HTMLSpanElement | null>) => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentValue = (progress * (end - start) + start).toLocaleString(undefined, { maximumFractionDigits: 1 });
      ref.current!.innerHTML = `${currentValue}/5`;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };
  
const animateValueFraction = (start: number, end: number, duration: number, ref: React.MutableRefObject<HTMLSpanElement | null>, isFraction: boolean = false) => {
  let startTimestamp: number | null = null;
  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    let currentValue;
    if (isFraction) {
      currentValue = (progress * (end - start) + start).toLocaleString(undefined, { maximumFractionDigits: 1 });
    } else {
      currentValue = Math.floor(progress * (end - start) + start).toLocaleString();
    }
    ref.current!.innerHTML = isFraction ? `${currentValue}/5` : currentValue;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};
  

  useEffect(() => {
    animateValueFraction(0, 2269529, 2618, statRef1);
    animateValueFraction(0, 5267, 2618, statRef2);
    animateValue(0, 4.9, 2618, statRef3);
  }, []);

  return (
    <>
      <section className="wrapper rounded-[1.5em] text-center p-4  flex gap-5 md:h-[10em] w-[100%] md:w-[60%] justify-items-evenly place-items-center text-[#ee8038]">
        <div className="stat-one w-[80%] flex flex-col place-items-center">
          <span ref={statRef1} className='md:text-[2em] font-black'>0</span>
          <span className='text-[0.6em] md:text-[1.2em]'> DELIVERED ORDERS </span>
        </div>
        <div className="stat-two w-[80%] flex flex-col place-items-center">
          <span ref={statRef2} className='md:text-[2em] font-black'>0</span>
          <span className='text-[0.6em] md:text-[1.2em]'> EXPERTS </span>
        </div>
        <div className="stat-three w-[80%] flex flex-col place-items-center">
          <span ref={statRef3} className='md:text-[2em] font-black'>0</span>
          <span className='text-[0.6em] md:text-[1.2em]'>CLIENT RATING </span>
        </div>
      </section>



      <Marquee>
        <div className='flex gap-10 text-white'>
          <div>🗹 100+ Students Support Executive to Listen Students Requirement</div>
          <div>🗹 Global Assignment Helper</div>
          <div>🗹 Best Assignment Writer</div>
          <div>🗹 Highest Grade for All Academic Needs</div>
          <div>🗹 1M+ Satisfied Students</div>
          <div>🗹 5,267 Academic Assignment Writers</div>
          <div>🗹 10+ Years Of Experience in Academic Writing</div>
          <div>🗹 Assignment Help</div>
          <div>🗹 Round the Clock Support Service</div>
          <div className='text-transparent'>🗹</div>
        </div>
      </Marquee>
    </>
  );
};
