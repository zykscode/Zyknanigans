import React from 'react';
import PostCard from './post-card';

const BlogPostScroll = ({ posts }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="h1">Posts</div>
      <div className="flex flex-col">
        {posts.map((post, index) => (
          <PostCard post={post} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BlogPostScroll;
