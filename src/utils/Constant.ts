export interface Iexperience {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
}
export interface IEducation {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
}
export interface ISkills {
  title: string;
  description: string;
  icon: IconType;
}
export interface IPersonalInfo {
  description: string;
  Name: string;
  Email: string;
  Phone: string;
  experience: number;
  freelance: boolean;
  location: string;
}

export interface IResumeData {
  EXPERIENCE: Iexperience[];
  EDUCATION: IEducation[];
  SKILLS: ISkills[];
  PERSONALINFO: IPersonalInfo;
}

export interface IWorkData {
  title: string;
  id: number;
  description: string;
  languages: string[];
  liveLink?: string;
  githubLink?: string;
  image?:string;
}

import { IconType } from "react-icons";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiMongodb, DiMsqlServer } from "react-icons/di";
import { AiOutlineDotNet } from "react-icons/ai";

export const ResumeData: IResumeData = {
  EXPERIENCE: [
    {
      title: "Software Engineer",
      startDate: "Febraury 2024",
      endDate: "Present",
      description: "Xylontech ",
    },
    {
      title: "Software Engineer",
      startDate: "Febraury 2024",
      endDate: "Present",
      description: "Xylontech ",
    },
  ],
  EDUCATION: [
    {
      title: "BE in Computer and Information Technology",
      startDate: "2019",
      endDate: "2023",
      description: "IOE Purwanchal Campus",
    },
    {
      title: "High School",
      startDate: "2017",
      endDate: "2019",
      description: "Sagarmatha Secondary School",
    },
  ],
  SKILLS: [
    {
      title: "React",
      description: "Frontend",
      icon: FaReact,
    },
    {
      title: "NodeJs",
      description: "Backend",
      icon: FaNodeJs,
    },
    {
      title: "Dotnet",
      description: "Backend",
      icon: AiOutlineDotNet,
    },
    {
      title: "MongoDB",
      description: "Database",
      icon: DiMongodb,
    },
    {
      title: "MSSQL",
      description: "Database",
      icon: DiMsqlServer,
    },
  ],
  PERSONALINFO: {
    Name: "Utsab Adhikari",
    Email: "utssabad10@gmail.com",
    Phone: "+977-9860516590",
    location: "Kathmandu",
    experience: 1,
    freelance: true,
    description:
      "I’m a skilled software engineer with expertise in .NET for backend and React for frontend, experienced in optimizing APIs and ensuring efficient, secure applications. My adaptability and eagerness to learn keep me up-to-date with best practices, and I bring a collaborative approach to every project. I’m excited to contribute my problem-solving skills and technical knowledge",
  },
};

export const WorkData: IWorkData[] = [
  {
    title: "TODO App",
    id: 1,
    description:
      "A full-stack app for creating and updating todo with authentication features.",
    languages: ["React", "NodeJs", "MongoDB"],
    liveLink: "https://todoapp-utsab.netlify.app/",
    githubLink: "https://github.com/utsab1231/Todo-app-",
    image:""
  },
  {
    title: "Book Store",
    id: 2,
    description:
      "A full-stack app for storing information about books of your interest.",
    languages: ["React", "NodeJs", "MongoDB"],
    liveLink: "https://bookstore-app-utsab.netlify.app/",
    githubLink: "https://github.com/utsab1231/book-store-app",
    image:""
  },
  {
    title: "Movie API",
    id: 3,
    description:
      "An API integrated with MongoDB to perform CRUD operations on a movies database.",
    languages: ["NodeJs", "MongoDB"],
    githubLink: "https://github.com/utsab1231/movie_api",
    image:""
  },
];

export enum ResumeStatus {
  EXPERIENCE = "EXPERIENCE",
  EDUCATION = "EDUCATION",
  SKILLS = "SKILLS",
  PERSONALINFO = "PERSONALINFO",
}
