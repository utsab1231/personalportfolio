// Single source of truth for all copy and resume data.
// Nothing content-related should be hard-coded inside JSX components.
// Strings beginning with "TODO:" are intentional placeholders — see the
// plan's C4 TODO inventory. They render visibly so gaps can't be missed.

export const person = {
  name: "Utsab Adhikari",
  nameDeva: "उत्सव अधिकारी",
  role: "Software Engineer specializing in .NET, React, and Interactive Web Applications.",
  location: "Kathmandu, Nepal",
  locationDeva: "काठमाडौँ, नेपाल",
  email: "utssabad10@gmail.com",
  linkedin: "https://linkedin.com/in/utsab01",
  github: "https://github.com/utsab1231",
};

export const nav = [
  { id: "intro", en: "intro", deva: "परिचय", num: "०१" },
  { id: "experience", en: "experience", deva: "अनुभव", num: "०२" },
  { id: "projects", en: "projects", deva: "परियोजना", num: "०३" },
  { id: "stack", en: "stack", deva: "प्रविधि", num: "०४" },
  { id: "about", en: "about", deva: "बारेमा", num: "०५" },
  { id: "tryouts", en: "tryouts", deva: "प्रयास", num: "०६" },
  { id: "contact", en: "contact", deva: "सम्पर्क", num: "०७" },
] as const;

export type AudienceKey = "anyone" | "recruiters" | "engineers" | "productManagers";

export const audiences: {
  key: AudienceKey;
  label: string;
  labelDeva: string;
  statement: string;
  skills: string[];
}[] = [
  {
    key: "anyone",
    label: "For Anyone",
    labelDeva: "सबैका लागि",
    statement: "I'm a software developer who enjoys turning ideas into useful, well-crafted products. I love learning, solving problems, and building things that make an impact.",
    skills: ["React", "Next.js", ".NET", "Three.js"],
  },
  {
    key: "recruiters",
    label: "Recruiters",
    labelDeva: "भर्तीकर्ता",
    statement: "I'm a software developer experienced in React, TypeScript, APIs, testing, and modern web development. I enjoy taking ownership, solving problems, and growing through challenging projects.",
    skills: ["React", ".NET", "Azure AD", "SQL Server"],
  },
  {
    key: "engineers",
    label: "Engineers",
    labelDeva: "इन्जिनियर",
    statement: "I'm a software developer focused on clean, maintainable code and solid engineering practices. I enjoy understanding systems, debugging problems, and continuously improving how I build software.",
    skills: ["TypeScript", "Dapper", "RTK Query", "Three.js"],
  },
  {
    key: "productManagers",
    label: "Product Managers",
    labelDeva: "प्रोडक्ट म्यानेजर",
    statement: "I'm a software developer who cares about the problem behind the feature, not just the code. I enjoy turning requirements into practical solutions while balancing user needs, technical constraints, and product goals.",
    skills: ["ETL Workflows", "SignalR", "Carbon Design"],
  },
];

export const experience = [
  {
    company: "Xylontech",
    role: "Software Engineer I",
    dateLabel: "Jan 2025 — Present",
    dateLabelDeva: "अहिले",
    location: "Kathmandu, Nepal",
    bullets: [
      "Led core engineering on timecard and construction management systems.",
      "Integrated Azure AI services (including state zoning QA chatbots) and enhanced Azure AD authentication.",
      "Implemented interactive 3D visualizations using Three.js for construction platforms.",
      "Optimized backend service performance and added JEST unit/integration testing suites.",
    ],
  },
  {
    company: "Lastdoor Solutions",
    role: "Full Stack Developer (Part-time)",
    dateLabel: "Jan 2025 — Jan 2026",
    dateLabelDeva: null,
    location: "Remote",
    bullets: [
      "Built interactive workflow UI for ETL process configuration/visualization using Carbon Design and Lucide.",
      "Integrated SignalR for real-time ETL execution status and live updates.",
    ],
  },
  {
    company: "Xylontech",
    role: "Associate Software Engineer",
    dateLabel: "Feb 2023 — Jan 2025",
    dateLabelDeva: null,
    location: "Kathmandu, Nepal",
    bullets: [
      "Migrated legacy VBScript logic to modern .NET backend APIs (Dapper, SQL Server) and React frontend components.",
      "Built responsive interfaces using React.js, Redux Toolkit, RTK Query, and Kendo React UI.",
      "Managed secure US federal government timecard systems with Azure AD Authentication.",
    ],
  },
];

