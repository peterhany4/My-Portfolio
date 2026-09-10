import { ThemeProvider } from './hooks/useTheme';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { CurrentFocus } from './sections/CurrentFocus';
import { Skills } from './sections/Skills';
import { FeaturedProjects } from './sections/FeaturedProjects';
import { AdditionalProjects } from './sections/AdditionalProjects';
import { Education } from './sections/Education';
import { Achievements } from './sections/Achievements';

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
        <AdditionalProjects />
        <Education />
        <Achievements />

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
