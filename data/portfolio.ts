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
  platform: 'Hashnode' | 'LinkedIn' | 'Fallback';
  url?: string;
  body: string;
};

export type ContactLink = {
  label: string;
  detail: string;
  href?: string;
};

export const profile = {
  name: 'Pranay Yadav',
  role: 'Full-stack engineer',
  focus: 'Product UI / systems / automation',
  location: 'India',
  headline: 'Interfaces, systems, and practical product work.',
  intro:
    'I build dependable web products across frontend, backend, and automation layers, with a focus on clear interfaces, thoughtful interaction design, and systems that are easy to operate.',
  resumeUrl:
    process.env.NEXT_PUBLIC_RESUME_URL ??
    'https://drive.google.com/drive/folders/13z1tyWNGUNsHO6Vl35ECYmEJZmmpJI4t?usp=drive_link',
  email: '',
  availability: '',
};

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
      'A Discord-style collaboration app built with Next.js, Socket.io, LiveKit, Prisma, MySQL, UploadThing, Zustand, and Clerk authentication.',
    category: 'Realtime UX',
    status: 'ready',
    size: 'small',
    image: '/conversex.png',
    liveUrl: 'https://conversex.onrender.com/',
    githubUrl: 'https://github.com/gh0sty02/ConverseX',
    tags: ['Next.js', 'Socket.io', 'LiveKit'],
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
      'I care about product surfaces that feel clear, fast, and a little memorable. The best work here pairs expressive UI with implementation that stays understandable under pressure.',
  },
  {
    title: 'Stack',
    body:
      'React, Next.js, TypeScript, Tailwind, Node.js, backend APIs, automation tooling, accessibility, performance, and careful interaction design.',
  },
  {
    title: 'Experience',
    body:
      'Senior Software Engineer at Dentsu, previously Frontend Developer at Netskope. I work across UI architecture, product delivery, and maintainable frontend systems.',
  },
];

export const writingLinks: WritingLink[] = [
  {
    title: 'Hashnode',
    platform: 'Hashnode',
    url: 'https://pranayyadav.hashnode.dev/',
    body: 'Technical writing on engineering notes, implementation tradeoffs, and experiments worth keeping public.',
  },
  {
    title: 'LinkedIn',
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/pranayyadav02/',
    body: 'Professional updates, project context, and career notes beyond the codebase.',
  },
  {
    title: 'Archive',
    platform: 'Fallback',
    body: 'A curated writing feed will sit here once the public post sources are wired into the portfolio.',
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    detail: 'available on request',
    href: profile.email ? `mailto:${profile.email}` : undefined,
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
