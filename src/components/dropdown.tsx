'use client';

import { useMenu } from '@/contexts/MenuContext';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { Footer } from './footer';

const DropdownMenu = () => {
  const { isOpen, toggleOpen } = useMenu();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const variants = {
    open: {
      height: 'calc(100vh - 72px)',
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: 'easeInOut',
      },
    },
    closed: {
      height: '0',
      y: 'calc(-100%)',
      transition: {
        duration: 0.75,
        ease: 'easeInOut',
      },
    },
  };

  const dropdown = {
    open: {
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: 'easeInOut',
      },
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.75,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      className=" bg-[#121011] text-slate-100 dark:bg-[#edefee]"
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
    >
      <motion.div
        variants={dropdown}
        className="flex flex-col md:flex-row justify-between"
      >
        <motion.div className="flex flex-col">flex</motion.div>
        <motion.div className="flex w-full bg-yellow-400 flex-col">
          <h1 className="hidden md:block ">flex data here</h1>
          <Footer />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default DropdownMenu;
