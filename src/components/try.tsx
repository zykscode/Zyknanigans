"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollAnimatedComponent = () => {
  const containerRef = useRef(null);
  const blogPostsRef = useRef(null);
  const [containerTop, setContainerTop] = useState(0);
  const [blogPostsHeight, setBlogPostsHeight] = useState(0);

  const { scrollY } = useScroll();

  useEffect(() => {
    if (containerRef.current && blogPostsRef.current) {
      setContainerTop(containerRef.current.offsetTop);
      setBlogPostsHeight(blogPostsRef.current.scrollHeight);
    }
  }, []);

  const blogPostsY = useTransform(
    scrollY,
    [containerTop - window.innerHeight / 2, containerTop + blogPostsHeight / 2],
    [blogPostsHeight / 2, 0]
  );

  const containerY = useTransform(
    scrollY,
    [containerTop + blogPostsHeight / 2, containerTop + blogPostsHeight],
    [0, -blogPostsHeight / 2]
  );

  return (
    <motion.div 
      ref={containerRef}
      className="relative h-screen overflow-hidden"
      style={{ y: containerY }}
    >
      <div className="flex flex-col md:flex-row h-full">
        <div className="p-5 bg-gray-100 z-10 md:w-1/3 sticky top-0 h-screen flex items-center justify-center">
          <h1 className="text-2xl font-bold">Sticky Title</h1>
        </div>
        <motion.div 
          ref={blogPostsRef}
          className="p-5 md:w-2/3 h-[170hv] overflow-hidden"
          style={{ y: blogPostsY }}
        >
          <div className="space-y-8">
            {[...Array(10)].map((_, index) => (
              <div key={index}>
                <h2 className="text-xl font-semibold mb-2">Blog Post {index + 1}</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                  euismod, nisi vel consectetur interdum, nisl nunc egestas nunc,
                  vitae tincidunt nisl nunc euismod nunc.
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScrollAnimatedComponent;