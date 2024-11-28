import React from 'react';
import { motion } from 'framer-motion';
import {AnimatedPageWrapperProps} from '../../interfaces/Tasksinterfaces'

const pageVariants = {
  initial: {
    opacity: 0,  
  },
  in: {
    opacity: 1,  
  },
  out: {
    opacity: 0,  
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.3,
};

const AnimatedPageWrapper: React.FC<AnimatedPageWrapperProps> = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPageWrapper;
