import { aboutData } from '../data/aboutData';

export function About() {
  return (
    <section id="about" className="space-y-6 scroll-mt-24">
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          {aboutData.title}
        </h2>
        <div className="w-12 h-1 bg-accent rounded-full" />
      </div>

      <div className="p-8 rounded-2xl border border-borderColor bg-surface/50 backdrop-blur-sm space-y-4 shadow-sm">
        {aboutData.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-base md:text-lg text-secondary leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
