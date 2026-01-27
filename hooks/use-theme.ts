'use client';

import { useEffect } from 'react';
import { useLocalStorage, useMediaQuery } from 'usehooks-ts';

type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  const systemPrefersDark = useMediaQuery('(prefers-color-scheme: dark)');
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'system');

  // Determine the actual theme to apply
  const resolvedTheme =
    theme === 'system' ? (systemPrefersDark ? 'dark' : 'light') : theme;

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove both classes first
    root.classList.remove('light', 'dark');

    // Add the resolved theme class
    root.classList.add(resolvedTheme);
  }, [resolvedTheme]);

  return {
    theme,
    setTheme,
    resolvedTheme,
    systemPrefersDark,
  };
}
