import DarkMode from "./dmprovider";
import lightModeIcon from '../assets/night-mode-light.png'
import darkModeIcon from '../assets/night-mode-dark.png'
import { Link } from "react-router-dom";


export const Footer =  () => {
  return (
      <footer className="p-5 relative flex flex-col gap-3 overflow-hidden">
          {/* <div className="flex  flex-col md:flex-row gap-9 w-[100%] justify-between ">
            
            <div className="flex gap-4 justify-around md:w-[50%]">
            <ul className="get-to-know cursor-pointer text-[0.6em] flex flex-col  gap-4"> 
            <h3 className="font-black text-[1.3em]">Get to know us</h3>             
                <li className="blog hover:text-[#ee8038]">Blog</li>
                <li className="blog hover:text-[#ee8038]">Faqs</li>
                <li className="blog hover:text-[#ee8038]">How it works</li>
                <li className="blog hover:text-[#ee8038]">Reviews</li>
                <li className="blog hover:text-[#ee8038]">Contact</li>
                <li className="blog hover:text-[#ee8038]">Resources</li>
                <li className="blog hover:text-[#ee8038]">Our Offers</li>
            </ul>

            <ul className="best-in-c cursor-pointer text-[0.6em] flex flex-col gap-4">
            <h3 className="font-black text-[1.3em]">Best in Countries</h3>
              <li className="countries hover:text-[#ee8038]">American</li>
              <li className="countries hover:text-[#ee8038]">Asia Pacific</li>
              <li className="countries hover:text-[#ee8038]">Europe</li>
              <li className="countries hover:text-[#ee8038]">Middle East/Africa</li>            
            </ul>
            </div>
 
            <div className="flex cursor-pointer gap-4 justify-around md:w-[50%]">
            
            <ul className="fat text-[0.6em] flex flex-col gap-4">
            <h3 className="font-black text-[1.3em]">Free Academic Tools</h3>             
                <li className="hover:text-[#ee8038]">Essay Grader</li>
                <li className="hover:text-[#ee8038]">Essay Typer</li>
                <li className="hover:text-[#ee8038]">Essay Checker</li>
                <li className="hover:text-[#ee8038]">Plagiarism Checker</li>
                <li className="hover:text-[#ee8038]">Grammar Checker</li>
                <li className="hover:text-[#ee8038]">Paraphrasing Tool</li>
                <li className="hover:text-[#ee8038]">PDF Summarizer</li>
                <li className="hover:text-[#ee8038]">Annotated Bibliography <br /> Generator</li>
                <li className="hover:text-[#ee8038]">All Free Tools</li>
            </ul>
            <ul className="citation-tools text-[0.6em] flex flex-col  justify-evenly gap-4">
            <h3 className="font-black text-[1.3em]">Citation Tools</h3>             
                <li className="hover:text-[#ee8038]">APA Citation</li>
                <li className="hover:text-[#ee8038]">Chicago Citation</li>
                <li className="hover:text-[#ee8038]">Harvard Citation</li>
                <li className="hover:text-[#ee8038]">MLA Citation</li>
                <li className="hover:text-[#ee8038]">Vancouver Citation</li>
                <li className="hover:text-[#ee8038]">Oxford Citation</li>
                <li className="hover:text-[#ee8038]">Swinburne Citation</li>
                <li className="hover:text-[#ee8038]">AGLC Citation</li>
                <li className="hover:text-[#ee8038]">Deakin Citation</li>
                <li className="hover:text-[#ee8038]">UTS Citation</li>
                <li className="hover:text-[#ee8038]">Griffith Citation</li>
            </ul>

            </div>

  
          </div> */}

          <div className="dm-container">
          {/* <DarkMode/>  */}
  
         </div>

         <div className="contact-nd-extras cursor-pointer  text-[0.6em] md:text-[1em] flex w-[100%] justify-around gap- pt-5">
            <div className="flex flex-col gap-2">
                <div className="pb-1 flex gap-2">
                Contact us
                  <div className="ph-wrap">
                  <img width="14" height="14" src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/footer-ph.svg" data-src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/footer-ph.svg" alt="icon" title="footer-ph" className="loaded" data-was-processed="true"/>
                  </div>
                </div>
                <div className="social-sec flex gap-4">
                    {/* <a target="_blank" rel="noreferrer" href="https://www.facebook.com/myassignmenthelpus/"> */}
                    <img width="9" height="15" src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/facebook.svg" data-src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/facebook.svg" alt="facebook" title="facebook" className="loaded" data-was-processed="true"/>
                    {/* </a> */}
                    {/* <a target="_blank" rel="noreferrer" href="https://twitter.com/myassignmentau"> */}
                    <img width="15" height="12" src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/Twittericon.svg" data-src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/Twittericon.svg" alt="Twitter" title="Twitter" className="loaded" data-was-processed="true"/>
                    {/* </a> */}
                    {/* <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC49KwAi54T9SJ0aZuEee5bQ"> */}
                    <img width="15" height="10" src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/youtubeicon.svg" data-src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/youtubeicon.svg" alt="youtube" className="loaded" data-was-processed="true"/>
                    {/* </a> */}
                    {/* <a target="_blank" rel="noreferrer" href="https://www.pinterest.com/Myassignmentau/"> */}
                    <img width="12" height="15" src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/pinteresticon.svg" data-src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/pinteresticon.svg" alt="pinterest-icon" title="pinterest-icon" className="loaded" data-was-processed="true"/>
                    {/* </a> */}
                    {/* <a target="_blank" rel="noreferrer" href="https://www.instagram.com/myassignmenthelpofficial/"> */}
                    <img width="15" height="15" src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/instagram.svg" data-src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/instagram.svg" alt="instagram" title="instagram" className="loaded" data-was-processed="true"/>
                    {/* </a> */}
                    {/* <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@myassignmenthelpofficial"> */}
                    <img width="15" height="15" src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/tik-tok-social.svg" data-src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/tik-tok-social.svg" alt="Tiktok" title="Tiktok" className="loaded" data-was-processed="true"/>
                    {/* </a> */}
                </div>
            </div>
          
              <div className="flex flex-col gap-2">
                  <div className="list-heading2 pb-1">
                Order on the go!
                </div>
                <div className="list-sub-heading2">Say hello to our app</div>
                  <div className="app-store-main flex gap-4">
                {/* <a href="app" target="_blank" rel="noreferrer"> */}
                <img width="101" height="30" alt="secure payment" className="mr-3 loaded" src="https://cdn1.myassignmenthelp.com/lazyload-assets/2021/appPromotion/app-store.svg" data-src="https://cdn1.myassignmenthelp.com/lazyload-assets/2021/appPromotion/app-store.svg" data-was-processed="true" title="secure payment"/>
                {/* </a> */}
                {/* <a href="https://play.google.com/store/apps/details?id=com.myassigmenthelp&amp;hl=en_IN&amp;gl=US" target="_blank" rel="noreferrer"> */}
                <img width="101" height="30" alt="secure payment" src="https://cdn1.myassignmenthelp.com/lazyload-assets/2021/appPromotion/playStore.svg" data-src="https://cdn1.myassignmenthelp.com/lazyload-assets/2021/appPromotion/playStore.svg" className="loaded" data-was-processed="true" title="secure payment"/>
                {/* </a> */}
                </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="pay-head">
              100% Secure Pay
              </div>
              <img width="190" height="26" alt="secure payment" src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/secure-payment.svg" data-src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/secure-payment.svg" title="secure-payment" className="loaded" data-was-processed="true"/>
              {/* <a href="https://www.dmca.com/Protection/Status.aspx?ID=c33c33ba-98f5-4bd8-a2b1-57d5f2471f7b" title="DMCA.com Protection Status" className="dmca-badge">  */}
              <img height="30" width="150" src="https://images.dmca.com/Badges/dmca-badge-w250-5x1-01.png?ID=c33c33ba-98f5-4bd8-a2b1-57d5f2471f7b" data-src="https://images.dmca.com/Badges/dmca-badge-w250-5x1-01.png?ID=c33c33ba-98f5-4bd8-a2b1-57d5f2471f7b" alt="DMCA.com Protection Status" className="lazy loaded" data-was-processed="true"/>
              {/* </a> */}
            </div>

        </div>

          <div className="terms cursor-pointer pt-9">
            <ul className="flex text-[0.5em] md:text-[0.9em] w-[100%] justify-evenly">
              <li>
              <Link to="/terms-of-use">Term of use</Link>   
                         </li>
              <li className="sep">|</li>
              <li>
              <Link to="/privacy-policy">Privacy Policy</Link>   
                            </li>
              <li className="sep">|</li>
              <li>
              <Link to="/refund-policy"> Revision &amp; Refund policy</Link>
              </li>
              <li className="sep">|</li>
              <li>
              <Link to="/fair-use-policy"> Fair Use Policy</Link>              </li>
            </ul>
          </div>

          <div>
            <div id="art" className="absolute w-[100vw] min-h-screen bottom-[-35em] left-0 z-[-1]"></div>
          </div> 
      </footer>
  );
};
