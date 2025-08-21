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
  kind?: "sql" | "mern" | "t3" | "react" | "node" | "other";
};
export type SkillGroup = { label: string; items: string[] };

export const profile: Profile = {
  name: "Alexander Badenhorst",
  title: "Full-Stack Developer (React • Node • SQL)",
  location: "Gauteng, South Africa",
  email: "alexander.baden15.ab@gmail.com",
  github: "https://github.com/AlexanderBadenhorst",
  linkedin: "https://www.linkedin.com/in/alexander-b-435b90a4/",
  summary:
    "Early-career full-stack developer focused on React/TypeScript and PostgreSQL. Comfortable designing schemas, building REST APIs, and shipping clean, accessible UIs with Tailwind. Seeking a junior role where I can contribute quickly and grow.",
};

export const groupedSkills: SkillGroup[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Vite", "HTMX"],
  },
  { label: "Full-stack stacks", items: ["T3 Stack", "MERN Stack"] },
  { label: "Backend & APIs", items: ["Node.js", "Express", "REST APIs"] },
  { label: "Databases & ORM", items: ["PostgreSQL", "Prisma", "MongoDB"] },
  { label: "Tooling", items: ["Git/GitHub"] },
  { label: "Java", items: ["Java"] },
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
    title: "SQL",
    org: "Provider: Code College",
    date: "Obtained: 2025",
    url: "certs/alexander-badenhorst-sql.pdf",
  },
];

// src/data/projects.ts (or wherever you keep them)
export const projects = [
  // --- Client-only / static ---
  {
    name: "First Portfolio (Vanilla SPA)",
    blurb:
      "My first portfolio: a single-page site with links to early JSFiddle demos. Built with plain HTML/CSS/JS and hosted on GitHub Pages.",
    tags: ["SPA", "Vanilla JS", "HTML", "CSS", "GitHub Pages"],
    kind: "react",
    live: "https://alexanderbadenhorst.github.io/Portfolio/",
    repo: "https://github.com/AlexanderBadenhorst/Portfolio",
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
      "ERD + queries demonstrating joins, window functions, and CTEs on a clean, reproducible dataset.",
    tags: ["PostgreSQL", "Data Modeling", "CTEs"],
    kind: "sql",
    repo: "https://github.com/AlexanderBadenhorst/DatingDB",
  },

  // --- MERN apps (backend + frontend folders where applicable) ---
  {
    name: "Quote App (MERN)",
    blurb:
      "Full-stack quotes CRUD app. MongoDB/Express backend with a React client UI.",
    tags: ["MERN", "React", "Node", "Express", "MongoDB"],
    kind: "mern",
    repo: "https://github.com/AlexanderBadenhorst/Quote-App-MERN",
    // live: "https://…" // add once deployed
  },
  {
    name: "Chat App (MERN)",
    blurb:
      "Chat UI with a Node/Express API. Emphasis on clean component structure and REST endpoints.",
    tags: ["MERN", "React", "Node", "Express", "MongoDB"],
    kind: "mern",
    repo: "https://github.com/AlexanderBadenhorst/MERN-Chat-App",
  },
  {
    name: "Bookstore (MERN)",
    blurb:
      "Book catalog + cart. Separate backend and frontend workspaces; REST API, pagination, and protected operations.",
    tags: ["MERN", "React", "Node", "Express", "MongoDB"],
    kind: "mern",
    repo: "https://github.com/AlexanderBadenhorst/Bookstore-MERN-Stack",
  },
  {
    name: "Todo App (React)",
    blurb:
      "React (CRA) todo app demonstrating CRUD patterns and component state management.",
    tags: ["React", "CRA", "Frontend"],
    kind: "mern",
    repo: "https://github.com/AlexanderBadenhorst/todo-app",
  },
  {
    name: "Library App (React)",
    blurb:
      "Library management UI (borrow/return). React (CRA) front-end; repo includes Firebase hosting config.",
    tags: ["React", "CRA", "Firebase (hosting)"],
    kind: "mern",
    repo: "https://github.com/AlexanderBadenhorst/library-app",
  },
  {
    name: "User Authentication (MERN)",
    blurb:
      "Email/password auth with a Node/Express API and a React client. Demonstrates protected routes and auth flows.",
    tags: ["MERN", "Auth", "React", "Node", "Express", "MongoDB"],
    kind: "mern",
    repo: "https://github.com/AlexanderBadenhorst/User_Authentication",
  },
] satisfies Project[];


export const resume = { enabled: true, url: "#" };
