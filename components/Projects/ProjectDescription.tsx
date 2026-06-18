'use client';

import { Heading } from '@/components/ui/heading';
import { Divider } from '@/components/ui/divider';
import Paragraph from 'components/utils/Paragraph';
import { IProjects } from 'data/Projects';
import React, { FC } from 'react';
import { useTheme } from '@/hooks/use-theme';

const Content: FC<{ proj: IProjects }> = ({ proj }) => {
  const { theme } = useTheme();
  const bgColor = theme === 'light' ? '#e4e9ed' : '#252525';
  const borderColor = theme === 'light' ? '#121212' : '#edf2f7';

  return (
    <div
      className="py-2 px-6 flex flex-col items-center justify-center gap-2 row-start-2 md:row-start-1 lg:row-start-1"
      style={{ background: bgColor }}
    >
      <div className="self-start">
        <span className="inline text-lg font-poppins font-medium mr-2 text-[#595959]">
          #{proj.id}
        </span>
        <Heading as="h2" className="inline font-poppins tracking-wider font-medium">
          {proj.name}
        </Heading>
      </div>
      <Divider className="my-1" />
      <Paragraph>{proj.description}</Paragraph>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href={proj.link}
        className="w-auto justify-self-end mb-2 px-4 py-2 rounded border transition-colors hover:bg-opacity-10"
        style={{ borderColor }}
      >
        View Project
      </a>
    </div>
  );
};

export default Content;
