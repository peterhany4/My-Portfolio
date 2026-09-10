export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  problem: string;
  technicalHighlights: string[];
  technologies: string[];
  status: 'Completed' | 'Commercial' | 'Hackathon';
  repositoryUrl?: string;
  demoUrl?: string;
  isPrivate?: boolean;
}

export const featuredProjectsData: FeaturedProject[] = [
  {
    id: 'cashier-app',
    title: 'Cashier POS Application',
    description: 'A practical Point of Sale and cash management system built for retail operations with local data persistence and receipt generation.',
    problem: 'Local retail businesses needed a reliable, fast checkout and inventory tracking system without cloud dependency.',
    technicalHighlights: [
      'Optimized local state management for quick checkout calculations',
      'Structured modular architecture separating business logic from UI',
      'Clean receipt formatting and local persistent storage'
    ],
    technologies: ['React', 'Node.js', 'Express', 'Tailwind CSS'],
    status: 'Commercial',
    isPrivate: true
  },
  {
    id: 'campus-lost-found',
    title: 'Campus Lost & Found System',
    description: 'Full-stack graduation project connecting university students with lost items across campus through a centralized platform.',
    problem: 'Students frequently lost university belongings with no centralized, searchable digital recovery platform.',
    technicalHighlights: [
      'RESTful API design with secure token authentication and authorization',
      'Comprehensive CRUD operations for item reporting and claiming',
      'Search and filtering capabilities with image handling'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    status: 'Completed',
    repositoryUrl: 'https://github.com/peterhany4/Campus-Lost-Found-Items'
  },
  {
    id: 'deepx-hackathon',
    title: 'Arabic Sentiment Analysis Model',
    description: 'Machine learning natural language processing model developed during a competitive hackathon for Arabic text classification.',
    problem: 'Accurately classifying complex Arabic sentiment and dialects in social media text streams.',
    technicalHighlights: [
      'Natural language processing data preprocessing and vectorization pipeline',
      'Model training, tuning, and evaluation for classification accuracy'
    ],
    technologies: ['Python', 'Scikit-learn', 'Pandas'],
    status: 'Hackathon',
    repositoryUrl: 'https://github.com/peterhany4/DeepX-Hackathon'
  }
];
