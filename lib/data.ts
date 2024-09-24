import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaAngular, FaAws, FaBootstrap, FaCss3, FaDatabase, FaDocker, FaGit, FaGitlab, FaHtml5, FaJenkins, FaJs, FaNodeJs, FaPython, FaReact, FaUbuntu } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  }
] as const;

export const professionalExperience  = [
  {
    title: "Software Engineer - GlobalLogic",
    location: "Ahmedabad, IN",
    description:
      "",
    icon: React.createElement(FaReact),
    date: "Feb 2024 - Jul 2024",
  },
  {
    title: "Associate Software Engineer - HHAExchange",
    location: "Ahmedabad, IN",
    description:
      "",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2022 - Feb 2024",
  },
  {
    title: "Web Developer Intern - Lealmart",
    location: "Remote",
    description:
      "",
    icon: React.createElement(LuGraduationCap),
    date: "May 2021 - Jun 2021",
  }
  ,
] as const;

export const educationExperience = [
  {
    date: "Aug 2024 - May 2026",
    title: "Master of Science, Computer Science",
    location: "California State University, Long Beach, US",
    description: "Analysis of Algorithms, Software Engineering, Artifical Intelligence, Machine Vision",
    icon: React.createElement(LuGraduationCap),
  },
  {
    date: "Jul 2019 - May 2023",
    title: "Bachelor of Tech., Computer Engg.",
    location: "Dharmsinh Desai University, Nadiad, IN",
    description: "Data Structures and Algorithms, Machine Learning, Computer System Architecture, Operating Systems ",
    icon: React.createElement(LuGraduationCap),
  },
  // Add more education experiences here...
] as const;

export const projectsData = [
  {
    title: "Agile Scrum Board",
    description:
      "A tool used in project management to facilitate agile development methodologies",
    tags: [
      { name: "Angular", icon: FaAngular },
      { name: "Mongo DB", icon: FaDatabase },
      { name: "Express JS", icon: FaHtml5 },
      { name: "Node JS", icon: FaCss3 },
      { name: "Git", icon: FaGit},
    ],
    imageUrl: corpcommentImg,
  },
  {
    title: "Handwritten Character Recognition",
    description:
      "A Machine( Deep) Learning Project of predicting English Handwritten characters. It is an electronic conversion of images of handwritten text into machine-encoded text from a scanned document ",
    tags: [
      { name: "MongoDB", icon: FaDatabase },
      { name: "CNN", icon: FaHtml5 },
      { name: "Keras", icon: FaCss3 },
      { name: "NumPy", icon: FaJs },
      { name: "Open CV", icon: FaGit},
      { name: "Python", icon: FaPython },
      { name: "DJango", icon: FaAngular },
    ],
    imageUrl: rmtdevImg,
  },
  {
    title: "Services Management System",
    description:
      "A one stop where customers can book any household services of all varieties and can get the service.",
    tags: [{ name: "DOT NET", icon : null},
      { name: "DOT NET CORE", icon: FaNodeJs },
      { name: "MS SQL", icon: FaDatabase },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3 },
      { name: "JavaScript", icon: FaJs },
      { name: "Git", icon: FaGit},
    ],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Gold Loan Finance Management System",
    description:
      "A web application proposed for any enterprise for managing the loans lent to the customers who mortgage their gold for specific period of time",
    tags: [
      { name: "Python", icon: FaPython },
      { name: "Javascript", icon: FaJs },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3 },
      { name: "MongoDB", icon: FaJs },
      { name: "Django"},
    ],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Angular", icon: FaAngular },
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3 },
  { name: "JavaScript", icon: FaJs },
  { name: "Git", icon: FaGit},
  { name: "Jenkins", icon: FaJenkins },
  { name: "Python", icon: FaPython },
  { name: "Database", icon: FaDatabase },
  { name: "AWS", icon: FaAws },
  { name: "AWS", icon: FaBootstrap },
  { name: "Docker", icon: FaDocker },
  { name: "Gitlab", icon: FaGitlab },
  { name: "Ubuntu", icon: FaUbuntu },
  

  // "",
  // "",
  // "React",
  // "Next.js",
  // "Node.js",
  // "Git",
  // "Tailwind",
  // "Prisma",
  // "MongoDB",
  // "Redux",
  // "GraphQL",
  // "Apollo",
  // "Express",
  // "PostgreSQL",
  // "Python",
  // "Django",
  // "Framer Motion",
] as const;
