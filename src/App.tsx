import { Terminal, Code, Sparkles, ExternalLink } from 'lucide-react';
import { projectsData, skillsData } from './data/portfolioData';
import { ThemeProvider } from './hooks/useTheme';
import { ThemeToggle } from './components/ThemeToggle';

function PortfolioContent() {
  return (
    <div className="min-h-screen flex flex-col justify-between p-6 md:p-12 lg:p-24 max-w-5xl mx-auto">
      <header className="flex justify-between items-center mb-16">
        <div className="flex items-center gap-2">
          <Terminal className="w-6 h-6 text-accent" />
          <span className="font-bold text-lg tracking-tight">Peter Hany</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-secondary hidden sm:inline">
            Design Foundation v1.1.0
          </span>
          <ThemeToggle />
        </div>
      </header>

      <main className="space-y-12 my-auto">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface text-accent text-xs font-medium border border-borderColor">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Computer Science Student & Software Developer</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Continuously building, learning, and exploring.
          </h1>

          <p className="text-lg md:text-xl text-secondary max-w-2xl leading-relaxed">
            Welcome to the personal developer portfolio foundation of Peter Hany. Built with React, Vite, Tailwind CSS, and structured specification-driven development.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://github.com/peterhany4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-background font-medium text-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-borderColor bg-surface font-medium text-sm hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            >
              <svg className="w-4 h-4 fill-accent" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Data preview section proving content separation & design tokens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-borderColor">
          <div className="p-6 rounded-xl border border-borderColor bg-surface transition-transform hover:-translate-y-0.5 duration-200">
            <h3 className="font-semibold text-base mb-3">Featured Projects ({projectsData.length})</h3>
            <ul className="space-y-2 text-sm text-secondary">
              {projectsData.map(p => (
                <li key={p.id} className="flex items-center justify-between">
                  <span>{p.title}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-background border border-borderColor font-medium text-accent">{p.status}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-borderColor bg-surface transition-transform hover:-translate-y-0.5 duration-200">
            <h3 className="font-semibold text-base mb-3">Skill Categories ({skillsData.length})</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.map(cat => (
                <span key={cat.category} className="text-xs px-2.5 py-1 rounded-md border border-borderColor bg-background font-medium">
                  {cat.category} ({cat.skills.length})
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-16 pt-8 border-t border-borderColor text-xs text-secondary flex flex-col sm:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} Peter Hany. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          <Code className="w-3.5 h-3.5" /> Built with Spec-Driven Development
        </p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
