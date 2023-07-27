import React from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
  const containerAnimation = {
    initial: { backgroundColor: 'rgba(255, 255, 255, 0.5)' },
    animate: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      transition: {
        duration: 2,
        yoyo: Infinity, // Causes the animation to loop indefinitely
      },
    },
  };

  return (
    <motion.div
      className="container"
      initial="initial"
      animate="animate"
      variants={containerAnimation}
    >
      {/* Your content goes here */}
    </motion.div>
  );
};

export default BackgroundAnimation;
