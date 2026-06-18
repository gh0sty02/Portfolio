export type ProjectRecordSize = 'large' | 'small';

export type FeaturedProject = {
  name: string;
  summary: string;
  category: string;
  status: 'ready';
  size: ProjectRecordSize;
  image?: string;
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
  platform: 'Hashnode' | 'LinkedIn' | 'Archive';
  url?: string;
  body: string;
  meta: string;
};

export type ContactLink = {
  label: string;
  detail: string;
  href?: string;
};

export type Metric = {
  label: string;
  value: string;
};

export type ExperienceRecord = {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type SkillCategory = {
  title: string;
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
    'Senior full-stack engineer with 4+ years building scalable, high-performance web applications across React, TypeScript, Next.js, NestJS, GraphQL, and production automation.',
  resumeUrl:
    process.env.NEXT_PUBLIC_RESUME_URL ??
    'https://drive.google.com/drive/folders/13z1tyWNGUNsHO6Vl35ECYmEJZmmpJI4t?usp=drive_link',
  email: 'pranayyadav08@gmail.com',
  availability: '',
};

export const metrics: Metric[] = [
  { label: 'Experience', value: '4+ years' },
  { label: 'Clients supported', value: '400+' },
  { label: 'Onboarding cut', value: '45%' },
  { label: 'Dev cycles reduced', value: '60%' },
];

export const featuredProjects: FeaturedProject[] = [
  {
    name: 'Devkit',
    summary:
      'A private TypeScript toolkit for developer workflows, published as a live studio experience for composing practical build utilities and interface patterns.',
    category: 'Developer tooling',
    status: 'ready',
    size: 'large',
    image: '/devkit-preview.svg',
    liveUrl: 'https://devkit-studio.vercel.app',
    tags: ['TypeScript', 'DX', 'Tooling'],
  },
  {
    name: 'Synaptics',
    summary:
      'A Python systems project focused on agentic workflows and automation experiments, using small composable routines instead of a heavy product shell.',
    category: 'Systems / AI',
    status: 'ready',
    size: 'small',
    image: '/synaptic-preview.svg',
    githubUrl: 'https://github.com/gh0sty02/synaptic',
    tags: ['Python', 'Automation', 'AI'],
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
    liveUrl: 'https://stonkify.vercel.app/',
    githubUrl: 'https://github.com/gh0sty02/Stonkify',
    tags: ['Next.js', 'MongoDB', 'RTK Query'],
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
    title: 'Education',
    body:
      'Bachelor of Engineering in Computer Science from Atharva College of Engineering, Mumbai University.',
  },
];

export const experienceRecords: ExperienceRecord[] = [
  {
    company: 'Dentsu',
    role: 'Senior Software Engineer',
    location: 'Pune, India',
    period: 'Aug 2024 - Present',
    summary:
      'Leading product engineering across React, NestJS/CQRS, GraphQL, Apollo Client, testing, and AI-assisted delivery.',
    highlights: [
      'Led 4 engineers to ship Definitions Manager across 400+ clients, cutting onboarding time 45%.',
      'Built a human-in-the-loop AI coding agent that outputs code, unit tests, and Playwright E2E tests, reducing development cycles 60%.',
      'Migrated 5+ clients from REST to GraphQL + Apollo Client and improved dashboard performance 40%.',
      'Resolved critical production bugs under live SLA pressure, recovering 12 hours of client downtime.',
    ],
  },
  {
    company: 'Netskope',
    role: 'Frontend Developer',
    location: 'Remote',
    period: 'Jun 2022 - Jul 2024',
    summary:
      'Built enterprise dashboards and high-traffic support tooling with React, TypeScript, D3.js, Web Workers, and accessibility-first UI.',
    highlights: [
      'Built responsive enterprise dashboards for 100+ users and cut diagnostic time 50%.',
      'Architected a web portal for 300+ clients, reducing troubleshooting time 65%.',
      'Built a multi-threaded HAR sanitizer with Web Workers to process 100MB+ files 50% faster.',
      'Modernized legacy jQuery into CSS3/ES6+ with Webpack, cutting bundle size 30% and load time 35%.',
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    featured: ['TypeScript', 'JavaScript ES6+', 'Python', 'SQL'],
    all: ['TypeScript', 'JavaScript ES6+', 'Python', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frontend',
    featured: ['React', 'Next.js', 'Vue.js', 'D3.js', 'Tailwind'],
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
    featured: ['Node.js', 'NestJS', 'GraphQL', 'Prisma', 'PostgreSQL'],
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
    title: 'Platform & Tooling',
    featured: ['Docker', 'GitHub Actions', 'Webpack', 'Web Workers', 'CI/CD'],
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
    title: 'Testing',
    featured: ['Jest', 'React Testing Library', 'Playwright', 'TDD'],
    all: ['Jest', 'React Testing Library', 'Playwright', 'TDD', 'Peer reviews', 'Regression testing'],
  },
];

export const writingLinks: WritingLink[] = [
  {
    title: 'Hashnode',
    platform: 'Hashnode',
    url: 'https://pranayyadav.hashnode.dev/',
    meta: 'External preview',
    body:
      'Technical writing and engineering notes. The live feed is intentionally linked out because Hashnode is returning a bot challenge for RSS/API access from this environment.',
  },
  {
    title: 'LinkedIn',
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/pranayyadav02/',
    meta: 'Professional feed',
    body: 'Professional updates, project context, and career notes beyond the codebase.',
  },
  {
    title: 'Archive',
    platform: 'Archive',
    url: 'https://pranayyadav.hashnode.dev/',
    meta: 'Curated fallback',
    body:
      'A manual set of featured posts can live here without depending on a third-party API. Add post URLs and the cards can render stable previews.',
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
