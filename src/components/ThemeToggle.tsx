import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="p-2.5 rounded-lg border border-borderColor bg-surface text-primary hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
    >
      {theme === 'light' ? (
        <Moon className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
      ) : (
        <Sun className="w-4 h-4 text-amber-400" />
      )}
    </button>
  );
}
