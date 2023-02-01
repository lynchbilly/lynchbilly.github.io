import React from 'react'
import {motion} from 'framer-motion';

import './Title.css'


const Title = () => {
  return (
    <motion.div 
      exit={{}}
    className="title__container"
    >
      <div className="title">
        MatMat
      </div>
      <div className="subtitle">
        Aventures matemàtiques
      </div>
    </motion.div>
  )
}

export default Title
