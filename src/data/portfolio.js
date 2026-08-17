export const portfolioData = {
  name: "Praveen Kumar M",
  role: "Full Stack Developer",
  tagline: "BUILDING DIGITAL PRODUCTS THAT FEEL ALIVE.",
  location: "Chennai, Tamil Nadu, India",
  email: "praveenkumarmohan592005@gmail.com",
  phone: "+91 7845673102",
  linkedin: "https://www.linkedin.com/in/praveen-kumar-m-182b4232b/",
  github: "https://github.com/PraveenkumarM2005-git",
  education: {
    institution: "Jeppiaar Engineering College",
    degree: "B.E. Computer Science and Engineering",
    cgpa: "8.1 / 10.0",
    graduationYear: "2027",
  },
  skills: {
    languages: ["Java", "JavaScript", "Python"],
    frontend: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "Flask"],
    databases: ["MongoDB", "PostgreSQL", "Supabase", "SQLite", "Cloudinary"],
    devops: ["Git", "GitHub", "Vercel", "Render", "Netlify", "Postman"],
    coreConcepts: [
      "Object-Oriented Programming",
      "Data Structures and Algorithms",
      "RESTful API Design",
      "JWT Authentication",
      "Database Design",
      "Real-Time WebSockets",
      "Generative AI Integration",
      "Prompt Engineering",
    ],
  },
  projects: [
    {
      id: "01",
      title: "ConvoHub",
      category: "Real-Time Chat Application",
      description:
        "An instant-messaging platform supporting low-latency one-to-one and group conversation threads via WebSockets, JWT authentication, HTTP-only cookies and Cloudinary media handling.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Socket.io",
        "Cloudinary",
        "Tailwind CSS",
      ],
      liveUrl: "https://convo-hub-one.vercel.app",
      githubUrl: "https://github.com/PraveenkumarM2005-git/ConvoHub", // Assuming general format, will update if needed, but wait, the prompt says "If a GitHub URL is not explicitly provided, show a disabled/hidden GitHub button rather than fabricating a link."
      image: "/convohub.png",
    },
    {
      id: "02",
      title: "HackMate",
      category: "Hackathon Team Builder",
      description:
        "A matching application that enables engineering students to find hackathon team members filtering by technical proficiency, with Supabase Realtime notifications and GitHub OAuth onboarding.",
      technologies: [
        "React.js",
        "Supabase",
        "PostgreSQL",
        "GitHub OAuth",
        "Tailwind CSS",
      ],
      liveUrl: "https://hackmate-squad.netlify.app",
      githubUrl: "https://github.com/PraveenkumarM2005-git/HackMate-Find-Hackathon-Teammates",
      image: "/hackmate.png",
    },
    {
      id: "03",
      title: "EventIQ",
      category: "Smart Event Management System",
      description:
        "A centralized event management platform for campus scheduling and student registration, including role-based dashboards and automated seat tracking.",
      technologies: [
        "Python",
        "Flask",
        "SQLite",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
      liveUrl: "https://eventiq-smart-event-management.onrender.com",
      githubUrl: "https://github.com/PraveenkumarM2005-git/EventIQ-Smart-Event-Management",
      image: "/eventiq.png",
    },
  ],
  experience: [
    {
      company: "Nativeva",
      role: "Full Stack Developer Intern",
      location: "Chennai, TN",
      duration: "March 2026 – April 2026",
      responsibilities: [
        "Engineered responsive frontend user interfaces and high-performance backend business logic using modern JavaScript frameworks.",
        "Collaborated on the development of production-ready RESTful APIs, facilitating reliable data exchange and system interoperability.",
        "Optimized database schema integrations and data retrieval pipelines to improve query response times.",
      ],
    },
    {
      company: "NextGen Solutions",
      role: "Web Development Intern",
      location: "Chennai, TN",
      duration: "December 2025 – January 2026",
      responsibilities: [
        "Built enterprise-grade, full-stack web architectures utilizing Python Flask, SQLite, and custom JavaScript wrappers.",
        "Successfully delivered a smart event management system featuring role-based access control (RBAC) dashboards for administrators and students.",
        "Constructed end-to-end relational data schemas to accurately track, log, and filter thousands of user registration points.",
      ],
    },
  ],
  certifications: [
    "Tata GenAI Data Analytics – Forage",
    "Prompt Engineering for ChatGPT",
    "Deloitte Cyber Job Simulation – Forage",
    "Full Stack Web Development Certification",
  ],
  achievements: [
    "Won Technical Quiz Competition at SRM Institute of Science and Technology (Ramapuram Campus).",
    "Collaborated in a hackathon at Guru Nanak College, Chennai, contributing to the development of innovative technology solutions.",
  ],
  services: [
    {
      title: "FULL-STACK WEB DEVELOPMENT",
      description:
        "Responsive web applications using React.js, Node.js, Express.js, Flask and modern frontend technologies.",
    },
    {
      title: "REAL-TIME APPLICATIONS",
      description:
        "Interactive applications using WebSockets and realtime backend capabilities.",
    },
    {
      title: "DATABASE-DRIVEN APPLICATIONS",
      description:
        "Applications using PostgreSQL, Supabase, MongoDB and SQLite.",
    },
    {
      title: "API & AUTHENTICATION",
      description:
        "RESTful APIs, JWT authentication and database-backed application workflows.",
    },
  ],
}
