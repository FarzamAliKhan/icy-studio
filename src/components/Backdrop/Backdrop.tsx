import { motion } from 'framer-motion';

import React from 'react'

type BackDropProps = {
    children: React.ReactNode;
    onClick : () => void;
}


export const Backdrop = (
    {children, onClick}:BackDropProps) => {

  return (
    
    <motion.div 
        onClick={onClick}
        className="flex justify-center origin-top items-center absolute top-0 left-0 w-full h-screen bg-black "
        initial={{ scaleY: 0 }}
        animate={{ 
            scaleY: 1,
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: [0.12, 0, 0.39, 0],
                  
              },
        }}
        exit={{ 
            scaleY: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              },
        }}
        >
         {children}
        </motion.div>

    )
}

