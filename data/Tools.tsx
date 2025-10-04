import {
  FaDatabase,
  FaGitAlt,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
  FaRust,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiMongodb,
} from 'react-icons/si';

export const tools = [
  {
    name: 'React.js',
    description:
      'A powerful library for building fast, modular, and interactive user interfaces.',
    icon: <FaReact fontSize="20px" />,
    url: 'https://react.dev/',
  },
  {
    name: 'Next.js',
    description:
      'A production-grade React framework for SSR, SSG, APIs, and full-stack web apps.',
    icon: <SiNextdotjs fontSize="20px" />,
    url: 'https://nextjs.org/',
  },
  {
    name: 'TypeScript',
    description:
      'A statically typed JavaScript superset that ensures scalability and maintainable codebases.',
    icon: <SiTypescript fontSize="20px" />,
    url: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Node.js',
    description:
      'A high-performance JavaScript runtime for building fast and scalable backend services.',
    icon: <FaNodeJs fontSize="20px" />,
    url: 'https://nodejs.org/',
  },
  {
    name: 'Express.js',
    description:
      'A lightweight Node.js framework for creating efficient REST APIs and backend microservices.',
    icon: <SiExpress fontSize="20px" />,
    url: 'https://expressjs.com/',
  },
  {
    name: 'MongoDB',
    description:
      'A NoSQL database designed for flexible, scalable, and high-performance data storage.',
    icon: <SiMongodb fontSize="20px" />,
    url: 'https://www.mongodb.com/',
  },
];
