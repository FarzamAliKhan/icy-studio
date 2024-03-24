import React from 'react'
import { motion } from 'framer-motion';

export const Framer = () => {
  return (
    <div>
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='save-button'
            onClick={() => {console.log('clicked')}}
        >
            Launch modal
        </motion.button>
    </div>
  )
}


