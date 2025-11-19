import amazon from "./img/amazonclone.png";
import autoback from "./img/autoback.png";
import bms from "./img/bloodmanagement.png";
import MyImage from "./img/MyImage.png";
import tas from "./img/icons/Techasoft.png";

export const personalInfo = {
  name: "Anoop Kumar",
  title: "Full Stack Developer and UI/UX Designer",
  email: "amt312002@gmail.com",
  linkedin: "https://www.linkedin.com/in/anoop--kumar/",
  github: "https://github.com/Anoop-Kumar-31",
  portfolio: "https://myportfolio-kto7.onrender.com",
  resumeUrl: "https://drive.google.com/file/d/17Zhjor9T0OY-sXVtHZjwgFlEMzgG47aE/view?usp=drive_link",
  motto: "Avoid the iceberg. Hire me as your lifeboat.",
  MyImage: {
    src: MyImage,
    alt: "Anoop Kumar",
  },
};

export const workExperience = {
  company: "Techasoft Pvt. Ltd.",
  companyLogo: tas,
  role: "Software Developer",
  period: "May 2025 – Present",
  backend: [
    "Designed modular RESTful APIs with Node.js/Express and Django; enhanced scalability by 40%.",
    "Implemented Sequelize models, associations, and transactions; minimized DB errors by 25%.",
    "Built JWT auth and role-permission middleware securing multi-portal access for 1,000+ users.",
  ],
  frontend: [
    "Developed three role-based React portals using Redux Toolkit; boosted admin efficiency 30%.",
    "Designed responsive dashboards and components in Figma; elevated engagement by 28%.",
    "Integrated SSE for live updates; lowered manual refreshes and support tickets by 22%.",
  ],
  devops: [
    "Managed Git workflows and CI/CD pipelines; shortened release time by 40%.",
    "Implemented Redis caching and query indexing; optimized API latency by 35%.",
    "Authored API and Sequelize docs to onboard developers; accelerated ramp-up time 50%.",
  ],
  achievements: [
    "Architected multi-portal system supporting 100+ restaurants and 1,000+ monthly users.",
    "Refactored legacy codebase, lowering technical debt and enhancing maintainability by 45%.",
    "Deployed Nodemailer HTML templates; amplified onboarding open rates by 60%.",
  ],
};

export const projects = [
  {
    id: 1,
    title: "Amazon Clone",
    period: "June 2024 – Nov 2024",
    description: "Built with Next.js, Firebase, and MongoDB, featuring secure auth, cart, and checkout. Deployed on Vercel.",
    link: "https://anoopsamazon.vercel.app/",
    githubRepo: "https://github.com/Anoop-Kumar-31/myamazonclone",
    project_img: amazon,
  },
  {
    id: 2,
    title: "AutoBack Website",
    period: "Feb 2024 – Apr 2024",
    description: "Bespoke site for an AI/ML service provider with a unique design, achieving significant market presence.",
    link: "https://autoback-7van.onrender.com/",
    githubRepo: "https://github.com/Anoop-Kumar-31/AutoBack2_0",
    project_img: autoback,
  },
  {
    id: 3,
    title: "Blood Management System",
    period: "May 2023 – Aug 2023",
    description: "Revolutionized patient-donor connections, cutting manual processes by 40% and increasing life-saving opportunities.",
    link: "https://bloodmanagementsystem-anoop.vercel.app/",
    githubRepo: "https://github.com/Anoop-Kumar-31/RTBMS-FrontEnd",
    project_img: bms,
  },
];

export const skills = {
  technical: [
    {
      name: "Languages",
      list: [
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", proficiency: 90 },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", proficiency: 80 },
        { name: "ES6", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", proficiency: 85 },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", proficiency: 66 },
      ]
    },
    {
      name: "Frameworks & Libraries",
      list: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", proficiency: 85 },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", proficiency: 75 },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", proficiency: 70 },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", proficiency: 65 },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", proficiency: 85 },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", proficiency: 60 },
      ],
    },
  ],
  social: [
    "Empathy & Collaboration",
    "Initiative & Active Listening",
    "Cohesive Visionary Engagement",
    "Inspiration & Long-Term Vision",
  ],
};

export const education = {
  university: "Chandigarh University, Mohali",
  degree: "Bachelor of Engineering (B.E) in Computer Science & Engineering",
  period: "2021 – 2025 | CGPA: 7.98/10",
  logo: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Chandigarh_University_Seal.png",
};

export const certificates = [
  { text: "SWAYAM– NPTEL: Introduction to Programming in C — ", highlight: "Elite + Gold Title", highlightColor: "text-yellow-400" },
  { text: "REACT and Principles of UX/UI Design Certification by ", highlight: "META", highlightColor: "text-blue-400" },
  { text: "Introduction to Web Development Certification by ", highlight: "IBM", highlightColor: "text-blue-500" },
  { text: "Achiever Title by CHANDIGARH UNIVERSITY — ", highlight: "NPTEL– Swayam", highlightColor: "text-green-500" },
];