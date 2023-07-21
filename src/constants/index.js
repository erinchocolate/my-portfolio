import {
  github,
  linkedin,
  email,
  javascript,
  java,
  python,
  csharp,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  threejs,
  git,
  docker,
  sql,
  fnz,
  leadminer,
  portfolio,
  password,
  tweet,
} from "../assets";

const navLinks = [
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

const contacts = [
  {
    name: "Github",
    icon: github,
    link: "https://github.com/erinchocolate",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/meiqiaochen/",
  },
  {
    name: "Email",
    icon: email,
    link: "mailto:me@meiqiaochen.co.nz",
  },
]

const skills = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
]

const about = {
  points: [
    "I took a sharp turn from marketing, where the only bugs I dealt with were the ones in my soup, to the world of software development, where the bugs are definitely more fun to deal with!",
    "My previous experience as a marketer and business owner was a wild ride, and it taught me some valuable lessons. I honed my skills in communication, collaboration, and learning on the fly. I also learned to roll with the punches and bounce back from setbacks like a champion.",
    "After countless hours of googling and debugging, I taught myself to be a polyglot - Java, Python, and JavaScript - and picked up various front and backend frameworks. Technical part aside, I also learned how to code with others in an Agile way, which feels like part of a circus - lots of moving parts and fun!",
    "I recently graduated from the master of software development program at the Victoria University of Wellington, now I am ready to make magic happen... or at least some functional code:)",
  ]
};

const experiences = [
  {
    title: "Intern Analyst Developer",
    company_name: "FNZ Limited",
    icon: fnz,
    iconBg: "#fff",
    date: "April 2023 - July 2023",
    points: [
      "Facilitated the launch of three major platform releases by maintaining and updating automated tests using Selenium, SpecFlow, Ms SQL server, Azure DevOps, and TeamCity.",
      "Revamped the platform's most intricate automated test suite and improved its reliability to the point where we can add these tests to the regular smoke and regression pack, resulting in over 3 hours reduction in daily manual testing time.",
      "Planned and executed a new testing data setup strategy, generating valid data for 42 automated tests within three weeks following the environment restoration. This setup decreased test failures directly attributed to data issues.",
      "Created documentation for test investigations, Jira use cases and commonly used SQL queries, reducing onboarding time for new team members.",
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
      "Communicated with clients unfamiliar with social media marketing to guide them through a new method of working with our leads, resulting in their adoption and increased sales directly attributed to our leads.",
      "Created ad campaigns that reach and resonate with the target audience, achieving consistent 4% click-through rates for ads and 10% conversion rates on leads.",
      "Designed, implemented and tested the new marketing funnels featuring multiple landing pages, SMS verification, location search, automated emails and custom CRM system to adapt to the changing market conditions during the COVID lockdown.",
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
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Threejs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/erinchocolate/my-portfolio",
  },
  {
    name: "MSWDev tweet", 
    description:
      "A web app for Master of Software Development students to share feedbacks and suggestions to the program. Students can upvote or downvote posts",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Rest Api",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Supabase",
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
        name: "Laravel",
        color: "pink-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: password,
    source_code_link: "https://github.com/erinchocolate/password-rocket",
  },
];

export {navLinks, skills, experiences, projects, contacts, about};