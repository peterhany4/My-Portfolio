import { Project, SkillCategory } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: 'cashier-app',
    title: 'Cashier POS Application',
    description: 'A robust Point of Sale and cash management system built for retail operations.',
    problem: 'Local retail businesses needed a reliable, fast checkout and inventory tracking system.',
    technicalHighlights: ['Optimized state management', 'Receipt generation', 'Local data persistence'],
    technologies: ['React', 'Node.js', 'Express', 'Tailwind CSS'],
    projectType: 'featured',
    status: 'commercial',
    isPrivate: true
  },
  {
    id: 'campus-lost-found',
    title: 'Campus Lost & Found System',
    description: 'Full-stack platform connecting students with lost items across campus.',
    problem: 'Students frequently lost belongings with no centralized digital recovery platform.',
    technicalHighlights: ['RESTful API design', 'Authentication & Authorization', 'Image handling'],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    projectType: 'featured',
    status: 'completed'
  },
  {
    id: 'deepx-hackathon',
    title: 'Arabic Sentiment Analysis',
    description: 'Machine learning NLP model developed for hackathon sentiment classification.',
    problem: 'Classifying complex Arabic dialects in social media text efficiently.',
    technicalHighlights: ['NLP data preprocessing', 'Model training & evaluation'],
    technologies: ['Python', 'Scikit-learn', 'Pandas'],
    projectType: 'featured',
    status: 'completed'
  }
];

export const skillsData: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'JavaScript', proficiencyLevel: 'Current' },
      { name: 'TypeScript', proficiencyLevel: 'Current' },
      { name: 'Python', proficiencyLevel: 'Current' },
      { name: 'C++', proficiencyLevel: 'Experienced' },
      { name: 'C#', proficiencyLevel: 'Experienced' }
    ]
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', proficiencyLevel: 'Current' },
      { name: 'Tailwind CSS', proficiencyLevel: 'Current' },
      { name: 'HTML5 / CSS3', proficiencyLevel: 'Current' },
      { name: 'Bootstrap', proficiencyLevel: 'Experienced' }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', proficiencyLevel: 'Current' },
      { name: 'Express.js', proficiencyLevel: 'Current' },
      { name: 'MongoDB', proficiencyLevel: 'Current' },
      { name: 'Postman', proficiencyLevel: 'Current' }
    ]
  },
  {
    category: 'Desktop / Other',
    skills: [
      { name: '.NET', proficiencyLevel: 'Experienced' },
      { name: 'Windows Forms', proficiencyLevel: 'Experienced' }
    ]
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', proficiencyLevel: 'Current' },
      { name: 'GitHub', proficiencyLevel: 'Current' },
      { name: 'VS Code', proficiencyLevel: 'Current' }
    ]
  }
];
