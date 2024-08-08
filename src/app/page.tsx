import { allPosts } from 'contentlayer/generated';
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer';

import BlogPostScroll from '@/components/post-scroll';
import Wrapper from '@/components/wrapper';

const Page = ({ children, ...props }: any) => {
  const sortedPosts = sortPosts(allPosts);
  const posts = allCoreContent(sortedPosts);
  return (
    <Wrapper>
      <BlogPostScroll posts={posts} />
    </Wrapper>
  );
};

export default Page;
