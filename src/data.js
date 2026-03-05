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

    "Backend Development": [
      "Built scalable REST APIs using Node.js (Express) and Django.",
      "Designed relational database schemas and Sequelize ORM models.",
      "Implemented JWT authentication with role-based access control.",
      "Handled transactions and associations for complex database operations.",
      "Structured modular backend architecture for maintainable services.",
      "Developed APIs supporting multi-portal restaurant management workflows.",
    ],

    "Frontend Development": [
      "Developed three role-based React portals (Admin, Vendor, Customer).",
      "Managed application state using Redux Toolkit.",
      "Built responsive dashboards and reusable UI component libraries.",
      "Integrated Server-Sent Events (SSE) for real-time updates.",
      "Implemented dynamic forms, tables, and data-driven UI components.",
      "Improved user experience with optimized API integration patterns.",
    ],

    "DevOps & Collaboration": [
      "Collaborated using Git-based workflows in Linux development environments.",
      "Configured backend services and environment variables for deployment.",
      "Improved API performance using Redis caching strategies.",
      "Optimized database queries and indexing for faster responses.",
      "Documented APIs and backend modules for developer onboarding.",
      "Worked closely with designers and developers to deliver production features.",
    ],

    "Key Achievements": [
      "Contributed to a multi-portal platform used by restaurants and customers.",
      "Refactored legacy modules to improve code structure and maintainability.",
      "Developed automated email notifications using Nodemailer templates.",
      "Delivered end-to-end features across backend APIs and frontend dashboards.",
      "Supported onboarding workflows and restaurant management operations.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Blood Donor & Patient Management System",
    businessContext: "Healthcare platform connecting blood donors with patients in need",
    period: "May 2023 – Aug 2023",
    description: "Full-stack platform connecting donors and patients. Upgraded with clean MVC backend architecture, integration of 2,800+ real government blood banks (data.gov.in), secure OTP verification, and a responsive Tailwind UI.",
    problemSolutionImpact: {
      problem: "Lack of centralized real-time information for blood availability and authenticated donors",
      solution: "Built a scalable automated platform with real-time geographical donor matching, secure email OTP auth, and 2,800+ searchable government blood banks",
      impact: "Provides instant life-saving access to categorized blood banks and verified donors, eliminating critical coordination delays"
    },
    techStack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Mongoose ODM", "REST APIs", "Nodemailer", "MVC Architecture", "OTP Authentication", "Cross-Origin Resource Sharing"],
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
    techStack: ["Next.js", "Firebase Authentication", "Tailwind CSS", "Vercel"],
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
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
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
      "Tailwind CSS",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "JWT Authentication",
      "Middleware-based Authorization",
      "Sequelize",
      "PostgreSQL",
      "Supabase",
      "MVC Architecture",
      "Cross-Origin Resource Sharing",
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
  period: "Aug 2021 – Jul 2025",
  logo: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Chandigarh_University_Seal.png",
  cgpa: "7.98",
};

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


// export const certificates = [
//   { text: "SWAYAM– NPTEL: Introduction to Programming in C — ", highlight: "Elite + Gold Title", highlightColor: "text-yellow-400" },
//   { text: "REACT and Principles of UX/UI Design Certification by ", highlight: "META", highlightColor: "text-blue-400" },
//   { text: "Introduction to Web Development Certification by ", highlight: "IBM", highlightColor: "text-blue-500" },
//   { text: "Achiever Title by CHANDIGARH UNIVERSITY — ", highlight: "NPTEL– Swayam", highlightColor: "text-green-500" },
// ];



// New certificates info
export const certificates = [
  {
    name: "Google UX Design",
    type: "Specialization Certificate",
    date: "April 21, 2024",
    authorizedBy: "Google",
    verify: "https://www.coursera.org/account/accomplishments/specialization/certificate/EHVVYX8HTCNR",
    icon: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  {
    name: "Introduction to Front-End Development",
    type: "Course Certificate",
    date: "December 17, 2024",
    authorizedBy: "Meta",
    verify: "https://www.coursera.org/account/accomplishments/certificate/M9ZM3FBH54ZM",
    icon: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
  },
  {
    name: "Introduction to Back-End Development",
    type: "Course Certificate",
    date: "December 17, 2024",
    authorizedBy: "Meta",
    verify: "https://www.coursera.org/account/accomplishments/certificate/ZFZEMW6NLXMH",
    icon: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
  },
  {
    name: "Figma for UI/UX: Master Web Design in Figma",
    type: "Course Certificate",
    date: "December 10, 2024",
    authorizedBy: "Packt",
    verify: "https://www.coursera.org/account/accomplishments/certificate/MSZAFT5YJJ3N",
    icon: "https://www.packtpub.com/rebuild/build/assets/packt-Dz-8EKdV.svg"
  },
  {
    name: "Data Visualization with Tableau",
    type: "Specialization Certificate",
    date: "December 10, 2024",
    authorizedBy: "University of California, Davis",
    verify: "https://www.coursera.org/account/accomplishments/specialization/certificate/KBFRHMQR43N7",
    icon: "https://upload.wikimedia.org/wikipedia/commons/f/f3/The_University_of_California_Davis.svg"
  }
];