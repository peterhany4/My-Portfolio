export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  category: 'Competition' | 'Training' | 'Recognition';
}

export const achievementsData: AchievementItem[] = [
  {
    id: 'deepx',
    title: 'DeepX Hackathon Participant',
    organization: 'DeepX',
    date: '2026',
    description: 'Developed an Arabic sentiment analysis machine learning model under competitive hackathon time constraints.',
    category: 'Competition'
  },
  {
    id: 'depi',
    title: 'DEPI Recognition & Training',
    organization: 'Digital Egypt Pioneers Initiative',
    date: '2024 — 2025',
    description: 'Completed rigorous technical training track with distinction.',
    category: 'Training'
  },
  {
    id: 'frontend-training',
    title: '300+ Hours Frontend Training',
    organization: 'Intensive Technical Program',
    date: '2024',
    description: 'Studied modern web development practices, React ecosystem, and responsive UI engineering.',
    category: 'Training'
  }
];
