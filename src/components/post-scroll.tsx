'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import PostCard from './post-card';

const BlogPostScroll = ({ posts, image }) => {
  <div className="flex flex-col md:flex-row">
    <div className="h1">Posts</div>
    <div className="flex flex-col">
      {posts.map((post, index) => (
        <PostCard post={post} key={index} />
      ))}
    </div>
  </div>;
};

export default BlogPostScroll;
