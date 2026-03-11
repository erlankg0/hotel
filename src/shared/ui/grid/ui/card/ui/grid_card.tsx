import { Button } from '@/shared/ui/button';
import { ImageUI } from '@/shared/ui/image';

import styles from './card.module.scss';

import type { Props } from '../model/type';
import type { CSSProperties } from 'react';

export function GridCard({ image, text, title, rowSpan, colSpan, aspectRatio = '1 / 1', onClick }: Props) {
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
        {onClick && (
          <Button
            className={styles.card__button}
            variant="blur"
            onClick={onClick}
          >
            Подробнее
          </Button>
        )}
      </div>
    </article>
  );
}