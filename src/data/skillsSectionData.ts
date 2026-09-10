export interface SkillCategoryData {
  category: string;
  skills: string[];
}

export const skillsSectionData: SkillCategoryData[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C++", "C#"]
  },
  {
    category: "Frontend",
    skills: ["React", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "Postman"]
  },
  {
    category: "Desktop / Other",
    skills: [".NET", "Windows Forms"]
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code"]
  }
];
