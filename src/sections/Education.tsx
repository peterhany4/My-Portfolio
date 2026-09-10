import { GraduationCap, Calendar } from 'lucide-react';
import { educationData } from '../data/educationData';

export function Education() {
  return (
    <section id="education" className="space-y-6 scroll-mt-24">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-accent">
          <GraduationCap className="w-5 h-5" />
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
            Education
          </h2>
        </div>
        <div className="w-12 h-1 bg-accent rounded-full" />
      </div>

      <div className="p-8 rounded-2xl border border-borderColor bg-surface/50 backdrop-blur-sm space-y-4 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-borderColor pb-4">
          <div>
            <h3 className="text-xl font-bold text-primary">{educationData.degree}</h3>
            <p className="text-sm font-medium text-accent">{educationData.institution}</p>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-secondary px-3 py-1 rounded-full border border-borderColor bg-background">
            <Calendar className="w-3.5 h-3.5" />
            <span>{educationData.studyPeriod} ({educationData.expectedGraduation})</span>
          </div>
        </div>

        <p className="text-sm text-secondary leading-relaxed">
          Pursuing a rigorous curriculum in computer science fundamentals, data structures, algorithms, object-oriented programming, and software engineering principles.
        </p>
      </div>
    </section>
  );
}
