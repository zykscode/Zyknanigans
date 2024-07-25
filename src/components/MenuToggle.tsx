import React from 'react';
import { SVGMotionProps, motion } from 'framer-motion';

const Path = (
  props: React.JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    React.RefAttributes<SVGPathElement>,
) => (
  <motion.path
    fill="transparent"
    strokeWidth="1.175"
    stroke="hsl(var(--foreground))"
    strokeLinecap="round"
    transition={{ duration: '0.6' }}
    {...props}
  />
);

export const MenuToggle = ({ toggle }: { toggle: () => void }) => (
  <button
    onClick={toggle}
    className=" w-20 flex justify-center items-center bg-transparent rounded-full focus:outline-none"
  >
    <svg className="w-full" viewBox="0 0 48 48">
      <Path
        className="forground"
        variants={{
          closed: { d: 'M 10 20 L 46 20' },
          open: { d: 'M 24 10 L 24 38' },
        }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 28 L 40 28' },
          open: { d: 'M 10 24 L 38 24' },
        }}
      />
    </svg>
  </button>
);
