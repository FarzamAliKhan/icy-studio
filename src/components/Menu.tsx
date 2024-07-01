import { motion } from 'framer-motion';
import  menuClose  from '../images/reduced/53(WHITE).png';
import logo2 from '../images/reduced/ICY-LOGO-WITH-TAGLINE.png'
import menu from '../images/reduced/5-(WHITE).png';
import { useState } from 'react';

type MenuProps = {
    toggleMenu: () => void;
}

const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };


const menuVars = {
    hidden:{
        scaleY: 0,
    },
    visible:{
        scaleY: 1,
        transition: {
          duration: 1,
          ease: [0.12, 0, 0.39, 0],
        },
      },
    exit:{
        scaleY: 0,
        transition: {
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        },
      },
}


export const Menu = (
    { 
    toggleMenu,
    } 
    : MenuProps) => 
    {
    
    return (
        <motion.div
            className="flex justify-center origin-top items-center absolute top-0 left-0 w-full h-svh bg-black "
            variants={menuVars}
            initial= "hidden"
            animate= "visible"
            exit= "exit"
        >
            <div className='grid h-screen overflow-hidden w-full grid-cols-1 sm:grid-cols-10  '>
                {/* First column */}
                <div className=" col-span-2  ">
                    <div className=" grid h-screen sm:grid-rows-6  ">
                        <div className= " flex p-6 self-center justify-center row-span-1">
                            <img
                                rel='preload'
                                className="h-full " 
                                src={logo2.src}
                                alt="icy-studio" >
                            </img>         
                        </div>
                        <section className=" row-span-3 border-solid border-y-2 border-neutral-800 ">
                            <div className=" p-6 flex justify-start h-full  ">
                                <div className=" flex py-4  flex-col">
                                        <div className=' text-base md:text-2xl lg:text-3xl mb-4 font-glancyrRegular' >
                                                FOLLOW <span className=' text-neon-green' >US</span>
                                        </div>
                                        <div className='text-xs lg:text-base font-glancyrThinItalic'>
                                            <a href='#'>
                                                <motion.div
                                                whileHover={{ color: '#b3e823'}}
                                                className='mb-4' > 
                                                    Instagram 
                                                </motion.div>
                                            </a>
                                            <a href='#'>
                                            <motion.div
                                                whileHover={{ color: '#b3e823'}}
                                                className='mb-4' > 
                                                    Facebook 
                                                </motion.div>
                                            </a>
                                            <a href='#'>
                                            <motion.div
                                                whileHover={{ color: '#b3e823'}}
                                                className='mb-4' > 
                                                    Linkedin
                                                </motion.div>
                                            </a>
                                            <a href='#'>
                                            <motion.div
                                                whileHover={{ color: '#b3e823'}}
                                                className='mb-4' > 
                                                    Youtube
                                                </motion.div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                        </section>
                        <div className=" p-6 row-span-2 font-glancyrRegular text-xl md:text-2xl xl:text-3xl" >
                            <div className="flex flex-col py-4">
                            <a href='#'>
                                <motion.div 
                                    whileHover={{ color: '#b3e823'}}
                                    className='mb-2' > 
                                    About Us. 
                                </motion.div>
                            </a>
                            <a href='#'>
                                <motion.div 
                                    whileHover={{ color: '#b3e823'}}
                                    className='mb-2' > 
                                    FAQ's 
                                </motion.div>
                            </a>
                            <a href='#'>
                                <motion.div 
                                    whileHover={{ color: '#b3e823'}}
                                    className='mb-2' > 
                                    Privacy Policy
                                </motion.div>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Middle column */}
                <div className="col-span-6">
                    <div className="grid h-screen font-glancyrRegular">
                        <NavLink title='SERVICES' href='#' />
                        <NavLink title='WORK' href='#' />
                        <NavLink title='TESTIMONIALS' href='#' />
                        <NavLink title='CONTACT US' href='#' />
                        <div className=" border-solid border-x-2 border-t-2 border-neutral-800 "></div>
                    </div>
                </div>
                    {/* Last column */}
                <div className="col-span-2 relative">
                    <div
                        id='animation-gradient'
                        className="absolute inset-0 w-[0.7rem]  "
                    />
                    <div className="flex justify-end items-center">
                        <a href="#" className="cursor-hand self-end m-2 mt-4 p-0">
                            <motion.img
                                animate={{ rotate: 45 }}
                                rel='preload'
                                className="h-8 sm:h-12 md:h-14 m-3"
                                src={menuClose.src}
                                alt="Close Menu"
                                whileHover={{ scale: 0.9, scaleY: 0.9 }}
                                whileTap={{ scale: 1 }}
                                onClick={toggleMenu}
                            />
                        </a>
                    </div>
                    <br />
                    <div className="h-[10%] flex flex-col p-2 ml-8 align-start">
                        <div className=' text-2xl lg:text-4xl p-1 font-glancyrRegular'>Get <span className='text-neon-green'>in</span> Touch</div>
                        <div className=' text-xs lg:text-base font-glancyrThinItalic p-1'>+1 252 232 29</div>
                        <div className='text-xs lg:text-base font-glancyrThinItalic p-1'>info@icystudio.co</div>
                    </div>
                    <div className="h-3/4 flex flex-col justify-end p-6">
                        <div className='flex flex-row justify-end p-4'>
                            <motion.img
                                rel='preload'
                                className="h-4 sm:h-10 md:h-[5rem] xl:h-32 p-2"
                                src={menu.src}
                                alt="Globe icon"
                            />
                        </div>
                    </div>
                </div>
            </div>
                
        </motion.div>
    );
};

const navLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

type NavLinkProps = {
    title : string,
    href : string
  }
  

const NavLink = ({ title, href} : NavLinkProps) => {

    const [isHover, setHover] = useState(false);

    return (

        
    <motion.div
        className="flex items-center border-solid border-x-2 border-t-2 border-neutral-800"
        animate={{
            
            color: isHover ? '#000000' : '#ffffff',
            textShadow: isHover ? '0px 0px 4px #b3e823 ' : 'none'
        }}
        variants={navLinkVars}
        transition={{ duration: 0.01 }}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
    >
        <a href={href}>
            <div className=' sm:text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl px-10'>{title}</div>
        </a>
    </motion.div>
    );
  };