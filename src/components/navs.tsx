'use client';

import Link from 'next/link';
import React from 'react';
import { MenuToggle } from './MenuToggle';
import { motion } from 'framer-motion';
import { navs } from '@/data/headerNavLinks';

const variants = {
  open: (i) => ({
    y: '100%',
    opacity: 0,
    transition: {
      delay: i * 0.7,
      duration: 0.75,
    },
  }),
  closed: {
    y: '0',
    opacity: 0.8,
    transition: {
      duration: 0.7,
    },
  },
};

const Navs = ({ toggle }) => {
  return (
    <nav className=" text-md uppercase w-1/2 justify-between breadcrumbs">
      <div className="flex w-full justify-evenly">
        {navs.map((nav, i) => {
          return (
            <motion.span custom={i} variants={variants} key={nav}>
              <Link className="hidden md:block button" href={`/${nav}`}>
                {nav}
              </Link>
            </motion.span>
          );
        })}
      </div>
      <MenuToggle toggle={toggle} />
    </nav>
  );
};

export default Navs;
