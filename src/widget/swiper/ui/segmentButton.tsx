'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { memo, useRef } from 'react';

import { cn } from '@/shared/lib/utils';


interface Props {
  index: number;
  isActive: boolean;
  isCompleted: boolean;
  duration?: number;
  onSegmentClick: (index: number) => void;
  onComplete?: () => void;
  className?: string;
}

export const SegmentButton = memo(({
                                     index,
                                     isActive,
                                     isCompleted,
                                     duration = 5,
                                     onSegmentClick,
                                     onComplete,
                                     className,
                                   }: Props) => {
  const containerRef = useRef<HTMLButtonElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(containerRef.current, {
      flexGrow: isActive ? 3 : 1,
      duration: 0.4,
      ease: 'power2.inOut',
    });

    if (isActive) {
      gsap.killTweensOf(progressRef.current);

      gsap.fromTo(progressRef.current,
        { width: '0%' },
        {
          width: '100%',
          duration: duration,
          ease: 'none',
          onComplete: () => onComplete?.(),
        },
      );
    } else {
      gsap.killTweensOf(progressRef.current);
      gsap.to(progressRef.current, {
        width: isCompleted ? '100%' : '0%',
        duration: 0.3
      });
    }
  }, [isActive, isCompleted]);

  return (
    <button
      ref={containerRef}
      onClick={() => onSegmentClick(index)}
      className="relative h-2 bg-gray-50 rounded-full overflow-hidden flex-1 min-w-[8px]"
      type="button"
    >
      <div
        ref={progressRef}
        className={cn('h-full dark:bg-white bg-black w-0', className)}
      />
    </button>
  );
});

SegmentButton.displayName = 'SegmentButton';