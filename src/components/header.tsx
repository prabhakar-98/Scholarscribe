import gsap from "gsap";
import { useGSAP } from "@gsap/react"; 
import { useEffect, useRef, useState } from 'react';
import navigationSections from './headerLinks'; // Importing the navigation sections array
import sectionData from './headerData'; // Import section data
import imageSrc from '../assets/scholarimage.png';
import { FiPhone, FiMail } from 'react-icons/fi'; // Import icons from react-icons library
import { Link } from 'react-router-dom';
// import { useRef } from 'react';



// Define the props interface for the TopContactBar
interface TopContactBarProps {
  phoneNumber1: string;
  phoneNumber2: string;
  email: string;
}

// TopContactBar component
const TopContactBar: React.FC<TopContactBarProps> = ({ phoneNumber1, phoneNumber2, email }) => {
  return (
    <div className="top-contact-bar" style={{ backgroundColor: '#ee8038', color: '#fff', fontSize: '1rem', padding: '10px', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', top: 0, width: '100%', zIndex: 100 }}>
      <span style={{ marginRight: '40px', marginLeft: '10px' }}>Need urgent assignment help? Contact us now!</span>
      <span style={{ display: 'flex', alignItems: 'center', marginRight :'15px'  }}>
        {/* <FiPhone style={{ marginRight: '5px' }} /> <span style={{ marginRight: '20px' }}>{phoneNumber1}  {phoneNumber2}</span> */}
        <FiPhone style={{ marginRight: '5px' , marginLeft: '10px'}} /> <span>{phoneNumber2} </span>
        <FiPhone style={{ marginRight: '5px' , marginLeft: '10px' }} /> <span>{phoneNumber1} </span>
        <FiMail style={{ marginRight: '5px' , marginLeft: '10px' }} /> <span>{email}</span>
      </span>
    </div>
  );
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const handleSectionClick = (section: string) => {
    setSelectedSection(section === selectedSection ? null : section);
  };

  

  const menuContainer = useRef<HTMLDivElement>(null);
  //new
  const [isItemsCLicked, setIsItemsClicked] = useState(false);

  

  // Handle menu click
  function handleMenuClicked() {
    setIsOpen(!isOpen);
  }

  function handleItemsClicked(){
    setIsItemsClicked(!isItemsCLicked)
  }

  const handleOrderNowClick = () => {
    window.scrollTo({
      top: window.innerHeight * 3.75, // Scroll to 80% of the page height
      behavior: 'instant', // Add smooth scrolling behavior
    });
  };

  // GSAP animation effects
  useEffect(() => {
    gsap.set("#box", { yPercent: "-200", delay: 0 });
  }, []);

  useGSAP(() => {
    // Animation logic
    if (isOpen === true ) {
      gsap.to(["#box", "#boxkid"], {
      yPercent: "-20",
      // duration: 1.3,
      delay: 0.3,
      stagger: 0.216,
      ease: "back",
      opacity: 0,
    })
    
      gsap.to(["#box", "#boxkid"], {
      yPercent: "0",
      // duration: 1.3,
      delay: 0.3,
      stagger: 0.216,
      ease: "back",
      opacity: 100,
    })
  }
  if (isOpen === false ) {
    gsap.to("#boxkid", {
      yPercent: "200",
      // duration: 1.3,
      delay: 0.3,
      stagger: 0.216,
      ease: "back",
    })
    
    gsap.to("#box", {
      yPercent: "-200",
      // duration: 3.3,
      delay: 1.8,
      stagger: 0.216,
      ease:"elastic.out",
    });

    }
  }, { dependencies: [isOpen, setIsOpen], scope: menuContainer });

  return (
    <div className="header-container">
      <TopContactBar phoneNumber1="+91 9263 606 941" phoneNumber2="  +91 6207 708 863" email="infoscholarscribe@gmail.com" />
      <div style={{ paddingTop: '40px' }}> {/* Adjust the padding as needed */}

      <div ref={menuContainer} className="fixed pt-10 w-[100%] flex md:flex gap-5 items-center z-[2]">
        <header className="p-5 fixed w-[100%] flex md:flex gap-5 items-center z-[2]">
          {/* Header content */}
          <div className="flex justify-between w-[100%]">
          <div className="left-side flex gap-7 items-center">
          <a href="/"> <img src={imageSrc} alt="" className="logo cursor-pointer " 
            style={{ width: '40px', height: '40px' }} /></a>
            <a href="/" className="hidden md:flex text-[1.4em] text-[#ee8038] cursor-pointer">Scholarscribe</a>
            <a id="toggle"  className="hover:text-[#ee8038] md:flex hidden cursor-pointer" onClick={handleMenuClicked}>Resources</a>
            <a id="toggle" href="#" className="flex justify-around leading-[0.4em] flex-col md:hidden pb-[1em]"  onClick={handleMenuClicked}>
              <span>___</span>
              <span>___</span>
              <span>___</span>
            </a>
            {/*hello*/}
            {/* <a href="/"> <img src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/logo-icon.svg" alt="" className="logo cursor-pointer md:hidden" /> </a> */}
            

            
 
          </div>
         { /*adding trial*/}
         {/* <a href="#" className="p-2 rounded bg-[#db8140] cursor-pointer hover:text-[#faf9f6] " >
                    Order Now
                  </a> */}

                  

<Link
      to="/ordernow"
      className="p-2 rounded cursor-pointer hover:text-[#faf9f6]"
      style={{ backgroundColor: '#ee8038', marginRight: '170px' }}
      onClick={handleOrderNowClick} // Call handleOrderNowClick when the link is clicked
    >
      Order Now
    </Link>
                  {/* <a  href="#"   className="p-2 rounded cursor-pointer hover:text-[#faf9f6]"
                 style={{ backgroundColor: '#db8140', marginRight: '110px' }}>  Order Now </a> */}

                
                  
         { /*adding trial*/}

          
          {/* Navigation Sections */}
            <nav className=" flex items-center space-x-4">
              <div className="login flex gap-3 items-center">
                  <Link to="/login" className="p-2 rounded-[0.5em] cursor-pointer hover:text-[#ee8038]">
                    Login
                  </Link>

                  <Link to="/login"  className="p-2 rounded-[0.5em] bg-[#ee8038] cursor-pointer hover:text-[#faf9f6]">
                    Sign Up
                  </Link>
              </div>
            </nav>
          </div> 

          <div id="box" className="menu-container header-div justify-evenly fixed top-[8.2em] pt-[3em] rounded-[1.5em] ml-[0.7em] left-0 md:w-[80vw] w-[90vw] h-[90vh] overflow-scroll no-sb p-3 z-10 p-5 flex place-content-center flex-col gap-4 z-10">
            {/* Content for the white div */}
            <div className="header-pic scale-[200%] top-[-27em] left-[48em] absolute w-[100%] h-[50%]"></div>
            <div className="p-5 pt-[0em] flex flex-col gap-[1em] md:gap-3 h-[100%]">
              {navigationSections.map((section: string, index: number) => (
                <ul id="boxkid" key={index} className="nav-links  flex flex-col md:flex-row justify-start gap-[0.3em] md:gap-[7em] pb-2 cursor-pointer" onClick={() => handleSectionClick(section)}>
                  {section}
                  <div id="items" className="nav-items flex flex-col gap-[1em] md:gap-[1em] w-[85%] place-items-start">
                  {selectedSection === section && sectionData[section].map((item: string, idx: number) => (
                        <li className="link-list cursor-pointer p-0 w-[100%] rounded-[0.5em]"  key={idx} dangerouslySetInnerHTML={{ __html: item }}></li>
                  ))}
                  </div>
                </ul>
              ))}
            </div>
            <div className="w-[100%] flex justify-between pl-2 pb-[2em] ">
              <div className="close cursor-pointer hover:text-[#ee8038] p-4"  onClick={handleMenuClicked}>x</div>
            </div>
          </div>

        </header>
      </div>
    </div>
    </div>
  );
};
