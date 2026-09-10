import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { navigationItems } from '../data/navigationData';
import { ThemeToggle } from './ThemeToggle';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-md md:hidden">
      <div className="flex justify-between items-center p-6 border-b border-borderColor">
        <span className="font-bold text-lg tracking-tight">Menu</span>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2.5 rounded-lg border border-borderColor bg-surface text-primary hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
      <nav ref={menuRef} className="flex flex-col p-6 space-y-4 my-auto">
        {navigationItems.map(item => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="text-2xl font-semibold text-primary hover:text-accent transition-colors py-2"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
