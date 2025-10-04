import { IconType } from 'react-icons';
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiDocker,
  SiMysql,
  SiMongodb,
  SiGit,
  SiChakraui,
  SiPython,
  SiExpress,
  SiNestjs,
  SiTailwindcss,
  SiD3Dotjs,
  SiPostgresql,
  SiShadcnui,
  SiJira,
  SiWebpack,
  SiJest,
} from 'react-icons/si';

import { BiLogoVisualStudio } from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb';
export type SkillCategory =
  | 'languages'
  | 'backend'
  | 'frontend'
  | 'cicd'
  | 'database'
  | 'ui frameworks'
  | 'tools';

export type Skill = {
  name: string;
  icon: IconType;
};

export const Skills: {
  [key in SkillCategory]: Skill[];
} = {
  languages: [
    {
      name: 'JavaScript',
      icon: SiJavascript,
    },
    {
      name: 'Typescript',
      icon: SiTypescript,
    },
    {
      name: 'Python',
      icon: SiPython,
    },
  ],
  backend: [
    {
      name: 'Node',
      icon: SiNodedotjs,
    },
    {
      name: 'Express.js',
      icon: SiExpress,
    },
    {
      name: 'Nest.js',
      icon: SiNestjs,
    },
  ],
  frontend: [
    {
      name: 'React',
      icon: SiReact,
    },
    {
      name: 'NextJs',
      icon: TbBrandNextjs,
    },
    {
      name: 'Redux',
      icon: SiRedux,
    },
    {
      name: 'D3.Js',
      icon: SiD3Dotjs,
    },
    {
      name: 'Jest',
      icon: SiJest,
    },
  ],
  database: [
    {
      name: 'MySQL',
      icon: SiMysql,
    },
    {
      name: 'MongoDb',
      icon: SiMongodb,
    },
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
    },
  ],
  cicd: [
    {
      name: 'Docker',
      icon: SiDocker,
    },
  ],
  'ui frameworks': [
    { name: 'Tailwind Css', icon: SiTailwindcss },

    {
      name: 'ChakraUI',
      icon: SiChakraui,
    },
    {
      name: 'Shadcn UI',
      icon: SiShadcnui,
    },
  ],
  tools: [
    {
      name: 'Git',
      icon: SiGit,
    },
    {
      name: 'Jira',
      icon: SiJira,
    },
    {
      name: 'Webpack',
      icon: SiWebpack,
    },
    {
      name: 'VSCode',
      icon: BiLogoVisualStudio,
    },
  ],
};

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length;
  const isEvenChunk = arrLength % 2 === 0;

  let chunk = 4;
  if (isEvenChunk) {
    chunk = arrLength / 2;
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3;
  }

  let i = 0;
  let j = 0;
  const temporary = [];
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk));
  }
  return temporary;
};
