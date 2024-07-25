import Link from 'next/link';
import React from 'react';
import PageLogo from './page-logo';

const Breadcrumbs = () => {
  // console.log({ todo: 'add site name' })
  return (
    <Link href={'/'} className="breadcrumbs cursor-pointer">
      <div className="breadcrumb active cursor-pointer">
        <PageLogo />
        <span className="hidden md:block cursor-pointer ">Zykson.com</span>
      </div>
    </Link>
  );
};

export default Breadcrumbs;
