import { Wrench } from 'lucide-react';
import { skillsSectionData } from '../data/skillsSectionData';

export function Skills() {
  return (
    <section id="skills" className="space-y-6 scroll-mt-24">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-accent">
          <Wrench className="w-5 h-5" />
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
            Skills & Capabilities
          </h2>
        </div>
        <div className="w-12 h-1 bg-accent rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsSectionData.map((group) => (
          <div
            key={group.category}
            className="p-6 rounded-2xl border border-borderColor bg-surface/50 backdrop-blur-sm space-y-4 shadow-sm"
          >
            <h3 className="font-semibold text-lg text-primary border-b border-borderColor pb-2">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 rounded-lg border border-borderColor bg-background font-medium text-secondary shadow-2xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
