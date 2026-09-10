import { useState } from 'react';
import { Terminal, Menu } from 'lucide-react';
import { navigationItems } from '../data/navigationData';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-borderColor bg-background/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-accent rounded-lg p-1">
          <Terminal className="w-6 h-6 text-accent" />
          <span className="font-bold text-lg tracking-tight">Peter Hany</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navigationItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded px-1.5 py-0.5"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
            aria-expanded={mobileMenuOpen}
            className="p-2.5 rounded-lg border border-borderColor bg-surface text-primary hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
