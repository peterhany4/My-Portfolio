export interface AdditionalProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  repositoryUrl?: string;
}

export const additionalProjectsData: AdditionalProject[] = [
  {
    id: 'football-management',
    title: 'Football Team and Player Management System',
    description: 'System designed to manage team rosters, player stats, and match scheduling.',
    technologies: ['C#', '.NET', 'Windows Forms'],
    repositoryUrl: 'https://github.com/peterhany4'
  },
  {
    id: 'password-manager',
    title: 'Secure Password Manager',
    description: 'Desktop utility for securely storing and organizing credentials with encryption principles.',
    technologies: ['Python', 'Cryptography'],
    repositoryUrl: 'https://github.com/peterhany4'
  },
  {
    id: 'voting-simulator',
    title: 'Electoral Voting Simulator',
    description: 'Simulation software modeling electoral voting mechanics and result tabulation algorithms.',
    technologies: ['JavaScript', 'Algorithms'],
    repositoryUrl: 'https://github.com/peterhany4'
  }
];
