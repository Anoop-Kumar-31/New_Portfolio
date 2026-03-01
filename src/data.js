import amazon from "./img/amazonclone.png";
import autoback from "./img/autoback.png";
import bms from "./img/bloodmanagement.png";
import MyImage from "./img/MyImage.png";
import tas from "./img/icons/Techasoft.png";
import rbacDashboard from "./img/RBAC_Dashboard.png";
import novel from "./img/Novel.png";

export const personalInfo = {
  name: "Anoop Kumar",
  title: "Full Stack Web Developer",
  email: "amt312002@gmail.com",
  linkedin: "https://www.linkedin.com/in/anoop--kumar/",
  github: "https://github.com/Anoop-Kumar-31",
  portfolio: "https://myportfolio-kto7.onrender.com",
  resumeUrl: "https://drive.google.com/file/d/1BlAaHVBuh0RSocuwT0vvcGFwXXqFK1ri/view?usp=sharing",
  motto: "I build secure, scalable web systems with clean architecture and production-ready authentication.",
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
    period: "May 2025 – Nov 2025",
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
      "Managed Git workflows and and Linux-based server environments; shortened release cycles by 40%.",
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
    link: "https://blood-management-system-frontend-rosy.vercel.app/",
    githubRepo: {
      frontend: "https://github.com/Anoop-Kumar-31/Blood_Management_System_Frontend",
      backend: "https://github.com/Anoop-Kumar-31/Blood_Management_System_Backend"
    },
    project_img: bms,
    category: "Full-Stack",
    startDate: "2023-05",
    gallery: [
      "/img/gallery/BloodManagementSystem/HomePage.png",
      "/img/gallery/BloodManagementSystem/EmailVerification.png",
      "/img/gallery/BloodManagementSystem/OTPEmail.png",
      "/img/gallery/BloodManagementSystem/BloodBank.png",
    ],
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
    category: "Full-Stack",
    startDate: "2024-06",
    gallery: [
      "/img/gallery/AmazonClone/Home.png",
      "/img/gallery/AmazonClone/Cart.png",
      "/img/gallery/AmazonClone/Signin.png",
    ],
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
    category: "Frontend",
    startDate: "2024-02",
    gallery: [
      "/img/gallery/AutoBack/AutoBackHero.png",
      "/img/gallery/AutoBack/AutoBackService.png",
      "/img/gallery/AutoBack/AutoBackClients.png",
      "/img/gallery/AutoBack/AutoBackTech.png",
      "/img/gallery/AutoBack/AutoBackBusiness.png",
      "/img/gallery/AutoBack/AutoBackWorks.png",
      "/img/gallery/AutoBack/AutoBackAboutAndContact.png",
    ],
  }, {
    id: 4,
    title: "The Secrets of CHIAROSCURO — Official Novel Website",
    businessContext: "Personal branding and interactive storytelling platform for a supernatural fantasy novel",
    period: "Dec 2025 – Jan 2026",
    description: "Custom-built promotional website for my Wattpad novel 'The Secrets of CHIAROSCURO'. Designed to enhance reader engagement with story exploration, anonymous reviews, and immersive UI experience.",
    problemSolutionImpact: {
      problem: "Web Novels Series often lack personalized branding and reader interaction outside the platform",
      solution: "Built a dedicated novel website to centralize story information, enable anonymous reviews, and strengthen reader engagement",
      impact: "Created a professional author presence while increasing reader interaction and story discoverability"
    },
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
      "Deployment (Vercel)"
    ],
    link: "https://secrets-of-chiaroscuro.vercel.app/",
    githubRepo: "https://github.com/Anoop-Kumar-31/Secrets_of_Chiaroscuro",
    project_img: novel,
    category: "Frontend",
    startDate: "2025-12",
    gallery: [
      "/img/gallery/NovelWebsite/herosection.png",
      "/img/gallery/NovelWebsite/about.png",
      "/img/gallery/NovelWebsite/char1.png",
      "/img/gallery/NovelWebsite/char2.png",
      "/img/gallery/NovelWebsite/lore.png",
      "/img/gallery/NovelWebsite/Feedbackandfooter.png",
    ],
  },
  {
    id: 5,
    title: "RBAC Analytics Dashboard",
    businessContext: "Multi-role analytics and operations management platform for restaurant environments",
    period: "Jan 2026 – Feb 2026",
    description: "Full-stack RBAC system with secure authentication, financial dashboards, and strict API-level role enforcement. Designed with clean layered architecture and deployed using Supabase and Render.",
    problemSolutionImpact: {
      problem: "Lack of structured role-based access and centralized financial tracking in multi-level restaurant operations",
      solution: "Engineered a secure, role-driven analytics platform with JWT authentication, middleware-based authorization, and data-driven dashboards",
      impact: "Delivered scalable architecture with secure client-server communication and production-ready deployment"
    },
    techStack: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL (Supabase)",
      "Sequelize",
      "JWT"
    ],
    link: "https://role-based-analytics-dashboard.vercel.app/",
    githubRepo: {
      backend: "https://github.com/Anoop-Kumar-31/Role-Based-Analytics-Dashboard_Backend",
      frontend: "https://github.com/Anoop-Kumar-31/Role-Based-Analytics-Dashboard"
    },
    project_img: rbacDashboard,
    category: "Full-Stack",
    startDate: "2026-01",
    gallery: [
      "/img/gallery/RBAC Analytics Dashboard/signin.png",
      "/img/gallery/RBAC Analytics Dashboard/dashboard.png",
      "/img/gallery/RBAC Analytics Dashboard/onboarding.png",
      "/img/gallery/RBAC Analytics Dashboard/onboarded.png",
      "/img/gallery/RBAC Analytics Dashboard/user.png",
      "/img/gallery/RBAC Analytics Dashboard/revenue.png",
      "/img/gallery/RBAC Analytics Dashboard/expense.png",
      "/img/gallery/RBAC Analytics Dashboard/Bluebook.png",
      "/img/gallery/RBAC Analytics Dashboard/users.png",
      "/img/gallery/RBAC Analytics Dashboard/location.png",
    ],
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
      ],
    },
    {
      name: "Databases & Tools",
      list: [
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", proficiency: 85 },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", proficiency: 60 },
        { name: "GitHub", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png", proficiency: 85 },
        { name: "Sequelize", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg", proficiency: 90 },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", proficiency: 90 },
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
  experience: "6 months professional",
  stack: "React, Node, Express, PostgreSQL, Sequelize, JWT, UI/UX",
  openTo: ["Full-Time", "Remote", "Freelance"],
  location: "India",
  availability: "Available immediately"
};

// Hire Readiness - What I Can Help With Immediately
export const hireReadiness = {
  title: "What I Can Help With Immediately",
  capabilities: [
    {
      title: "Build Secure RBAC Systems",
      description: "Implement JWT authentication with role-based middleware and protected API access",
      icon: "🔐"
    },
    {
      title: "Develop Scalable REST APIs",
      description: "Design modular Node.js/Express APIs using controller-service architecture",
      icon: "⚡"
    },
    {
      title: "Design Relational Database Schemas",
      description: "Model structured PostgreSQL databases with proper relations and optimized queries",
      icon: "🗄️"
    },
    {
      title: "Build Data-Driven Dashboards",
      description: "Create dynamic React dashboards with Redux state management and protected routing",
      icon: "📊"
    },
    {
      title: "Implement Authentication Systems",
      description: "Set up secure login flows with bcrypt hashing and token validation",
      icon: "🔑"
    },
    {
      title: "Deploy Full-Stack Applications",
      description: "Configure environments and deploy applications using Vercel and Render",
      icon: "🚀"
    }
  ]

};
