import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer';
import { allPosts } from 'contentlayer/generated';
import Wrapper from '@/components/wrapper';
import BlogPostScroll from '@/components/post-scroll';
import Me from '@/public/me.jpg';
const Page = ({ children, ...props }: any) => {
  const sortedPosts = sortPosts(allPosts);
  const posts = allCoreContent(sortedPosts);

  console.log(posts[0]);

  return (
    <Wrapper>
      <BlogPostScroll posts={posts} image={Me} />
    </Wrapper>
  );
};

export default Page;
