export type Profile = {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  linkedin?: string;
  summary: string;
};

export type Certificate = {
  title: string;
  org: string;
  date: string;
  url?: string;
};
export type Project = {
  name: string;
  blurb: string;
  tags: string[];
  repo?: string; // GitHub repo (fallback if no live)
  live?: string; // Live URL (preferred if present)
  kind?: "sql" | "mern" | "t3" | "react" | "node" | "Java" | "other";
};
export type SkillGroup = { label: string; items: string[] };

export const profile: Profile = {
  name: "Alexander Badenhorst",
  title:
    "Full-Stack Developer • Java • Spring Boot • MERN Stack • TypeScript • SQL",
  location: "Gauteng, South Africa",
  email: "alexander.baden15.ab@gmail.com",
  github: "https://github.com/AlexanderBadenhorst",
  linkedin: "https://www.linkedin.com/in/alexander-b-435b90a4/",
  summary:
    "Full-stack developer specialising in Java/Spring Boot and React/TypeScript. I build robust REST APIs using Spring Boot with DTO validation, layered architecture, Swagger documentation, and Dockerized environments. On the frontend, I create clean, accessible UIs in React and Tailwind. Strong SQL foundation with hands-on work in schema design, triggers, views, and analytics queries. Complemented by MERN stack experience and solid Java OOP fundamentals. I’m driven, reliable, and focused on delivering maintainable, production-ready solutions.",
};

export const groupedSkills: SkillGroup[] = [
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Vite",
      "HTMX",
      "Framer Motion",
    ],
  },
  {
    label: "Full-stack stacks",
    items: ["T3 Stack", "MERN Stack", "Java/Spring Boot Stack"],
  },
  {
    label: "Backend & APIs",
    items: [
      "Java Spring Boot",
      "Node.js",
      "Express",
      "REST APIs",
      "DTO Validation",
      "Swagger/OpenAPI",
      "JWT/Auth Flows",
      "Layered Architecture (Controller • Service • Repository)",
    ],
  },
  {
    label: "Databases & ORM",
    items: [
      "PostgreSQL",
      "SQL",
      "MongoDB",
      "Prisma",
      "pgAdmin",
      "Schema Design",
      "Joins, CTEs, Window Functions",
      "Triggers & Views",
    ],
  },
  {
    label: "DevOps & Tooling",
    items: [
      "Docker",
      "Git/GitHub",
      "Postman",
      "Swagger UI",
      "VS Code",
      "IntelliJ",
      "Maven",
    ],
  },
  {
    label: "Java",
    items: [
      "Java (Intermediate/Advanced)",
      "Spring Boot Basics",
      "Swing (GUI)",
      "OOP Principles",
      "Collections Framework",
      "Serialization & File I/O",
      "MVC Architecture",
      "Debugging & Error Handling",
    ],
  },
];


export const certificates: Certificate[] = [
  {
    title: "Intro to Programming",
    org: "Provider: Code College",
    date: "Obtained: 2024",
    url: "certs/alexander-badenhorst-intro-to-programming.pdf",
  },
  {
    title: "JavaScript",
    org: "Provider: Code College",
    date: "Obtained: 2024",
    url: "certs/alexander-badenhorst-javascript.pdf",
  },
  {
    title: "HTMX",
    org: "Provider: Code College",
    date: "Obtained: 2024",
    url: "certs/alexander-badenhorst-htmx.pdf",
  },
  {
    title: "Node.js",
    org: "Provider: Code College",
    date: "Obtained: 2024",
    url: "certs/alexander-badenhorst-nodejs.pdf",
  },
  {
    title: "React",
    org: "Provider: Code College",
    date: "Obtained: 2024",
    url: "certs/alexander-badenhorst-react.pdf",
  },
  {
    title: "MERN Stack",
    org: "Provider: Code College",
    date: "Obtained: 2025",
    url: "certs/alexander-badenhorst-MERN-Stack.pdf",
  },
  {
    title: "Web Development",
    org: "Provider: Code College",
    date: "Obtained: 2025",
    url: "certs/alexander-badenhorst-WebDeveloperBootcamp.pdf",
  },
  {
    title: "SQL",
    org: "Provider: Code College",
    date: "Obtained: 2025",
    url: "certs/alexander-badenhorst-sql.pdf",
  },
  {
    title: "Java Beginner",
    org: "Provider: Code College",
    date: "Obtained: 2025",
    url: "certs/alexander-badenhorst-JavaBeginner.pdf",
  },
  {
    title: "Java Advanced",
    org: "Provider: Code College",
    date: "Obtained: 2025",
    url: "certs/alexander-badenhorst-JavaAdvanced.pdf",
  },
  {
    title: "Spring Framework",
    org: "Provider: Code College",
    date: "Obtained: 2025",
    url: "certs/alexander-badenhorst-spring-framework.pdf",
  },
];


