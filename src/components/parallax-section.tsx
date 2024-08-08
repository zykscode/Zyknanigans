'use client'
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';


export default function ParallaxSection() {
  const mainDivRef = useRef(null);
  const titleRef = useRef(null);
  const blogPostsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const mainDiv = mainDivRef.current;
      const titleDiv = titleRef.current;
      const blogPostsDiv = blogPostsRef.current;

      if (!mainDiv || !titleDiv || !blogPostsDiv) return;

      const mainDivRect = mainDiv.getBoundingClientRect();
      const titleRect = titleDiv.getBoundingClientRect();
      const blogPostsRect = blogPostsDiv.getBoundingClientRect();

      if (mainDivRect.top <= 0) {
        mainDiv.classList.add('sticky', 'top-0', 'z-10');
      } else {
        mainDiv.classList.remove('sticky', 'top-0', 'z-10');
      }

      if (titleRect.top <= 0) {
        titleDiv.classList.add('sticky', 'top-0', 'z-20');
      } else {
        titleDiv.classList.remove('sticky', 'top-0', 'z-20');
      }

      if (blogPostsRect.bottom <= window.innerHeight) {
        mainDiv.classList.remove('sticky', 'top-0', 'z-10');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center items-start h-[200vh] p-5">
      <motion.div className="flex flex-row relative" ref={mainDivRef}>
        <motion.div className="flex-1 p-5" ref={titleRef}>
          <h1 className="text-3xl font-bold">Title</h1>
        </motion.div>
        <motion.div className="flex-3 p-5 overflow-y-auto" ref={blogPostsRef}>
          <div className="space-y-4">
            <p>Blog post content goes here...</p>
            <p>More blog post content...</p>
            <p>Even more blog post content...</p>
            {/* Add more blog posts as needed */}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
