import React from 'react';
import {motion} from 'framer-motion';

import './Menu.css';

const Menu = ({children}) => {
  return (
    <motion.div
      initial={{x: -1200}}
      animate={{x: 0}}
      exit={{x: 1200}}
      className="menu"
    >
      {children}
    </motion.div>
  );
};

export default Menu;
