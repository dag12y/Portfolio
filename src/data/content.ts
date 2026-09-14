export const profile = {
  name: "Dagm Yibabe",
  role: "Software developer",
  location: "Debre Berhan, Ethiopia",
  email: "dagimyibabe19@gmail.com",
  phone: "+251-97-913-5593",
  phoneHref: "tel:+251979135593",
  resume:
    "https://drive.google.com/file/d/19zcaLwVOTHwAOmXU2pwwgZ6hAtBtWt_y/view?usp=sharing",
  github: "https://github.com/dag12y",
  linkedin: "https://www.linkedin.com/in/dagm-yibabe-46b85b353/",
  twitter: "https://x.com/Dagm0852389280?t=I0AFervOaxY1izTAy-3P_A&s=09",
  summary:
    "I build practical software — from supply-chain security tools to language tech for Amharic and Tigrigna — with clean code and a light visual touch.",
};

export const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Go",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "NLP",
  "Git",
];

export const projects = [
  {
    id: 1,
    title: "SafeRun",
    description:
      "A CLI and Docker sandbox that inspects npm packages before install, so teams can catch supply-chain risk early.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200",
    category: "Security",
    technologies: ["Go", "Docker", "Node.js"],
    links: {
      live: "https://www.saferun.tech/",
      github: "https://github.com/dag12y/saferun",
    },
    status: "Live",
    featured: true,
  },
  {
    id: 2,
    title: "EthioNLP",
    description:
      "NLP tooling for Ethiopian languages, with a focus on Amharic and Tigrigna research workflows.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    category: "AI / NLP",
    technologies: ["Python", "NLP", "ML"],
    links: {
      live: null,
      github: "https://github.com/dag12y/ethionlp",
    },
    status: "In progress",
    featured: true,
  },
  {
    id: 3,
    title: "Chef-AI",
    description:
      "Recipes from whatever is in the fridge — an ingredient-first cooking assistant.",
    image: "https://i.postimg.cc/L6xJbx3Q/image.png",
    category: "Web",
    technologies: ["React", "AI APIs", "Vite"],
    links: {
      live: "https://chef-ai-two.vercel.app/",
      github: "https://github.com/dag12y/Chef-AI",
    },
    status: "Live",
    featured: true,
  },
  {
    id: 4,
    title: "Chat App",
    description:
      "Realtime messaging with auth and history, built on the MERN stack and Socket.io.",
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1200",
    category: "Web",
    technologies: ["React", "Node.js", "MongoDB"],
    links: {
      live: null,
      github: "https://github.com/dag12y/chat-app",
    },
    status: "Completed",
    featured: false,
  },
  {
    id: 5,
    title: "Letter Hunt",
    description:
      "A compact word game: guess letters, uncover the word, stay within the attempt limit.",
    image: "https://i.postimg.cc/7LYmysFC/Screenshot-2025-07-17-212657.png",
    category: "Game",
    technologies: ["React", "Vite"],
    links: {
      live: "https://letter-hunt.vercel.app/",
      github: "https://github.com/dag12y/Letter-Hunt",
    },
    status: "Live",
    featured: false,
  },
  {
    id: 6,
    title: "Tenzies",
    description:
      "Hold matching dice, reroll the rest, lock a full set. Fast React gameplay.",
    image: "https://i.postimg.cc/YCxbZKsK/Screenshot-2025-07-17-212026.png",
    category: "Game",
    technologies: ["React", "Vite"],
    links: {
      live: "https://tenzies-dagm.vercel.app/",
      github: "https://github.com/dag12y/Tenzies",
    },
    status: "Live",
    featured: false,
  },
  {
    id: 7,
    title: "Amharic–Tigrigna Analyser",
    description:
      "Morphology and syntax helpers for Amharic and Tigrigna text, aimed at researchers and learners.",
    image: "https://i.postimg.cc/PxzDrZBC/Screenshot-2025-07-17-220555.png",
    category: "Language",
    technologies: ["Python", "Flask", "NLP"],
    links: {
      live: null,
      github: "https://github.com/dag12y/amharic-tigrigna-analyser",
    },
    status: "Completed",
    featured: false,
  },
];

export const timeline = [
  {
    title: "Ambassador Team Leader",
    place: "SkillBridge Institute of Technology",
    period: "2025 — Present",
    note: "Workshops, mentorship, and a community around practical coding.",
  },
  {
    title: "BSc Electrical & Computer Engineering",
    place: "Addis Ababa University",
    period: "2023 — Present",
    note: "Hardware, embedded systems, and computer architecture.",
  },
  {
    title: "Data Structures & Algorithms",
    place: "A2SV",
    period: "2025 — Present",
    note: "Problem-solving and interview-ready algorithm practice.",
  },
  {
    title: "Independent developer",
    place: "Freelance & personal work",
    period: "2020 — Present",
    note: "Web apps, local tools, and shipping projects end to end.",
  },
];
