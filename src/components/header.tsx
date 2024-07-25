'use client';

import React from 'react';
import Breadcrumbs from './breadcrumbs';
import Navs from './navs';
import { ModeToggle } from './mode-toggle';
import { motion } from 'framer-motion';
import { useMenu } from '@/contexts/MenuContext';

const Header = () => {
  const { isOpen, toggleOpen } = useMenu();
  return (
    <motion.header
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      className="header items-center h-['72px']"
    >
      <Breadcrumbs />
      <ModeToggle />
      <Navs toggle={() => toggleOpen()} />
    </motion.header>
  );
};

export default Header;
