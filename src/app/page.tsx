import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer';
import { allPosts } from 'contentlayer/generated';
import Wrapper from '@/components/wrapper';
import BlogPostScroll from '@/components/post-scroll';

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
