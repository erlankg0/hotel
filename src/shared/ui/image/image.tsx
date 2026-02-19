import Image from 'next/image';

import { cn } from '@/shared/lib/utils';

import styles from './styles.module.scss';

type Props = {
  src: string;
  alt: string;
  size?: string,
  classNames?: string,
  aspectRatio?: string,
}

export function ImageUI({ src, alt, size, classNames, aspectRatio = '1 / 1' }: Props) {
  return (
    <div className={styles.imageWrapper} style={{ maxWidth: size, aspectRatio: aspectRatio }}>
      <Image
        src={src}
        alt={alt}
        className={cn(classNames, styles.image)}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </div>
  );
}