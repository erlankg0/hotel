'use client';

import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

import type { RollingProps } from '../model/type';

export function Rolling({ icons }: RollingProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const animate = () => {
      if (!containerRef.current) return;

      gsap.to(containerRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        onComplete: () => {
          const nextIndex = Math.floor(Math.random() * icons.length);
          setCurrentIndex(nextIndex);

          gsap.fromTo(
            containerRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.3 }
          );
        },
      });

      const delay = gsap.utils.random(2, 6) * 1000;
      timeout = setTimeout(animate, delay);
    };

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.3 }
    );

    const delay = gsap.utils.random(2, 6) * 1000;
    timeout = setTimeout(animate, delay);

    return () => clearTimeout(timeout);
  }, [icons.length]);

  const CurrentIcon = icons[currentIndex];

  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CurrentIcon size={32} />
    </div>
  );
}