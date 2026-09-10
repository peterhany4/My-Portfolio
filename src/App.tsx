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
import { Contact } from './sections/Contact';

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
        <Contact />
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
