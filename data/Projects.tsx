export const projects = [
  {
    id: 1,
    name: "Stonkify",
    description:
      "Stonkify is a E-commerce Web Application built using Typescript, Nodejs, Nextjs and MongoDB with Redux for App Wide State Management. It has all the feature that a Ecommerce website has, like Product Management, Order Management, Payment Management, etc.",
    image: "/stonkify.jpg",
    isLeft: true,
    link: "https://github.com/gh0sty02/Stonkify",
  },
  {
    id: 2,
    name: "Natours",
    isLeft: false,
    description:
      "A Full Stack Tour Booking App with built using Modern Technologies such as React.js, Node.js, Express.js, MongoDB and Redux Toolkit. Includes features such as Real-Time Location, Image Upload, Authentication, Authorization, etc.",
    image: "/natours.png",
    link: "https://github.com/gh0sty02/natours-remastered",
  },
  {
    id: 3,
    name: "SumItUp",
    isLeft: true,
    description:
      "Capstone Project Based on Machine Learning and Web Development. As the name suggests it summarizes the article given to it using LDA Algorithm and returns the summary with Topics. I was in-charge of connecting the ML Model with the Frontend.",
    image: "/sumitup.png",
    link: "https://github.com/gh0sty02/article-summarization",
  },
  {
    id: 4,
    name: "WebBlogs",
    isLeft: false,
    description:
      "WebBlogs is a Blog application buit using Next.js, GraphCMS, TypeScript and Tailwind Css. It uses GraphCMS as the Content Management System to get Data form the Server using GraphQL and Next.js to use it's Server side rendering & static site generation capabilities .",
    image: "/weblogs.jpg",
    link: "https://weblogs.vercel.app/",
  },
];

export interface IProjects {
  id: number;
  name: string;
  description: string;
  image: string;
  isLeft: boolean;
  link: string;
}
[];
