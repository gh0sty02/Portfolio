import type { IconType } from 'react-icons';
import {
  SiDocker,
  SiJest,
  SiNodedotjs,
  SiOpenai,
  SiReact,
  SiTypescript,
} from 'react-icons/si';

export type ProjectRecordSize = 'large' | 'small';

export type FeaturedProject = {
  name: string;
  summary: string;
  category: string;
  status: 'ready';
  size: ProjectRecordSize;
  image?: string;
  imagePosition?: 'top' | 'center';
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
};

export type InfoPanel = {
  title: string;
  body: string;
};

export type WritingLink = {
  title: string;
  platform: 'Hashnode' | 'LinkedIn';
  url?: string;
  body: string;
  meta: string;
};

export type ContactLink = {
  label: string;
  detail: string;
  href?: string;
};

export type ExperienceRecord = {
  title: string;
  scope: string;
  summary: string;
  highlights: string[];
};

export type SkillCategory = {
  title: string;
  note?: string;
  icon: IconType;
  featured: string[];
  all: string[];
};

export const profile = {
  name: 'Pranay Yadav',
  role: 'Senior full-stack engineer',
  focus: 'React / TypeScript / Next.js / GraphQL',
  location: 'Pune, India',
  headline: 'Interfaces, systems, and practical product work.',
  intro:
    'Senior full-stack engineer building scalable, high-performance web applications across React, TypeScript, Next.js, NestJS, GraphQL, and production automation.',
  resumeUrl:
    process.env.NEXT_PUBLIC_RESUME_URL ??
    'https://drive.google.com/drive/folders/13z1tyWNGUNsHO6Vl35ECYmEJZmmpJI4t?usp=drive_link',
  email: 'pranayyadav08@gmail.com',
  availability: '',
};

