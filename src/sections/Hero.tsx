import { Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import { heroData } from '../data/heroData';

export function Hero() {
  return (
    <section id="hero" className="space-y-8 pt-12 pb-16">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface text-accent text-xs font-medium border border-borderColor shadow-sm">
        <Sparkles className="w-4 h-4" />
        <span>{heroData.identityBadge}</span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-3xl leading-[1.1]">
        {heroData.headline}
      </h1>

      <p className="text-lg md:text-xl text-secondary max-w-2xl leading-relaxed">
        {heroData.description}
      </p>

      <div className="flex flex-wrap gap-4 pt-4">
        {heroData.actions.map((action) => (
          action.isPrimary ? (
            <a
              key={action.label}
              href={action.href}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-background font-medium text-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm group"
            >
              <span>{action.label}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          ) : (
            <a
              key={action.label}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-borderColor bg-surface font-medium text-sm hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm"
            >
              <span>{action.label}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          )
        ))}
      </div>
    </section>
  );
}
