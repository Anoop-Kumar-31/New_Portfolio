import amazon from "./img/amazonclone.png";
import autoback from "./img/autoback.png";
import bms from "./img/bloodmanagement.png";
import MyImage from "./img/MyImage.png";
import tas from "./img/icons/Techasoft.png";

export const personalInfo = {
  name: "Anoop Kumar",
  title: "Full Stack Developer",
  email: "amt312002@gmail.com",
  linkedin: "https://www.linkedin.com/in/anoop--kumar/",
  github: "https://github.com/Anoop-Kumar-31",
  portfolio: "https://myportfolio-kto7.onrender.com",
  resumeUrl: "https://drive.google.com/file/d/1Psft76dmXip-BmET0upDJkZX8bSfwKE2/view?usp=sharing",
  motto: "I build reliable web applications that company can ship and scale.",
  MyImage: {
    src: MyImage,
    alt: "Anoop Kumar",
  },
};

export const workExperience = [
  {
    company: "Techasoft Pvt. Ltd.",
    companyLogo: tas,
    role: "Software Developer",
    period: "May 2025 – Dec 2025",
    backend: [
      "Designed modular RESTful APIs using Node.js/Express and Django to improve scalability and maintainability.",
      "Implemented Sequelize models, associations, and transactions; minimized DB errors by 25%.",
      "Built JWT auth and role-permission middleware securing multi-portal access for 1,000+ users.",
    ],
    frontend: [
      "Developed three role-based React portals using Redux Toolkit; boosted admin efficiency 30%.",
      "Designed responsive dashboards and components in Figma; elevated engagement by 28%.",
      "Integrated SSE for live updates; lowered manual refreshes and support tickets by 22%.",
    ],
    devops: [
      "Managed Git workflows and CI/CD pipelines; shortened release time by least 40%.",
      "Implemented Redis caching and query indexing; optimized API latency by 35%.",
      "Authored API and Sequelize docs to onboard developers; accelerated ramp-up time 50%.",
    ],
    achievements: [
      "Architected multi-portal system supporting 100+ restaurants and 1,000+ monthly users.",
      "Refactored legacy codebase, lowering technical debt and enhancing maintainability by 45%.",
      "Deployed Nodemailer HTML templates; amplified onboarding open rates by 60%.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Blood Donor & Patient Management System",
    businessContext: "Healthcare platform connecting blood donors with patients in need",
    period: "May 2023 – Aug 2023",
    description: "Full-stack platform connecting blood donors and patients, reducing manual coordination by 40%. Implemented authentication, role-based dashboards, and real-time data access.",
    problemSolutionImpact: {
      problem: "Manual blood donor-patient coordination causes delays in critical situations",
      solution: "Built automated platform with real-time matching, dashboards, and instant notifications",
      impact: "Reduced manual coordination time by 40% and increased life-saving opportunities"
    },
    techStack: ["React", "Node.js", "Express", "MongoDB", "Email-OTP Auth", "Custom CSS"],
    link: "https://bloodmanagementsystem-anoop.vercel.app/",
    githubRepo: "https://github.com/Anoop-Kumar-31/RTBMS-FrontEnd",
    project_img: bms,
  },
  {
    id: 2,
    title: "Amazon Clone",
    businessContext: "E-commerce platform for online shopping with cart and account creation",
    period: "June 2024 – Nov 2024",
    description: "Full-featured e-commerce marketplace built with Next.js, Firebase authentication, and MongoDB. Includes product browsing, cart management, and secure checkout flow.",
    problemSolutionImpact: {
      problem: "Small businesses need affordable e-commerce solutions to sell products online",
      solution: "Built scalable marketplace with secure authentication, real-time cart, and payment integration",
      impact: "Provides complete shopping experience with instant deployment and zero infrastructure cost"
    },
    techStack: ["Next.js", "Firebase", "MongoDB", "Tailwind CSS", "Vercel"],
    link: "https://anoopsamazon.vercel.app/",
    githubRepo: "https://github.com/Anoop-Kumar-31/myamazonclone",
    project_img: amazon,
  },
  {
    id: 3,
    title: "AutoBack Website",
    businessContext: "Corporate website for AI/ML service provider showcasing solutions and capabilities",
    period: "Feb 2024 – Apr 2024",
    description: "Custom-designed corporate website for an AI/ML service provider with modern UI, service showcases, and lead generation forms.",
    problemSolutionImpact: {
      problem: "AI/ML company needed professional web presence to establish market credibility",
      solution: "Designed and developed unique, modern website showcasing services and technical capabilities",
      impact: "Achieved significant market visibility and generated qualified leads for the business"
    },
    techStack: ["React", "Node.js", "Custom CSS", "Framer Motion"],
    link: "https://autoback-7van.onrender.com/",
    githubRepo: "https://github.com/Anoop-Kumar-31/AutoBack2_0",
    project_img: autoback,
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

// Quick Info for HR (6-10 second scan)
export const quickInfo = {
  experience: "7 months professional",
  stack: "React, Node.js, Express, Sequelize, Django, UI/UX",
  openTo: ["Remote", "Contract", "Full-Time"],
  location: "India",
  availability: "Available immediately"
};

// Hire Readiness - What I Can Help With Immediately
export const hireReadiness = {
  title: "What I Can Help With Immediately",
  capabilities: [
    {
      title: "Build React Dashboards",
      description: "Create responsive admin panels and data visualization dashboards",
      icon: "💻"
    },
    {
      title: "Fix Frontend Bugs",
      description: "Debug and optimize React applications for better performance",
      icon: "🔧"
    },
    {
      title: "Create REST APIs",
      description: "Build scalable Node.js/Express APIs with proper authentication",
      icon: "⚡"
    },
    {
      title: "Implement Authentication",
      description: "Set up JWT auth and role-based access control systems",
      icon: "🔐"
    },
    {
      title: "Deploy Applications",
      description: "Deploy and maintain apps on Vercel, Render, and other platforms",
      icon: "🚀"
    },
    {
      title: "Design UI/UX",
      description: "Create modern interfaces in Figma and implement them in code",
      icon: "🎨"
    }
  ]
};