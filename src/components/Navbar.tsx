import 'animate.css';
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Menu } from "./Menu";
import '../utils/framer.js'

import logo2 from '../images/reduced/ICY-LOGO-WITH-TAGLINE.png'
import menu from '../images/reduced/5-(WHITE).png';
import logo from '../images/reduced/ICY-LOGO-WITHOUT-TAGLINE.png';
import { fadeIn, slideIn, textVariant } from '../utils/framer.js';


export const Navbar = () => {

  const [open, setOpen] = useState(false);
    const toggleMenu = () => {
    setOpen((prevOpen: Boolean) => !prevOpen);
    console.log('CLICKED');
    };

  return (
    <nav className="flex top-0 z-50 items-center justify-between py-2 sm:px-12 px-2 bg-transparent fixed w-full ">
      {/* Logo on the left */}
      <div className="flex items-center">
        <a href='#'>
          <img 
            className="h-6 sm:h-10 md:h-12 m-6"
            src={logo2.src}
            alt="Icy Studio"
            ></img> 
        </a>
      </div>
     
      {/* Button on the right */}
      
      <motion.div
          whileHover={{ scale: 1.1, scaleY: 1.1}}
          className='save-button'
          onClick={toggleMenu}
      >
          <a href="#" className="cursor-hand ">
          {/* <img
          className="h-6 sm:h-8 md:h-10 m-3  " 
          src={menu.src}
          alt="Menu"  
          >        
          </img> */}
          <svg width="44" height="55" viewBox="0 0 44 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_96_2"  maskUnits="userSpaceOnUse" x="0" y="0" width="44" height="44">
            <path d="M44 0H0V44H44V0Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_96_2)">
            <path d="M6.59726 13.2982H37.4401" stroke="white" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M6.59723 22.0493H37.4401" stroke="#B3E723" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M6.59723 30.6779H37.4401" stroke="white" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
            </g>
            <path d="M8.808 54H7.656V48.976C7.656 47.936 7.24 46.864 5.416 46.864C3.784 46.864 2.952 47.936 2.952 49.984V54H1.8V46H2.952V47.168C3.448 46.272 4.312 45.76 5.672 45.76C7.08 45.76 7.976 46.304 8.424 47.152C8.92 46.4 9.832 45.76 11.32 45.76C13.656 45.76 14.648 46.976 14.648 49.456V54H13.512V49.488C13.512 47.936 13.096 46.864 11.272 46.864C9.624 46.864 8.808 47.936 8.808 48.992V54ZM24.1133 50.064V50.384H16.9933C17.1213 52.48 18.2893 53.184 20.2253 53.184C21.7933 53.184 22.9133 52.304 22.9133 51.264L24.0173 51.28C24.0173 53.04 22.6733 54.24 20.2093 54.24C17.2173 54.24 15.7613 52.768 15.7613 49.984C15.7613 47.264 17.2333 45.76 19.9213 45.76C22.9133 45.76 24.1133 47.28 24.1133 50.064ZM17.0253 49.392H22.8973C22.7533 47.504 21.6173 46.816 19.9693 46.816C18.4493 46.816 17.2493 47.68 17.0253 49.392ZM33.2818 54H32.1298V49.488C32.1298 47.936 31.6338 46.864 29.4738 46.864C27.5378 46.864 26.5458 47.936 26.5458 49.984V54H25.3938V46H26.5458V47.184C27.0738 46.288 28.0498 45.76 29.6658 45.76C32.1778 45.76 33.2818 46.976 33.2818 49.456V54ZM34.5619 46H35.7139V50.512C35.7139 52.048 36.1939 53.136 38.3699 53.136C40.3059 53.136 41.2979 52.048 41.2979 50.016V46H42.4499V54H41.2979V52.816C40.7539 53.712 39.7939 54.24 38.1619 54.24C35.6659 54.24 34.5619 53.024 34.5619 50.544V46Z" fill="white"/>
          </svg>

      </a>
      </motion.div>

      <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => null}
      >
        {open && <Menu toggleMenu={toggleMenu}/>}
      </AnimatePresence>

    </nav>
  );
};


