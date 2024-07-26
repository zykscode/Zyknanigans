import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer';
import { allPosts } from 'contentlayer/generated';
import { motion } from 'framer-motion';
import { useMenu } from '@/contexts/MenuContext';

const Page = ({ children, ...props }: any) => {
  const sortedPosts = sortPosts(allPosts);
  const posts = allCoreContent(sortedPosts);

  return <section className=" h-screen bg-green-300">page</section>;
};

export default Page;
