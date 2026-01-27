'use client';

import { useEffect } from 'react';
import { useTheme } from '@/hooks/use-theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { resolvedTheme } = useTheme();

  // Apply theme on mount to prevent flash
  useEffect(() => {
    document.documentElement.classList.add(resolvedTheme);
  }, []);

  return <>{children}</>;
}
