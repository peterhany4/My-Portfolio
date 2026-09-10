import { FolderGit2, ExternalLink, Lock } from 'lucide-react';
import { featuredProjectsData } from '../data/featuredProjectsData';

export function FeaturedProjects() {
  return (
    <section id="projects" className="space-y-8 scroll-mt-24">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-accent">
          <FolderGit2 className="w-5 h-5" />
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
            Featured Projects
          </h2>
        </div>
        <div className="w-12 h-1 bg-accent rounded-full" />
        <p className="text-secondary">
          Primary evidence of actual software development ability and problem-solving.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {featuredProjectsData.map((project) => (
          <div
            key={project.id}
            className="p-8 rounded-2xl border border-borderColor bg-surface/50 backdrop-blur-sm flex flex-col justify-between space-y-6 shadow-sm transition-transform hover:-translate-y-1 duration-200"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium border ${
                  project.status === 'Commercial'
                    ? 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800'
                    : project.status === 'Hackathon'
                    ? 'bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800'
                    : 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800'
                }`}>
                  {project.status}
                </span>

                {project.isPrivate && (
                  <span className="inline-flex items-center gap-1 text-xs text-secondary font-medium px-2 py-0.5 rounded border border-borderColor bg-background">
                    <Lock className="w-3 h-3" /> Private / Commercial
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{project.description}</p>
              </div>

              <div className="space-y-2 pt-2 border-t border-borderColor">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-secondary">The Problem</h4>
                <p className="text-xs text-secondary italic">{project.problem}</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-secondary">Technical Highlights</h4>
                <ul className="space-y-1 text-xs text-secondary list-disc list-inside">
                  {project.technicalHighlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-borderColor">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-md border border-borderColor bg-background font-medium text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.repositoryUrl && !project.isPrivate && (
                <div className="pt-2">
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-accent rounded"
                  >
                    <span>View Repository</span>
                    <ExternalLink className="w-3.5 h-3.5" />
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
