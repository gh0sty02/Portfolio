'use client';

import { Container } from '@/components/ui/container';
import { Divider } from '@/components/ui/divider';
import { useTheme } from '@/hooks/use-theme';
import { DURATIONS, easing } from 'config/animations';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './styles.module.css';
import { cn } from '@/lib/utils';

export type FeaturedCardProps = {
  height: string;
  src: string;
  idx: number;
  title: string;
  description: string;
  objectPosition?: string;
  ctaUrl: string;
  isMobile?: boolean;
};

const variants = {
  normal: {
    opacity: 0.85,
  },
  hover: {
    scale: 1.1,
    opacity: 1,
    transition: {
      duration: DURATIONS.Fast,
      ease: 'backOut',
    },
  },
  tap: {
    scale: 0.85,
    opacity: 1,
    transition: {
      duration: DURATIONS.Fast,
      ease: easing,
    },
  },
};

const MotionDiv = motion.div;

const ProjectDescription = ({
  idx,
  title,
  description,
  ctaUrl,
  isLeft,
}: {
  idx?: number;
  title: string;
  description: string;
  ctaUrl: string;
  isLeft: boolean;
}) => (
  <div className="px-5 py-1 flex items-center justify-around flex-col">
    <div className="flex flex-col gap-1 w-full">
      <span
        className={cn(
          'text-base md:text-lg 2xl:text-3xl font-bold tracking-wider w-[90%] uppercase',
          isLeft ? 'self-end' : 'self-start'
        )}
      >
        <span className="text-green-600 dark:text-green-400 text-base">
          #0{idx}
          {'  '}
        </span>
        {title}
      </span>
      <Divider
        className={cn('border-[#A6A6A6] w-[90%] ml-0', isLeft ? 'self-end' : 'self-start')}
      />
    </div>
    <p
      className={cn(
        'text-sm text-green-600 dark:text-green-400 w-[90%] break-words py-3 md:py-0',
        isLeft ? 'self-end' : 'self-start'
      )}
    >
      {description}
    </p>
    <a
      href={ctaUrl}
      rel="noreferrer"
      target="_blank"
      className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-colors font-light text-sm 2xl:text-base px-4 py-2 rounded my-3 md:my-0"
    >
      View Project
    </a>
  </div>
);

const FeaturedCard = ({
  idx,
  height,
  src,
  title,
  description,
  objectPosition,
  ctaUrl,
  isMobile,
}: FeaturedCardProps) => {
  const { theme } = useTheme();
  const isLeftImage = isMobile ? false : idx % 2 === 0;
  const bg =
    theme === 'light'
      ? 'bg-black/5'
      : 'bg-white/20';

  const CoverImage = () => (
    <MotionDiv
      className="relative w-full overflow-hidden"
      style={{ height }}
      initial={variants.normal}
      whileHover={variants.hover}
      whileTap={variants.tap}
    >
      <Image
        src={src}
        alt={title}
        fill
        style={{
          objectFit: 'cover',
          objectPosition: objectPosition || 'center',
          opacity: 0.75,
        }}
        loading="lazy"
      />
    </MotionDiv>
  );

  return (
    <div
      className={cn(
        'h-auto rounded-2xl border',
        bg,
        styles.featureCard
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-0 flex md:grid flex-col-reverse md:flex-row">
        {isLeftImage && <CoverImage />}
        <ProjectDescription
          idx={idx}
          title={title}
          description={description}
          ctaUrl={ctaUrl}
          isLeft={isLeftImage}
        />
        {!isLeftImage && <CoverImage />}
      </div>
    </div>
  );
};

export default FeaturedCard;
