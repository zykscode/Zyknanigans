'use client';

import Link from 'next/link';
import React from 'react';
import { MenuToggle } from './MenuToggle';
import { navs } from '@/data/headerNavLinks';
import { motion } from 'framer-motion';

const variants = {
  open: (i) => ({
    x: '100%',
    opacity: 0,
    transition: {
      delay: i * 0.7,
      duration: 0.75,
    },
  }),
  closed: {
    x: '0',
    opacity: 0.8,
    transition: {
      duration: 0.7,
    },
  },
};

const Navs = ({ toggle }) => {
  return (
    <nav className="text-md uppercase w-1/2 justify-between breadcrumbs">
      <div className="flex w-full justify-evenly">
        {navs.map((nav, i) => {
          return (
            <motion.div
              custom={i}
              variants={variants}
              className="relative group"
              key={nav}
            >
              <Link
                className="hidden md:block button relative"
                href={`/${nav}`}
              >
                {nav}
                <span className="absolute bottom-0 left-0 h-[2px] bg-black w-0 transform origin-left transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          );
        })}
      </div>
      <MenuToggle toggle={toggle} />
    </nav>
  );
};

export default Navs;
