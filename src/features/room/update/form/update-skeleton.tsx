import {
  FieldTitle,
} from '@/shared/ui/field';
import { Skeleton } from '@/shared/ui/skeleton';
import { Text } from '@/shared/ui/text';

import styles from './update.module.scss';

export function UpdateSkeleton() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <FieldTitle>
          <Text size={'title'} tag={'p'}>Основная информация</Text>
        </FieldTitle>
        <div className={styles.card__content}>
          <Skeleton className={'w-full h-12'} />
          <Skeleton className={'w-full h-12'} />
        </div>
      </div>

      <div className={styles.card}>
        <FieldTitle>
          <Text size={'title'} tag={'p'}>Информация об номере</Text>
        </FieldTitle>

        <Skeleton className={'w-full h-46'} />
        <Skeleton className={'w-full h-46'} />

      </div>

      <div className={styles.card}>
        <FieldTitle>
          <Text size={'title'} tag={'p'}>Дополнительная информация об номере</Text>
        </FieldTitle>
        <div className={styles.card__content}>
          <Skeleton className={'w-full h-12'} />
          <Skeleton className={'w-full h-12'} />
          <Skeleton className={'w-full h-12'} />
        </div>
      </div>

      <div className={styles.card}>
        <FieldTitle>
          <Text size={'title'} tag={'p'}>Дополнительно</Text>
        </FieldTitle>

        <Skeleton className={'w-full h-46'} />
        <Skeleton className={'w-full h-46'} />

      </div>

      <div className={styles.card}>
        <FieldTitle>
          <Text size={'title'} tag={'p'}>Фотографии номера</Text>
        </FieldTitle>

        <Skeleton className={'w-full h-46'} />


      </div>
    </section>
  );
}