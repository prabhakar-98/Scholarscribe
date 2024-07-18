import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Stats } from "./components/stats";
import { RowAHS } from "./components/row_2_ahs";
import { RowOEA } from "./components/row_1_oea"; 
import { RowAHF } from "./components/row_3_ahf";
import { Testimonials } from "./components/row_4_testimonials";
import { Form } from "./components/form";
import logo from '../src/assets/scholarimage.png';
import { useRef, useEffect, useState } from 'react';
import gsap from "gsap";
import { MovingTestimonials } from "./components/row_5_movingReviews";
import DarkMode from "./components/dmprovider";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Ordernow } from "./components/ordernow";
import { Login } from "./components/Login";
import TermsOfUse from "./components/termsofuse";
import PrivacyPolicy from "./components/privacypolicy";
import RefundPolicy from "./components/refundpolicy";
import FairUsePolicy from "./components/fairusepolicy";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ordernow" element={<Ordernow />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/fair-use-policy" element={<FairUsePolicy />} />
        </Routes>
      </Router>
    </>
  );
}

const MainPage = () => {
  const toplayer = useRef(null);
  const location = useLocation();
  const [isIntroShown, setIsIntroShown] = useState(() => {
    const state = location.state as { skipIntro?: boolean };
    return !state?.skipIntro;
  });

  useEffect(() => {
    let ctx: gsap.Context;
    if (isIntroShown) {
      ctx = gsap.context(() => {
        const t1 = gsap.timeline();
        t1.from("#intro-slide", {
          yPercent: "-100",
          duration: 1.3,
          delay: 0.3,
        }).from(["#title-1", "#title-2", "#title-3", "#logo-1"], {
          opacity: 0,
          y: "+=30",
          delay: 0.5,
          stagger: 0.5,
        }).to(["#title-1", "#title-2", "#title-3", "#logo-1"], {
          opacity: 0,
          y: "-=30",
          delay: 0.5,
          stagger: 0.5,
        }).to("#intro-slide", {
          xPercent: "-100",
          duration: 1.618,
        }).from("#welcome-title", {
          opacity: 0,
          y: "+=30",
          delay: 0.5,
        }).from("#welcome-slide", {
          opacity: 100,
          xPercent: "0",
          duration: 1.5,
        }).to("#welcome-slide", {
          xPercent: "-100",
          duration: 1.618,
        });
      }, toplayer);

      const timeout = setTimeout(() => {
        setIsIntroShown(false);
      }, 5000); // Adjust this timeout to match the duration of your animation

      return () => {
        clearTimeout(timeout);
        ctx && ctx.revert();
      };
    }
  }, [isIntroShown]);

  return (
    <div>
      <Header />
      <div>
        {isIntroShown && (
          <div className="intro relative" ref={toplayer}>
            <div id="intro-slide" className="h-screen top-0 overflow-hidden text-[1.7em] text-black md:text-[3.2em] p-10 bg-gray-50 justify-center items-center absolute left-0 z-[1000] w-full flex flex-col gap-[5em] md:gap-[2em]">
              <h1 id='title-1'>Get Assignment Help...</h1>
              <h1 id='title-2'>From World's No.1...</h1>
              <h1 id='title-3'>Assignment Help Company!</h1>
              <img src={logo} alt="" id="logo-1" className="w-[70px] md:w-[100px]" />
            </div>
            <div id="welcome-slide" className="h-screen top-0 overflow-hidden opacity-0 text-[2em] md:text-[3.7em] p-10 bg-[#ee8038] justify-center items-center text-white absolute left-0 z-[999] w-full flex flex-col gap-[5em] md:gap-[4em]">
              <h1 id='welcome-title'>Welcome.</h1>
            </div>
          </div>
        )}
        {!isIntroShown && (
          <main className="flex flex-col place-content-center place-items-center">
            <div id="bug" className="flex flex-col place-content-center place-items-center w-[100%] pt-[7em] pb-[3em]">
              <div className="title-wrapper text-2xl text-center pb-4">
                <h1 className="title-text flex flex-col gap-3 place-items-center">
                  <span className="text-[1.3em] font-black">Scholarscribe</span>
                  <span className="text-[0.6em] font-black"> Get Assignment Help From World's No.1 Assignment Help Company</span>
                </h1>
              </div>
              <div className="main-content grid place-items-center grid-cols-1 grid-rows-auto gap-5 w-[90%] md:w-[80%]">
                <Stats />
                <a className=" p-4 rounded-[1em] text-[white]" href="#the-form">
                  
                </a>
              </div>
            </div>
            <DarkMode />
            <div className="scrollers-home flex flex-col gap-8 w-[100%]">
              <RowOEA />
              <RowAHS />
              <RowAHF />
              <Testimonials />
              {/* <div className="form-container"> */}
                <Ordernow />
              {/* </div> */}
                <MovingTestimonials />
            </div>
          </main>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
