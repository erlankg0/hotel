import Image from 'next/image';

import styles from './styles.module.scss';

import type { BannerSlideProps } from '../model/type';

export function BannerSlide({ title, subtitle, image }: BannerSlideProps) {
  return (
    <div className={styles.banner}>
      <Image src={image.url} alt={image.alt} fill className={styles.banner_image} />
      <div className={styles.banner__content}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};