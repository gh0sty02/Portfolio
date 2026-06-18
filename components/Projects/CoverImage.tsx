'use client';

import { IProjects } from 'data/Projects';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { FC } from 'react';
import { variants } from './varients';
import { cn } from '@/lib/utils';

const CoverImage: FC<{ proj: IProjects }> = ({ proj }) => {
  const MotionDiv = motion.div;

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden row-start-1 aspect-video',
        proj.isLeft
          ? 'md:col-start-1 lg:col-start-1'
          : 'md:col-start-2 lg:col-start-2'
      )}
      style={{
        borderRadius: proj.isLeft ? '.5rem 0 0 .5rem' : '0 0.5rem 0.5rem 0',
      }}
    >
      <MotionDiv
        className="relative w-full h-full"
        variants={variants}
        initial="normal"
        whileHover="hover"
        whileTap="tap"
      >
        <Image
          src={proj.image}
          alt={proj.name}
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'top',
            opacity: 0.75,
          }}
        />
      </MotionDiv>
    </div>
  );
};

export default CoverImage;
