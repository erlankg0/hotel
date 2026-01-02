'use client';

import styles from './styles.module.scss';

import type { Params } from '../model/type';

export function FullVideo(params: Params) {
  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        poster={params.poster}
      >
        <source src={params.url} type="video/mp4" />
      </video>

      <div className={styles.overlay} />
    </div>
  );
}
