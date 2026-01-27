import * as React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxW?:
    | 'container.sm'
    | 'container.md'
    | 'container.lg'
    | 'container.xl'
    | 'container.2xl';
  mt?: number | number[];
  mb?: number | number[];
  my?: number | number[];
  mx?: number | number[];
  p?: number | number[];
}

const maxWidthMap = {
  'container.sm': 'max-w-2xl',
  'container.md': 'max-w-4xl',
  'container.lg': 'max-w-5xl', //Chakra's container.lg is 60rem = 960px, approximately max-w-5xl (1024px)
  'container.xl': 'max-w-6xl',
  'container.2xl': 'max-w-7xl',
};

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    { className, maxW = 'container.lg', mt, mb, my, mx, p, children, ...props },
    ref,
  ) => {
    const maxWidthClass = maxW ? maxWidthMap[maxW] : '';

    // Handle responsive margin/padding
    const getResponsiveClass = (
      prop: number | number[] | undefined,
      prefix: string,
    ) => {
      if (Array.isArray(prop)) {
        // Responsive array: [mobile, tablet, desktop]
        const classes = [];
        if (prop[0] !== undefined) classes.push(`${prefix}-${prop[0]}`);
        if (prop[1] !== undefined) classes.push(`md:${prefix}-${prop[1]}`);
        if (prop[2] !== undefined) classes.push(`lg:${prefix}-${prop[2]}`);
        return classes.join(' ');
      }
      return prop !== undefined ? `${prefix}-${prop}` : '';
    };

    const marginTop = mt !== undefined ? getResponsiveClass(mt, 'mt') : '';
    const marginBottom = mb !== undefined ? getResponsiveClass(mb, 'mb') : '';
    const marginY = my !== undefined ? getResponsiveClass(my, 'my') : '';
    const marginX = mx !== undefined ? getResponsiveClass(mx, 'mx') : '';
    const padding = p !== undefined ? getResponsiveClass(p, 'p') : '';

    return (
      <div
        ref={ref}
        className={cn(
          'mx-auto w-full px-4',
          maxWidthClass,
          marginTop,
          marginBottom,
          marginY,
          marginX,
          padding,
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Container.displayName = 'Container';

export { Container };
