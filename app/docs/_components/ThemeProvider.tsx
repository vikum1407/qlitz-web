'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (t: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'system',
  resolvedTheme: 'light',
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = (localStorage.getItem('theme') as Theme) || 'system';
    setThemeState(stored);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = () => {
      const resolved: 'light' | 'dark' =
        theme === 'system' ? (mq.matches ? 'dark' : 'light') : theme;
      setResolvedTheme(resolved);
      document.documentElement.classList.toggle('dark', resolved === 'dark');
    };
    apply();
    if (theme === 'system') {
      mq.addEventListener('change', apply);
      return () => mq.removeEventListener('change', apply);
    }
  }, [theme]);

  const setTheme = (t: Theme) => {
    localStorage.setItem('theme', t);
    setThemeState(t);
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
