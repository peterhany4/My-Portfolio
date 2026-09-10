export interface HeroAction {
  label: string;
  href: string;
  isPrimary?: boolean;
}

export const heroData = {
  identityBadge: "Computer Science Student & Software Developer",
  headline: "Continuously building, learning, and exploring.",
  description: "Welcome to my personal portfolio. I build functional full-stack applications and explore new areas of software engineering with a passion for continuous learning.",
  actions: [
    { label: "View Projects", href: "#projects", isPrimary: true },
    { label: "GitHub", href: "https://github.com/peterhany4" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/peterhany" },
  ]
};
