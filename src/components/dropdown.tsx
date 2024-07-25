'use client';

import { useMenu } from '@/contexts/MenuContext';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';

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
      height: 'calc(100vh - 81px)',
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

  return (
    <motion.div
      className=" bg-[#121011] dark:bg-[#edefee]"
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
    >
      <div className="p-4">Dropdown Menu Content</div>
    </motion.div>
  );
};

export default DropdownMenu;
