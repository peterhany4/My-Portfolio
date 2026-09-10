import { ThemeProvider } from './hooks/useTheme';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { CurrentFocus } from './sections/CurrentFocus';
import { Skills } from './sections/Skills';
import { FeaturedProjects } from './sections/FeaturedProjects';

function PortfolioContent() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />

      <main className="flex-grow max-w-5xl mx-auto px-6 w-full space-y-24 py-12">
        <Hero />
        <About />
        <CurrentFocus />
        <Skills />
        <FeaturedProjects />

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