export const projects = [
  // --- Client-only / static ---
  {
    name: "First Portfolio (Vanilla SPA)",
    blurb:
      "My first portfolio site built with vanilla HTML/CSS/JS. Demonstrates early frontend fundamentals, DOM manipulation, and component-style layout without frameworks. Hosted on GitHub Pages.",
    tags: ["SPA", "Vanilla JS", "HTML", "CSS", "GitHub Pages"],
    kind: "react",
    live: "https://alexanderbadenhorst.github.io/Portfolio/",
    repo: "https://github.com/AlexanderBadenhorst/Portfolio",
  },

  // {
  //   name: "Bookstore (MERN)",
  //   blurb:
  //     "Book catalog + cart. Separate backend and frontend workspaces; REST API, pagination, and protected operations.",
  //   tags: ["MERN", "React", "Node", "Express", "MongoDB"],
  //   kind: "mern",
  //   repo: "https://github.com/AlexanderBadenhorst/Bookstore-MERN-Stack",
  // },
  // {
  //   name: "Todo App (React)",
  //   blurb:
  //     "React (CRA) todo app demonstrating CRUD patterns and component state management.",
  //   tags: ["React", "CRA", "Frontend"],
  //   kind: "mern",
  //   repo: "https://github.com/AlexanderBadenhorst/todo-app",
  // },
  {
    name: "Library App (React)",
    blurb:
      "React UI for managing library borrow/return workflows. Built with component-based design, reusable hooks, clean state management, and Firebase hosting.",
    tags: ["React", "CRA", "Firebase (hosting)"],
    kind: "mern",
    repo: "https://github.com/AlexanderBadenhorst/library-app",
  },
  // --- MERN apps (backend + frontend folders where applicable) ---
  // {
  //   name: "Quote App (MERN)",
  //   blurb:
  //     "Full-stack quotes CRUD app. MongoDB/Express backend with a React client UI.",
  //   tags: ["MERN", "React", "Node", "Express", "MongoDB"],
  //   kind: "mern",
  //   repo: "https://github.com/AlexanderBadenhorst/Quote-App-MERN",
  //   // live: "https://…" // add once deployed
  // },
  {
    name: "Chat App (MERN)",
    blurb:
      "Full MERN chat application with a Node/Express API and React client. Focus on clean component structure, REST API design, reusable services, and modular backend routes.",
    tags: ["MERN", "React", "Node", "Express", "MongoDB"],
    kind: "mern",
    repo: "https://github.com/AlexanderBadenhorst/MERN-Chat-App",
  },
  {
    name: "User Authentication (MERN)",
    blurb:
      "Authentication system built with Node/Express and React. Implements JWT auth, protected API routes, password hashing, and structured login/register flows.",
    tags: ["MERN", "Auth", "React", "Node", "Express", "MongoDB"],
    kind: "mern",
    repo: "https://github.com/AlexanderBadenhorst/User_Authentication",
  },
  // --- SQL projects (repo links; keep your description about triggers/views) ---
  {
    name: "ShoppingCartDB (PostgreSQL)",
    blurb:
      "Feature-complete SQL project with products, carts, orders, triggers, and analytics views.",
    tags: ["PostgreSQL", "SQL", "Triggers", "Views"],
    kind: "sql",
    repo: "https://github.com/AlexanderBadenhorst/ShoppingCartDB",
  },
  {
    name: "DatingDB (SQL Storytelling)",
    blurb:
      "SQL exploration project demonstrating joins, window functions, CTEs, and reproducible queries on a designed dataset. Highlights structured analytical query design and schema reasoning.",
    tags: ["PostgreSQL", "Data Modeling", "CTEs"],
    kind: "sql",
    repo: "https://github.com/AlexanderBadenhorst/DatingDB",
  },
  // --- Java projects ---
  {
    name: "Hangman Game (Java)",
    blurb:
      "Console-based Hangman built with Java. Demonstrates OOP design, classes, methods, arrays, control flow, and clean separation of game logic.",
    tags: ["Java", "OOP", "Console App"],
    kind: "Java",
    repo: "https://github.com/AlexanderBadenhorst/Java_Beginner/tree/f218b9bec64a40414f697d59db07c5e166577ee8/src/HangmanGame",
  },
  {
    name: "Song Library Manager (Java, Swing)",
    blurb:
      "A desktop music library manager built with Java Swing. Demonstrates MVC structure, collections and custom comparators, search and sorting, and Java serialization for saving and loading the library.",
    tags: [
      "Java",
      "Swing",
      "OOP",
      "Desktop App",
      "Collections",
      "Serialization",
      "MVC",
    ],
    kind: "Java",
    repo: "https://github.com/AlexanderBadenhorst/Java_Advanced/tree/8395d92903e9526c9fa6b87fa7efc3ccd78c993b/src/JavaSongLibraryApp",
  },
    // --- Java + Spring Boot projects ---
   {
  name: "Library API (Spring Boot)",
  blurb:
    "Enterprise-style REST API built with Java and Spring Boot. Implements layered architecture (Controller • Service • Repository), DTO validation, custom exceptions, and Swagger/OpenAPI documentation. Integrates with PostgreSQL for persistent storage with clean entity mapping.",
  tags: ["Java", "Spring Boot", "REST APIs", "DTO Validation", "Swagger/OpenAPI", "PostgreSQL"],
  kind: "Java",
  repo: "https://github.com/AlexanderBadenhorst/Spring_Library_App",
},



] satisfies Project[];

export const resume = {
  enabled: true,
  url: "CV/Alexander_Badenhorst_CV_1pager.pdf",
};
