import NextLink from 'next/link';
import { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/use-theme';

const Link: FC<{
  href: string;
  currentPath?: string;
  props?: any;
  children: ReactNode;
}> = ({ children, href, currentPath, props }) => {
  const { resolvedTheme } = useTheme();

  // Active state background color
  const isActive = href === currentPath;
  const activeBg = resolvedTheme === 'dark' ? 'bg-gray-700' : 'bg-gray-100';
  const hoverBg =
    resolvedTheme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200';

  return (
    <NextLink
      href={href}
      className={cn(
        'inline-block no-underline transition-all duration-200 ease-in-out',
        isActive ? activeBg : 'bg-transparent',
        hoverBg,
        props?.rounded === 'md' && 'rounded-md',
        props?.p === '2' && 'p-2',
        props?._hover && 'hover:-translate-y-0.5 hover:shadow-md',
        props?._active && 'active:translate-y-0.5',
      )}
    >
      {children}
    </NextLink>
  );
};

export default Link;
