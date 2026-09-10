import { useEffect } from 'react';
import { navigationItems } from '../data/navigationData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="absolute top-16 left-0 w-full bg-background border-b border-borderColor shadow-lg py-4 px-6 md:hidden z-50">
      <nav className="flex flex-col space-y-3">
        {navigationItems.map(item => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="text-base font-medium text-secondary hover:text-primary transition-colors py-1.5 px-2 rounded-lg hover:bg-surface"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
