'use client';

import { motion } from 'framer-motion';
import { Heading } from '@/components/ui/heading';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { RiCupFill } from 'react-icons/ri';
import React from 'react';
import { tools } from 'data/Tools';
import Card from 'components/utils/Card';
import { FaExternalLinkAlt } from 'react-icons/fa';

type ISkillSetModal = {
  onOpen(): void;
};

const TechStack = ({ onOpen }: ISkillSetModal) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Heading
        as="h1"
        className="text-[24px] md:text-[30px] lg:text-[36px] mb-3"
      >
        Primary Stack & Technologies
      </Heading>
      <div className="text-xl leading-relaxed">
        As a full-stack web developer there are lot of tools that I use on daily
        basis, Here are few tools that are my cup of{' '}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="inline text-green-500 font-medium font-poppins cursor-default">
                Tea
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-poppins font-medium">I drink a lot of tea</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>{' '}
        <RiCupFill className="inline-block ml-0.5 translate-y-[3px]" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {tools.map((tool) => (
          <Card tool={tool} key={tool?.name} />
        ))}
      </div>
      <button onClick={onOpen} className="text-green-500 mt-4">
        See my full Arsenel{' '}
        <FaExternalLinkAlt className="inline ml-1" />
      </button>
    </motion.div>
  );
};

export default TechStack;
