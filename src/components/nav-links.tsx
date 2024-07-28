import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const variants = {
  open: (i) => ({
    x: '100%',
    opacity: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
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

const NavLink = ({ text, i }) => {
  return (
    <motion.div
      custom={i}
      variants={variants}
      className="relative inline-block py-6 group"
      key={text}
    >
      <Link href={`/${text.toLowerCase()}`} className="relative text-gray-900">
        <span className="relative z-10">{text}</span>
        <span className="absolute w-full h-px bg-gray-900 left-0 bottom-0 scale-x-0 origin-right transition-transform duration-350 ease-out group-hover:scale-x-100 group-hover:origin-left lg:top-6"></span>
      </Link>
    </motion.div>
  );
};

export default NavLink;
