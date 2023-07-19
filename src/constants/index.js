import {
  fnz,
  leadminer,
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
      "Planned and executed a testing data setup strategy to generate valid data for 42 automated tests within three weeks after the environment restoration and created documentation detailing each process step and highlighting key considerations for future setups.",
    ],
  },
  {
    title: "Co-founder",
    company_name: "Lead Miner Limited",
    icon: leadminer,
    iconBg: "#fff",
    date: "Oct 2018 - March 2022",
    points: [
      "Collaborated with the business partner to grow our client base from 0 to 15, including two overseas clients.",
      "Communicated with clients unfamiliar with social media marketing to guide them through a new method of working with our leads, resulting in their adoption and 10% conversion rates.",
      "Analysed client feedback to improve our marketing funnels, bringing a 15% increase in sales for clients.",
      "Designed, implemented and tested the new marketing funnels featuring multiple landing pages, SMS verification, location search, email automation and custom CRM system to adapt to the changing market conditions during the COVID lockdown.",
    ],
  },
];

const projects = [
  {
    name: "Meiqiao's Digital Home",
    description:
      "My personal portfolio website that showcases my projects and experiences with 3D model and animation. Vistors can also leave a message for me.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: password,
    source_code_link: "https://github.com/erinchocolate/my-portfolio",
  },
  {
    name: "MSWDev tweet", 
    description:
      "A web app for Master of Software Development students to share feedbacks and suggestions to the program. Students can upvote or downvote posts",
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
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "supabase",
        color: "orange-text-gradient",
      },
    ],
    image: tweet,
    source_code_link: "https://github.com/erinchocolate/mswdev-tweet",
  },
  {
    name: "Password Rocket",
    description:
      "A full stack web app for users to generate random passwords. Users can also sign up and log in with their accounts to update or delete the password they already saved.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: password,
    source_code_link: "https://github.com/erinchocolate/password-rocket",
  },
];

export {experiences, projects};