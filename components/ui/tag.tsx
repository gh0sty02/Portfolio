import * as React from 'react';
import { cn } from '@/lib/utils';

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'sm' | 'md' | 'lg';
  colorScheme?: 'green' | 'blue' | 'red' | 'gray';
  marginY?: number;
  marginRight?: number;
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      className,
      size = 'md',
      colorScheme = 'gray',
      marginY,
      marginRight,
      children,
      ...props
    },
    ref,
  ) => {
    const sizes = {
      sm: 'text-xs px-2 py-1',
      md: 'text-sm px-2.5 py-1',
      lg: 'text-base px-3 py-1.5',
    };

    const colors = {
      green: 'bg-primary/20 text-primary border-primary/30',
      blue: 'bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30',
      red: 'bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30',
      gray: 'bg-muted text-muted-foreground border-border',
    };

    const marginYClass = marginY ? `my-${marginY}` : '';
    const marginRightClass = marginRight ? `mr-${marginRight}` : '';

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-md border font-medium',
          sizes[size],
          colors[colorScheme],
          marginYClass,
          marginRightClass,
          className,
        )}
        {...props}
      >
        {children}
      </span>
    );
  },
);

Tag.displayName = 'Tag';

export { Tag };
