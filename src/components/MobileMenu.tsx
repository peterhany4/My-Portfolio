import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { navigationItems } from '../data/navigationData';
import { ThemeToggle } from './ThemeToggle';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      closeRef.current?.focus();
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      id="mobile-menu"
      className="absolute top-16 left-0 w-full bg-background border-b border-borderColor shadow-lg py-4 px-6 md:hidden z-50 space-y-4"
    >
      <div className="flex items-center justify-between pb-3 border-b border-borderColor">
        <span className="text-sm font-semibold text-secondary">Menu</span>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 rounded-lg border border-borderColor bg-surface text-primary hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
      <nav className="flex flex-col space-y-2">
        {navigationItems.map(item => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="text-base font-medium text-secondary hover:text-primary transition-colors py-2 px-2 rounded-lg hover:bg-surface"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
