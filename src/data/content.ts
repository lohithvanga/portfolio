export const personal = {
  name: "Vanga Lohith",
  role: "AI & Machine Learning Student",
  tagline:
    "Aspiring ML Engineer building intelligent solutions through AI, computer vision, and software development.",
  intro:
    "Passionate Computer Science (AI & ML) student with hands-on experience building machine learning, computer vision, and web development projects — focused on solving real-world problems through intelligent systems and scalable software.",
  email: "lohithvanga1910@gmail.com",
  phone: "9949945301",
  github: "https://github.com/lohithvanga",
  linkedin: "https://www.linkedin.com/in/lohithvanga1910",
  resumeUrl: "/resume.pdf",
  location: "Secunderabad, India",
};

export const rotatingRoles = [
  "AI & Machine Learning Student",
  "Software Engineer",
  "Python Developer",
  "Computer Vision Enthusiast",
  "Future ML Engineer",
];

export const aboutParagraphs = [
  "I am a Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning at Malla Reddy Engineering College (Autonomous).",
  "My interests include Machine Learning, Computer Vision, Software Engineering, Recommendation Systems, and Artificial Intelligence.",
  "I enjoy building practical applications that solve real-world problems using modern technologies such as Python, Flask, TensorFlow, OpenCV, and machine learning frameworks.",
  "I am continuously improving my skills through projects, certifications, and hands-on development experience.",
];

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  detail?: string;
};

export const education: EducationItem[] = [
  {
    degree: "B.Tech — Computer Science Engineering (AI & ML)",
    institution: "Malla Reddy Engineering College, Autonomous",
    period: "2023 — 2027",
    detail: "CGPA: 8.59",
  },
  {
    degree: "Intermediate — MPC",
    institution: "Sri Nalandha Junior College",
    period: "2021 — 2023",
  },
  {
    degree: "SSC",
    institution: "Triveni Talent School",
    period: "2017 — 2021",
  },
];

export type SkillGroup = {
  title: string;
  blurb: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    blurb: "Core languages used across projects and coursework",
    skills: ["Python", "Java", "SQL", "JavaScript"],
  },
  {
    title: "Web Development",
    blurb: "Building and shipping full-stack applications",
    skills: ["HTML", "CSS", "Flask", "REST APIs"],
  },
  {
    title: "AI & Machine Learning",
    blurb: "Models, vision pipelines, and applied ML",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "MediaPipe",
      "Data Preprocessing",
      "Feature Engineering",
    ],
  },
  {
    title: "Core Computer Science",
    blurb: "Fundamentals behind every system",
    skills: ["Data Structures", "OOP", "DBMS"],
  },
  {
    title: "Tools",
    blurb: "Day-to-day development environment",
    skills: ["Git", "GitHub", "Jupyter Notebook", "VS Code"],
  },
];

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  accent: "indigo" | "teal";
};

export const projects: Project[] = [
  {
    title: "Internship Recommendation System",
    description:
      "A web-based internship recommendation platform capable of processing 100+ resumes with approximately 85% skill-match accuracy. Integrated the Adzuna API to fetch real-time internship listings and redirect users directly to application pages, with skill-gap analysis to recommend career improvements and learning paths.",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript", "REST APIs", "Adzuna API", "Git"],
    highlights: ["100+ resumes processed", "85% matching accuracy", "Real-time recommendations"],
    accent: "indigo",
  },
  {
    title: "Hand Gesture Recognition System",
    description:
      "A real-time computer vision system that detects and classifies hand gestures using OpenCV and MediaPipe. Built a hand landmark detection pipeline with a TensorFlow/Keras gesture classification model optimized for low-latency predictions, designed for robust performance under varying lighting conditions.",
    technologies: ["Python", "OpenCV", "MediaPipe", "TensorFlow", "Keras", "NumPy", "Computer Vision"],
    highlights: ["Real-time gesture detection", "Low-latency prediction", "High recognition accuracy"],
    accent: "teal",
  },
];

export type Certification = {
  title: string;
  issuer: string;
};

export const certifications: Certification[] = [
  { title: "Programming with Java", issuer: "NPTEL" },
  { title: "Python Programming", issuer: "HackerRank" },
  { title: "Data Structures", issuer: "HackerRank" },
  { title: "Legacy Responsive Web Design V8", issuer: "freeCodeCamp" },
];

export const achievements = [
  { label: "CGPA", value: "8.59" },
  { label: "Projects Completed", value: "2+" },
  { label: "Certifications", value: "4+" },
];

export const coreDomains = ["AI", "Machine Learning", "Computer Vision", "Software Development"];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
