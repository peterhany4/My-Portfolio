export interface FocusArea {
  title: string;
  description: string;
  status: 'Current' | 'Exploring' | 'Learning';
}

export const focusData: FocusArea[] = [
  {
    title: "Backend Development & APIs",
    description: "Designing robust server-side architecture, RESTful endpoints, and asynchronous request handling with Node.js and Express.",
    status: "Current"
  },
  {
    title: "Full-Stack Integration",
    description: "Bridging frontend React applications with scalable backend data layers and secure database operations.",
    status: "Current"
  },
  {
    title: "Software Architecture & Clean Code",
    description: "Studying design patterns, modular component separation, and maintainable software engineering principles.",
    status: "Learning"
  }
];
