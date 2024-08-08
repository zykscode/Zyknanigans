'use client';

import { Post } from 'contentlayer/generated';
import { CoreContent } from 'pliny/utils/contentlayer';
import React from 'react';

import { useScrollEffect } from '../hooks/useScrollEffect';
import PostCard from './post-card';

interface BlogPostSectionProps {
  postImage: string;
  blogPosts: CoreContent<Post>[];
}

const BlogPostSection: React.FC<BlogPostSectionProps> = ({
  postImage,
  blogPosts,
}) => {
  const { containerRef, cardsContainerRef } = useScrollEffect();

  return (
    <div
      ref={containerRef}
      className="flex flex-col md:flex-row h-screen overflow-hidden"
    >
      <div className="w-full md:w-1/2 h-64 md:h-full">hello </div>
      <div
        ref={cardsContainerRef}
        className="w-full md:w-1/2 p-5 overflow-y-auto"
      >
        {[...blogPosts, ...blogPosts, ...blogPosts].map((post, index) => (
          <PostCard post={post} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BlogPostSection;
