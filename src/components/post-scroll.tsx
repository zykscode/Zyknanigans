import React from 'react';
import PostCard from './post-card';

const BlogPostScroll = ({ posts }) => {
  return (
     <div className="container max-w-4xl py-6 lg:py-10">
    
      <div className="flex flex-col">
        {posts.map((post, index) => (
          <PostCard post={post} image={post.coverImage} key={post.title} />
        ))}
      </div>
    </div>
  );
};

export default BlogPostScroll;
