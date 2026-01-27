import * as React from 'react';
import { cn } from '@/lib/utils';

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  my?: string | number | (string | number)[];
  orientation?: 'horizontal' | 'vertical';
}

const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ className, my = 0, orientation = 'horizontal', ...props }, ref) => {
    const getResponsiveClass = (
      prop: string | number | (string | number)[] | undefined,
      prefix: string,
    ) => {
      if (Array.isArray(prop)) {
        const classes = [];
        if (prop[0] !== undefined) classes.push(`${prefix}-${prop[0]}`);
        if (prop[1] !== undefined) classes.push(`md:${prefix}-${prop[1]}`);
        if (prop[2] !== undefined) classes.push(`lg:${prefix}-${prop[2]}`);
        return classes.join(' ');
      }
      return prop !== undefined ? `${prefix}-${prop}` : '';
    };

    const marginY = my !== undefined ? getResponsiveClass(my, 'my') : '';

    return (
      <hr
        ref={ref}
        className={cn(
          'border-border',
          orientation === 'horizontal' ? 'w-full border-t' : 'h-full border-l',
          marginY,
          className,
        )}
        {...props}
      />
    );
  },
);

Divider.displayName = 'Divider';

export { Divider };
