'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

import { useHover } from '@/shared/hooks/useHover';

import styles from './card.module.scss';

import type { MediaType } from '../../model/type';

export function RoomCard({ images, hasVideo, video }: MediaType) {
  const { isHover, bind } = useHover<HTMLDivElement>();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!hasVideo || !videoRef.current) return;

    if (isHover) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHover, hasVideo]);

  return (
    <article
      className={`${styles.card} ${hasVideo ? styles.hasVideo : ''}`}
      {...bind}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={images.url}
          alt={images.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={styles.image}
        />

        {hasVideo && video && (
          <video
            ref={videoRef}
            className={styles.video}
            src={video.url}
            poster={images.url}
            muted
            loop
            playsInline
            preload="metadata"
          />
        )}
      </div>
    </article>
  );
}
