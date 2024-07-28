'use client';
import { useMenu } from '@/contexts/MenuContext';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { Footer } from './footer';
import { navs } from '@/data/headerNavLinks';
import Link from 'next/link';

const DropdownMenu = () => {
  const { isOpen, toggleOpen } = useMenu();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const containerVariants = {
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

  const dropdownVariants = {
    open: {
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: 'easeInOut',
        staggerChildren: 0.1,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.75,
        ease: 'easeInOut',
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const navItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const underlineVariants = {
    open: {
      width: '100%',
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    closed: {
      width: '0%',
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  const toRoman = (num) => {
    const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    return roman[num - 1] || num;
  };

  return (
    <motion.div
      className="bg-[#121011] text-slate-100 text-5xl capitalize dark:bg-[#edefee]"
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={containerVariants}
    >
      <motion.div
        variants={dropdownVariants}
        className="flex flex-col h-full px-[3rem] bg-yellow-500 md:flex-row justify-between"
      >
        <motion.div className="flex flex-col justify-evenly w-full h-full">
          {navs.map((nav, i) => (
            <motion.div
              key={nav}
              variants={navItemVariants}
              className="relative bg-green-300"
            >
              <Link className="button flex items-center" href={`/${nav}`}>
                <span className="text-2xl mr-4">{toRoman(i + 1)}</span>
                <span>{nav}</span>
              </Link>
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-slate-100"
                variants={underlineVariants}
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="md:flex w-full hidden flex-col">
          <h1 className="">flex data here</h1>
          <Footer />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default DropdownMenu;
