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
          <img
          className="h-6 sm:h-8 md:h-10 m-3  " 
          src={menu.src}
          alt="Menu"  
          >        
          </img>
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


