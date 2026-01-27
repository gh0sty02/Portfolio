/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import { Heading } from '@/components/ui/heading';
import Paragraph from '@/components/utils/Paragraph';
import { FaEnvelope } from 'react-icons/fa';
import { IoNewspaper } from 'react-icons/io5';

const Profile = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Heading
        as="h1"
        className="text-[28px] md:text-[40px] lg:text-[48px] mb-2"
      >
        {"Hey, I'm Pranay Yadav."}
      </Heading>
      <p className="font-poppins font-light mb-4">
        Or you could call me ghosty. That works too . . .
      </p>
      <Paragraph
        props={{
          fontSize: '2xl',
          lineHeight: '1.6',
          marginBottom: '4',
        }}
      >
        Full Stack Web Developer skilled in JavaScript, React, Node.js, and
        TypeScript. Welcome to my personal website - thanks for stopping by!
      </Paragraph>
      <div className="flex flex-wrap gap-4 -mb-4">
        <a
          href="mailto:pranayyadav08@gmail.com"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-md transition-colors"
        >
          <FaEnvelope />
          Mail
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href={process.env.NEXT_PUBLIC_RESUME_LINK}
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-md transition-colors"
        >
          <IoNewspaper />
          Resume
        </a>
      </div>
    </motion.div>
  );
};

export default Profile;
