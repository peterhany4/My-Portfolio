import { projectsData } from './data/portfolioData';
import { ThemeProvider } from './hooks/useTheme';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { CurrentFocus } from './sections/CurrentFocus';
import { Skills } from './sections/Skills';

function PortfolioContent() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />

      <main className="flex-grow max-w-5xl mx-auto px-6 w-full space-y-24 py-12">
        <Hero />
        <About />
        <CurrentFocus />
        <Skills />

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
