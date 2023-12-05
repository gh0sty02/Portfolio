import {
  FaDatabase,
  FaGitAlt,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
  FaRust,
} from "react-icons/fa";

export const tools = [
  {
    name: "Javascript",
    description: "These days you can't build an amazing product without JS.",
    icon: <FaJs fontSize="20px" />,
    url: "https://www.javascript.info",
  },
  {
    name: "Rust",
    description:
      "Rust is a Fast, safe, concurrent systems programming language",
    icon: <FaRust fontSize="20px" />,
    url: "https://www.rust-lang.org/",
  },
  {
    name: "Node.js",
    description: "Chrome's V8 JavaScript engine for server-side javascript.",
    icon: <FaNodeJs fontSize="20px" />,
    url: "https://www.nodejs.org",
  },
  {
    name: "React.js",
    description: "A JavaScript library for building user interfaces.",
    icon: <FaReact fontSize="20px" />,
    url: "https://www.reactjs.org",
  },
  {
    name: "SQL & MongoDb",
    description: "Both database are great, and they have their use cases.",
    icon: <FaDatabase fontSize="20px" />,
    url: "https://www.mongodb.com/",
  },
  {
    name: "GIT & Github",
    description:
      "A version control system that gives you a lot of flexibility.",
    icon: <FaGitAlt fontSize="20px" />,
    url: "https://medium.com/swlh/things-about-git-and-github-you-need-to-know-as-developer-907baa0bed79",
  },
];
