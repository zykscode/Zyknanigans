'use client';

import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer';
import { allPosts } from 'contentlayer/generated';
import { motion } from 'framer-motion';
import { useMenu } from '@/contexts/MenuContext';

const Page = ({ children, ...props }: any) => {
  const sortedPosts = sortPosts(allPosts);
  const posts = allCoreContent(sortedPosts);
  const { isOpen, toggleOpen } = useMenu();

  const variants = {
    open: {
      y: '0',
      opacity: 0,
    },
    closed: {
      opacity: 1,
    },
  };

  return (
    <motion.section
      className=" h-screen bg-green-300"
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
    >
      page
    </motion.section>
  );
};

export default Page;
