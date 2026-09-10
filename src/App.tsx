import { Sparkles, ExternalLink } from 'lucide-react';
import { projectsData, skillsData } from './data/portfolioData';
import { ThemeProvider } from './hooks/useTheme';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function PortfolioContent() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />

      <main className="flex-grow max-w-5xl mx-auto px-6 w-full space-y-24 py-12">
        {/* Hero Section */}
        <section id="hero" className="space-y-6 pt-8">
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
        </section>

        {/* About Section */}
        <section id="about" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">About</h2>
          <p className="text-secondary leading-relaxed">
            Computer Science student and software developer passionate about building reliable full-stack applications and exploring new paradigms in software engineering.
          </p>
        </section>

        {/* Current Focus Section */}
        <section id="focus" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Current Focus</h2>
          <p className="text-secondary leading-relaxed">
            Exploring advanced backend architecture, full-stack integration patterns, and clean code principles.
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Skills & Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-borderColor bg-surface">
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
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map(p => (
              <div key={p.id} className="p-6 rounded-xl border border-borderColor bg-surface transition-transform hover:-translate-y-0.5 duration-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-base">{p.title}</h3>
                  <span className="text-xs px-2 py-0.5 rounded bg-background border border-borderColor font-medium text-accent">{p.status}</span>
                </div>
                <p className="text-sm text-secondary">{p.description}</p>
                <div className="flex flex-wrap gap-1 pt-2">
                  {p.technologies.map(tech => (
                    <span key={tech} className="text-xs px-2 py-0.5 rounded bg-background border border-borderColor text-secondary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Education</h2>
          <div className="p-6 rounded-xl border border-borderColor bg-surface space-y-2">
            <h3 className="font-semibold text-base">Bachelor of Computer Science</h3>
            <p className="text-sm text-secondary">University Studies & Academic Progression</p>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Achievements & Recognition</h2>
          <div className="p-6 rounded-xl border border-borderColor bg-surface space-y-2">
            <h3 className="font-semibold text-base">DeepX Hackathon & Professional Training</h3>
            <p className="text-sm text-secondary">Demonstrated engineering excellence and active problem-solving capabilities.</p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
          <p className="text-secondary">
            Reach out via <a href="mailto:peterhany@example.com" className="text-accent underline font-medium">email</a> or connect on GitHub and LinkedIn.
          </p>
        </section>
      </main>

      <Footer />
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
