import { Trophy } from 'lucide-react';
import { achievementsData } from '../data/achievementsData';

export function Achievements() {
  return (
    <section id="achievements" className="space-y-6 scroll-mt-24">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-accent">
          <Trophy className="w-5 h-5" />
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
            Achievements & Recognition
          </h2>
        </div>
        <div className="w-12 h-1 bg-accent rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievementsData.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-2xl border border-borderColor bg-surface/50 backdrop-blur-sm space-y-4 shadow-sm flex flex-col justify-between transition-transform hover:-translate-y-1 duration-200"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs px-2.5 py-1 rounded-full font-medium border bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800">
                  {item.category}
                </span>
                <span className="text-xs text-secondary font-medium">{item.date}</span>
              </div>

              <div className="space-y-1">
                <h3 className="font-semibold text-lg text-primary">{item.title}</h3>
                <p className="text-xs font-medium text-accent">{item.organization}</p>
              </div>

              <p className="text-sm text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
