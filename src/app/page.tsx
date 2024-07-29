import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer';
import { allPosts } from 'contentlayer/generated';
import Wrapper from '@/components/wrapper';

const Page = ({ children, ...props }: any) => {
  const sortedPosts = sortPosts(allPosts);
  const posts = allCoreContent(sortedPosts);

  return (
    <Wrapper>
      <h1>hello</h1>
    </Wrapper>
  );
};

export default Page;
