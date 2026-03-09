import { ImageUI } from '@/shared/ui/image';

import styles from './card.module.scss';

import type { ImageType } from '@/shared/types/types';
import type { CSSProperties } from 'react';

type Props = {
  aspectRatio?: string;
  title?: string;
  text?: string;
  image: ImageType;
  rowSpan?: number;
  colSpan?: number;
}

export function GridCard({ image, text, title, rowSpan, colSpan, aspectRatio = '1 / 1' }: Props) {
  const span: CSSProperties = {
    ...(colSpan && { gridColumn: `span ${colSpan}` }),
    ...(rowSpan && { gridRow: `span ${rowSpan}` }),
  };

  return (
    <article
      className={styles.card}
      style={span}
    >
      <ImageUI src={image.url} alt={image.alt} aspectRatio={aspectRatio} />
      <div className={styles.card__content}>
        <h3 className={styles.card__title}>
          {title}
        </h3>
        {text && (<p>{text}</p>)}
      </div>
    </article>
  );
}