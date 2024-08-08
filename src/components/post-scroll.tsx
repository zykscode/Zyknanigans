import React from 'react';
import PostCard from './post-card';

const BlogPostScroll = ({ posts }) => {
  // Create a new array where each post is repeated 5 times
  const extendedPosts = posts.flatMap(post => Array(5).fill(post));

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="grid gap-10 sm:grid-cols-2">
        {extendedPosts.map((post, index) => (
          <PostCard post={post} image={post.coverImage} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BlogPostScroll;
