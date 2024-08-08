'use client';


import { delay, motion } from 'framer-motion';
import { useMenu } from '@/contexts/MenuContext';

const Main = ({ children, ...props }: any) => {
  

  const { isOpen, toggleOpen } = useMenu();

  const variants = {
    open: {
      opacity: 0,
    },
    closed: {
      opacity: 1,
      transition: {
        delay: 0.75,
      },
    },
  };

  return (
    <motion.main
      className="flex-grow flex flex-col bg-green-50"
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
    >
      {children}
    </motion.main>
  );
};

export default Main;
