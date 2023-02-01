import React from 'react';
import {motion} from 'framer-motion';

import './Button.css';

/***
 * The direction of the button can be right or left.
 * The color of the light can be pink or blue.
 */

const buttonHoverStyles = {
  boxShadow: '0 0 10px 2px rgba(255, 8, 215, 80)',
  scale: 1.1,
};

const Button = ({children, className, color, onClick, direction}) => {
  return (
    <motion.button
      onClick={onClick}
      className={`button button--${direction} ${className}`}
      whileHover={buttonHoverStyles}
      whileTap={{scale: 0.75}}
    >
      {children}
    </motion.button>
  );
};

export default Button;
