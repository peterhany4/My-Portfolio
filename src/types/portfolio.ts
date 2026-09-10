export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  technicalHighlights: string[];
  technologies: string[];
  projectType: 'featured' | 'additional';
  status: 'completed' | 'in-progress' | 'commercial';
  repositoryUrl?: string;
  demoUrl?: string;
  isPrivate?: boolean;
}

export interface SkillCategory {
  category: 'Languages' | 'Frontend' | 'Backend' | 'Desktop / Other' | 'Tools';
  skills: {
    name: string;
    icon?: string;
    proficiencyLevel?: 'Current' | 'Exploring' | 'Learning' | 'Experienced';
  }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  studyPeriod: string;
  expectedGraduation: string;
  gpa?: string;
}

export interface AchievementItem {
  title: string;
  organization?: string;
  date: string;
  description: string;
}
