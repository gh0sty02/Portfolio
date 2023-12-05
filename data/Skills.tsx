import { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiDocker,
  SiMysql,
  SiMongodb,
  SiGit,
  SiVisualstudiocode,
  SiChakraui,
  SiPython,
  SiExpress,
  SiNestjs,
  SiTailwindcss,
  SiD3Dotjs,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaRust } from "react-icons/fa";
export type SkillCategory =
  | "languages"
  | "backend"
  | "frontend"
  | "cicd"
  | "database"
  | "ui frameworks"
  | "productivity boost";

export type Skill = {
  name: string;
  icon: IconType;
};

export const Skills: {
  [key in SkillCategory]: Skill[];
} = {
  languages: [
    {
      name: "JavaScript",
      icon: SiJavascript,
    },
    {
      name: "Typescript",
      icon: SiTypescript,
    },
    {
      name: "Python",
      icon: SiPython,
    },
    {
      name: "Rust",
      icon: FaRust,
    },
  ],
  backend: [
    {
      name: "Node",
      icon: SiNodedotjs,
    },
    {
      name: "Express.js",
      icon: SiExpress,
    },
  ],
  frontend: [
    {
      name: "React",
      icon: SiReact,
    },
    {
      name: "NextJs",
      icon: TbBrandNextjs,
    },
    {
      name: "Redux",
      icon: SiRedux,
    },
    {
      name: "D3.Js",
      icon: SiD3Dotjs,
    },
  ],
  database: [
    {
      name: "MySQL",
      icon: SiMysql,
    },
    {
      name: "MongoDb",
      icon: SiMongodb,
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
    },
  ],
  cicd: [
    {
      name: "Docker",
      icon: SiDocker,
    },
  ],
  "ui frameworks": [
    { name: "Tailwind Css", icon: SiTailwindcss },

    {
      name: "ChakraUI",
      icon: SiChakraui,
    },
  ],
  "productivity boost": [
    {
      name: "VSCode",
      icon: SiVisualstudiocode,
    },
    {
      name: "Git",
      icon: SiGit,
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
