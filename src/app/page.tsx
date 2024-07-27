import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer';
import { allPosts } from 'contentlayer/generated';
import { motion } from 'framer-motion';
import { useMenu } from '@/contexts/MenuContext';
import Header from '@/components/header';
import DropdownMenu from '@/components/dropdown';
import { Footer } from '@/components/footer';
import Main from '@/components/main';

const Page = ({ children, ...props }: any) => {
  const sortedPosts = sortPosts(allPosts);
  const posts = allCoreContent(sortedPosts);

  return (
    <section className="flex px-4 min-h-screen flex-col">
      <Header />
      <div className="overflow-hidden flex-grow flex-col flex bg-yellow-300 rounded-xl">
        <DropdownMenu />
        <Main>{children}</Main>
      </div>
      <Footer />
    </section>
  );
};

export default Page;
