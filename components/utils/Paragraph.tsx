import { useTheme } from '@/hooks/use-theme';
import { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';

const Paragraph: FC<{ children: ReactNode; props?: any }> = ({
  children,
  props,
}) => {
  const { resolvedTheme } = useTheme();
  const textColor =
    resolvedTheme === 'light' ? 'text-gray-600' : 'text-gray-400';

  // Handle fontSize prop
  const fontSize = props?.fontSize ? `text-${props.fontSize}` : '';
  const lineHeight = props?.lineHeight || '';

  return (
    <div className={cn(textColor, fontSize)} style={{ lineHeight }} {...props}>
      {children}
    </div>
  );
};

export default Paragraph;
