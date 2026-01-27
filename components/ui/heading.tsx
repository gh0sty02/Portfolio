import * as React from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  fontSize?: string | { base?: string; md?: string; lg?: string };
  mb?: string | number;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    { className, as = 'h2', fontSize, mb, textTransform, children, ...props },
    ref,
  ) => {
    const Component = as;

    // Handle responsive fontSize
    let fontSizeClasses = '';
    if (typeof fontSize === 'object') {
      const base = fontSize.base || 'text-2xl';
      const md = fontSize.md || base;
      const lg = fontSize.lg || md;
      fontSizeClasses = `text-[${base}] md:text-[${md}] lg:text-[${lg}]`;
    } else if (fontSize) {
      fontSizeClasses = `text-[${fontSize}]`;
    }

    const marginBottom = mb ? `mb-${mb}` : '';
    const textTransformClass = textTransform || '';

    return (
      <Component
        ref={ref as any}
        className={cn(
          'font-bold',
          fontSizeClasses,
          marginBottom,
          textTransformClass,
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Heading.displayName = 'Heading';

export { Heading };
