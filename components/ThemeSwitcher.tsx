import React from 'react';

export type Theme = 'cyber-cyan' | 'emerald-green' | 'crimson-red' | 'amethyst-purple' | 'classic-light';

const themes: { name: Theme; color: string }[] = [
  { name: 'cyber-cyan', color: '#06b6d4' },
  { name: 'emerald-green', color: '#10b981' },
  { name: 'crimson-red', color: '#ef4444' },
  { name: 'amethyst-purple', color: '#a855f7' },
  { name: 'classic-light', color: '#e2e8f0' },
];

interface ThemeSwitcherProps {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ currentTheme, setTheme }) => {
  return (
    <div className="flex justify-center items-center space-x-3 bg-[var(--bg-tertiary)] p-2 rounded-full border border-[var(--border-primary)]">
      {themes.map((theme) => (
        <button
          key={theme.name}
          onClick={() => setTheme(theme.name)}
          className={`w-8 h-8 rounded-full transition-transform duration-200 ease-in-out focus:outline-none transform hover:scale-110
            ${currentTheme === theme.name ? 'ring-2 ring-offset-2 ring-offset-[var(--bg-primary)] ring-[var(--accent-primary)]' : ''}
          `}
          style={{ backgroundColor: theme.color }}
          aria-label={`Switch to ${theme.name} theme`}
        />
      ))}
    </div>
  );
};

export default ThemeSwitcher;
