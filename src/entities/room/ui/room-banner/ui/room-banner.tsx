import Image from 'next/image';

import { Text } from '@/shared/ui/text';

import styles from './styles.module.scss';

import type { BannerSlideProps } from '../model/type';

export function RoomBanner({ title, subtitle, image }: BannerSlideProps) {
  return (
    <div className={styles.banner}>
      <Image src={image.url} alt={image.alt} fill className={styles.banner_image} />
      <div className={styles.banner__content}>
        <Text tag={'h2'} className={'text-white'} variant={'title'}>{title}</Text>
        <Text tag={'p'} className={'!text-white'} variant={'subtitle'}>{subtitle}</Text>
      </div>
    </div>
  );
}