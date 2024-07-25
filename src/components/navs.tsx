'use client';

import Link from 'next/link';
import React from 'react';
import { MenuToggle } from './MenuToggle';

const navs = ['blog', 'portfolio', 'contact'];

const Navs = ({ toggle }) => {
  return (
    <nav className="nav-header-rhs breadcrumbs">
      {navs.map((nav) => {
        return (
          <Link
            className="hidden md:block button capitalize"
            key={nav}
            href={`/${nav}`}
          >
            {nav}
          </Link>
        );
      })}
      <MenuToggle toggle={toggle} />
    </nav>
  );
};

export default Navs;
