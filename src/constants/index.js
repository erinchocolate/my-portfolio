import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  fnz,
  leadminer,
  threejs,
  password,
  tweet,
} from "../assets";

export const navLinks = [
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Intern Analyst Developer",
    company_name: "FNZ Limited",
    icon: fnz,
    iconBg: "#fff",
    date: "April 2023 - July 2023",
    points: [
      "Identified and addressed platform defects to support platform releases in a tight timeline by analysing smoke and regression test results, communicating with relevant stakeholders and updating automated tests using Selenium, SpecFlow, Ms SQL server, Azure DevOps, and TeamCity.",
      "Improved and enhanced one of the most complex automated suites of the platform, making the tests reliable enough to be added to the regular smoke and regression test pack, resulting in a reduction of over 3 hours in daily manual testing time.",
      "Designed, planned and executed a testing data setup strategy to generate valid data for 42 automated tests within three weeks after the environment restoration and created documentation detailing each process step and highlighting key considerations for future setups.",
    ],
  },
  {
    title: "Co-founder",
    company_name: "Lead Miner Limited",
    icon: leadminer,
    iconBg: "#fff",
    date: "Oct 2018 - March 2022",
    points: [
      "Collaborated with the business partner to grow our client base from 0 to 15, including two overseas clients, by conducting market research, actively listening to client needs, and communicating the value and relevance of our offerings.",
      "Communicated with clients unfamiliar with social media marketing to guide them through a new method of working with our leads, resulting in their adoption and 10% conversion rates.",
      "Analysed client feedback to identify opportunities for improvement in lead quality, breaking down the issue into its components and then optimising each part through mapping the customer journey, theorising hypotheses, and split testing, resulting in a 15% increase in sales for clients.",
      "Stayed up-to-date with industry trends and continuously adapted marketing strategies to create campaigns that reach and resonate with the target audience, resulting in consistent 4% click-through rates and delivering leads for clients within tight timelines.",
      "Designed, implemented and tested the new marketing funnels featuring multiple landing pages, SMS verification, location search, email automation and custom CRM system to adapt to the changing market conditions during the COVID lockdown.",
    ],
  },
];

const projects = [
  {
    name: "Meiqiao's Digital Space",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: password,
    source_code_link: "https://github.com/",
  },
  {
    name: "MSWDev tweet", 
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: tweet,
    source_code_link: "https://github.com/",
  },
  {
    name: "Password Rocket",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: password,
    source_code_link: "https://github.com/",
  },
];

export {technologies, experiences, projects };