export const featuredProjects: FeaturedProject[] = [
  {
    name: 'Devkit',
    summary:
      'An interactive platform for mastering algorithms and acing technical interviews. Step-by-step visualizations across 10+ algorithm patterns, paired with a curated bank of real interview questions and answers.',
    category: 'Interview prep platform',
    status: 'ready',
    size: 'large',
    image: '/devkit.png',
    liveUrl: 'https://devkit-studio.vercel.app',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'Synaptic',
    summary:
      'A multi-agent AI assistant with RAG, memory engineering, and full observability. Built on FastAPI, LangGraph, Unsloth-served Gemma 4, pgvector, and Redis, answering questions grounded in indexed knowledge bases while keeping memory across sessions.',
    category: 'Multi-agent AI / RAG',
    status: 'ready',
    size: 'small',
    image: '/synaptic-preview.svg',
    githubUrl: 'https://github.com/gh0sty02/synaptic',
    tags: ['FastAPI', 'LangGraph', 'RAG'],
  },
  {
    name: 'ConverseX',
    summary:
      'A Discord-style collaboration app with SSR, Socket.IO messaging, Prisma-backed persistence, Clerk auth, infinite scroll, Zustand state, and LiveKit WebRTC audio/video.',
    category: 'Realtime UX',
    status: 'ready',
    size: 'small',
    image: '/conversex.png',
    liveUrl: 'https://conversex.onrender.com/',
    githubUrl: 'https://github.com/gh0sty02/ConverseX',
    tags: ['Next.js', 'Socket.IO', 'LiveKit'],
  },
  {
    name: 'Flowify',
    summary:
      'A Trello-inspired project management app built with Next.js, Shadcn UI, Tailwind, Prisma, Stripe, and MySQL for board-based workflows.',
    category: 'Workflow',
    status: 'ready',
    size: 'large',
    image: '/flowify.png',
    liveUrl: 'https://flowify.vercel.app',
    githubUrl: 'https://github.com/gh0sty02/Flowify',
    tags: ['Next.js', 'Prisma', 'Stripe'],
  },
  {
    name: 'Stonkify',
    summary:
      'An e-commerce application built with TypeScript, Next.js, MongoDB, Express, NextAuth, and RTK Query, with a data-heavy product browsing flow.',
    category: 'Commerce / Data UI',
    status: 'ready',
    size: 'large',
    image: '/stonkify.jpg',
    imagePosition: 'center',
    githubUrl: 'https://github.com/gh0sty02/Stonkify',
    tags: ['Next.js', 'MongoDB', 'RTK Query'],
  },
  {
    name: 'Natours',
    summary:
      'A tour booking app built with React, Node.js, Express, MongoDB, and Mongoose, with a protected REST API serving tours, users, and reviews, plus account features like profile image upload and instant editing.',
    category: 'Booking platform',
    status: 'ready',
    size: 'small',
    image: '/natours.png',
    githubUrl: 'https://github.com/gh0sty02/natourss',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
];

export const infoPanels: InfoPanel[] = [
  {
    title: 'About',
    body:
      'I work across product UI, backend contracts, and automation. Recent work includes self-serve validation systems, GraphQL migrations, web performance improvements, and AI-assisted development workflows.',
  },
  {
    title: 'Delivery',
    body:
      'I have led small engineering teams, preserved backward compatibility in mature codebases, shipped under SLA pressure, and built test practices around Jest, React Testing Library, Playwright, and TDD.',
  },
  {
    title: 'Principles',
    body:
      'Keep interfaces clear, make data contracts explicit, test the risky paths, and leave systems easier to operate than they were before.',
  },
];

export const experienceRecords: ExperienceRecord[] = [
  {
    title: 'Product systems',
    scope: 'Frontend + backend contracts',
    summary:
      'Building self-serve product workflows that replace brittle configuration paths with clear validation, safer editing, and maintainable domain contracts.',
    highlights: [
      'Self-serve validation and configuration flows.',
      'GraphQL and Apollo Client migration work.',
      'Backward-compatible changes in mature codebases.',
      'Production debugging under live constraints.',
    ],
  },
  {
    title: 'Frontend infrastructure',
    scope: 'Dashboards + support tooling',
    summary:
      'Creating responsive, accessible, data-heavy interfaces with attention to performance, cross-browser reliability, and diagnostic clarity.',
    highlights: [
      'Enterprise dashboards with React, TypeScript, and D3.js.',
      'High-traffic support portals and troubleshooting flows.',
      'Web Worker processing for large client-side files.',
      'Legacy modernization with CSS3, ES6+, and Webpack.',
    ],
  },
  {
    title: 'Automation and quality',
    scope: 'AI workflows + test coverage',
    summary:
      'Using automation where it reduces repeated engineering effort, while keeping review, tests, and human judgment in the loop.',
    highlights: [
      'Human-in-the-loop coding agent workflows.',
      'Jest and React Testing Library for unit coverage.',
      'Playwright for browser-level confidence.',
      'Peer review and TDD practices around risky changes.',
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: SiTypescript,
    featured: ['TypeScript', 'JavaScript ES6+', 'Python', 'SQL'],
    all: ['TypeScript', 'JavaScript ES6+', 'Python', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frontend',
    icon: SiReact,
    featured: ['React', 'Next.js', 'D3.js', 'Tailwind'],
    all: [
      'React.js',
      'Next.js',
      'Vue.js',
      'D3.js',
      'Tailwind CSS',
      'Redux Toolkit',
      'Zustand',
      'React Query',
      'Responsive Design',
      'Mobile-first UI',
      'WCAG',
      'SSR',
    ],
  },
  {
    title: 'Backend & Data',
    icon: SiNodedotjs,
    featured: ['Node.js', 'NestJS', 'GraphQL', 'Prisma'],
    all: [
      'Node.js',
      'NestJS',
      'CQRS',
      'GraphQL',
      'Apollo Client',
      'REST APIs',
      'WebSockets',
      'Prisma',
      'PostgreSQL',
      'MongoDB',
      'Redis',
    ],
  },
  {
    title: 'Testing',
    icon: SiJest,
    featured: ['Jest', 'React Testing Library', 'Playwright', 'TDD'],
    all: ['Jest', 'React Testing Library', 'Playwright', 'TDD', 'Peer reviews', 'Regression testing'],
  },
  {
    title: 'Platform & Tooling',
    icon: SiDocker,
    featured: ['Docker', 'GitHub Actions', 'Web Workers', 'CI/CD'],
    all: [
      'Docker',
      'Git',
      'GitHub Actions',
      'CI/CD',
      'Webpack',
      'Babel',
      'ESLint',
      'Web Workers',
      'Web Components',
      'WebRTC',
      'Cross-browser compatibility',
      'Web performance optimization',
    ],
  },
  {
    title: 'Currently learning',
    note: 'Learning in public.',
    icon: SiOpenai,
    featured: ['AI Agents', 'RAG', 'LangGraph', 'OpenAI SDK'],
    all: ['AI Agents', 'RAG', 'LangGraph', 'OpenAI SDK'],
  },
];

export const writingLinks: WritingLink[] = [
  {
    title: 'Hashnode',
    platform: 'Hashnode',
    url: 'https://pranayyadav.hashnode.dev/',
    meta: 'Articles',
    body: 'Long-form technical writing and engineering notes on the stuff I build and break.',
  },
  {
    title: 'LinkedIn',
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/pranayyadav02/',
    meta: 'Learning in public',
    body: 'Day-to-day updates on what I am learning, building, and figuring out beyond the codebase.',
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    detail: profile.email,
    href: profile.email ? `mailto:${profile.email}` : undefined,
  },
  {
    label: 'GitHub',
    detail: 'gh0sty02',
    href: 'https://github.com/gh0sty02',
  },
  {
    label: 'LinkedIn',
    detail: 'profile',
    href: 'https://www.linkedin.com/in/pranayyadav02/',
  },
  {
    label: 'Resume',
    detail: 'Drive',
    href: profile.resumeUrl,
  },
  {
    label: 'Hashnode',
    detail: 'writing',
    href: 'https://pranayyadav.hashnode.dev/',
  },
];
