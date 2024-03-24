import { motion } from 'framer-motion';
import { Backdrop } from '../Backdrop/Backdrop';
import  menuClose  from '../../images/53(WHITE).webp';
import { usePreloadImages } from "../../components/hooks/usePreloadImages";
import logo2 from '../../images/ICY-LOGO-WITH-TAGLINE.webp'
import menu from '../../images/5-(WHITE).png';



type MenuProps = {
    handleClose: () => void;
    menuOpen?: boolean;
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
          duration: 0.5,
          ease: [0.12, 0, 0.39, 0],
        },
      },
    exit:{
        scaleY: 0,
        transition: {
          delay: 0.5,
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        },
      },
}


export const Menu = (
    { handleClose,
        menuOpen,
    } 
    : MenuProps
    ) => 
    
    {
    

        
    return (
       
        <Backdrop onClick={handleClose}>
            {/* <motion.div
                onClick = {(e) => e.stopPropagation()}
                className="m-auto rounded-md p-8 flex flex-col h-full justify-center font-lora items-center gap-4 "
                variants={containerVars}
                initial="hidden"
                animate="visible"
                exit="exit"
                >
                <button onClick={handleClose}> Close Menu </button>
            </motion.div> */}

            <div className='grid h-screen w-full sm:grid-cols-10  '>
                    {/* First column */}
                    <div className=" col-span-2 ">
                        <div className=" grid h-screen sm:grid-rows-6  ">
                            <div className=" flex p-6 self-start row-span-1">
                                <img
                                    rel='preload'
                                    className="sm:h-50 md:h-60 h-40 " 
                                    src={logo2.src}
                                    alt="Close Menu" >
                                </img>         
                            </div>
                            <div className=" row-span-3 border-solid border-y-2 border-neutral-800 ">2</div>
                            <div className=" row-span-2 " >3</div>
                        </div>
                    </div>
                    {/* Middle column */}
                    <div className=" col-span-6 ">
                        <div className="grid h-screen ">
                            <div className=" flex items-center border-solid border-x-2  border-neutral-800  ">
                                <div className='text-8xl px-10' > SERVICES </div>
                            </div>
                            <div className=" flex items-center border-solid border-x-2 border-t-2 border-neutral-800 ">
                                 <div className='text-8xl px-10' > WORK </div>
                            </div>
                            <div className=" flex items-center border-solid border-x-2 border-t-2 border-neutral-800 ">
                                 <div className='text-8xl px-10' > TESTIMONIALS </div>
                            </div>                            
                            <div className=" flex items-center border-solid border-x-2 border-t-2 border-neutral-800 ">
                                 <div className='text-8xl px-10' > CONTACT US </div>
                            </div>                            
                            <div className=" border-solid border-x-2 border-t-2 border-neutral-800 "></div>
                        </div>
                    </div>
                     {/* Last column */}
                    <div className="outline outline-1 outline-neutral-800 col-span-2 ">

                        <div className= " flex justify-end items-center">
                            <a href="#" className=" cursor-hand self-end m-2 mt-4 p-0 ">
                                <motion.img
                                animate={{ rotate: 45 }}
                                rel='preload'
                                className="h-12 sm:h-14 md:h-16 m-3  "
                                src={menuClose.src}
                                alt="Close Menu"
                                whileHover={{ scale: 0.9, scaleY:0.9 }} // Scale down on hover
                                whileTap={{ scale: 1 }} // Reset scale on tap
                                />        
                            </a>
                        </div>   

                        <br/>

                        <div className=" flex flex-col p-2 ml-2 align-start">
                            
                            <div className='text-4xl p-1' > Get <span className=' text-green-300 ' >in</span> Touch </div>   
                            <div className='text-base italic p-1 ' > +1 252 232 29 </div>    
                            <div className='text-base italic p-1 ' > info@icystudio.co </div>    

                        </div>                     
                        
                        <div className=" h-3/4 flex flex-col justify-end p-6 ">
                            <div className=' flex flex-row justify-end p-4 '>
                                <motion.img
                                    animate={{ x: [0, 100, 0] }}
                                    rel='preload'
                                    className="h-16 sm:h-20 md:h-[7rem] m-3  "
                                    src={menu.src}
                                    alt="Close Menu"
                                     // Reset scale on tap
                                    /> 
                            </div>
                        </div>
                    
                    </div>
                
            </div>
            
                
        </Backdrop>
    );
};
