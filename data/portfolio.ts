export type ProjectRecordSize = 'large' | 'small';

export type FeaturedProject = {
  name: string;
  summary: string;
  category: string;
  status: 'ready' | 'pending';
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
  focus: 'React / Next.js / APIs',
  location: 'India',
  headline: 'Selected work and field notes.',
  intro:
    'A visual dossier of interfaces, systems, and notes from building practical web products with React, Next.js, TypeScript, and backend APIs.',
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
      'Developer tooling project. Use this record for workflow screenshots, CLI/UI states, or before-and-after process notes.',
    category: 'Developer tooling',
    status: 'pending',
    size: 'large',
    tags: ['Tooling', 'DX'],
  },
  {
    name: 'Synaptics',
    summary:
      'Systems/AI project. This record can carry architecture visuals, implementation notes, and technical proof.',
    category: 'Systems / AI',
    status: 'pending',
    size: 'small',
    tags: ['Systems', 'AI'],
  },
  {
    name: 'ConverseX',
    summary: 'Communication UI and realtime interaction story.',
    category: 'Realtime UX',
    status: 'ready',
    size: 'small',
    image: '/conversex.png',
    githubUrl: 'https://github.com/gh0sty02/ConverseX',
    tags: ['Realtime', 'Messaging'],
  },
  {
    name: 'Flowify',
    summary: 'Workflow clarity, dashboard structure, and product decisions.',
    category: 'Workflow',
    status: 'ready',
    size: 'large',
    image: '/flowify.png',
    githubUrl: 'https://github.com/gh0sty02/Flowify',
    tags: ['Workflow', 'Next.js'],
  },
  {
    name: 'Stonkify',
    summary: 'Finance/data UI. Good place to show density, charts, and data handling.',
    category: 'Finance / Data UI',
    status: 'ready',
    size: 'large',
    image: '/stonkify.jpg',
    githubUrl: 'https://github.com/gh0sty02/Stonkify',
    tags: ['Finance', 'Data UI'],
  },
];

export const infoPanels: InfoPanel[] = [
  {
    title: 'About',
    body:
      'I like interfaces with personality, but I care most when the system underneath is understandable and dependable.',
  },
  {
    title: 'Stack',
    body:
      'React, Next.js, TypeScript, Tailwind, APIs, backend services, accessibility, performance, and careful interaction design.',
  },
  {
    title: 'Experience',
    body:
      'Senior Software Engineer at Dentsu, previously Frontend Developer at Netskope. Keep this section brief and impact-led.',
  },
];

export const writingLinks: WritingLink[] = [
  {
    title: 'Hashnode',
    platform: 'Hashnode',
    url: 'https://pranayyadav.hashnode.dev/',
    body: 'Technical writing and notes.',
  },
  {
    title: 'LinkedIn',
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/pranayyadav02/',
    body: 'Professional updates and public posts.',
  },
  {
    title: 'Fallback',
    platform: 'Fallback',
    body: 'Curated writing links if public feeds are unreliable.',
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    detail: 'pending',
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
