import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";
import client1 from "@/assets/client1.jpg";
import client2 from "@/assets/client2.jpg";
import client3 from "@/assets/client3.jpg";
import client4 from "@/assets/client4.jpg";
import logo1 from "@/assets/logo1.png";
import logo2 from "@/assets/logo2.png";

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#testimonials", label: "Testimonials" },
];

export const stats = [
  { value: 1, suffix: "+", label: "Years of Internship Experience" },
  { value: 50, suffix: "+", label: "Bugs Resolved" },
  { value: 15, suffix: "+", label: "Techs Mastered" },
  { value: 95, suffix: "%", label: "Stability Achieved" },
];

export const projects = [
  {
    id: 1,
    title: "Prepwise: AI-Driven Job Interview Preparation",
    description: "Prepwise harnesses Vapi AI Voice agents and Google Gemini to create interactive, voice-driven simulations of real interview scenarios, allowing you to fine-tune your responses, enhance your communication skills, and receive instant, data-backed feedback.",
    image: project1,
    tags: ["Next.js", "Vapi AI", "Google Gemini", "TypeScript"],
    link: "#",
  },
  {
    id: 2,
    title: "RealScout - A FullStack Real Estate Application",
    description: "A comprehensive real estate platform built with modern technologies, featuring property listings, advanced search, user authentication, and seamless user experience.",
    image: project2,
    tags: ["React", "Node.js", "MongoDB", "Express"],
    link: "#",
  },
  {
    id: 3,
    title: "KitabWale - Used Books Marketplace",
    description: "A platform for buying and selling used books online, connecting book lovers and promoting sustainable reading habits through a peer-to-peer marketplace.",
    image: project3,
    tags: ["React", "PostgreSQL", "Prisma", "TailwindCSS"],
    link: "#",
  },
];

export const experiences = [
  {
    id: 1,
    title: "MERN Stack Intern",
    company: "Multyfi",
    logo: logo1,
    period: "July 2024 - August 2024",
    review: "Aayush is effective in discharging responsibilities assigned to him. His work has been invaluable in delivering faster experiences.",
    responsibilities: [
      "Built a high‑performance analytics stack: Developed a Next.js 14 + Material UI dashboard to visualize 10+ proprietary trading algorithms and a Node.js/MongoDB backend that cut data‑retrieval latency by 30%.",
      "Automated & optimized trading workflows: Scheduled daily financial data ingestion with Node.js/Axios (↑25% data accuracy), and revamped the paper‑trading engine—introducing Redis for order IDs and a heap‑based matching algorithm—to reduce order processing time by 20%.",
      "Streamlined KYC & internal tooling: Standardized KYC forms and integrated secure Aadhaar storage (↓50% incomplete submissions, ↓30% processing time), plus built Reconciliation and RS Equity pages that improved strategy assessment by 45% and alert response by 30%.",
    ],
  },
  {
    id: 2,
    title: "Software Developer Intern",
    company: "IIT Bombay",
    logo: logo2,
    period: "July 2023 - July 2024",
    review: "Aayush was enthusiastic, diligent, and sincere towards his work, while he showcased his talent in efficiently coordinating with the team alongside contributing towards the development and research goals. His overall performance was excellent.",
    responsibilities: [
      "Led open‑source post‑editing tool development: Architected and maintained a Qt‑based editor for Indian languages (Udaan Project), integrating Bhashini OCR API and QCustomPlot to add 6 advanced chart types and a visual change‑tracking feature (↑25% productivity, ↓40% edit time).",
      "Boosted stability & user adoption: Squashed 50+ bugs to achieve 95% stability, packaged a Windows installer that cut setup time by 75% and support issues by 90%, and authored English/Hindi user manuals covering 3 major versions (↓50% support tickets).",
      "Improved maintainability & roadmap planning: Overhauled code documentation (↑40% maintainability), collaborated with Prof. Ganesh Ramakrishnan on future‑proofing the tool, and earned a departmental Letter of Recommendation.",
    ],
  },
];

export const skills = {
  languages: [
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
  ],
  frameworks: [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" },
    { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
    { name: "Recoil", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "NextAuth", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "Qt", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/qt/qt-original.svg" },
  ],
  databases: [
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "Mongoose ODM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg" },
    { name: "Prisma ORM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
  ],
  tools: [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Turborepo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" },
    { name: "CMake", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cmake/cmake-original.svg" },
    { name: "Qt Creator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/qt/qt-original.svg" },
    { name: "Visual Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  ],
};

export const testimonials = [
  {
    id: 1,
    name: "Prof. Ganesh Ramakrishnan",
    role: "Indian Institute of Technology Bombay",
    image: client1,
    text: "Aayush was an invaluable member of our team during his twelve-month internship at IIT Bombay, where he successfully developed and maintained the LEAP-PE Tool, a desktop application for post-editing machine-translated documents. He effectively incorporated new features, resolved bugs, and conducted user research. Aayush demonstrated exceptional achievements, showcasing strong team management, problem-solving skills, and the ability to quickly learn new technologies like QT. His technical expertise, commitment to quality, and effective communication skills make him an ideal candidate for future opportunities in software development.",
  },
  {
    id: 2,
    name: "Sadam Hussain",
    role: "M.Tech student at NIT Warangal",
    image: client2,
    text: "Aayush consistently demonstrated exceptional dedication and efficiency, ensuring all tasks were completed promptly. Aayush is a true team player and brings great value to any project he is involved in.",
  },
  {
    id: 3,
    name: "Nishant Wankhede",
    role: "M.Tech student at IIT Delhi",
    image: client3,
    text: "Throughout his internship, Aayush has consistently demonstrated exceptional timeliness and efficiency. His keen understanding of task urgency has resulted in swift and reliable deliveries. Aayush possesses a remarkable ability to quickly grasp new feature workflows, allowing him to contribute meaningfully. His cooperative nature and proactive approach have been invaluable assets to our team. Based on his performance, I wholeheartedly recommend Aayush for software development roles.",
  },
  {
    id: 4,
    name: "Sagar Vats",
    role: "CTO Multyfi",
    image: client4,
    text: "I highly recommend Aayush for his exceptional technical expertise and innovative approach to software development. He has consistently demonstrated the ability to design and implement scalable, efficient, and user-friendly solutions, resulting in significant improvements in performance and productivity. Aayush's strong problem-solving skills, attention to detail, and commitment to excellence make him a valuable asset to any organization.",
  },
];

export const highlights = [
  {
    icon: "🎯",
    title: "Quality Focus",
    description: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    icon: "💬",
    title: "Reliable Communication",
    description: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    icon: "⏰",
    title: "On-Time Delivery",
    description: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];
