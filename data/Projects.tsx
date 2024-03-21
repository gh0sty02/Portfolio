export const projectsArr = [
  {
    name: "Flowify",
    description:
      "Flowify is a robust Trello-inspired project management tool, using Next.js, Prisma, Stripe, Tailwind CSS, Shadcn UI, Zustand, and MySQL. It enhances team productivity with features like task management and customizable boards.",
    image: "/flowify.png",

    link: "https://github.com/gh0sty02/Flowify",
  },
  {
    name: "ConverseX",
    description:
      "ConverseX is an advanced communication platform, leveraging Next.js, Socket.io, MySql, Typescript, and Tailwind. It offers a seamless user experience with real-time messaging, voice channels, robust server and channel management, user authentication, emojis, multimedia sharing, user profiles, and powerful moderation tools.",
    image: "/conversex.png",

    link: "https://github.com/gh0sty02/ConverseX",
  },
  {
    name: "Stonkify",
    description:
      "Stonkify is a E-commerce Web Application built using Typescript, Nodejs, Nextjs and MongoDB with Redux for App Wide State Management. It has all the feature that a Ecommerce website has, like Product Management, Order Management, Payment Management, etc.",
    image: "/stonkify.jpg",
    link: "https://github.com/gh0sty02/Stonkify",
  },
  {
    name: "Natours",
    description:
      "A Full Stack Tour Booking App with built using Modern Technologies such as React.js, Node.js, Express.js, MongoDB and Redux Toolkit. Includes features such as Real-Time Location, Image Upload, Authentication, Authorization, etc.",
    image: "/natours.png",
    link: "https://github.com/gh0sty02/natours-remastered",
  },
  {
    name: "SumItUp",
    description:
      "Capstone Project Based on Machine Learning and Web Development. As the name suggests it summarizes the article given to it using LDA Algorithm and returns the summary with Topics. I was in-charge of connecting the ML Model with the Frontend.",
    image: "/sumitup.png",
    link: "https://github.com/gh0sty02/article-summarization",
  },
  {
    name: "WebBlogs",
    description:
      "WebBlogs is a Blog application buit using Next.js, GraphCMS, TypeScript and Tailwind Css. It uses GraphCMS as the Content Management System to get Data form the Server using GraphQL and Next.js to use it's Server side rendering & static site generation capabilities .",
    image: "/weblogs.jpg",
    link: "https://github.com/gh0sty02/cms-blog-app",
  },
];

export function getProjects() {
  return projectsArr.map((project, index) => ({
    ...project,
    id: index + 1,
    isLeft: (index + 1) % 2 === 0,
  }));
}

export interface IProjects {
  id: number;
  name: string;
  description: string;
  image: string;
  isLeft: boolean;
  link: string;
}
[];
