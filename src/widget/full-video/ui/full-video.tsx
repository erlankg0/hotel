'use client';

import { useEffect, useRef } from 'react';

import styles from './styles.module.scss';

import type { Params } from '../model/type';

export function FullVideo({ url, poster, desktopOnly = false }: Params) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const desktopViewport = window.matchMedia('(min-width: 768px)');
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;
    const hasSlowConnection = connection?.saveData
      || connection?.effectiveType === 'slow-2g'
      || connection?.effectiveType === '2g';

    let isVisible = false;
    let playTimer: number | undefined;

    const syncPlayback = () => {
      window.clearTimeout(playTimer);

      const canPlay = isVisible
        && !reducedMotion.matches
        && (!desktopOnly || desktopViewport.matches)
        && !hasSlowConnection;

      if (!canPlay) {
        video.pause();
        return;
      }

      playTimer = window.setTimeout(() => {
        void video.play().catch(() => {});
      }, desktopOnly ? 700 : 0);
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      syncPlayback();
    }, { threshold: 0.15 });

    observer.observe(video);
    reducedMotion.addEventListener('change', syncPlayback);
    desktopViewport.addEventListener('change', syncPlayback);

    return () => {
      window.clearTimeout(playTimer);
      observer.disconnect();
      reducedMotion.removeEventListener('change', syncPlayback);
      desktopViewport.removeEventListener('change', syncPlayback);
      video.pause();
    };
  }, [desktopOnly, url]);

  return (
    <div className={styles.wrapper}>
      <video
        ref={videoRef}
        className={styles.video}
        muted
        loop
        playsInline
        preload="none"
        poster={poster}
      >
        <source src={url} type="video/mp4" />
      </video>
    </div>
  );
}
