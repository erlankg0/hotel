import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import { ImageUI } from '@/shared/ui/image';

import styles from './card.module.scss';

import type { Props } from '../model/type';
import type { CSSProperties } from 'react';

export function GridCard({
  image,
  text,
  title,
  rowSpan,
  colSpan,
  aspectRatio = '1 / 1',
  buttonText = 'Подробнее',
  className,
  onClick,
}: Props) {
  const resolvedColSpan = Math.max(1, colSpan ?? 1);
  const resolvedRowSpan = Math.max(1, rowSpan ?? 1);
  const hasAction = Boolean(onClick);
  const buttonLabel = title ? `${buttonText}: ${title}` : buttonText;
  const imageAlt = image.alt || title || 'Изображение карточки';

  const span: CSSProperties = {
    '--grid-card-col-span': resolvedColSpan,
    '--grid-card-col-span-tablet': Math.min(resolvedColSpan, 2),
    '--grid-card-row-span': resolvedRowSpan,
  } as CSSProperties;

  return (
    <article
      className={cn(styles.card, hasAction && styles.card_interactive, className)}
      style={span}
    >
      <ImageUI src={image.url} alt={imageAlt} aspectRatio={aspectRatio} classNames={styles.card__image} />
      <div className={cn(styles.card__content, hasAction && styles.card__content_interactive)}>
        <div className={cn(styles.card__body, hasAction && styles.card__body_interactive)}>
          {title && (
            <h3 className={styles.card__title}>
              {title}
            </h3>
          )}
          {text && (<p className={styles.card__text}>{text}</p>)}
        </div>
        {onClick && (
          <Button
            type={'button'}
            size={'sm'}
            className={cn(styles.card__button, styles.card__button_visible)}
            variant="blur"
            onClick={onClick}
            aria-label={buttonLabel}
          >
            {buttonText}
          </Button>
        )}
      </div>
    </article>
  );
}
