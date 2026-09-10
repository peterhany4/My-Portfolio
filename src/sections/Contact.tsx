import { Mail, ExternalLink, Send } from 'lucide-react';
import { contactData } from '../data/contactData';

export function Contact() {
  return (
    <section id="contact" className="space-y-8 scroll-mt-24">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-accent">
          <Mail className="w-5 h-5" />
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
            {contactData.heading}
          </h2>
        </div>
        <div className="w-12 h-1 bg-accent rounded-full" />
      </div>

      <div className="p-8 md:p-12 rounded-3xl border border-borderColor bg-surface/50 backdrop-blur-sm space-y-8 shadow-sm">
        <p className="text-base md:text-lg text-secondary max-w-2xl leading-relaxed">
          {contactData.subheading}
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href={`mailto:${contactData.email}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-background font-medium text-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm group"
          >
            <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            <span>Send Email</span>
          </a>
          <a
            href={contactData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-borderColor bg-surface font-medium text-sm hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
          <a
            href={contactData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-borderColor bg-surface font-medium text-sm hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm"
          >
            <svg className="w-4 h-4 fill-accent" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span>LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>
      </div>
    </section>
  );
}
