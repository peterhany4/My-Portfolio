import { Layers, ExternalLink } from 'lucide-react';
import { additionalProjectsData } from '../data/additionalProjectsData';

export function AdditionalProjects() {
  return (
    <section id="other-projects" className="space-y-6 scroll-mt-24">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-secondary">
          <Layers className="w-4 h-4" />
          <h3 className="text-xl font-bold tracking-tight text-primary">
            Other Projects & Breadth
          </h3>
        </div>
        <div className="w-8 h-0.5 bg-borderColor rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {additionalProjectsData.map((project) => (
          <div
            key={project.id}
            className="p-6 rounded-xl border border-borderColor bg-surface/30 backdrop-blur-sm flex flex-col justify-between space-y-4 shadow-2xs transition-transform hover:-translate-y-0.5 duration-200"
          >
            <div className="space-y-2">
              <h4 className="font-semibold text-base text-primary">{project.title}</h4>
              <p className="text-xs text-secondary leading-relaxed">{project.description}</p>
            </div>

            <div className="space-y-3 pt-3 border-t border-borderColor/50">
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-2 py-0.5 rounded border border-borderColor bg-background font-medium text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.repositoryUrl && (
                <div>
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-accent rounded"
                  >
                    <span>Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
