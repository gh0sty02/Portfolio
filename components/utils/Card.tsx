'use client';

import { Heading } from '@/components/ui/heading';
import { useTheme } from '@/hooks/use-theme';
import { FC, ReactElement } from 'react';
import Paragraph from './Paragraph';

interface ITool {
  url: string;
  name: string;
  icon: ReactElement;
  description: string;
}

const Card: FC<{ tool: ITool }> = ({ tool }) => {
  const { theme } = useTheme();
  const borderColor = theme === 'light' ? 'border-gray-300' : 'border-gray-700';

  return (
    <article>
      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full flex items-start ${borderColor} rounded-md border p-4 transition-all duration-500 cursor-pointer group hover:border-green-500`}
      >
        <div className="mr-3 text-2xl group-hover:text-green-500 transition-colors">
          {tool.icon}
        </div>
        <div>
          <Heading as="h2" className="text-sm">
            {tool.name}
          </Heading>
          <Paragraph props={{ mt: '1', fontSize: 'sm' }}>
            {tool.description}
          </Paragraph>
        </div>
      </a>
    </article>
  );
};

export default Card;