export const projects = [
  {
    title: "Job Candidate Hub API",
    description:
      "A .NET-based RESTful API with Clean Architecture for managing candidate profiles cleanly in SQL Server.",
    tags: ["C#", ".NET", "SQL Server", "Clean Architecture"],
    link: "https://github.com/utsab1231/JobCandidateAPI",
  },
  {
    title: "Token Extractor Chrome Extension",
    description:
      "Developer extension to extract and copy authentication tokens directly to clipboard without opening DevTools.",
    tags: ["JavaScript", "Chrome Extension"],
    link: "https://chromewebstore.google.com/detail/token-extractor/abmialakabbbpmjlkjpajaheinfecjak",
  },
];

export const stack = [
  {
    label: "Languages",
    labelDeva: "भाषाहरू",
    items: ["JavaScript", "TypeScript", "C#", "SQL", "C", "C++", "HTML", "CSS"],
  },
  {
    label: "Frameworks",
    labelDeva: "फ्रेमवर्क",
    items: [
      "React",
      "Next.js",
      "Three.js",
      ".NET",
      "Express",
      "MongoDB",
      "Entity Framework",
      "Dapper",
      "SignalR",
      "Git",
      "Azure Boards",
    ],
  },
  {
    label: "Certifications",
    labelDeva: "प्रमाणपत्र",
    items: [
      "Responsive Web Design & JavaScript Algorithms (FreeCodeCamp)",
      "Problem Solving & REST API Intermediate (HackerRank)",
    ],
  },
];

export const about = {
  paragraphs: [
    "I am a software developer who enjoys turning ideas and requirements into practical, reliable, and user-friendly applications. My experience has mainly been around modern web development, working with technologies such as React, TypeScript, APIs, testing, and backend systems. I take pride in writing clean, maintainable code and, more importantly, understanding why something is being built rather than simply making it work. Professionally, I thrive in environments where I can solve problems, learn from others, take ownership of my work, and continuously improve both the product and my own skills.",
    "My working purpose is to build things that are genuinely useful while continuously growing as a developer. I believe good software development is not just about writing code; it is about understanding people, solving the right problems, communicating clearly, and creating solutions that can evolve over time. I want my work to have a meaningful impact, whether that means improving an existing system, simplifying a complicated process, or creating something from the ground up. At the same time, I want every project I work on to teach me something new and push me to become a better engineer.",
    "Outside of work, I enjoy spending time away from the screen and exploring different interests. I like travelling, hiking, riding motorcycles, watching movies, and playing football or futsal. I especially enjoy activities that let me explore new places or spend time with people, because they give me a different perspective from the structured environment of software development. I also enjoy gaming from time to time, particularly when I want to completely switch off and relax.",
    "Overall, I see software development as a combination of creativity, logic, and continuous learning. There is something exciting about taking an idea that exists only in someone's mind and gradually turning it into something real that people can use. At the same time, I appreciate that software development is rarely about having all the answers; there is always a new technology, problem, or perspective to learn from. For me, that constant opportunity to learn, build, break things, fix them, and improve is what makes software development such a rewarding field.",
  ],
};

export const contact = {
  status: "active",
  statusDeva: "सक्रिय",
  links: [
    { label: "Email", href: `mailto:${person.email}` },
    { label: "LinkedIn", href: person.linkedin },
    { label: "GitHub", href: person.github },
  ],
};

export const footer = {
  copyright: `© 2026 ${person.name}. All rights reserved.`,
  // Bikram Sambat year corresponding to 2026 CE — TODO: confirm before shipping.
  location: `${person.locationDeva} · २०८३`,
};

export const worm = {
  label: "wandering....",
  labelDeva: "घुम्दै....",
};

export const tryouts = {
  title: "Tryouts",
  titleDeva: "प्रयास",
  // Base names — the optimize-media script generates /public/tryouts/<base>-<width>.<ext>
  // variants from these. Keep in sync with scripts/optimize-media.mjs → SOURCES.
  images: [
    "qfneeb",
    "esfcru",
    "qd6vlr",
    "1eu443",
    "kopfq6",
    "dyn7r6",
    "ffs62n",
    "q3ecss",
    "y4lijv",
  ],
  videos: [] as string[],
};
